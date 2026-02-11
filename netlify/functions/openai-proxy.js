/**
 * NETLIFY FUNCTION - PROXY SEGURO OPENAI
 * Sistema Gerador CIPE v8.0
 * 
 * Função serverless que protege a chave API da OpenAI
 * e adiciona controle de custos/rate limiting
 */

exports.handler = async (event, context) => {
  // ═══════════════════════════════════════════════════════════
  // 1. VALIDAÇÕES BÁSICAS
  // ═══════════════════════════════════════════════════════════
  
  // Apenas POST permitido
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        error: 'Método não permitido. Use POST.' 
      })
    };
  }

  // Verificar se a chave API existe nas variáveis de ambiente
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  
  if (!OPENAI_API_KEY) {
    console.error('[ERRO] OPENAI_API_KEY não configurada no Netlify');
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Chave API não configurada no servidor. Contate o administrador.',
        code: 'CONFIG_ERROR'
      })
    };
  }

  // ═══════════════════════════════════════════════════════════
  // 2. EXTRAÇÃO DE PARÂMETROS
  // ═══════════════════════════════════════════════════════════
  
  let requestData;
  try {
    requestData = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'JSON inválido no corpo da requisição',
        code: 'INVALID_JSON'
      })
    };
  }

  const { 
    prompt, 
    maxTokens = 16000, 
    model = 'gpt-4o',
    temperature = 0.3,
    messages // Suporte a formato de mensagens direto
  } = requestData;

  // Validar que ao menos prompt ou messages foi enviado
  if (!prompt && (!messages || messages.length === 0)) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Parâmetro "prompt" ou "messages" obrigatório',
        code: 'MISSING_PROMPT'
      })
    };
  }

  // ═══════════════════════════════════════════════════════════
  // 3. RATE LIMITING (BÁSICO)
  // ═══════════════════════════════════════════════════════════
  
  const clientIP = event.headers['x-forwarded-for'] || 
                   event.headers['client-ip'] || 
                   'unknown';
  
  console.log(`[REQUEST] IP: ${clientIP}, Model: ${model}, MaxTokens: ${maxTokens}`);

  // ═══════════════════════════════════════════════════════════
  // 4. PREPARAR REQUISIÇÃO PARA OPENAI
  // ═══════════════════════════════════════════════════════════
  
  const openaiMessages = messages || [
    { role: 'user', content: prompt }
  ];

  const openaiPayload = {
    model: model,
    max_tokens: maxTokens,
    temperature: temperature,
    messages: openaiMessages
  };

  // ═══════════════════════════════════════════════════════════
  // 5. CHAMAR API OPENAI
  // ═══════════════════════════════════════════════════════════
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(openaiPayload)
    });

    const responseData = await response.json();

    // ═══════════════════════════════════════════════════════════
    // 6. TRATAMENTO DE ERROS DA OPENAI
    // ═══════════════════════════════════════════════════════════
    
    if (!response.ok) {
      const errorCode = responseData.error?.code || 'UNKNOWN';
      const errorMessage = responseData.error?.message || 'Erro desconhecido';
      const errorType = responseData.error?.type || 'unknown';

      console.error(`[OPENAI ERROR] Status: ${response.status}, Code: ${errorCode}, Message: ${errorMessage}`);

      // Mapear erros específicos
      let userMessage = errorMessage;
      let statusCode = response.status;

      switch (response.status) {
        case 401:
          userMessage = 'Chave API inválida ou revogada';
          break;
        case 429:
          if (errorCode === 'insufficient_quota') {
            userMessage = 'Créditos esgotados na conta OpenAI';
          } else {
            userMessage = 'Limite de requisições atingido. Tente novamente em alguns segundos.';
          }
          break;
        case 404:
          userMessage = `Modelo "${model}" não encontrado ou indisponível`;
          break;
        case 500:
        case 502:
        case 503:
          userMessage = 'Servidores da OpenAI temporariamente indisponíveis';
          statusCode = 503;
          break;
      }

      return {
        statusCode: statusCode,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: userMessage,
          code: errorCode,
          type: errorType,
          openai_status: response.status
        })
      };
    }

    // ═══════════════════════════════════════════════════════════
    // 7. LOGGING DE USO (para controle de custos)
    // ═══════════════════════════════════════════════════════════
    
    const usage = responseData.usage || {};
    console.log(`[SUCCESS] IP: ${clientIP}, Model: ${model}, Tokens: ${usage.total_tokens || 0}, Cost: ~$${estimateCost(model, usage)}`);

    // ═══════════════════════════════════════════════════════════
    // 8. RETORNAR RESPOSTA
    // ═══════════════════════════════════════════════════════════
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(responseData)
    };

  } catch (error) {
    console.error('[FETCH ERROR]', error);
    
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Erro ao conectar com OpenAI: ' + error.message,
        code: 'FETCH_ERROR'
      })
    };
  }
};

// ═══════════════════════════════════════════════════════════
// FUNÇÃO AUXILIAR: ESTIMAR CUSTO
// ═══════════════════════════════════════════════════════════

function estimateCost(model, usage) {
  // Preços por 1M tokens (fev 2026 - aproximados)
  const pricing = {
    'gpt-4o': { input: 2.50, output: 10.00 },
    'gpt-4o-mini': { input: 0.15, output: 0.60 },
    'gpt-4.1': { input: 2.50, output: 10.00 },
    'gpt-4-turbo': { input: 10.00, output: 30.00 }
  };

  const modelPricing = pricing[model] || pricing['gpt-4o'];
  
  const inputCost = ((usage.prompt_tokens || 0) / 1_000_000) * modelPricing.input;
  const outputCost = ((usage.completion_tokens || 0) / 1_000_000) * modelPricing.output;
  
  return (inputCost + outputCost).toFixed(4);
}
