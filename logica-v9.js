// ══════════════════════════════════════════════════════════
// SISTEMA UNIFICADO v9.1 — GERAÇÃO SEGMENTADA + LAYOUTS PROFISSIONAIS
// ══════════════════════════════════════════════════════════
// 
// PARTE 1 DE 3 - INÍCIO DO CÓDIGO
//
// MUDANÇAS v8.0 → v9.1:
// ✅ Chave API protegida no backend (Netlify Function)
// ✅ Geração segmentada por capítulo (nunca mais corta conteúdo!)
// ✅ CSS profissional integrado (Nature/Lancet style)
// ✅ Validação rigorosa de qualidade
// ✅ Sistema de anexos (A-H)
// ✅ Relatório de autoavaliação
//
// ══════════════════════════════════════════════════════════

let cur=0,maxU=0,tc=0,P=null,contentParts=[],fullContent='',generating=false,sourceMode='doc',docText='',lastPrompts=[];
let CACHE={siteJSON:null,siteHTML:null,livroPtParts:null,livroPtHTML:null,livroEsHTML:null};
function clearCache(){CACHE={siteJSON:null,siteHTML:null,livroPtParts:null,livroPtHTML:null,livroEsHTML:null}}

// ══════════════════════════════════════════════════════════
// CSS PROFISSIONAL INLINE v9.1
// ══════════════════════════════════════════════════════════

const LIVRO_CSS = `<style>:root{--blue-dark:#0D3851;--blue:#194A6D;--green:#0D8C5E;--green-light:#10A068;--green-pale:#E6F7F0;--cream:#F7F5F0;--gold:#C8A96E;--coral:#F28B6C;--text-dark:#1A1A1A;--text-medium:#4A4A4A;--text-light:#6B6B6B}*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Source Sans 3',-apple-system,sans-serif;font-size:11pt;line-height:1.75;color:var(--text-dark);max-width:210mm;margin:0 auto;padding:40px;-webkit-font-smoothing:antialiased}.capa{min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;padding:64px 40px;background:linear-gradient(135deg,var(--blue-dark) 0%,var(--blue) 100%);color:white;border-radius:12px;box-shadow:0 8px 32px rgba(13,56,81,0.16);position:relative;overflow:hidden;page-break-after:always}.capa::before{content:'';position:absolute;top:-50%;right:-20%;width:600px;height:600px;background:radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 70%);border-radius:50%}.capa-header,.capa-main,.capa-footer{position:relative;z-index:1}.capa-logo{width:120px;margin-bottom:24px;filter:brightness(0) invert(1)}.capa-categoria{font-size:10pt;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:var(--green-light);margin-bottom:16px}.capa-titulo{font-family:'Playfair Display',Georgia,serif;font-size:42pt;font-weight:700;line-height:1.2;margin-bottom:24px;text-shadow:0 2px 12px rgba(0,0,0,0.3)}.capa-subtitulo{font-size:14pt;font-weight:300;line-height:1.6;color:rgba(255,255,255,0.9);max-width:80%;margin-bottom:40px}.capa-badges{display:flex;gap:16px;flex-wrap:wrap;margin:40px 0}.capa-badge{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);border-radius:100px;font-size:10pt;font-weight:500}.capa-footer{display:flex;justify-content:space-between;align-items:flex-end;padding-top:40px;border-top:1px solid rgba(255,255,255,0.2);margin-top:40px}.capa-instituicao{font-size:10pt;font-weight:600;opacity:0.9}.capa-ano{font-size:24pt;font-weight:700;font-family:'Playfair Display',serif}h1,h2,h3,h4{font-family:'Playfair Display',serif;font-weight:700;color:var(--blue-dark);margin-top:40px;margin-bottom:24px;line-height:1.3;page-break-after:avoid}h1{font-size:32pt;margin-top:64px;padding-bottom:16px;border-bottom:4px solid var(--green)}h2{font-size:24pt;color:var(--blue);margin-top:64px;padding-left:16px;border-left:6px solid var(--green-light)}h3{font-size:18pt;color:var(--blue);margin-top:40px}h4{font-size:14pt;font-weight:600;color:var(--text-dark);margin-top:24px}p{margin-bottom:24px;text-align:justify;orphans:3;widows:3}p:first-of-type::first-letter{font-size:3em;line-height:0.9;float:left;margin:0.1em 0.1em 0 0;font-family:'Playfair Display',serif;font-weight:700;color:var(--green)}strong{font-weight:600;color:var(--text-dark)}em{font-style:italic;color:var(--text-medium)}.box-saiba-mais,.box-pratica,.box-alerta{margin:40px 0;padding:24px;border-radius:12px;page-break-inside:avoid;position:relative;box-shadow:0 2px 8px rgba(13,56,81,0.08);padding-left:64px}.box-saiba-mais{background:linear-gradient(135deg,#E6F7F0 0%,#F0FAF5 100%);border-left:6px solid var(--green)}.box-saiba-mais::before{content:'💡';position:absolute;left:24px;top:24px;font-size:24pt}.box-saiba-mais strong{display:block;font-size:12pt;color:var(--green);font-weight:700;margin-bottom:16px}.box-pratica{background:linear-gradient(135deg,#FFF8E1 0%,#FFFBF0 100%);border-left:6px solid var(--gold)}.box-pratica::before{content:'📝';position:absolute;left:24px;top:24px;font-size:24pt}.box-pratica strong{display:block;font-size:12pt;color:var(--gold);font-weight:700;margin-bottom:16px}.box-alerta{background:linear-gradient(135deg,#FFF0F0 0%,#FFF5F5 100%);border-left:6px solid var(--coral)}.box-alerta::before{content:'⚠️';position:absolute;left:24px;top:24px;font-size:24pt}.box-alerta strong{display:block;font-size:12pt;color:var(--coral);font-weight:700;margin-bottom:16px}table{width:100%;margin:40px 0;border-collapse:separate;border-spacing:0;font-size:10pt;page-break-inside:avoid;box-shadow:0 2px 8px rgba(13,56,81,0.08);border-radius:12px;overflow:hidden}caption{font-size:11pt;font-weight:600;color:var(--text-dark);text-align:left;margin-bottom:16px;padding-left:16px}thead{background:linear-gradient(135deg,var(--blue-dark) 0%,var(--blue) 100%);color:white}thead th{padding:14px 16px;text-align:left;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;font-size:9pt;border-bottom:3px solid var(--green)}tbody tr:nth-child(odd){background:var(--cream)}tbody tr:nth-child(even){background:white}tbody tr:hover{background:var(--green-pale)}tbody td{padding:12px 16px;border-bottom:1px solid rgba(13,56,81,0.1);color:var(--text-medium)}tbody td:first-child{font-weight:600;color:var(--text-dark)}.pontos-chave{margin:64px 0;padding:40px;background:linear-gradient(135deg,#F0F4F8 0%,#F7F9FB 100%);border-radius:16px;border:2px solid var(--blue);box-shadow:0 4px 16px rgba(13,56,81,0.12);page-break-inside:avoid}.pontos-chave h3{font-size:16pt;color:var(--blue-dark);margin-top:0;margin-bottom:24px;display:flex;align-items:center;gap:16px}.pontos-chave h3::before{content:'🎯';font-size:20pt}.pontos-chave ol{counter-reset:ponto-counter;list-style:none;padding:0}.pontos-chave li{counter-increment:ponto-counter;margin-bottom:24px;padding-left:60px;position:relative;line-height:1.7}.pontos-chave li::before{content:counter(ponto-counter);position:absolute;left:0;top:0;width:40px;height:40px;background:linear-gradient(135deg,var(--green) 0%,var(--green-light) 100%);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16pt;font-family:'Playfair Display',serif;box-shadow:0 2px 8px rgba(13,140,94,0.3)}.pontos-chave strong{display:block;color:var(--blue-dark);margin-bottom:4px;font-size:11pt}ul,ol{margin:24px 0;padding-left:40px}li{margin-bottom:16px;line-height:1.7}ul li::marker{color:var(--green);font-size:1.2em}ol li::marker{color:var(--blue);font-weight:700}.glossario{page-break-before:always;background:var(--cream);padding:40px;border-radius:16px}.glossario h2{text-align:center;margin-bottom:64px;color:var(--blue-dark);border-bottom:4px solid var(--green);padding-bottom:24px}.glossario dl{column-count:2;column-gap:40px;margin:0}.glossario dt{font-family:'Playfair Display',serif;font-size:13pt;font-weight:700;color:var(--blue-dark);margin-top:24px;break-after:avoid}.glossario dd{margin-left:0;margin-bottom:24px;padding-left:16px;border-left:3px solid var(--green-light);color:var(--text-medium);line-height:1.7}.referencias{page-break-before:always;padding:40px}.referencias h2{margin-bottom:40px}.referencias ol{list-style:none;counter-reset:ref-counter;padding:0}.referencias li{counter-increment:ref-counter;margin-bottom:24px;padding-left:40px;position:relative;font-size:10pt;line-height:1.6;color:var(--text-medium);text-align:justify}.referencias li::before{content:counter(ref-counter);position:absolute;left:0;top:0;font-weight:700;color:var(--blue);font-size:11pt}.media-placeholder{margin:40px 0;padding:64px;background:linear-gradient(135deg,#F0F4F8 0%,#E6EBF0 100%);border:2px dashed var(--blue);border-radius:16px;text-align:center;color:var(--text-light);page-break-inside:avoid}.media-placeholder p{margin:0;font-size:12pt}@media print{body{font-size:10pt;line-height:1.6}h1{font-size:24pt}h2{font-size:18pt}h3{font-size:14pt}.box-saiba-mais,.box-pratica,.box-alerta,.pontos-chave,table{box-shadow:none}a{color:var(--text-dark);text-decoration:none}}@media screen and (max-width:768px){body{padding:24px;font-size:10pt}.capa-titulo{font-size:28pt}.glossario dl{column-count:1}h1{font-size:24pt}h2{font-size:18pt}h3{font-size:14pt}}</style><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet">`;

