// ══════════════════════════════════════════════════════════
// FUNÇÕES PADRONIZADAS v9.1 - REDUÇÃO DE ERROS
// ══════════════════════════════════════════════════════════

// ──────────────────────────────────────────────────────────
// GLOSSÁRIO + REFERÊNCIAS PADRONIZADO
// ──────────────────────────────────────────────────────────

async function buildGlossarioReferencias(d, baseContent, lang) {
  var pt = lang === 'pt';
  
  var prompt = `ESPECIALISTA em ${d.nm} - METODOLOGIA CIPE v9.1

TAREFA: Gerar GLOSSÁRIO e REFERÊNCIAS com padrão FIXO.

═══════════════════════════════════════════════════════════
GLOSSÁRIO (500 palavras):
═══════════════════════════════════════════════════════════

<section style="page-break-before:always">
  <h2 style="color:#0D3851;font-family:'Playfair Display',serif;margin:40px 0 20px">${pt ? 'Glossário A-Z' : 'Glosario A-Z'}</h2>
  
  <dl style="margin:20px 0;line-height:1.8">
    <dt style="font-weight:bold;color:#0D3851;margin-top:20px;font-size:16px">[Termo 1]</dt>
    <dd style="margin-left:30px;margin-bottom:10px;color:#2C2C2C">[Definição 25 palavras + contexto aplicação]</dd>
    
    <dt style="font-weight:bold;color:#0D3851;margin-top:20px;font-size:16px">[Termo 2]</dt>
    <dd style="margin-left:30px;margin-bottom:10px;color:#2C2C2C">[Definição 25 palavras + contexto aplicação]</dd>
    
    [... CONTINUAR ATÉ COMPLETAR EXATAMENTE 20 TERMOS ...]
  </dl>
</section>

REGRAS GLOSSÁRIO:
✅ OBRIGATÓRIO: Exatamente 20 termos técnicos
✅ Ordem alfabética
✅ Cada definição: 25 palavras (definição + contexto)
✅ Termos específicos de ${d.nm}
✅ Linguagem ${pt ? 'PT-BR' : 'ES'}

═══════════════════════════════════════════════════════════
REFERÊNCIAS BIBLIOGRÁFICAS (300 palavras):
═══════════════════════════════════════════════════════════

<section>
  <h2 style="color:#0D3851;font-family:'Playfair Display',serif;margin:40px 0 20px">${pt ? 'Referências Bibliográficas' : 'Referencias Bibliográficas'}</h2>
  
  <ol style="margin-bottom:40px;padding-left:30px;line-height:1.9">
    <li style="margin-bottom:10px">[Autor 1]. [Título do artigo/livro]. [Revista/Editora], v. X, n. Y, p. Z-W, ${pt ? 'ano' : 'año'}. Disponível em: [URL]. Acesso em: [data].</li>
    
    <li style="margin-bottom:10px">[Autor 2]. [Título]. [Fonte], [ano].</li>
    
    [... CONTINUAR ATÉ COMPLETAR EXATAMENTE 15 REFERÊNCIAS ...]
  </ol>
</section>

REGRAS REFERÊNCIAS:
✅ OBRIGATÓRIO: Exatamente 15 referências
✅ Formato ABNT completo
✅ Anos: 2020-2025 (fontes recentes)
✅ APENAS fontes REAIS (não inventar DOI/PMID)
✅ Artigos científicos, livros técnicos, documentos oficiais
✅ Priorizar: periódicos indexados, órgãos oficiais, instituições renomadas

ATENÇÃO CRÍTICA:
❌ NUNCA inventar DOI ou PMID
❌ NUNCA criar autores fictícios
✅ SE não souber fonte específica, use fontes genéricas conhecidas:
   - OMS (Organização Mundial da Saúde)
   - Ministério da Saúde
   - ANVISA
   - Conselhos profissionais (CFM, COFEN, etc)
   
═══════════════════════════════════════════════════════════
SÍNTESE FINAL (300 palavras):
═══════════════════════════════════════════════════════════

<section>
  <h2 style="color:#0D3851;font-family:'Playfair Display',serif;margin:40px 0 20px">${pt ? 'Síntese Final' : 'Síntesis Final'}</h2>
  
  <div style="background:#F7F5F0;padding:30px;border-left:6px solid #0D8C5E;border-radius:8px">
    <p>[Parágrafo 1: Recapitulação dos principais conceitos - 100 palavras]</p>
    
    <p>[Parágrafo 2: Integração dos capítulos e aplicação prática - 100 palavras]</p>
    
    <p>[Parágrafo 3: Próximos passos e recomendações - 100 palavras]</p>
  </div>
</section>

TEMA: ${d.nm}
PÚBLICO: ${d.pa}
IDIOMA: ${pt ? 'Português BR' : 'Español'}

${baseContent ? '\n\nCONTEÚDO DO CURSO (extraia termos técnicos daqui):\n' + baseContent.substring(0, 4000) : ''}`;

  var html = await callOpenAI(prompt, 10000);
  return extractHTML(html);
}