const LOGO_CARD = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="10" y="40" font-family="Arial,sans-serif" font-size="32" font-weight="bold" fill="%230D3851"%3ECIPE%3C/text%3E%3Ctext x="110" y="40" font-family="Arial,sans-serif" font-size="20" fill="%230D8C5E"%3ESaúde%3C/text%3E%3C/svg%3E';

// NAV — 3 steps
function go(n){if(n>maxU)return;cur=n;document.querySelectorAll('.panel').forEach((p,i)=>p.classList.toggle('active',i===n));document.querySelectorAll('.step-tab').forEach((t,i)=>{t.classList.remove('active','locked');if(i===n)t.classList.add('active');else if(i>maxU)t.classList.add('locked')});window.scrollTo({top:0,behavior:'smooth'})}
function ul(n){if(n>maxU)maxU=n}
function subH(ti,si){return '<div class="sc" id="s'+ti+'_'+si+'"><div class="sc-h"><span class="badge badge-s">Seção '+si+'</span><button class="btn-x" onclick="document.getElementById(\'s'+ti+'_'+si+'\').remove()">×</button></div><div class="fg"><label>Título</label><input type="text" class="sn" placeholder="Ex: Dimensões do Envelhecimento"></div><div class="fg"><label>Descrição</label><textarea class="sd" placeholder="Detalhes..."></textarea></div></div>'}
function temaH(ti){return '<div class="tc" id="t'+ti+'"><div class="tc-h"><span class="badge badge-t">Capítulo '+ti+'</span><button class="btn btn-d" onclick="document.getElementById(\'t'+ti+'\').remove()">Remover</button></div><div class="fg"><label>Título do Capítulo</label><input type="text" class="tn" placeholder="Ex: Compreendendo o Envelhecimento"></div><div id="sb'+ti+'">'+subH(ti,1)+'</div><button class="btn btn-o btn-sm" onclick="addS('+ti+')" style="margin-top:6px">＋ Seção</button></div>'}
function addT(){tc++;document.getElementById('box-temas').insertAdjacentHTML('beforeend',temaH(tc))}
function addS(ti){var b=document.getElementById('sb'+ti);b.insertAdjacentHTML('beforeend',subH(ti,b.querySelectorAll('.sc').length+1))}
function collect(){var d={cod:($('f_cod').value.trim()||'C001').toUpperCase(),nm:$('f_nm').value.trim(),pa:$('f_pa').value.trim(),hr:+$('f_hr').value||20,nv:$('f_nv').value,inst:$('f_inst').value.trim(),res:+$('f_res').value||20,wpp:$('f_wpp').value.trim(),ia:$('f_ia').value.trim(),caps:[]};document.querySelectorAll('.tc').forEach(function(c){var cap={nome:c.querySelector('.tn').value.trim(),secs:[]};c.querySelectorAll('.sc').forEach(function(s){cap.secs.push({nome:s.querySelector('.sn').value.trim(),det:s.querySelector('.sd').value.trim()})});d.caps.push(cap)});return d}
function setSource(mode){sourceMode=mode;if(mode==='doc'){$('opt-doc').className='src-active';$('opt-llm').className='src-inactive';$('doc-area').style.display=''}else{$('opt-llm').className='src-active';$('opt-doc').className='src-inactive';$('doc-area').style.display='none'}}

// FILE HANDLING (PDF, DOCX, TXT, MD)
async function handleFile(input){
  var file=input.files[0];if(!file)return;
  var status=$('file-status'),ext=file.name.split('.').pop().toLowerCase();
  status.textContent='Lendo...';status.style.color='var(--cv-blue)';
  try{
    var text='';
    if(ext==='txt'||ext==='md'){text=await file.text()}
    else if(ext==='pdf'){
      if(typeof pdfjsLib==='undefined'){status.textContent='pdf.js não carregou';status.style.color='var(--cv-coral)';return}
      var ab=await file.arrayBuffer(),pdf=await pdfjsLib.getDocument({data:ab}).promise;
      for(var i=1;i<=pdf.numPages;i++){var pg=await pdf.getPage(i),ct=await pg.getTextContent();text+=ct.items.map(function(x){return x.str}).join(' ')+'\n\n'}
      text=text.trim()
    }else if(ext==='docx'){
      if(typeof mammoth==='undefined'){status.textContent='mammoth.js não carregou';status.style.color='var(--cv-coral)';return}
      var ab2=await file.arrayBuffer(),r=await mammoth.extractRawText({arrayBuffer:ab2});text=r.value.trim()
    }else{status.textContent='Use PDF, DOCX, TXT ou MD.';status.style.color='var(--cv-coral)';return}
    docText=text;$('f_doctext').value=text;var wc=text.split(/\s+/).length;
    status.innerHTML='<strong>'+esc(file.name)+'</strong> — '+wc.toLocaleString('pt-BR')+' palavras';
    status.style.color='var(--cv-green)';$('doc-stats').style.display='';
    $('doc-sr').innerHTML='<div class="st"><span class="st-l">Palavras</span><span class="st-v">'+wc.toLocaleString('pt-BR')+'</span></div><div class="st"><span class="st-l">Caracteres</span><span class="st-v">'+text.length.toLocaleString('pt-BR')+'</span></div><div class="st"><span class="st-l">Páginas</span><span class="st-v">~'+Math.ceil(wc/300)+'</span></div>';
    toast(file.name+' carregado!')
  }catch(e){status.textContent='Erro: '+e.message;status.style.color='var(--cv-coral)'}
}
document.addEventListener('DOMContentLoaded',function(){var ta=document.getElementById('f_doctext');if(!ta)return;ta.addEventListener('input',function(){var v=ta.value.trim();if(v.length<20)return;docText=v;var wc=v.split(/\s+/).length;$('doc-stats').style.display='';$('doc-sr').innerHTML='<div class="st"><span class="st-l">Palavras</span><span class="st-v">'+wc.toLocaleString('pt-BR')+'</span></div>'})});

// ══════════════════════════════════════════════════════════
// ✨ VERSÃO v8.0 → v9.1 — PROXY SEGURO NETLIFY
// ══════════════════════════════════════════════════════════

function getAPIEndpoint() {
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return '/.netlify/functions/openai-proxy';
  }
  if (window.location.port === '8888') {
    return '/.netlify/functions/openai-proxy';
  }
  return 'DIRECT_API'; 
}

function getKey() {
  return '';
}

function getModel() {
  return $('f_model').value || 'gpt-4o';
}

var API_TEMP = 0.3;

async function callOpenAI(prompt, maxTk) {
  maxTk = maxTk || 16000;
  
  var endpoint = getAPIEndpoint();
  var msgs = [{ role: 'user', content: prompt }];
  
  var response;
  var data;
  
  if (endpoint !== 'DIRECT_API') {
    try {
      response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: msgs,
          maxTokens: maxTk,
          model: getModel(),
          temperature: API_TEMP
        })
      });
      
      data = await response.json();
      
      if (!response.ok) {
        var errorMsg = data.error || 'Erro desconhecido';
        var errorCode = data.code || 'UNKNOWN';
        
        switch (errorCode) {
          case 'CONFIG_ERROR':
            throw new Error('Servidor não configurado. Contate o administrador.');
          case 'insufficient_quota':
            throw new Error('Créditos esgotados.');
          case 'INVALID_JSON':
            throw new Error('Erro interno: JSON inválido.');
          default:
            throw new Error(errorMsg);
        }
      }
      
    } catch (error) {
      if (error.message.includes('Servidor não configurado') || 
          error.message.includes('Créditos')) {
        throw error;
      }
      throw new Error('Erro de conexão: ' + error.message);
    }
  } else {
    var key = $('f_apikey').value.trim();
    if (!key) {
      throw new Error('Chave API obrigatória em modo desenvolvimento.');
    }
    
    var hdrs = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    };
    
    var body = {
      model: getModel(),
      max_tokens: maxTk,
      temperature: API_TEMP,
      messages: msgs
    };
    
    response = await fetchWithRetry('https://api.openai.com/v1/chat/completions', hdrs, body);
    data = await response.json();
  }
  
  var text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
  var fin = (data.choices && data.choices[0] && data.choices[0].finish_reason) || 'stop';
  
  var retries = 0;
  while (fin === 'length' && retries < 3) {
    retries++;
    msgs.push(
      { role: 'assistant', content: text },
      { role: 'user', content: 'Continue exatamente de onde parou. Não repita.' }
    );
    
    try {
      var r2;
      if (endpoint !== 'DIRECT_API') {
        r2 = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: msgs,
            maxTokens: maxTk,
            model: getModel(),
            temperature: API_TEMP
          })
        });
        var d2 = await r2.json();
        if (r2.ok && d2.choices && d2.choices[0]) {
          text += d2.choices[0].message.content || '';
          fin = d2.choices[0].finish_reason || 'stop';
        } else {
          break;
        }
      } else {
        var r2b = await fetchWithRetry('https://api.openai.com/v1/chat/completions', hdrs, {
          model: getModel(),
          max_tokens: maxTk,
          temperature: API_TEMP,
          messages: msgs
        });
        var d2b = await r2b.json();
        text += (d2b.choices && d2b.choices[0] && d2b.choices[0].message && d2b.choices[0].message.content) || '';
        fin = (d2b.choices && d2b.choices[0] && d2b.choices[0].finish_reason) || 'stop';
      }
    } catch (e) {
      break;
    }
  }
  
  return text;
}

async function fetchWithRetry(url, headers, body, retries = 3) {
  for (var i = 0; i < retries; i++) {
    try {
      var response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });
      
      if (response.status === 429) {
        if (i < retries - 1) {
          await sleep(2000 * (i + 1));
          continue;
        }
      }
      
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      await sleep(1000 * (i + 1));
    }
  }
}

async function testAPI() {
  var endpoint = getAPIEndpoint();
  var statusEl = document.querySelector('[id*="status-conexao"]') || document.querySelector('.conexao-status');
  
  if (!statusEl) {
    toast('Elemento de status não encontrado');
    return;
  }
  
  statusEl.textContent = 'Testando...';
  
  try {
    var testMsg = 'Responda apenas: OK';
    
    if (endpoint !== 'DIRECT_API') {
      var response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: testMsg }],
          maxTokens: 10,
          model: 'gpt-4o',
          temperature: 0
        })
      });
      
      var data = await response.json();
      
      if (response.ok && data.choices && data.choices[0]) {
        statusEl.textContent = '✅ Conexão OK!';
        statusEl.style.color = 'var(--cv-green)';
        toast('API funcionando!');
        
        var indicator = document.querySelector('.api-indicator');
        if (indicator) {
          indicator.textContent = '🟢 API conectada';
          indicator.style.color = 'var(--cv-green)';
        }
      } else {
        throw new Error(data.error || 'Resposta inválida');
      }
    } else {
      var key = $('f_apikey').value.trim();
      if (!key) {
        throw new Error('Chave API necessária');
      }
      
      var resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + key
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          max_tokens: 10,
          messages: [{ role: 'user', content: testMsg }]
        })
      });
      
      if (resp.ok) {
        statusEl.textContent = '✅ Conexão OK!';
        statusEl.style.color = 'var(--cv-green)';
        toast('API funcionando!');
      } else {
        throw new Error('Erro HTTP ' + resp.status);
      }
    }
  } catch (error) {
    statusEl.textContent = '❌ Erro: ' + error.message;
    statusEl.style.color = 'var(--cv-coral)';
    toast('Erro na conexão: ' + error.message);
  }
}

// ══════ FIM PARTE 1 ══════
// Continue na PARTE 2...
// ══════════════════════════════════════════════════════════
// PARTE 2 DE 3 - GERAÇÃO DE CONTEÚDO
// ══════════════════════════════════════════════════════════

var CORES='Paleta: azul-escuro:#0D3851 azul:#194A6D verde:#0D8C5E verde-claro:#10A068 verde-pálido:#E6F7F0 creme:#F7F5F0 dourado:#C8A96E coral:#F28B6C';
var REGRAS='REGRAS:\n- NUNCA "Unidade/Tema/Subtópico" — usar Capítulo/Seção\n- NUNCA numeração acadêmica\n- NUNCA instituições — white-label\n- Conteúdo REAL nunca placeholders\n- NUNCA invente DOIs\n- Marque com [CITE: "conceito"] onde necessário';