// ──────────────────────────────────────────────────────────
// VALIDAÇÃO AUTOMÁTICA DE ESTRUTURA
// ──────────────────────────────────────────────────────────

function validateLivroStructure(html, lang) {
  var pt = lang === 'pt';
  var errors = [];
  var warnings = [];
  
  // Contar elementos
  var boxesSaibaMais = (html.match(/class="box-saiba-mais"/g) || []).length;
  var boxesPratica = (html.match(/class="box-pratica"/g) || []).length;
  var tabelas = (html.match(/<table/g) || []).length;
  var pontosChave = (html.match(/class="pontos-chave"/g) || []).length;
  var glossarioTermos = (html.match(/<dt/g) || []).length;
  var referencias = (html.match(/<li style="margin-bottom:10px">/g) || []).length;
  
  // Validações OBRIGATÓRIAS (ERRO se falhar)
  if (boxesSaibaMais !== 4) {
    errors.push(`Boxes "Saiba Mais": esperado 4, encontrado ${boxesSaibaMais}`);
  }
  
  if (boxesPratica !== 2) {
    errors.push(`Boxes "Prática": esperado 2, encontrado ${boxesPratica}`);
  }
  
  if (tabelas !== 2) {
    errors.push(`Tabelas: esperado 2, encontrado ${tabelas}`);
  }
  
  if (pontosChave !== 2) {
    errors.push(`Pontos-Chave: esperado 2, encontrado ${pontosChave}`);
  }
  
  if (glossarioTermos < 18 || glossarioTermos > 22) {
    errors.push(`Glossário: esperado 20 termos, encontrado ${glossarioTermos}`);
  }
  
  if (referencias < 13 || referencias > 17) {
    errors.push(`Referências: esperado 15, encontrado ${referencias}`);
  }
  
  // Contagem de palavras
  var texto = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  var palavras = texto.split(' ').length;
  
  if (palavras < 5500 || palavras > 6500) {
    warnings.push(`Palavras: esperado 6000±500, encontrado ${palavras}`);
  }
  
  return {
    valid: errors.length === 0,
    errors: errors,
    warnings: warnings,
    stats: {
      boxesSaibaMais,
      boxesPratica,
      tabelas,
      pontosChave,
      glossarioTermos,
      referencias,
      palavras
    }
  };
}

// ──────────────────────────────────────────────────────────
// REGENERAÇÃO INTELIGENTE COM FALLBACK
// ──────────────────────────────────────────────────────────

async function generateLivroComValidacao(P, lang) {
  var maxTentativas = 3;
  var tentativa = 0;
  var livroHTML = '';
  var validacao = null;
  
  while (tentativa < maxTentativas) {
    tentativa++;
    
    toast(`Tentativa ${tentativa}/${maxTentativas} - Gerando livro...`);
    
    // Gerar livro
    livroHTML = await generateLivroSegmentado(lang);
    
    // Validar
    validacao = validateLivroStructure(livroHTML, lang);
    
    if (validacao.valid) {
      toast('✅ Livro gerado com sucesso! Estrutura válida.');
      console.log('📊 Stats:', validacao.stats);
      break;
    } else {
      console.warn(`⚠️ Tentativa ${tentativa} falhou:`, validacao.errors);
      
      if (tentativa < maxTentativas) {
        toast(`⚠️ Ajustando e tentando novamente...`);
        await sleep(2000);
      }
    }
  }
  
  // Se ainda tiver erros após 3 tentativas, avisar usuário
  if (!validacao.valid) {
    var msg = '⚠️ Livro gerado com inconsistências:\n' + validacao.errors.join('\n');
    console.error(msg);
    toast(msg, 10000);
  }
  
  if (validacao.warnings.length > 0) {
    console.warn('⚠️ Avisos:', validacao.warnings);
  }
  
  return livroHTML;
}