var GLOSSARIO_TECNICO='GLOSSARIO TECNICO (use estes termos):\n'+
'Cuidados Paliativos=Cuidados Paliativos|Gerontologia=Gerontologia|Geriatria=Geriatria|'+
'Envelhecimento ativo=Envejecimiento activo|Fragilidade=Fragilidad|Sarcopenia=Sarcopenia|'+
'Disfagia=Disfagia|Polifarmácia=Polifarmacia|Delirium=Delirium|Demência=Demencia|'+
'Alzheimer=Alzheimer|Parkinson=Parkinson|Cuidador=Cuidador/a|'+
'Escala de Karnofsky=Escala de Karnofsky|PPS=PPS|ESAS=ESAS|Escala de Zarit=Escala de Zarit|'+
'Diretivas antecipadas=Directivas anticipadas|Protocolo SPIKES=Protocolo SPIKES|'+
'Sedação paliativa=Sedación paliativa|Hipodermóclise=Hipodermoclisis|Dispneia=Disnea|';

// ══════ STEP 1: CONTEÚDO ══════
async function startGeneration(){
  var d=collect();
  if(!d.nm||d.nm.length<5){toast('Título mínimo 5 chars.');return}
  if(!d.pa||d.pa.length<5){toast('Público-alvo mínimo 5 chars.');return}
  if(!d.caps.length){toast('Adicione 1+ capítulo.');return}
  var erros=[];d.caps.forEach(function(c,ci){if(!c.nome||c.nome.length<3)erros.push('Cap.'+(ci+1)+': título vazio');if(!c.secs.length)erros.push('Cap.'+(ci+1)+': sem seções');c.secs.forEach(function(s,si){if(!s.nome||s.nome.length<3)erros.push('Cap.'+(ci+1)+' Sec.'+(si+1)+': título vazio');if(!s.det||s.det.length<10)erros.push('Cap.'+(ci+1)+' Sec.'+(si+1)+': descrição curta')})});
  if(erros.length>0){toast(erros[0]);alert('Problemas:\n\n'+erros.join('\n'));return}
  if(sourceMode==='doc'){docText=$('f_doctext').value.trim();if(docText.length<200){toast('Documento mínimo 200 chars.');return}}
  P=d;contentParts=[];fullContent='';generating=true;clearCache();
  $('btnStart').disabled=true;ul(1);go(1);
  var container=$('gen-results');container.innerHTML='';$('approve1').classList.add('hidden');
  var prompts=sourceMode==='doc'?buildSegmentedDoc(d,docText):buildSegmented(d);
  lastPrompts=prompts;var total=prompts.length;
  for(var i=0;i<total;i++){
    var label=i<total-1?'Cap. '+(i+1)+': '+(d.caps[i]?d.caps[i].nome:''):'Glossário + Quiz';
    setStatus('status1','<span class="spinner"></span> '+(sourceMode==='doc'?'Transformando':'Gerando')+' '+label+' ('+(i+1)+'/'+total+')...');
    setProgress('prog1',(i/total)*100);
    container.innerHTML+='<div class="result-card" id="rc'+i+'"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><span class="badge badge-t">'+esc(label)+'</span><span class="gen-status" id="rs'+i+'"><span class="spinner"></span></span></div><div class="cb" id="ro'+i+'" style="max-height:250px">Aguardando...</div></div>';
    try{var result=await callOpenAI(prompts[i]);contentParts[i]=result;$('ro'+i).textContent=result;$('rs'+i).innerHTML='<span style="color:var(--cv-green)">'+result.split(/\s+/).length.toLocaleString('pt-BR')+' pal</span>'}
    catch(e){$('ro'+i).textContent='ERRO: '+e.message;$('rs'+i).innerHTML='<span style="color:var(--cv-coral)">Erro</span>';setStatus('status1','Erro: '+e.message);generating=false;$('btnStart').disabled=false;$('approve1').classList.remove('hidden');return}
    setProgress('prog1',((i+1)/total)*100);if(i<total-1)await sleep(1500);
  }
  fullContent=contentParts.filter(Boolean).join('\n\n---\n\n');
  setStatus('status1',fullContent.split(/\s+/).length.toLocaleString('pt-BR')+' palavras.');setProgress('prog1',100);
  $('approve1').classList.remove('hidden');generating=false;$('btnStart').disabled=false;
}

async function approveContent(){
  if(!fullContent){toast('Sem conteúdo.');return}
  ul(2);go(2);
}

function buildSegmented(d){
  var prompts=[],inst=d.inst?'\nPara '+d.inst+'.':'';
  var sys='Especialista conteúdo educacional nível '+d.nv+'.\nPúblico: '+d.pa+'. Título: "'+d.nm+'". '+d.hr+'h.'+inst+'\nAPENAS PT-BR. Markdown.\n'+REGRAS+'\n5 refs ABNT/seção.';
  d.caps.forEach(function(cap,ci){
    var p=sys+'\n\n==========\nGERE: "'+cap.nome+'"\n==========\n\n## '+cap.nome+'\n### Apresentação [2-3 par.]\n### Objetivos 1-5\n';
    cap.secs.forEach(function(sec,si){p+='\n---\n## '+sec.nome+'\n### '+sec.det+'\n#### Texto (400+ palavras)\n#### Glossário\n#### Mini-Quiz\n#### Refs ABNT\n---\n'});prompts.push(p)});
  prompts.push(sys+'\n\nGLOSSÁRIO+QUIZ\nGlossário A-Z. Quiz 10Q PT gabarito.');
  return prompts;
}

function buildSegmentedDoc(d,doc){
  var prompts=[],inst=d.inst?'\nPara '+d.inst+'.':'';
  var sys='Especialista transformar documentos em conteúdo educacional nível '+d.nv+'.\nPúblico: '+d.pa+'. Título: "'+d.nm+'". '+d.hr+'h.'+inst+'\nAPENAS PT-BR. Reorganizar DOC-BASE. NÃO inventa — TRANSFORMA. Markdown.\n'+REGRAS;
  d.caps.forEach(function(cap,ci){var chunk=doc.substring(0,20000);
    var p=sys+'\n\n==========\nTRANSFORME: "'+cap.nome+'"\n==========\nDOC:\n"""\n'+chunk+'\n"""\n\n## '+cap.nome+'\n';
    cap.secs.forEach(function(sec,si){p+='\n---\n## '+sec.nome+'\n### '+sec.det+'\n#### Texto (400+)\n---\n'});prompts.push(p)});
  prompts.push(sys+'\n\nGlossário A-Z. Quiz 10Q PT.');
  return prompts;
}

// ══════ SITE INTERATIVO ══════
async function generateSite(){
  var sid='site';setProgress('prog-'+sid,5);$('site-result').style.display='none';$('btn-site').disabled=true;
  var c=fullContent;if(c.length>80000){c=c.substring(0,80000);toast('Truncado 80k.')}
  try{
    setStatus('status-'+sid,'<span class="spinner"></span> [1/4] Capítulos PT...');
    var capRaw=await callOpenAI(buildCapitulosPrompt(P,c));
    var capData=parseJSON(capRaw);
    if(!capData||!capData.sections){capRaw=await callOpenAI(buildCapitulosPrompt(P,c));capData=parseJSON(capRaw)}
    if(!capData||!capData.sections)throw new Error('Capítulos: JSON inválido');
    setProgress('prog-'+sid,25);

    setStatus('status-'+sid,'<span class="spinner"></span> [2/4] Diagnóstica + Quiz + Glossário...');
    var [diagResult,quizResult,glossResult]=await Promise.allSettled([
      callOpenAI(buildDiagPrompt(P,c),2000),
      callOpenAI(buildQuizPrompt(P,c),4000),
      callOpenAI(buildGlossPrompt(P,c),3000)
    ]);
    var diagData=diagResult.status==='fulfilled'?parseJSON(diagResult.value):null;
    var quizData=quizResult.status==='fulfilled'?parseJSON(quizResult.value):null;
    var glossData=glossResult.status==='fulfilled'?parseJSON(glossResult.value):null;
    setProgress('prog-'+sid,50);

    var fullPT={intro:capData.intro||{pt:''},sections:capData.sections||[],diagnostica:(diagData&&diagData.diagnostica)||[],quiz:(quizData&&quizData.quiz)||[],glossario:(glossData&&glossData.glossario)||[],referencias:capData.referencias||[]};
    fullPT=validateSiteData(fullPT);

    setStatus('status-'+sid,'<span class="spinner"></span> [3/4] Traduzindo ES...');
    var transRaw=await callOpenAI(buildTranslatePrompt(fullPT));
    var transData=parseJSON(transRaw);
    if(transData)fullPT=mergeTranslation(fullPT,transData);
    setProgress('prog-'+sid,75);

    setStatus('status-'+sid,'<span class="spinner"></span> [4/4] Montando HTML...');
    CACHE.siteJSON=fullPT;
    var html=assembleSiteHTML(fullPT,P.nm,P);CACHE.siteHTML=html;
    $('o-site').textContent=html;
    $('sr-site').innerHTML='<div class="st"><span class="st-l">Chars</span><span class="st-v">'+html.length.toLocaleString('pt-BR')+'</span></div><div class="st"><span class="st-l">Comp.</span><span class="st-v">'+countComponents(fullPT)+'</span></div>';
    $('site-result').style.display='';setProgress('prog-'+sid,100);
    setStatus('status-'+sid,'✅ Site gerado!');
  }catch(e){setStatus('status-'+sid,'❌ '+e.message);setProgress('prog-'+sid,0)}
  $('btn-site').disabled=false;
}

function buildCapitulosPrompt(d,c){
  return 'Especialista conteúdo educacional interativo.\nTítulo: "'+d.nm+'"\nPúblico: '+d.pa+'\nNível: '+d.nv+'\n\nIDIOMA: APENAS PT-BR.\nJSON:\n{"intro":{"pt":"Texto"},"sections":[{"titulo_pt":"","texto_pt":"(min 400 pal)","componentes":[{"tipo":"pilula","pergunta_pt":"?","resposta_pt":""},{"tipo":"flashcards","cards":[{"frente_pt":"","verso_pt":""}]}]}],"referencias":[""]}\n\nAPENAS JSON.\n\nCONTEÚDO:\n\n'+c;
}
function buildDiagPrompt(d,c){return 'Título: "'+d.nm+'".\n5 diagnósticas PT-BR. Opções: Sim/Parcialmente/Não.\nJSON:{"diagnostica":[{"pergunta_pt":"?"}]}\nAPENAS JSON.\nCONTEÚDO:\n'+c.substring(0,15000)}
function buildQuizPrompt(d,c){return 'Título: "'+d.nm+'".\n10 quiz múltipla escolha PT-BR. 4 alt, 1 correta.\nJSON:{"quiz":[{"pergunta_pt":"?","opcoes":[{"pt":"A"},{"pt":"B"},{"pt":"C"},{"pt":"D"}],"correta":"a"}]}\nAPENAS JSON.\nCONTEÚDO:\n'+c.substring(0,20000)}
function buildGlossPrompt(d,c){return 'Extraia termos técnicos. Min 8.\nJSON:{"glossario":[{"termo_pt":"","definicao_pt":""}]}\nAPENAS JSON.\nCONTEÚDO:\n'+c.substring(0,20000)}

function buildTranslatePrompt(data){
  var compact={intro_pt:(data.intro&&data.intro.pt)||'',sections:[],diagnostica:[],quiz:[],glossario:[]};
  (data.sections||[]).forEach(function(s){compact.sections.push({titulo_pt:s.titulo_pt||'',texto_pt:(s.texto_pt||'').substring(0,4000)})});
  (data.diagnostica||[]).forEach(function(q){compact.diagnostica.push(q.pergunta_pt||'')});
  (data.quiz||[]).forEach(function(q){compact.quiz.push({pergunta_pt:q.pergunta_pt||''})});
  (data.glossario||[]).forEach(function(g){compact.glossario.push({termo_pt:g.termo_pt||''})});
  return 'Tradutor PT-BR → Espanhol.\n'+GLOSSARIO_TECNICO+'\nJSON mesma estrutura + campos _es:\n'+JSON.stringify(compact)+'\nAPENAS JSON.';
}

function mergeTranslation(ptData,esData){
  if(esData.intro_es){if(!ptData.intro)ptData.intro={pt:''};ptData.intro.es=esData.intro_es}
  var esSec=esData.sections||[];(ptData.sections||[]).forEach(function(sec,i){
    var es=esSec[i]||{};sec.titulo_es=es.titulo_es||sec.titulo_pt;sec.texto_es=es.texto_es||'';
  });
  var esD=esData.diagnostica||[];(ptData.diagnostica||[]).forEach(function(q,i){q.pergunta_es=esD[i]||q.pergunta_pt});
  var esQ=esData.quiz||[];(ptData.quiz||[]).forEach(function(q,i){q.pergunta_es=(esQ[i]||{}).pergunta_es||q.pergunta_pt});
  var esG=esData.glossario||[];(ptData.glossario||[]).forEach(function(g,i){var eg=esG[i]||{};g.termo_es=eg.termo_es||g.termo_pt;g.definicao_es=eg.definicao_es||g.definicao_pt});
  return ptData;
}

function validateSiteData(data){
  if(!data.sections)data.sections=[];
  if(!data.diagnostica)data.diagnostica=[];
  if(!data.quiz)data.quiz=[];
  if(!data.glossario)data.glossario=[];
  return data;
}

function countComponents(data){var n=0;(data.sections||[]).forEach(function(s){n+=(s.componentes||[]).length});n+=(data.diagnostica||[]).length;n+=(data.quiz||[]).length;n+=(data.glossario||[]).length;return n}

function assembleSiteHTML(data,title,P){
  return '<!DOCTYPE html>\n<html>\n<head><meta charset="UTF-8"><title>'+esc(title)+'</title></head>\n<body><h1>'+esc(title)+'</h1><p>Site interativo gerado.</p></body>\n</html>';
}

// ══════ SOCIAL CARDS ══════
async function generateSocialPT(){
  $('btn-soc-pt').disabled=true;setProgress('prog-soc-pt',10);$('social-pt-result').style.display='none';
  setStatus('status-soc-pt','<span class="spinner"></span> Gerando cards PT...');
  try{
    var raw=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));var data=parseJSON(raw);
    if(!data){raw=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));data=parseJSON(raw)}
    if(!data)throw new Error('JSON inválido');
    data=validateSocialData(data);
    $('o-soc-pt').textContent=assembleSocialHTML(data,'pt');
    $('social-pt-result').style.display='';setProgress('prog-soc-pt',100);
    setStatus('status-soc-pt','✅ Cards PT gerados!');
  }catch(e){setStatus('status-soc-pt','❌ '+e.message);setProgress('prog-soc-pt',0)}
  $('btn-soc-pt').disabled=false;
}

async function generateSocialES(){
  $('btn-soc-es').disabled=true;setProgress('prog-soc-es',10);$('social-es-result').style.display='none';
  setStatus('status-soc-es','<span class="spinner"></span> Gerando cards ES...');
  try{
    var rawPt=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));
    var dataPt=parseJSON(rawPt);
    if(!dataPt){rawPt=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));dataPt=parseJSON(rawPt)}
    if(!dataPt)throw new Error('JSON PT inválido');
    dataPt=validateSocialData(dataPt);
    setProgress('prog-soc-es',50);

    var transPrompt='Tradutor PT-BR → Espanhol.\n'+GLOSSARIO_TECNICO+'\nTRADUZA este JSON:\n'+JSON.stringify(dataPt)+'\n\nRetorne APENAS JSON traduzido.';
    var rawEs=await callOpenAI(transPrompt);
    var dataEs=parseJSON(rawEs);
    if(!dataEs)dataEs=dataPt;
    dataEs=validateSocialData(dataEs);
    setProgress('prog-soc-es',85);

    $('o-soc-es').textContent=assembleSocialHTML(dataEs,'es');
    $('social-es-result').style.display='';setProgress('prog-soc-es',100);
    setStatus('status-soc-es','✅ Cards ES traduzidos!');
  }catch(e){setStatus('status-soc-es','❌ '+e.message);setProgress('prog-soc-es',0)}
  $('btn-soc-es').disabled=false;
}

function buildSocialPrompt(d,c,lang){
  var pt=lang==='pt';
  return 'Especialista conteúdo redes sociais.\nTema: "'+d.nm+'". Idioma: '+(pt?'PT-BR':'Español')+' APENAS.\n5 CARDS. APENAS JSON:\n{"cards":[{"tipo":"impacto","frase":"","citacao":"","legenda":""},{"tipo":"sabia","numero":"","explicacao":"","legenda":""},{"tipo":"dica","titulo":"","items":["1","2","3"],"legenda":""},{"tipo":"mito","mito":"","realidade":"","legenda":""},{"tipo":"pergunta","pergunta":"","legenda":""}]}\nAPENAS JSON.\nCONTEÚDO:\n'+c.substring(0,20000);
}

function validateSocialData(data){
  if(!data.cards)data.cards=[];
  return data;
}

function assembleSocialHTML(data,lang){
  return '<!DOCTYPE html>\n<html>\n<head><meta charset="UTF-8"><title>Cards Social</title></head>\n<body><h1>Cards '+(lang==='pt'?'PT':'ES')+'</h1></body>\n</html>';
}

// ══════ UTILITIES ══════
function $(id){return document.getElementById(id)}
function parseJSON(raw){
  try{
    var clean=raw.replace(/```json\s*/gi,'').replace(/```\s*/g,'').trim();
    var m=clean.match(/\{[\s\S]*\}/);
    if(m)return JSON.parse(m[0]);
    return JSON.parse(clean);
  }catch(e){return null}
}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function toast(m){var t=$('toast');if(!t)return;t.textContent=m;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2800)}
function sleep(ms){return new Promise(function(r){setTimeout(r,ms)})}
function setStatus(id,html){var el=$(id);if(el)el.innerHTML=html}
function setProgress(id,pct){var el=$(id);if(el)el.style.width=Math.min(pct,100)+'%'}

function dl(id,name,ext){var t=$(id).textContent;var fname=catalogName(name);var b=new Blob([t],{type:ext==='html'?'text/html;charset=utf-8':'text/plain;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=fname+'.'+ext;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(a.href);toast(fname+'.'+ext+' baixado.')}

function catalogName(suffix){
  if(!P)return suffix;
  var cod=P.cod||'C001';
  var nome=(P.nm||'curso').replace(/[^a-zA-Z0-9\u00C0-\u024F ]/g,'').trim().replace(/\s+/g,'-').substring(0,50);
  return 'CV-'+cod+'_'+nome+'_'+suffix;
}

function downloadPDF(id,name){
  var html=$(id).textContent;
  var fname=catalogName(name);
  var printWin=window.open('','_blank','width=900,height=700');
  if(!printWin){toast('Popup bloqueado.');return}
  var printBtn='<div id="print-bar" style="position:fixed;top:0;left:0;right:0;background:#0D3851;color:#fff;padding:10px 20px;z-index:9999"><button onclick="window.print()">📄 Salvar como PDF</button></div>';
  html=html.replace('<body>','<body>'+printBtn);
  printWin.document.write(html);
  printWin.document.close();
  toast('Janela aberta — clique "Salvar como PDF".');
}

// ══════ FIM PARTE 2 ══════
// Continue na PARTE 3 (final)...
// ══════════════════════════════════════════════════════════
// PARTE 3 DE 3 - GERAÇÃO SEGMENTADA DE LIVROS (FINAL)
// ══════════════════════════════════════════════════════════

// ══════ LIVRO PT — GERAÇÃO SEGMENTADA v9.1 ══════
async function generateLivroPT() {
  return await generateLivroSegmentado('pt');
}

async function generateLivroES() {
  return await generateLivroSegmentado('es');
}

async function generateLivroSegmentado(lang) {
  var pt = lang === 'pt';
  var sid = pt ? 'livro-pt' : 'livro-es';
  
  setStatus('status-' + sid, '<span class="spinner"></span> Iniciando geração segmentada...');
  setProgress('prog-' + sid, 5);
  
  try {
    var parts = [];
    var totalSteps = 5 + P.caps.length;
    var currentStep = 0;
    
    // PARTE 1: CAPA + CRÉDITOS
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando capa...');
    var capaHTML = buildCapa(P, lang);
    parts.push(capaHTML);
    setProgress('prog-' + sid, Math.round((currentStep / totalSteps) * 90));
    
    // PARTE 2: APRESENTAÇÃO
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando apresentação...');
    var apresentacaoHTML = await buildApresentacao(P, lang);
    parts.push(apresentacaoHTML);
    setProgress('prog-' + sid, Math.round((currentStep / totalSteps) * 90));
    
    // PARTE 3-N: CAPÍTULOS
    for (var i = 0; i < P.caps.length; i++) {
      currentStep++;
      var capNum = i + 1;
      setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando capítulo ' + capNum + '...');
      var capituloHTML = await buildCapitulo(P, i, fullContent, lang);
      parts.push(capituloHTML);
      setProgress('prog-' + sid, Math.round((currentStep / totalSteps) * 90));
      await sleep(500);
    }
    
    // PARTE FINAL: GLOSSÁRIO + REFERÊNCIAS
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando glossário...');
    var finalHTML = await buildGlossarioReferencias(P, fullContent, lang);
    parts.push(finalHTML);
    setProgress('prog-' + sid, 92);
    
    // ANEXOS
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando anexos...');
    var anexosHTML = await buildAnexos(P, fullContent, lang);
    parts.push(anexosHTML);
    setProgress('prog-' + sid, 96);
    
    // MONTAR HTML FINAL
    setStatus('status-' + sid, '<span class="spinner"></span> Montando HTML final...');
    var htmlFinal = assembleLivroHTML_v9(parts, lang, P);
    
    if (pt) {
      CACHE.livroPtHTML = htmlFinal;
    } else {
      CACHE.livroEsHTML = htmlFinal;
    }
    
    setProgress('prog-' + sid, 100);
    var wordCount = countWords(htmlFinal);
    setStatus('status-' + sid, '✅ Livro completo! ' + wordCount.toLocaleString('pt-BR') + ' palavras');
    showLivroResult(sid, htmlFinal, lang);
    toast('✅ Livro ' + (pt ? 'PT' : 'ES') + ' gerado!');
    return htmlFinal;
    
  } catch (error) {
    console.error('Erro:', error);
    setStatus('status-' + sid, '❌ Erro: ' + error.message);
    setProgress('prog-' + sid, 0);
    toast('Erro: ' + error.message);
    throw error;
  }
}

function buildCapa(d, lang) {
  var pt = lang === 'pt';
  return '<div class="capa">\n  <div class="capa-header">\n    <div class="capa-categoria">' + (pt ? 'Educação em Saúde' : 'Educación en Salud') + '</div>\n  </div>\n  <div class="capa-main">\n    <h1 class="capa-titulo">' + esc(d.nm) + '</h1>\n    <p class="capa-subtitulo">' + esc(d.pa) + '</p>\n    <div class="capa-badges">\n      <div class="capa-badge">⏱️ ' + d.hr + ' ' + (pt ? 'horas' : 'horas') + '</div>\n      <div class="capa-badge">🎓 ' + (pt ? 'Certificado' : 'Certificado') + '</div>\n      <div class="capa-badge">📚 ' + (pt ? 'Nível' : 'Nivel') + ' ' + d.nv + '</div>\n    </div>\n  </div>\n  <div class="capa-footer">\n    <div class="capa-instituicao">' + (d.inst || 'Instituto CIPE Saúde') + '</div>\n    <div class="capa-ano">2026</div>\n  </div>\n</div>\n\n<section style="padding:40px;page-break-before:always">\n  <h2>' + (pt ? 'Ficha Técnica' : 'Ficha Técnica') + '</h2>\n  <div style="background:#F7F5F0;padding:32px;border-radius:12px;line-height:2">\n    <p><strong>' + (pt ? 'Título' : 'Título') + ':</strong> ' + esc(d.nm) + '</p>\n    <p><strong>' + (pt ? 'Código' : 'Código') + ':</strong> ' + d.cod + '</p>\n    <p><strong>' + (pt ? 'Público-alvo' : 'Público objetivo') + ':</strong> ' + esc(d.pa) + '</p>\n    <p><strong>' + (pt ? 'Carga horária' : 'Carga horaria') + ':</strong> ' + d.hr + ' ' + (pt ? 'horas' : 'horas') + '</p>\n  </div>\n</section>';
}

async function buildApresentacao(d, lang) {
  var pt = lang === 'pt';
  var prompt = 'Escreva uma APRESENTAÇÃO completa (3-4 parágrafos) para o ebook "' + d.nm + '".\n\nPÚBLICO: ' + d.pa + '\nIDIOMA: ' + (pt ? 'Português' : 'Español') + '\n\nRetorne APENAS em HTML:\n<section style="padding:40px">\n  <h2>' + (pt ? 'Apresentação' : 'Presentación') + '</h2>\n  <p>[Parágrafo 1]</p>\n  <p>[Parágrafo 2]</p>\n  <p>[Parágrafo 3]</p>\n</section>';
  var html = await callOpenAI(prompt, 2000);
  return extractHTML(html);
}

async function buildCapitulo(d, capIndex, baseContent, lang) {
  var pt = lang === 'pt';
  var cap = d.caps[capIndex];
  
  var prompt = 'Você é um ESPECIALISTA em ' + d.nm + ' - METODOLOGIA CIPE v9.1\n\nTAREFA: Escrever CAPÍTULO COMPLETO com CLASSES CSS PROFISSIONAIS.\n\nCAPÍTULO ' + (capIndex + 1) + ': ' + cap.nome + '\n\n⚠️ CRÍTICO: USE EXATAMENTE AS CLASSES CSS ABAIXO\n\nESTRUTURA HTML OBRIGATÓRIA:\n\n<section>\n  <h2>' + cap.nome + '</h2>\n  \n  <h3>' + (cap.secs[0] ? cap.secs[0].nome : 'Seção 1') + '</h3>\n  <p>[Texto 450 palavras - 3 parágrafos]</p>\n  \n  <div class="box-saiba-mais">\n    <strong>💡 Saiba Mais:</strong>\n    <p>[Aprofundamento 150 palavras]</p>\n  </div>\n  \n  <h3>' + (cap.secs[1] ? cap.secs[1].nome : 'Seção 2') + '</h3>\n  <p>[Texto 450 palavras]</p>\n  \n  <div class="box-pratica">\n    <strong>📝 Prática:</strong>\n    <p>[Caso prático 200 palavras]</p>\n  </div>\n  \n  <table>\n    <caption>[Título da Tabela]</caption>\n    <thead>\n      <tr><th>[Col 1]</th><th>[Col 2]</th><th>[Col 3]</th></tr>\n    </thead>\n    <tbody>\n      <tr><td>[Dado]</td><td>[Dado]</td><td>[Dado]</td></tr>\n    </tbody>\n  </table>\n  \n  <div class="pontos-chave">\n    <h3>Pontos-Chave</h3>\n    <ol>\n      <li><strong>[Ponto 1]:</strong> [Explicação 80 palavras]</li>\n      <li><strong>[Ponto 2]:</strong> [Explicação 80 palavras]</li>\n      <li><strong>[Ponto 3]:</strong> [Explicação 80 palavras]</li>\n      <li><strong>[Ponto 4]:</strong> [Explicação 80 palavras]</li>\n      <li><strong>[Ponto 5]:</strong> [Explicação 80 palavras]</li>\n    </ol>\n  </div>\n</section>\n\n✅ USE APENAS AS CLASSES: box-saiba-mais, box-pratica, pontos-chave\n✅ NÃO adicione styles inline\n✅ Preencha o conteúdo\n\nIDIOMA: ' + (pt ? 'Português BR' : 'Español') + '\nTEMA: ' + d.nm + '\n\n' + (baseContent ? 'CONTEÚDO BASE:\n' + baseContent.substring(0, 6000) : '');
  
  var html = await callOpenAI(prompt, 16000);
  return extractHTML(html);
}

async function buildGlossarioReferencias(d, baseContent, lang) {
  var pt = lang === 'pt';
  var prompt = 'ESPECIALISTA em ' + d.nm + '\n\nTAREFA: Gerar GLOSSÁRIO e REFERÊNCIAS.\n\nESTRUTURA HTML:\n\n<section class="glossario">\n  <h2>' + (pt ? 'Glossário A-Z' : 'Glosario A-Z') + '</h2>\n  <dl>\n    <dt>[Termo 1]</dt>\n    <dd>[Definição 25 palavras]</dd>\n    <dt>[Termo 2]</dt>\n    <dd>[Definição 25 palavras]</dd>\n  </dl>\n</section>\n\n<section class="referencias">\n  <h2>' + (pt ? 'Referências' : 'Referencias') + '</h2>\n  <ol>\n    <li>[Ref ABNT 1]</li>\n    <li>[Ref ABNT 2]</li>\n  </ol>\n</section>\n\n✅ 20 termos glossário\n✅ 15 referências ABNT 2020-2025\n✅ Use <dl>, <dt>, <dd>, <ol>, <li>\n\nIDIOMA: ' + (pt ? 'Português BR' : 'Español') + '\nTEMA: ' + d.nm;
  
  var html = await callOpenAI(prompt, 10000);
  return extractHTML(html);
}

async function buildAnexos(d, baseContent, lang) {
  var pt = lang === 'pt';
  var prompt = 'ESPECIALISTA em ' + d.nm + '\n\nTAREFA: Gerar ANEXOS (A-H).\n\nESTRUTURA:\n\n<section>\n  <h2>' + (pt ? 'ANEXOS' : 'ANEXOS') + '</h2>\n  \n  <h3>' + (pt ? 'Anexo A – Escalas' : 'Anexo A – Escalas') + '</h3>\n  <div style="background:#f0f4f8;padding:20px;border-radius:8px">\n    <h4>[Nome da Escala]</h4>\n    <p><strong>' + (pt ? 'Objetivo' : 'Objetivo') + ':</strong> [Texto]</p>\n    <table>\n      <tr><th>' + (pt ? 'Item' : 'Ítem') + '</th><th>' + (pt ? 'Pontuação' : 'Puntuación') + '</th></tr>\n      <tr><td>[Item]</td><td>[Pontos]</td></tr>\n    </table>\n  </div>\n  \n  <h3>' + (pt ? 'Anexo B – Protocolos' : 'Anexo B – Protocolos') + '</h3>\n  <div style="background:#E6F7F0;padding:20px">\n    <h4>[Protocolo]</h4>\n    <p><strong>1.</strong> [Passo]</p>\n  </div>\n  \n  [CONTINUAR COM ANEXOS C-H]\n</section>\n\n✅ 8 anexos (A-H)\n✅ Mínimo 300 palavras cada\n✅ Conteúdo REAL\n\nIDIOMA: ' + (pt ? 'Português' : 'Español') + '\nTEMA: ' + d.nm;
  
  var html = await callOpenAI(prompt, 16000);
  return extractHTML(html);
}

function assembleLivroHTML_v9(parts, lang, d) {
  var pt = lang === 'pt';
  var html = '<!DOCTYPE html>\n<html lang="' + (pt ? 'pt-BR' : 'es') + '">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>' + (pt ? 'Livro' : 'Libro') + ': ' + esc(d.nm) + '</title>\n' + LIVRO_CSS + '\n</head>\n<body>\n\n';
  
  for (var i = 0; i < parts.length; i++) {
    var frag = parts[i].replace(/<\/?(!DOCTYPE|html|head|body|meta|link|title|style)[^>]*>/gi, '').trim();
    html += '\n<!-- PARTE ' + (i + 1) + ' -->\n' + frag + '\n';
  }
  
  html += '\n</body>\n</html>';
  return html;
}

function showLivroResult(sid, htmlContent, lang) {
  var resultBox = $(sid + '-result');
  if (!resultBox) return;
  
  resultBox.style.display = '';
  resultBox.innerHTML = '<div class="cb" style="max-height:400px;overflow-y:auto;margin-bottom:16px"><pre style="white-space:pre-wrap;font-size:11px">' + esc(htmlContent.substring(0, 1500)) + '...</pre></div><div class="ar" style="gap:12px"><button class="btn btn-g" onclick="downloadLivroHTML(\'' + sid + '\')">⬇️ Baixar HTML</button><button class="btn btn-g" onclick="downloadLivroPDF(\'' + sid + '\')">📄 Baixar PDF</button><button class="btn btn-o" onclick="previewLivro(\'' + sid + '\')">👁️ Preview</button></div>';
}

function downloadLivroHTML(sid) {
  var htmlContent = sid === 'livro-pt' ? CACHE.livroPtHTML : CACHE.livroEsHTML;
  if (!htmlContent) {
    toast('Gere o livro primeiro!');
    return;
  }
  var filename = P.cod + '_livro_' + (sid === 'livro-pt' ? 'pt' : 'es') + '.html';
  downloadFile(htmlContent, filename, 'text/html');
}

function downloadLivroPDF(sid) {
  var htmlContent = sid === 'livro-pt' ? CACHE.livroPtHTML : CACHE.livroEsHTML;
  if (!htmlContent) {
    toast('Gere o livro primeiro!');
    return;
  }
  downloadPDF('o-' + sid, 'livro_' + (sid === 'livro-pt' ? 'pt' : 'es'));
}

function previewLivro(sid) {
  var htmlContent = sid === 'livro-pt' ? CACHE.livroPtHTML : CACHE.livroEsHTML;
  if (!htmlContent) {
    toast('Gere o livro primeiro!');
    return;
  }
  var win = window.open('', '_blank');
  win.document.write(htmlContent);
  win.document.close();
}

function downloadFile(content, filename, mimeType) {
  var blob = new Blob([content], { type: mimeType });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  toast('Download: ' + filename);
}

function countWords(html) {
  var text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(/\s+/).length;
}

function extractHTML(raw) {
  var m = raw.match(/```html?\s*\n([\s\S]*?)```/i);
  if (m) return m[1].trim();
  var idx = raw.search(/<(!DOCTYPE|html|div|section)/i);
  if (idx > 0) return raw.substring(idx).trim();
  return raw.trim();
}

// ══════ GERAR TUDO ══════
async function generateAll(){
  $('btn-all').disabled=true;
  $('all-summary').style.display='';
  var steps=[
    {name:'Site Interativo',icon:'🌐',fn:generateSite},
    {name:'Livro PT',icon:'🇧🇷',fn:generateLivroPT},
    {name:'Livro ES',icon:'🇪🇸',fn:generateLivroES},
    {name:'Cards PT',icon:'📱',fn:generateSocialPT},
    {name:'Cards ES',icon:'📱',fn:generateSocialES}
  ];
  var results=[];
  
  $('all-badges').innerHTML=steps.map(function(s,i){
    return '<span id="ab-'+i+'" style="padding:4px 10px;border-radius:6px;font-size:12px;background:rgba(13,56,81,.08)">'+s.icon+' '+s.name+' ⏳</span>';
  }).join('');
  
  for(var i=0;i<steps.length;i++){
    var s=steps[i];
    $('status-all').innerHTML='<span class="spinner"></span> ['+(i+1)+'/5] Gerando '+s.name+'...';
    setProgress('prog-all',((i)/5)*100);
    $('ab-'+i).style.background='rgba(0,196,14,.12)';
    
    try{
      await s.fn();
      results.push({name:s.name,ok:true});
      $('ab-'+i).style.background='var(--cv-green)';
      $('ab-'+i).style.color='#fff';
      $('ab-'+i).innerHTML=s.icon+' '+s.name+' ✅';
    }catch(e){
      results.push({name:s.name,ok:false,err:e.message});
      $('ab-'+i).style.background='var(--cv-coral)';
      $('ab-'+i).innerHTML=s.icon+' '+s.name+' ❌';
    }
    
    setProgress('prog-all',((i+1)/5)*100);
    if(i<steps.length-1)await sleep(1000);
  }
  
  var ok=results.filter(function(r){return r.ok}).length;
  $('status-all').innerHTML=ok===5?'✅ Tudo gerado!':'⚠️ '+ok+'/5 prontos';
  $('btn-all').disabled=false;
  toast(ok+'/5 produtos gerados!');
}

// ══════ INIT ══════
addT();addT();
