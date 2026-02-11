// ══════════════════════════════════════════════════════════
// SISTEMA UNIFICADO v8.0 — PROXY SEGURO NETLIFY
// ══════════════════════════════════════════════════════════
// 
// MUDANÇAS v7.0 → v8.0:
// ✅ Chave API agora protegida no backend (Netlify Function)
// ✅ Não precisa mais digitar chave no navegador
// ✅ Detecção automática de ambiente (local vs produção)
// ✅ Melhor tratamento de erros
//
// ══════════════════════════════════════════════════════════

let cur=0,maxU=0,tc=0,P=null,contentParts=[],fullContent='',generating=false,sourceMode='doc',docText='',lastPrompts=[];
let CACHE={siteJSON:null,siteHTML:null,livroPtParts:null};
function clearCache(){CACHE={siteJSON:null,siteHTML:null,livroPtParts=null}}

// ══════════════════════════════════════════════════════════
// CSS PROFISSIONAL INLINE v9.1
// ══════════════════════════════════════════════════════════

const LIVRO_CSS = `<style>:root{--blue-dark:#0D3851;--blue:#194A6D;--green:#0D8C5E;--green-light:#10A068;--green-pale:#E6F7F0;--cream:#F7F5F0;--gold:#C8A96E;--coral:#F28B6C;--text-dark:#1A1A1A;--text-medium:#4A4A4A;--text-light:#6B6B6B}*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Source Sans 3',-apple-system,sans-serif;font-size:11pt;line-height:1.75;color:var(--text-dark);max-width:210mm;margin:0 auto;padding:40px;-webkit-font-smoothing:antialiased}.capa{min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;padding:64px 40px;background:linear-gradient(135deg,var(--blue-dark) 0%,var(--blue) 100%);color:white;border-radius:12px;box-shadow:0 8px 32px rgba(13,56,81,0.16);position:relative;overflow:hidden;page-break-after:always}.capa::before{content:'';position:absolute;top:-50%;right:-20%;width:600px;height:600px;background:radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 70%);border-radius:50%}.capa-header,.capa-main,.capa-footer{position:relative;z-index:1}.capa-logo{width:120px;margin-bottom:24px;filter:brightness(0) invert(1)}.capa-categoria{font-size:10pt;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:var(--green-light);margin-bottom:16px}.capa-titulo{font-family:'Playfair Display',Georgia,serif;font-size:42pt;font-weight:700;line-height:1.2;margin-bottom:24px;text-shadow:0 2px 12px rgba(0,0,0,0.3)}.capa-subtitulo{font-size:14pt;font-weight:300;line-height:1.6;color:rgba(255,255,255,0.9);max-width:80%;margin-bottom:40px}.capa-badges{display:flex;gap:16px;flex-wrap:wrap;margin:40px 0}.capa-badge{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);border-radius:100px;font-size:10pt;font-weight:500}.capa-footer{display:flex;justify-content:space-between;align-items:flex-end;padding-top:40px;border-top:1px solid rgba(255,255,255,0.2);margin-top:40px}.capa-instituicao{font-size:10pt;font-weight:600;opacity:0.9}.capa-ano{font-size:24pt;font-weight:700;font-family:'Playfair Display',serif}h1,h2,h3,h4{font-family:'Playfair Display',serif;font-weight:700;color:var(--blue-dark);margin-top:40px;margin-bottom:24px;line-height:1.3;page-break-after:avoid}h1{font-size:32pt;margin-top:64px;padding-bottom:16px;border-bottom:4px solid var(--green)}h2{font-size:24pt;color:var(--blue);margin-top:64px;padding-left:16px;border-left:6px solid var(--green-light)}h3{font-size:18pt;color:var(--blue);margin-top:40px}h4{font-size:14pt;font-weight:600;color:var(--text-dark);margin-top:24px}p{margin-bottom:24px;text-align:justify;orphans:3;widows:3}p:first-of-type::first-letter{font-size:3em;line-height:0.9;float:left;margin:0.1em 0.1em 0 0;font-family:'Playfair Display',serif;font-weight:700;color:var(--green)}strong{font-weight:600;color:var(--text-dark)}em{font-style:italic;color:var(--text-medium)}.box-saiba-mais,.box-pratica,.box-alerta{margin:40px 0;padding:24px;border-radius:12px;page-break-inside:avoid;position:relative;box-shadow:0 2px 8px rgba(13,56,81,0.08);padding-left:64px}.box-saiba-mais{background:linear-gradient(135deg,#E6F7F0 0%,#F0FAF5 100%);border-left:6px solid var(--green)}.box-saiba-mais::before{content:'💡';position:absolute;left:24px;top:24px;font-size:24pt}.box-saiba-mais strong{display:block;font-size:12pt;color:var(--green);font-weight:700;margin-bottom:16px}.box-pratica{background:linear-gradient(135deg,#FFF8E1 0%,#FFFBF0 100%);border-left:6px solid var(--gold)}.box-pratica::before{content:'📝';position:absolute;left:24px;top:24px;font-size:24pt}.box-pratica strong{display:block;font-size:12pt;color:var(--gold);font-weight:700;margin-bottom:16px}.box-alerta{background:linear-gradient(135deg,#FFF0F0 0%,#FFF5F5 100%);border-left:6px solid var(--coral)}.box-alerta::before{content:'⚠️';position:absolute;left:24px;top:24px;font-size:24pt}.box-alerta strong{display:block;font-size:12pt;color:var(--coral);font-weight:700;margin-bottom:16px}table{width:100%;margin:40px 0;border-collapse:separate;border-spacing:0;font-size:10pt;page-break-inside:avoid;box-shadow:0 2px 8px rgba(13,56,81,0.08);border-radius:12px;overflow:hidden}caption{font-size:11pt;font-weight:600;color:var(--text-dark);text-align:left;margin-bottom:16px;padding-left:16px}thead{background:linear-gradient(135deg,var(--blue-dark) 0%,var(--blue) 100%);color:white}thead th{padding:14px 16px;text-align:left;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;font-size:9pt;border-bottom:3px solid var(--green)}tbody tr:nth-child(odd){background:var(--cream)}tbody tr:nth-child(even){background:white}tbody tr:hover{background:var(--green-pale)}tbody td{padding:12px 16px;border-bottom:1px solid rgba(13,56,81,0.1);color:var(--text-medium)}tbody td:first-child{font-weight:600;color:var(--text-dark)}.pontos-chave{margin:64px 0;padding:40px;background:linear-gradient(135deg,#F0F4F8 0%,#F7F9FB 100%);border-radius:16px;border:2px solid var(--blue);box-shadow:0 4px 16px rgba(13,56,81,0.12);page-break-inside:avoid}.pontos-chave h3{font-size:16pt;color:var(--blue-dark);margin-top:0;margin-bottom:24px;display:flex;align-items:center;gap:16px}.pontos-chave h3::before{content:'🎯';font-size:20pt}.pontos-chave ol{counter-reset:ponto-counter;list-style:none;padding:0}.pontos-chave li{counter-increment:ponto-counter;margin-bottom:24px;padding-left:60px;position:relative;line-height:1.7}.pontos-chave li::before{content:counter(ponto-counter);position:absolute;left:0;top:0;width:40px;height:40px;background:linear-gradient(135deg,var(--green) 0%,var(--green-light) 100%);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16pt;font-family:'Playfair Display',serif;box-shadow:0 2px 8px rgba(13,140,94,0.3)}.pontos-chave strong{display:block;color:var(--blue-dark);margin-bottom:4px;font-size:11pt}ul,ol{margin:24px 0;padding-left:40px}li{margin-bottom:16px;line-height:1.7}ul li::marker{color:var(--green);font-size:1.2em}ol li::marker{color:var(--blue);font-weight:700}.glossario{page-break-before:always;background:var(--cream);padding:40px;border-radius:16px}.glossario h2{text-align:center;margin-bottom:64px;color:var(--blue-dark);border-bottom:4px solid var(--green);padding-bottom:24px}.glossario dl{column-count:2;column-gap:40px;margin:0}.glossario dt{font-family:'Playfair Display',serif;font-size:13pt;font-weight:700;color:var(--blue-dark);margin-top:24px;break-after:avoid}.glossario dd{margin-left:0;margin-bottom:24px;padding-left:16px;border-left:3px solid var(--green-light);color:var(--text-medium);line-height:1.7}.referencias{page-break-before:always;padding:40px}.referencias h2{margin-bottom:40px}.referencias ol{list-style:none;counter-reset:ref-counter;padding:0}.referencias li{counter-increment:ref-counter;margin-bottom:24px;padding-left:40px;position:relative;font-size:10pt;line-height:1.6;color:var(--text-medium);text-align:justify}.referencias li::before{content:counter(ref-counter);position:absolute;left:0;top:0;font-weight:700;color:var(--blue);font-size:11pt}.media-placeholder{margin:40px 0;padding:64px;background:linear-gradient(135deg,#F0F4F8 0%,#E6EBF0 100%);border:2px dashed var(--blue);border-radius:16px;text-align:center;color:var(--text-light);page-break-inside:avoid}.media-placeholder p{margin:0;font-size:12pt}@media print{body{font-size:10pt;line-height:1.6}h1{font-size:24pt}h2{font-size:18pt}h3{font-size:14pt}.box-saiba-mais,.box-pratica,.box-alerta,.pontos-chave,table{box-shadow:none}a{color:var(--text-dark);text-decoration:none}}@media screen and (max-width:768px){body{padding:24px;font-size:10pt}.capa-titulo{font-size:28pt}.glossario dl{column-count:1}h1{font-size:24pt}h2{font-size:18pt}h3{font-size:14pt}}</style><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet">`;

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
      if(typeof pdfjsLib==='undefined'){status.textContent='pdf.js nao carregou';status.style.color='var(--cv-coral)';return}
      var ab=await file.arrayBuffer(),pdf=await pdfjsLib.getDocument({data:ab}).promise;
      for(var i=1;i<=pdf.numPages;i++){var pg=await pdf.getPage(i),ct=await pg.getTextContent();text+=ct.items.map(function(x){return x.str}).join(' ')+'\n\n'}
      text=text.trim()
    }else if(ext==='docx'){
      if(typeof mammoth==='undefined'){status.textContent='mammoth.js nao carregou';status.style.color='var(--cv-coral)';return}
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
// ✨ NOVA VERSÃO v8.0 — PROXY SEGURO NETLIFY
// ══════════════════════════════════════════════════════════

/**
 * Detecta automaticamente se está em produção (Netlify) ou local
 */
function getAPIEndpoint() {
  // Se estiver no Netlify em produção
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return '/.netlify/functions/openai-proxy';
  }
  
  // Para testes locais com Netlify Dev (netlify dev)
  if (window.location.port === '8888') {
    return '/.netlify/functions/openai-proxy';
  }
  
  // Fallback: ainda permite uso direto da API se em desenvolvimento
  // (remover este bloco em produção final)
  return 'DIRECT_API'; 
}

/**
 * NÃO precisa mais de chave no formulário!
 * Esta função agora retorna vazio (compatibilidade com código existente)
 */
function getKey() {
  // v8.0: Chave protegida no backend
  return '';
}

function getModel() {
  return $('f_model').value || 'gpt-4o';
}

var API_TEMP = 0.3;

/**
 * FUNÇÃO PRINCIPAL: callOpenAI
 * Agora chama a Netlify Function ao invés da API direta
 */
async function callOpenAI(prompt, maxTk) {
  maxTk = maxTk || 16000;
  
  var endpoint = getAPIEndpoint();
  
  // Preparar mensagens
  var msgs = [{ role: 'user', content: prompt }];
  
  var response;
  var data;
  
  // ────────────────────────────────────────────────────────
  // MODO PRODUÇÃO: Netlify Function
  // ────────────────────────────────────────────────────────
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
      
      // Tratar erros da function
      if (!response.ok) {
        var errorMsg = data.error || 'Erro desconhecido';
        var errorCode = data.code || 'UNKNOWN';
        
        // Mapear códigos de erro para mensagens amigáveis
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
      // Erro de rede ou fetch
      if (error.message.includes('Servidor não configurado') || 
          error.message.includes('Créditos')) {
        throw error;
      }
      throw new Error('Erro de conexão: ' + error.message);
    }
  } 
  // ────────────────────────────────────────────────────────
  // MODO FALLBACK: API Direta (apenas para desenvolvimento)
  // ────────────────────────────────────────────────────────
  else {
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
  
  // ────────────────────────────────────────────────────────
  // PROCESSAR RESPOSTA (comum para ambos os modos)
  // ────────────────────────────────────────────────────────
  var text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
  var fin = (data.choices && data.choices[0] && data.choices[0].finish_reason) || 'stop';
  
  // Continuação automática se finish_reason = 'length'
  var retries = 0;
  while (fin === 'length' && retries < 3) {
    retries++;
    msgs.push(
      { role: 'assistant', content: text },
      { role: 'user', content: 'Continue exatamente de onde parou. Nao repita.' }
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

var CORES='Paleta: azul-escuro:#0D3851 azul:#194A6D azul-claro:#2A6A8F verde:#0D8C5E verde-palido:#E6F7F0 creme:#F7F5F0 branco:#FFF dourado:#C8A96E coral:#F28B6C texto:#2C2C2C';
var REGRAS='REGRAS:\n- NUNCA "Unidade/Tema/Subtopico" — usar Capitulo/Secao\n- NUNCA numeracao academica\n- NUNCA instituicoes — white-label\n- Conteudo REAL nunca placeholders\n- NUNCA invente DOIs\n- Marque com [CITE: "conceito"] onde necessario';

// ══════ STEP 1: CONTEUDO (igual v5) ══════
async function startGeneration(){
  var d=collect();
  if(!getKey()){toast('Insira chave API.');return}
  if(!d.nm||d.nm.length<5){toast('Titulo minimo 5 chars.');return}
  if(!d.pa||d.pa.length<5){toast('Publico-alvo minimo 5 chars.');return}
  if(!d.caps.length){toast('Adicione 1+ capitulo.');return}
  var erros=[];d.caps.forEach(function(c,ci){if(!c.nome||c.nome.length<3)erros.push('Cap.'+(ci+1)+': titulo vazio');if(!c.secs.length)erros.push('Cap.'+(ci+1)+': sem secoes');c.secs.forEach(function(s,si){if(!s.nome||s.nome.length<3)erros.push('Cap.'+(ci+1)+' Sec.'+(si+1)+': titulo vazio');if(!s.det||s.det.length<10)erros.push('Cap.'+(ci+1)+' Sec.'+(si+1)+': descricao curta')})});
  if(erros.length>0){toast(erros[0]);alert('Problemas:\n\n'+erros.join('\n'));return}
  if(sourceMode==='doc'){docText=$('f_doctext').value.trim();if(docText.length<200){toast('Documento minimo 200 chars.');return}}
  P=d;contentParts=[];fullContent='';generating=true;clearCache();
  $('btnStart').disabled=true;ul(1);go(1);
  var container=$('gen-results');container.innerHTML='';$('approve1').classList.add('hidden');
  var prompts=sourceMode==='doc'?buildSegmentedDoc(d,docText):buildSegmented(d);
  lastPrompts=prompts;var total=prompts.length;
  for(var i=0;i<total;i++){
    var label=i<total-1?'Cap. '+(i+1)+': '+(d.caps[i]?d.caps[i].nome:''):'Glossario + Quiz';
    setStatus('status1','<span class="spinner"></span> '+(sourceMode==='doc'?'Transformando':'Gerando')+' '+label+' ('+(i+1)+'/'+total+')...');
    setProgress('prog1',(i/total)*100);
    container.innerHTML+='<div class="result-card" id="rc'+i+'"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><span class="badge badge-t">'+esc(label)+'</span><span class="gen-status" id="rs'+i+'"><span class="spinner"></span></span></div><div class="cb" id="ro'+i+'" style="max-height:250px">Aguardando...</div></div>';
    try{var result=await callOpenAI(prompts[i]);contentParts[i]=result;$('ro'+i).textContent=result;$('rs'+i).innerHTML='<span style="color:var(--cv-green)">'+result.split(/\s+/).length.toLocaleString('pt-BR')+' pal</span>'}
    catch(e){$('ro'+i).textContent='ERRO: '+e.message;$('rs'+i).innerHTML='<span style="color:var(--cv-coral)">Erro</span>';setStatus('status1','Erro: '+e.message);generating=false;$('btnStart').disabled=false;$('approve1').classList.remove('hidden');return}
    setProgress('prog1',((i+1)/total)*100);if(i<total-1)await sleep(1500);
  }
  fullContent=contentParts.filter(Boolean).join('\n\n---\n\n');
  if(sourceMode==='doc'){
    var gaps=fullContent.match(/\[COMPLEMENTAR:\s*([^\]]+)\]/gi)||[];
    if(gaps.length>0){
      setStatus('status1','<span class="spinner"></span> '+gaps.length+' lacunas...');
      var topics=[...new Set(gaps.map(function(g){return g.replace(/\[COMPLEMENTAR:\s*/i,'').replace(/\]/,'')}))];
      try{var cr=await callOpenAI('Especialista nivel '+P.nv+'. Tema: "'+P.nm+'".\nComplementar lacunas. 300+/topico. PT-BR.\n'+REGRAS+getFeedbackRules()+'\nTOPICOS:\n'+topics.map(function(t,i){return(i+1)+'. '+t}).join('\n'));
        fullContent+='\n\n=== COMPLEMENTADO ===\n\n'+cr;fullContent=fullContent.replace(/\[COMPLEMENTAR:\s*([^\]]+)\]/gi,'[Complementado: $1]');}catch(e){}
    }
  }
  setStatus('status1',fullContent.split(/\s+/).length.toLocaleString('pt-BR')+' palavras.');setProgress('prog1',100);
  $('approve1').classList.remove('hidden');generating=false;$('btnStart').disabled=false;
}
async function regenLast(){if(!lastPrompts.length)return;var idx=contentParts.length-1;setStatus('status1','<span class="spinner"></span> Regenerando...');try{var r=await callOpenAI(lastPrompts[idx]);contentParts[idx]=r;if($('ro'+idx))$('ro'+idx).textContent=r;fullContent=contentParts.filter(Boolean).join('\n\n---\n\n');setStatus('status1','Regenerado!');toast('OK!')}catch(e){setStatus('status1','Erro: '+e.message)}}
function manualEdit(){$('manual-edit-box').style.display='';$('f_manual').value=contentParts.filter(Boolean).join('\n\n---\n\n')}
function approveManual(){fullContent=$('f_manual').value;$('manual-edit-box').style.display='none';approveContent()}
async function approveContent(){
  if(!fullContent){toast('Sem conteudo.');return}
  var cites=detectCites(fullContent);if(cites.length>0){showRefsPanel(cites);return}
  ul(2);go(2);// Vai para o painel de entregas, NÃO gera nada automaticamente
}
// REFS
function detectCites(text){var re=/\[CITE:\s*"([^"]+)"\]/gi,matches=[],m,seen={};while((m=re.exec(text))!==null){var t=m[1].trim(),k=t.toLowerCase();if(!seen[k]){seen[k]=true;matches.push({marker:m[0],topic:t})}}return matches}
function showRefsPanel(cites){$('refs-panel').style.display='';$('refs-count').innerHTML='<span style="color:var(--cv-gold)">'+cites.length+'</span>';var list=$('refs-list');list.innerHTML='';cites.forEach(function(c,i){var q=encodeURIComponent(c.topic);list.innerHTML+='<div class="ref-item" id="ref-'+i+'"><div class="ref-cite">#'+(i+1)+': '+esc(c.topic)+'</div><div class="ref-links"><a href="https://pubmed.ncbi.nlm.nih.gov/?term='+q+'&filter=dates.2020-2025" target="_blank">PubMed</a> <a href="https://scholar.google.com/scholar?q='+q+'&as_ylo=2020" target="_blank">Scholar</a></div><input type="text" class="ref-input" id="ref-input-'+i+'" placeholder="Cole ref ABNT" data-marker="'+esc(c.marker)+'"></div>'});window._pendingCites=cites}
function applyRefs(){var cites=window._pendingCites||[],used=[];cites.forEach(function(c,i){var v=$('ref-input-'+i);var t=v?v.value.trim():'';if(t){used.push(t);fullContent=fullContent.split(c.marker).join('(Ref. '+used.length+')')}else{fullContent=fullContent.split(c.marker).join('')}});if(used.length){var rt='\n\n=== REFERENCIAS ===\n';used.forEach(function(r,i){rt+=(i+1)+'. '+r+'\n'});fullContent+=rt}$('refs-panel').style.display='none';toast(used.length+' refs!');ul(2);go(2)}
function skipRefs(){fullContent=fullContent.replace(/\[CITE:\s*"[^"]*"\]/gi,'');$('refs-panel').style.display='none';ul(2);go(2)}
async function autoSearchRefs(){var cites=window._pendingCites||[];if(!cites.length||!getKey())return;setStatus('status1','<span class="spinner"></span> Buscando refs...');try{var raw=await callOpenAI('Bibliotecario saude.\n1 ref REAL ABNT 2020-2025/topico. Se incerto: "NAO_ENCONTRADA".\nJSON: {"refs":["ref1"]}\nTOPICOS:\n'+cites.map(function(c,i){return(i+1)+'. '+c.topic}).join('\n'),4000);var p=parseJSON(raw);if(p&&p.refs){p.refs.forEach(function(ref,i){var inp=$('ref-input-'+i);if(inp&&ref&&ref!=='NAO_ENCONTRADA')inp.value=ref});toast('Refs sugeridas.')}}catch(e){toast('Erro: '+e.message)}}

// ══════ STEP 2: ENTREGAS INDEPENDENTES ══════

// === SITE — Fragmentado + Paralelo + Validação ===
async function generateSite(){
  var sid='site';setProgress('prog-'+sid,5);$('site-result').style.display='none';$('btn-site').disabled=true;
  var c=fullContent;if(c.length>80000){c=c.substring(0,80000);toast('Truncado 80k.')}
  try{
    // PASSO 1: Capítulos PT
    setStatus('status-'+sid,'<span class="spinner"></span> [1/6] Capitulos PT...');
    var capRaw=await callOpenAI(buildCapitulosPrompt(P,c));
    var capData=parseJSON(capRaw);
    if(!capData||!capData.sections){capRaw=await callOpenAI(buildCapitulosPrompt(P,c));capData=parseJSON(capRaw)}
    if(!capData||!capData.sections)throw new Error('Capitulos: JSON invalido');
    setProgress('prog-'+sid,18);

    // PASSO 2: PARALELO — Diagnóstica + Quiz + Glossário ao mesmo tempo
    setStatus('status-'+sid,'<span class="spinner"></span> [2/6] Diagnostica + Quiz + Glossario (paralelo)...');
    var [diagResult,quizResult,glossResult]=await Promise.allSettled([
      callOpenAI(buildDiagPrompt(P,c),2000),
      callOpenAI(buildQuizPrompt(P,c),4000),
      callOpenAI(buildGlossPrompt(P,c),3000)
    ]);
    var diagData=diagResult.status==='fulfilled'?parseJSON(diagResult.value):null;
    var quizData=quizResult.status==='fulfilled'?parseJSON(quizResult.value):null;
    var glossData=glossResult.status==='fulfilled'?parseJSON(glossResult.value):null;
    setProgress('prog-'+sid,45);

    // Montar PT
    var fullPT={intro:capData.intro||{pt:''},sections:capData.sections||[],diagnostica:(diagData&&diagData.diagnostica)||[],quiz:(quizData&&quizData.quiz)||[],glossario:(glossData&&glossData.glossario)||[],referencias:capData.referencias||[]};
    fullPT=validateSiteData(fullPT);

    // PASSO 3: REPAROS PARALELOS
    setStatus('status-'+sid,'<span class="spinner"></span> [3/6] Reparos automaticos...');
    var repairs=[];
    if(fullPT.quiz.length<10){
      var need=10-fullPT.quiz.length;var eQs=fullPT.quiz.map(function(q){return q.pergunta_pt||''}).join('; ').substring(0,500);
      repairs.push(callOpenAI('Titulo: "'+P.nm+'". Crie '+need+' questoes quiz PT-BR. NAO repita: '+eQs+'\n4 alt, 1 correta.\nJSON:{"quiz":[{"pergunta_pt":"?","opcoes":[{"pt":"A"},{"pt":"B"},{"pt":"C"},{"pt":"D"}],"correta":"a"}]}\nAPENAS JSON.\nCONTEUDO:\n'+c.substring(0,15000),3000).then(function(r){var d=parseJSON(r);if(d&&d.quiz)fullPT.quiz=fullPT.quiz.concat(d.quiz)}).catch(function(){}));
    }
    if(fullPT.diagnostica.length<5){
      var needD=5-fullPT.diagnostica.length;
      repairs.push(callOpenAI('Titulo: "'+P.nm+'". Crie '+needD+' diagnosticas PT-BR. Opcoes: Sim/Parcialmente/Nao.\nJSON:{"diagnostica":[{"pergunta_pt":"?"}]}\nAPENAS JSON.',2000).then(function(r){var d=parseJSON(r);if(d&&d.diagnostica)fullPT.diagnostica=fullPT.diagnostica.concat(d.diagnostica)}).catch(function(){}));
    }
    for(var si=0;si<fullPT.sections.length;si++){
      (function(idx){var sec=fullPT.sections[idx];
      if(!sec.componentes||sec.componentes.length<3){
        repairs.push(callOpenAI('Cap "'+( sec.titulo_pt||'')+'".\n5 comp PT-BR: pilula, flashcards(3), red-flags, caso-clinico, estudo-de-caso.\nJSON:{"componentes":[{"tipo":"pilula","pergunta_pt":"?","resposta_pt":""},{"tipo":"flashcards","cards":[{"frente_pt":"","verso_pt":""}]},{"tipo":"red-flags","items_pt":[""]},{"tipo":"caso-clinico","titulo_pt":"","texto_pt":""},{"tipo":"estudo-de-caso","titulo_pt":"","narrativa_pt":"(min 150 pal)","questoes_pt":["Q1?","Q2?","Q3?"],"analise_pt":"(min 200 pal)"}]}\nAPENAS JSON.\nCONTEUDO:\n'+c.substring(0,12000),6000).then(function(r){var d=parseJSON(r);if(d&&d.componentes)sec.componentes=(sec.componentes||[]).concat(d.componentes)}).catch(function(){}));
      }})(si);
    }
    if(repairs.length>0)await Promise.allSettled(repairs);
    setProgress('prog-'+sid,60);

    // PASSO 4: Tradução ES
    setStatus('status-'+sid,'<span class="spinner"></span> [4/6] Traduzindo ES...');
    var transRaw=await callOpenAI(buildTranslatePrompt(fullPT));
    var transData=parseJSON(transRaw);
    if(!transData){transRaw=await callOpenAI(buildTranslatePrompt(fullPT));transData=parseJSON(transRaw)}
    if(transData)fullPT=mergeTranslation(fullPT,transData);
    setProgress('prog-'+sid,78);

    // PASSO 5: VALIDAÇÃO DE QUALIDADE RIGOROSA (1 tentativa max por issue)
    setStatus('status-'+sid,'<span class="spinner"></span> [5/6] Validacao rigorosa...');
    var qualityIssues=validateQuality(fullPT);
    var repaired=0;
    if(qualityIssues.length>0){
      setStatus('status-'+sid,'<span class="spinner"></span> [5/6] Reparando '+qualityIssues.length+' problemas (1 tentativa cada)...');
      var repairPromises=[];
      
      qualityIssues.forEach(function(issue){
        if(issue.type==='short_text'&&issue.secIdx!==undefined){
          repairPromises.push(callOpenAI('Expanda este texto educacional para minimo 400 palavras. Nivel mestrado. PT-BR.\nTitulo: "'+fullPT.sections[issue.secIdx].titulo_pt+'"\nTexto atual:\n'+(fullPT.sections[issue.secIdx].texto_pt||'')+'\n\nRetorne APENAS o texto expandido.',8000).then(function(r){
            if(r.split(/\s+/).length>200){fullPT.sections[issue.secIdx].texto_pt=r.trim();repaired++}
          }).catch(function(){}));
        }
        if(issue.type==='few_flashcards'&&issue.secIdx!==undefined){
          var sec=fullPT.sections[issue.secIdx];
          repairPromises.push(callOpenAI('Crie 3 flashcards educacionais PT-BR sobre "'+( sec.titulo_pt||'')+'"\nJSON:{"cards":[{"frente_pt":"pergunta","verso_pt":"resposta"}]}\nAPENAS JSON. 3 cards.',2000).then(function(r){
            var d=parseJSON(r);if(d&&d.cards){
              var comp=(sec.componentes||[]).find(function(c){return c.tipo==='flashcards'||c.tipo==='flashcard'});
              if(comp){comp.cards=(comp.cards||[]).concat(d.cards)}
              else{sec.componentes=(sec.componentes||[]);sec.componentes.push({tipo:'flashcards',cards:d.cards})}
              repaired++;
            }
          }).catch(function(){}));
        }
        if(issue.type==='few_redflags'&&issue.secIdx!==undefined){
          var secRF=fullPT.sections[issue.secIdx];
          repairPromises.push(callOpenAI('Liste 4 red-flags (sinais de alerta) PT-BR sobre "'+(secRF.titulo_pt||'')+'"\nJSON:{"items":["flag1","flag2","flag3","flag4"]}\nAPENAS JSON.',1500).then(function(r){
            var d=parseJSON(r);if(d&&d.items){
              var comp=(secRF.componentes||[]).find(function(c){return c.tipo==='red-flags'});
              if(comp){comp.items_pt=(comp.items_pt||[]).concat(d.items)}
              else{secRF.componentes=(secRF.componentes||[]);secRF.componentes.push({tipo:'red-flags',items_pt:d.items})}
              repaired++;
            }
          }).catch(function(){}));
        }
        if(issue.type==='short_case'&&issue.secIdx!==undefined){
          var secCC=fullPT.sections[issue.secIdx];
          repairPromises.push(callOpenAI('Escreva 1 caso clinico educacional breve (80-120 palavras) PT-BR sobre "'+(secCC.titulo_pt||'')+'"\nRetorne APENAS o texto do caso.',2000).then(function(r){
            if(r.split(/\s+/).length>30){
              var comp=(secCC.componentes||[]).find(function(c){return c.tipo==='caso-clinico'});
              if(comp){comp.texto_pt=r.trim()}
              else{secCC.componentes=(secCC.componentes||[]);secCC.componentes.push({tipo:'caso-clinico',titulo_pt:'Caso Clinico',texto_pt:r.trim()})}
              repaired++;
            }
          }).catch(function(){}));
        }
        if(issue.type==='missing_estudo_caso'&&issue.secIdx!==undefined){
          var secEC=fullPT.sections[issue.secIdx];
          repairPromises.push(callOpenAI('Crie 1 estudo de caso interativo PT-BR sobre "'+(secEC.titulo_pt||'')+'"\nJSON:{"tipo":"estudo-de-caso","titulo_pt":"Titulo","narrativa_pt":"Narrativa detalhada min 150 palavras com personagens contexto e problema","questoes_pt":["Questao 1?","Questao 2?","Questao 3?"],"analise_pt":"Analise especializada min 200 palavras com melhores praticas e solucoes"}\nAPENAS JSON.',4000).then(function(r){
            var d=parseJSON(r);if(d&&d.narrativa_pt){
              secEC.componentes=(secEC.componentes||[]);secEC.componentes.push(d);
              repaired++;
            }
          }).catch(function(){}));
        }
      });
      
      // Executar todos os reparos em PARALELO (1 tentativa cada, sem loop)
      if(repairPromises.length>0)await Promise.allSettled(repairPromises);
    }
    // Re-validar para estatísticas finais (sem reparar de novo)
    var finalIssues=validateQuality(fullPT);
    setProgress('prog-'+sid,90);

    // PASSO 6: Montagem
    setStatus('status-'+sid,'<span class="spinner"></span> [6/6] Montando HTML...');
    CACHE.siteJSON=fullPT;
    var html=assembleSiteHTML(fullPT,P.nm,P);CACHE.siteHTML=html;
    $('o-site').textContent=html;
    var w=fullPT._warnings||[];
    $('sr-site').innerHTML='<div class="st"><span class="st-l">Chars</span><span class="st-v">'+html.length.toLocaleString('pt-BR')+'</span></div><div class="st"><span class="st-l">Comp.</span><span class="st-v">'+countComponents(fullPT)+'</span></div><div class="st"><span class="st-l">Quiz</span><span class="st-v"'+(fullPT.quiz.length<10?' style="color:var(--cv-coral)"':'')+'>'+fullPT.quiz.length+'/10</span></div><div class="st"><span class="st-l">Diag.</span><span class="st-v"'+(fullPT.diagnostica.length<5?' style="color:var(--cv-coral)"':'')+'>'+fullPT.diagnostica.length+'/5</span></div><div class="st"><span class="st-l">Gloss.</span><span class="st-v">'+fullPT.glossario.length+'</span></div><div class="st"><span class="st-l">Reparos</span><span class="st-v" style="color:var(--cv-green)">'+repaired+'</span></div><div class="st"><span class="st-l">Qualidade</span><span class="st-v"'+(finalIssues.length?' style="color:var(--cv-gold)"':'style="color:var(--cv-green)"')+'>'+(!finalIssues.length?'✅ Perfeito':'⚠ '+finalIssues.length+' restantes')+'</span></div>';
    $('site-result').style.display='';setProgress('prog-'+sid,100);
    setStatus('status-'+sid,'✅ Site gerado! ('+countComponents(fullPT)+' comp)');
  }catch(e){setStatus('status-'+sid,'❌ '+e.message);setProgress('prog-'+sid,0)}
  $('btn-site').disabled=false;
}

// === VALIDAÇÃO DE QUALIDADE RIGOROSA ===
function validateQuality(data){
  var issues=[];
  (data.sections||[]).forEach(function(sec,i){
    var wc=(sec.texto_pt||'').split(/\s+/).length;
    // Texto mínimo 300 palavras (era 200)
    if(wc<300)issues.push({type:'short_text',secIdx:i,words:wc,titulo:sec.titulo_pt});
    
    var comps=sec.componentes||[];
    var tipos=comps.map(function(c){return c.tipo});
    
    // Verificar flashcards (mínimo 3)
    var fcComp=comps.find(function(c){return c.tipo==='flashcards'||c.tipo==='flashcard'});
    if(!fcComp||!fcComp.cards||fcComp.cards.length<3)issues.push({type:'few_flashcards',secIdx:i,compIdx:comps.indexOf(fcComp)});
    
    // Verificar red-flags (mínimo 3)
    var rfComp=comps.find(function(c){return c.tipo==='red-flags'});
    if(!rfComp||!rfComp.items_pt||rfComp.items_pt.length<3)issues.push({type:'few_redflags',secIdx:i,compIdx:comps.indexOf(rfComp)});
    
    // Verificar caso clínico (mínimo 40 palavras)
    var ccComp=comps.find(function(c){return c.tipo==='caso-clinico'});
    if(!ccComp||!ccComp.texto_pt||(ccComp.texto_pt||'').split(/\s+/).length<40)issues.push({type:'short_case',secIdx:i,compIdx:comps.indexOf(ccComp)});
    
    // Verificar pílula existe
    var pilComp=comps.find(function(c){return c.tipo==='pilula'});
    if(!pilComp)issues.push({type:'missing_pilula',secIdx:i});
    
    // Verificar estudo de caso (narrativa + 3 questões + análise)
    var ecComp=comps.find(function(c){return c.tipo==='estudo-de-caso'||c.tipo==='estudo_de_caso'||c.tipo==='case-study'});
    if(!ecComp)issues.push({type:'missing_estudo_caso',secIdx:i});
    else if(!ecComp.questoes_pt||ecComp.questoes_pt.length<2)issues.push({type:'few_questoes_caso',secIdx:i});
  });
  // Verificar tradução ES
  (data.sections||[]).forEach(function(sec,i){
    if(!sec.texto_es||sec.texto_es.length<50)issues.push({type:'missing_es',secIdx:i});
  });
  return issues;
}
function countComponents(data){var n=0;(data.sections||[]).forEach(function(s){n+=(s.componentes||[]).length});n+=(data.diagnostica||[]).length;n+=(data.quiz||[]).length;n+=(data.glossario||[]).length;return n}

// === LIVRO PT — FRAGMENTADO POR CAPÍTULO ===
async function generateLivroPT(){
  // v9.0: Chama a versão segmentada
  return await generateLivroSegmentado_PT();
}

// === LIVRO ES — v9.0 GERAÇÃO SEGMENTADA ===
async function generateLivroES(){
  // v9.0: Chama a versão segmentada
  return await generateLivroSegmentado_ES();
}

// === TRADUÇÃO SEGURA: EXTRAIR → TRADUZIR → REINJETAR ===
async function safeTranslateHTML(htmlFragment){
  // 1. Extrair todos os textos visíveis do HTML, guardando posição
  var segments=[];var idx=0;
  var safe=htmlFragment.replace(/>([^<]{3,})</g, function(match,text,offset){
    // Ignorar textos que são só espaços/números/pontuação
    if(/^\s*$/.test(text))return match;
    if(/^[\s\d\.\,\;\:\-\(\)\/\&\#\;\!]+$/.test(text))return match;
    // Ignorar atributos style/class que ficaram como texto (segurança)
    if(/^(class|style|id|src|href|alt|onclick|data-)/i.test(text.trim()))return match;
    var placeholder='__TX'+idx+'__';
    segments.push({idx:idx,original:text.trim(),placeholder:placeholder});
    idx++;
    return '>'+placeholder+'<';
  });
  
  if(segments.length===0)return htmlFragment; // Nada para traduzir
  
  // 2. Montar texto para tradução (só os segmentos, numerados)
  var batchSize=40; // Traduzir em lotes de 40 segmentos
  var translated={};
  
  for(var b=0;b<segments.length;b+=batchSize){
    var batch=segments.slice(b,b+batchSize);
    var inputText=batch.map(function(s){return'['+s.idx+'] '+s.original}).join('\n');
    
    var transPrompt='Tradutor profissional PT-BR → Espanhol.\n'+GLOSSARIO_TECNICO+'\nREGRAS:\n- Traduzir cada linha para espanhol\n- Manter a numeracao [N] no inicio de cada linha\n- NAO adicionar nem remover linhas\n- NAO traduzir nomes proprios, siglas, ou termos que devem ficar iguais\n- Espanhol neutro/universal\n- NUNCA deixar portugues\n\nTRADUZA:\n\n'+inputText;
    
    try{
      var result=await callOpenAI(transPrompt,8000);
      // Parsear resultado linha por linha
      var lines=result.split('\n').filter(function(l){return l.trim().length>0});
      lines.forEach(function(line){
        var m=line.match(/^\[(\d+)\]\s*(.+)$/);
        if(m){translated[parseInt(m[1])]=m[2].trim()}
      });
    }catch(e){
      // Se falhar, manter textos originais (fallback PT)
      batch.forEach(function(s){translated[s.idx]=s.original});
    }
  }
  
  // 3. Reinjetar textos traduzidos no HTML original
  segments.forEach(function(s){
    var trans=translated[s.idx]||s.original; // Fallback: PT se tradução falhou
    safe=safe.replace(s.placeholder,trans);
  });
  
  return safe;
}

// === SOCIAL PT — Independente ===
async function generateSocialPT(){
  $('btn-soc-pt').disabled=true;setProgress('prog-soc-pt',10);$('social-pt-result').style.display='none';
  setStatus('status-soc-pt','<span class="spinner"></span> Gerando cards PT...');
  try{
    var raw=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));var data=parseJSON(raw);
    if(!data){raw=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));data=parseJSON(raw)}
    if(!data)throw new Error('JSON invalido');
    data=validateSocialData(data);
    $('o-soc-pt').textContent=assembleSocialHTML(data,'pt');
    $('social-pt-result').style.display='';setProgress('prog-soc-pt',100);
    setStatus('status-soc-pt','✅ Cards PT gerados!');
  }catch(e){setStatus('status-soc-pt','❌ '+e.message);setProgress('prog-soc-pt',0)}
  $('btn-soc-pt').disabled=false;
}

// === SOCIAL ES — ESTRATÉGIA: GERA PT → TRADUZ JSON ===
async function generateSocialES(){
  $('btn-soc-es').disabled=true;setProgress('prog-soc-es',10);$('social-es-result').style.display='none';
  setStatus('status-soc-es','<span class="spinner"></span> Gerando cards em PT e traduzindo...');
  try{
    // PASSO 1: Gerar em PT (mais confiável)
    setProgress('prog-soc-es',20);
    var rawPt=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));
    var dataPt=parseJSON(rawPt);
    if(!dataPt){rawPt=await callOpenAI(buildSocialPrompt(P,fullContent,'pt'));dataPt=parseJSON(rawPt)}
    if(!dataPt)throw new Error('JSON PT invalido');
    dataPt=validateSocialData(dataPt);
    setProgress('prog-soc-es',50);

    // PASSO 2: Traduzir o JSON para ES com prompt dedicado
    setStatus('status-soc-es','<span class="spinner"></span> Traduzindo cards para espanhol...');
    var transPrompt='Tradutor profissional PT-BR → Espanhol.\n'+GLOSSARIO_TECNICO+'\nREGRAS:\n- Traduzir TODOS os valores de texto para espanhol\n- Manter estrutura JSON identica\n- NAO traduzir chaves do JSON\n- Hashtags em espanhol\n- Espanhol neutro/universal\n- NUNCA deixar trechos em portugues\n\nTRADUZA este JSON:\n'+JSON.stringify(dataPt)+'\n\nRetorne APENAS o JSON traduzido.';
    var rawEs=await callOpenAI(transPrompt);
    var dataEs=parseJSON(rawEs);
    if(!dataEs){
      // Retry
      rawEs=await callOpenAI(transPrompt);
      dataEs=parseJSON(rawEs);
    }
    if(!dataEs){
      // Fallback: usar PT mesmo e avisar
      dataEs=dataPt;
      toast('Traducao falhou — cards em PT');
    }
    dataEs=validateSocialData(dataEs);
    setProgress('prog-soc-es',85);

    $('o-soc-es').textContent=assembleSocialHTML(dataEs,'es');
    $('social-es-result').style.display='';setProgress('prog-soc-es',100);
    setStatus('status-soc-es','✅ Cards ES traduzidos!');
  }catch(e){setStatus('status-soc-es','❌ '+e.message);setProgress('prog-soc-es',0)}
  $('btn-soc-es').disabled=false;
}

// ══════ PROMPTS ══════
function buildCapitulosPrompt(d,c){
  var capList=d.caps.map(function(cap,i){return'Cap '+(i+1)+': "'+cap.nome+'" — '+cap.secs.map(function(s){return'"'+s.nome+'"'}).join(', ')}).join('\n');
  return 'Especialista conteudo educacional interativo.\nTitulo: "'+d.nm+'"\nPublico: '+d.pa+'\nNivel: '+d.nv+'\nESTRUTURA:\n'+capList+'\n\nIDIOMA: APENAS PT-BR.\nJSON:\n{"intro":{"pt":"Texto"},"sections":[{"titulo_pt":"","texto_pt":"(min 400 pal, camadas: enquadramento, explicacao, pratica, alertas)","componentes":[{"tipo":"pilula","pergunta_pt":"?","resposta_pt":""},{"tipo":"flashcards","cards":[{"frente_pt":"","verso_pt":""}]},{"tipo":"red-flags","items_pt":[""]},{"tipo":"caso-clinico","titulo_pt":"","texto_pt":""},{"tipo":"estudo-de-caso","titulo_pt":"Titulo","narrativa_pt":"Narrativa detalhada (min 150 pal) com personagens, contexto e problema","questoes_pt":["Questao reflexiva 1?","Questao reflexiva 2?","Questao reflexiva 3?"],"analise_pt":"Analise especializada (min 200 pal) com melhores praticas e solucoes"}]}],"referencias":[""]}\n\nOBRIGATORIOS/cap: pilula, flashcards(3-5), red-flags, caso-clinico, estudo-de-caso(1).\nOPCIONAIS: accordion, timeline, checklist, boas-praticas, evidencia, erros-comuns, tabela.\nestudo-de-caso: narrativa detalhada + 3 questoes reflexivas + analise especializada.\ntexto_pt min 400 pal. APENAS JSON.\n\nCONTEUDO:\n\n'+c;
}
function buildDiagPrompt(d,c){return 'Titulo: "'+d.nm+'".\n5 diagnosticas PT-BR. Opcoes: Sim/Parcialmente/Nao.\nJSON:{"diagnostica":[{"pergunta_pt":"?"}]}\nAPENAS JSON. 5 exatas.\nCONTEUDO:\n'+c.substring(0,15000)}
function buildQuizPrompt(d,c){return 'Titulo: "'+d.nm+'".\n10 quiz multipla escolha PT-BR. 4 alt, 1 correta.\nJSON:{"quiz":[{"pergunta_pt":"?","opcoes":[{"pt":"A"},{"pt":"B"},{"pt":"C"},{"pt":"D"}],"correta":"a"}]}\n10 exatas. APENAS JSON.\nCONTEUDO:\n'+c.substring(0,20000)}
function buildGlossPrompt(d,c){return 'Extraia termos tecnicos. Min 8.\nJSON:{"glossario":[{"termo_pt":"","definicao_pt":""}]}\nAPENAS JSON.\nCONTEUDO:\n'+c.substring(0,20000)}

function buildTranslatePrompt(data){
  var compact={intro_pt:(data.intro&&data.intro.pt)||'',sections:[],diagnostica:[],quiz:[],glossario:[]};
  (data.sections||[]).forEach(function(s){
    var sec={titulo_pt:s.titulo_pt||'',texto_pt:(s.texto_pt||'').substring(0,4000),componentes:[]};
    (s.componentes||[]).forEach(function(comp){
      var c={tipo:comp.tipo};Object.keys(comp).forEach(function(k){if(k.endsWith('_pt')||k==='tipo')c[k]=comp[k]});
      if(comp.cards)c.cards=comp.cards.map(function(cd){return{frente_pt:cd.frente_pt||'',verso_pt:cd.verso_pt||''}});
      if(comp.items_pt)c.items_pt=comp.items_pt;
      if(comp.pares)c.pares=comp.pares.map(function(p){return{erro_pt:p.erro_pt||'',correto_pt:p.correto_pt||''}});
      if(comp.etapas)c.etapas=comp.etapas.map(function(e){return{titulo_pt:e.titulo_pt||'',descricao_pt:e.descricao_pt||''}});
      if(comp.items&&Array.isArray(comp.items))c.items=comp.items.map(function(it){return typeof it==='object'?{titulo_pt:it.titulo_pt||'',conteudo_pt:it.conteudo_pt||''}:it});
      sec.componentes.push(c);
    });compact.sections.push(sec);
  });
  (data.diagnostica||[]).forEach(function(q){compact.diagnostica.push(q.pergunta_pt||'')});
  (data.quiz||[]).forEach(function(q){compact.quiz.push({pergunta_pt:q.pergunta_pt||'',opcoes:(q.opcoes||[]).map(function(o){return o.pt||''})})});
  (data.glossario||[]).forEach(function(g){compact.glossario.push({termo_pt:g.termo_pt||'',definicao_pt:g.definicao_pt||''})});
  return 'Tradutor PT-BR → Espanhol. Termos tecnicos precisos.\n'+GLOSSARIO_TECNICO+'\nJSON mesma estrutura + campos _es:\n'+JSON.stringify(compact)+'\nFormato:{"intro_es":"","sections":[{"titulo_es":"","texto_es":"","componentes":[...campos_es]}],"diagnostica":[""],"quiz":[{"pergunta_es":"","opcoes":[""]}],"glossario":[{"termo_es":"","definicao_es":""}]}\nAPENAS JSON.';
}

function mergeTranslation(ptData,esData){
  if(esData.intro_es){if(!ptData.intro)ptData.intro={pt:''};ptData.intro.es=esData.intro_es}
  var esSec=esData.sections||[];(ptData.sections||[]).forEach(function(sec,i){
    var es=esSec[i]||{};sec.titulo_es=es.titulo_es||sec.titulo_pt;sec.texto_es=es.texto_es||'';
    var esC=es.componentes||[];(sec.componentes||[]).forEach(function(comp,ci){
      var ec=esC[ci]||{};Object.keys(ec).forEach(function(k){if(k.endsWith('_es'))comp[k]=ec[k]});
      if(ec.cards&&comp.cards){comp.cards.forEach(function(card,ki){var e=(ec.cards||[])[ki]||{};card.frente_es=e.frente_es||'';card.verso_es=e.verso_es||''})}
      if(ec.items_es)comp.items_es=ec.items_es;
      if(ec.pares&&comp.pares){comp.pares.forEach(function(p,pi){var e=(ec.pares||[])[pi]||{};p.erro_es=e.erro_es||'';p.correto_es=e.correto_es||''})}
      if(ec.etapas&&comp.etapas){comp.etapas.forEach(function(e,ei){var ee=(ec.etapas||[])[ei]||{};e.titulo_es=ee.titulo_es||'';e.descricao_es=ee.descricao_es||''})}
      if(ec.items&&comp.items&&Array.isArray(comp.items)){comp.items.forEach(function(it,ii){if(typeof it==='object'){var eit=(ec.items||[])[ii]||{};if(typeof eit==='object'){it.titulo_es=eit.titulo_es||'';it.conteudo_es=eit.conteudo_es||''}}})}
    });
  });
  var esD=esData.diagnostica||[];(ptData.diagnostica||[]).forEach(function(q,i){q.pergunta_es=esD[i]||q.pergunta_pt});
  var esQ=esData.quiz||[];(ptData.quiz||[]).forEach(function(q,i){var eq=esQ[i]||{};q.pergunta_es=eq.pergunta_es||q.pergunta_pt;if(eq.opcoes&&q.opcoes)q.opcoes.forEach(function(o,oi){o.es=(eq.opcoes||[])[oi]||o.pt})});
  var esG=esData.glossario||[];(ptData.glossario||[]).forEach(function(g,i){var eg=esG[i]||{};g.termo_es=eg.termo_es||g.termo_pt;g.definicao_es=eg.definicao_es||g.definicao_pt});
  return ptData;
}

// === Item 3: GLOSSÁRIO BILÍNGUE TÉCNICO FIXO ===
var GLOSSARIO_TECNICO='GLOSSARIO TECNICO (use estes termos):\n'+
'Cuidados Paliativos=Cuidados Paliativos|Gerontologia=Gerontologia|Geriatria=Geriatria|'+
'Envelhecimento ativo=Envejecimiento activo|Fragilidade=Fragilidad|Sarcopenia=Sarcopenia|'+
'Disfagia=Disfagia|Polifarmacia=Polifarmacia|Delirium=Delirium|Demencia=Demencia|'+
'Alzheimer=Alzheimer|Parkinson=Parkinson|Cuidador=Cuidador/a|'+
'Escala de Karnofsky=Escala de Karnofsky|PPS (Palliative Performance Scale)=PPS|'+
'ESAS (Edmonton)=ESAS|Escala de Zarit=Escala de Zarit|'+
'Diretivas antecipadas de vontade=Directivas anticipadas de voluntad|'+
'Protocolo SPIKES=Protocolo SPIKES|Sedacao paliativa=Sedacion paliativa|'+
'Hipodermoclise=Hipodermoclisis|Dispneia=Disnea|Constipacao=Estrenimiento|'+
'Nausea=Nausea|Prurido=Prurito|Fadiga=Fatiga|Anorexia=Anorexia|'+
'Caquexia=Caquexia|Luto=Duelo|Luto antecipatorio=Duelo anticipatorio|'+
'Conspiração do silencio=Conspiracion del silencio|Claudicacao familiar=Claudicacion familiar|'+
'Funcionalidade=Funcionalidad|AVD (Atividades de Vida Diaria)=AVD (Actividades de la Vida Diaria)|'+
'AIVD=AIVD|Incontinencia=Incontinencia|Queda=Caida|Ulcera por pressao=Ulcera por presion|'+
'Desnutricao=Desnutricion|Desidratacao=Deshidratacion|Obstipacao=Estrenimiento|'+
'Mucosite=Mucositis|Xerostomia=Xerostomia|Ortotanasia=Ortotanasia|'+
'Distanasia=Distanasia|Eutanasia=Eutanasia|Testamento vital=Testamento vital|'+
'Equipe multiprofissional=Equipo multiprofesional|Interdisciplinar=Interdisciplinar|'+
'Transicao de cuidados=Transicion de cuidados|Alta hospitalar=Alta hospitalaria|'+
'Internacao domiciliar=Hospitalizacion domiciliaria|Hospice=Hospicio|'+
'Escala visual analogica=Escala visual analogica|Dor total=Dolor total|'+
'Dor neuropatica=Dolor neuropatico|Opioide=Opioide|Titulacao=Titulacion|'+
'Resgate=Rescate|Rotacao de opioide=Rotacion de opioide|'+
'Comunicacao de mas noticias=Comunicacion de malas noticias|'+
'Conferencia familiar=Conferencia familiar|Espiritualidade=Espiritualidad|'+
'Bioetica=Bioetica|Autonomia=Autonomia|Beneficencia=Beneficencia|'+
'Nao maleficencia=No maleficencia|Justica=Justicia\n';

// === LIVRO FRAGMENTADO: PROMPTS POR PARTE ===
function buildLivroFrag(d,c,lang,parte,cap,capNum,gloss){
  var pt=lang==='pt',idi=pt?'PT-BR APENAS.':'Espanol APENAS.';
  var autores='Marco Tulio Aguiar Mourao Ribeiro, Jose Joaquim Lupi, Joao Jose Saraiva da Fonseca';
  var inst=d.inst||'Cura Vitae — Instituto de Formacao em Geriatria, Gerontologia e Saude do Idoso';
  var base=(pt?'Designer editorial':'Disenador editorial')+'. E-book HTML.\nTitulo: "'+d.nm+'"\nIDIOMA: '+idi+'\n'+REGRAS+'\nVISUAL: '+CORES+'. Playfair Display + Source Sans 3. max-width:800px. justify. ZERO JS.\nAPENAS fragmento HTML (sem <!DOCTYPE>, sem <html>, sem <head>).\n\n';

  if(parte==='capa'){
    return base+'GERE APENAS: Folha de rosto + Pagina de creditos + Sumario + Apresentacao.\n\nFOLHA DE ROSTO:\n- <img src="LOGO_PLACEHOLDER" style="max-width:300px">\n- Titulo: "'+d.nm+'"\n- Autores: '+autores+'\n- Instituicao: '+inst+'\n- Ano: 2026\n- class="cover-page"\n\nPAGINA DE CREDITOS (class="credits-page"):\n- Titulo, Autores, Instituicao, Ano 2026\n- "Todos os direitos reservados. Nenhuma parte desta publicacao pode ser reproduzida sem autorizacao previa."\n- "Material educacional para uso exclusivo em programas de formacao."\n- ISBN: [em tramitacao]\n\nSUMARIO: lista capitulos com links internos (#cap1, #cap2...).\nCapitulos:\n'+d.caps.map(function(cp,i){return(i+1)+'. '+cp.nome}).join('\n')+'\n\nAPRESENTACAO: 3-4 paragrafos contextualizando.\nOBJETIVOS: 5-8 objetivos de aprendizagem.\n\nCONTEUDO BASE:\n'+c.substring(0,10000);
  }

  if(parte==='capitulo'){
    var secList=cap.secs.map(function(s,si){return'  '+(si+1)+'. '+s.nome+': '+s.det}).join('\n');
    return base+'GERE APENAS o capitulo '+(capNum)+' COMPLETO.\n\n<section id="cap'+capNum+'">\n<h2>Capitulo '+capNum+': '+cap.nome+'</h2>\n\nSECOES:\n'+secList+'\n\nCADA SECAO DEVE TER:\n- Texto profundo nivel mestrado (min 500 palavras/secao, 4 camadas: enquadramento, explicacao tecnica, pratica clinica, alertas)\n- Box "Saiba Mais" com aprofundamento\n- Box "Na Pratica" com caso clinico breve\n- NUNCA resumir/abreviar/placeholders\n\nAo final do capitulo: "Pontos-Chave" (5-7 bullets), "Questoes para Reflexao" (3 questoes).\n\n'+REGRAS+'\n\nCONTEUDO BASE:\n'+c;
  }

  if(parte==='final'){
    return base+'GERE APENAS as partes finais do livro:\n\n1. GLOSSARIO COMPLETO A-Z (min 15 termos com definicoes de 2-3 linhas cada)\n'+(gloss?'Termos disponiveis:\n'+gloss+'\n':'')+'\n2. REFERENCIAS BIBLIOGRAFICAS (formato ABNT, 2020-2025, min 10 refs reais)\n\n3. SINTESE FINAL (2-3 paragrafos integradores)\n\nCONTEUDO BASE:\n'+c.substring(0,15000);
  }

  return base+c;
}

// === MONTAR HTML FINAL DO LIVRO ===
function assembleLivroHTML(parts,lang,d){
  var pt=lang==='pt';
  var h='<!DOCTYPE html>\n<html lang="'+(pt?'pt-BR':'es')+'">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>'+(pt?'Livro':'Libro')+': '+esc(d.nm)+'</title>\n';
  h+='<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet">\n';
  h+='<style>\n';
  h+='*{margin:0;padding:0;box-sizing:border-box}\n';
  h+='body{font-family:"Source Sans 3",sans-serif;max-width:800px;margin:0 auto;padding:40px 32px;color:#2C2C2C;line-height:1.8;text-align:justify}\n';
  h+='h1,h2,h3{font-family:"Playfair Display",serif;color:#0D3851;text-align:left}\n';
  h+='h1{font-size:28px;margin:24px 0 16px}h2{font-size:22px;margin:32px 0 14px;padding-bottom:8px;border-bottom:2px solid #0D8C5E}h3{font-size:17px;margin:20px 0 10px;color:#194A6D}\n';
  h+='p{margin-bottom:12px;font-size:15px}ul,ol{margin:10px 0 16px 24px}li{margin-bottom:6px}\n';
  h+='.cover-page{text-align:center;padding:80px 20px;min-height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center}\n';
  h+='.credits-page{padding:60px 40px;font-size:13px;color:#666}\n';
  h+='.box-saiba{background:#E6F7F0;border-left:4px solid #0D8C5E;padding:16px 20px;margin:16px 0;border-radius:0 8px 8px 0}\n';
  h+='.box-pratica{background:#FFF8E1;border-left:4px solid #C8A96E;padding:16px 20px;margin:16px 0;border-radius:0 8px 8px 0}\n';
  h+='.box-alerta{background:#FFF0F0;border-left:4px solid #F28B6C;padding:16px 20px;margin:16px 0;border-radius:0 8px 8px 0}\n';
  h+='.pontos-chave{background:#f0f4f8;padding:20px 24px;border-radius:8px;margin:20px 0}\n';
  h+='.pontos-chave h3{color:#0D8C5E}\n';
  h+='table{width:100%;border-collapse:collapse;margin:16px 0}th,td{padding:8px 12px;border:1px solid #ddd;font-size:14px;text-align:left}th{background:#0D3851;color:#fff}\n';
  h+='blockquote{border-left:3px solid #C8A96E;padding:12px 20px;margin:16px 0;font-style:italic;color:#555}\n';
  h+='</style>\n</head>\n<body>\n';
  for(var i=0;i<parts.length;i++){
    // Strip any stray html/head/body tags from fragments
    var frag=parts[i].replace(/<\/?(!DOCTYPE|html|head|body|meta|link|title|style)[^>]*>/gi,'').trim();
    h+='\n<!-- === PARTE '+(i+1)+' === -->\n'+frag+'\n';
  }
  // RELATÓRIO DE AUTOAVALIAÇÃO DO LIVRO
  h+=buildLivroQAReport(parts,lang,d);
  h+='\n</body>\n</html>';
  return h;
}

function buildLivroQAReport(parts,lang,d){
  var pt=lang==='pt';
  var h='\n<!-- AUTOAVALIAÇÃO -->\n';
  h+='<div style="page-break-before:always;border:2px solid #0D8C5E;border-radius:8px;padding:24px;margin-top:40px">\n';
  h+='<div style="background:#0D8C5E;color:#fff;padding:12px 20px;margin:-24px -24px 20px;border-radius:6px 6px 0 0">\n';
  h+='<h2 style="margin:0;font-size:18px;color:#fff">'+(pt?'📋 Relatório de Autoavaliação':'📋 Informe de Autoevaluación')+'</h2>\n';
  h+='<p style="margin:4px 0 0;opacity:.85;font-size:12px">'+(pt?'Dados verificados automaticamente pelo sistema Cura Vitae':'Datos verificados automáticamente por el sistema Cura Vitae')+'</p>\n';
  h+='</div>\n';
  
  var totalWords=0;var checks=[];var warns=[];
  var partDetails=[];
  
  parts.forEach(function(p,i){
    // Contar palavras visíveis (remover tags HTML)
    var textOnly=p.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    var wc=textOnly.split(/\s+/).length;
    totalWords+=wc;
    var label=i===0?(pt?'Capa e Créditos':'Portada y Créditos'):(i===parts.length-1?(pt?'Glossário e Referências':'Glosario y Referencias'):(pt?'Capítulo '+i:'Capítulo '+i));
    partDetails.push({label:label,words:wc});
  });
  
  var numCaps=Math.max(0,parts.length-2); // excluir capa e glossário
  checks.push({ok:totalWords>=3000,label:pt?'Total de palavras':'Total de palabras',val:totalWords.toLocaleString('pt-BR'),min:'3.000'});
  checks.push({ok:numCaps>=2,label:pt?'Capítulos':'Capítulos',val:numCaps,min:2});
  checks.push({ok:parts.length>=4,label:pt?'Partes geradas':'Partes generadas',val:parts.length,min:4});
  
  partDetails.forEach(function(pd,i){
    if(i>0&&i<parts.length-1&&pd.words<400){
      warns.push((pt?'⚠️ "'+pd.label+'": '+pd.words+' palavras (mín: 400)':'⚠️ "'+pd.label+'": '+pd.words+' palabras (mín: 400)'));
    }
  });
  
  var passed=checks.filter(function(c){return c.ok}).length;
  var pct=Math.round((passed/checks.length)*100);
  var color=pct>=90?'#0d8c5e':pct>=70?'#d4a017':'#cc4444';
  
  h+='<div style="text-align:center;padding:12px 0;margin-bottom:14px"><span style="font-size:40px;font-weight:700;color:'+color+'">'+pct+'%</span><br><span style="font-size:13px;color:#666">'+passed+'/'+checks.length+(pt?' verificações':' verificaciones')+'</span></div>\n';
  
  h+='<table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:14px">\n';
  h+='<tr style="background:rgba(0,0,0,.04)"><th style="padding:6px 10px;text-align:left;border-bottom:1px solid #ddd">'+(pt?'Parte':'Parte')+'</th><th style="padding:6px 10px;text-align:center;border-bottom:1px solid #ddd">'+(pt?'Palavras':'Palabras')+'</th></tr>\n';
  partDetails.forEach(function(pd){
    h+='<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">'+esc(pd.label)+'</td><td style="padding:6px 10px;text-align:center;border-bottom:1px solid #eee">'+pd.words.toLocaleString('pt-BR')+'</td></tr>\n';
  });
  h+='<tr style="font-weight:700;background:rgba(0,0,0,.03)"><td style="padding:6px 10px">Total</td><td style="padding:6px 10px;text-align:center">'+totalWords.toLocaleString('pt-BR')+'</td></tr>\n';
  h+='</table>\n';
  
  if(warns.length>0){
    h+='<div style="padding:10px 14px;background:rgba(212,160,23,.08);border-left:3px solid #d4a017;border-radius:4px;font-size:12px;margin-bottom:12px">\n';
    warns.forEach(function(w){h+=w+'<br>\n'});
    h+='</div>\n';
  }
  
  h+='<p style="font-size:11px;color:#999;font-style:italic">'+(pt?'Este relatório verifica estrutura e volume. Precisão do conteúdo e referências devem ser validadas por revisor humano.':'Este informe verifica estructura y volumen. La precisión del contenido y las referencias deben ser validadas por un revisor humano.')+'</p>\n';
  h+='</div>\n';
  return h;
}

// === Item 4: INJEÇÃO FORÇADA DE CSS PRINT ===
function injectPrintCSS(html){
  var printCSS='<style>@page{size:A4;margin:2.5cm 2cm}@media print{.cover-page{page-break-after:always;min-height:auto}.credits-page{page-break-after:always}section,article{page-break-before:always}h2{page-break-after:avoid}h3{page-break-after:avoid}.box-saiba,.box-pratica,.box-alerta,.pontos-chave,table,blockquote{page-break-inside:avoid}img{max-width:100%}body{font-size:12pt;max-width:none;padding:0}}</style>\n';
  if(html.indexOf('</head>')>=0)return html.replace('</head>',printCSS+'</head>');
  if(html.indexOf('</style>')>=0)return html.replace('</style>','</style>\n'+printCSS);
  return printCSS+html;
}
function buildSocialPrompt(d,c,lang){
  var pt=lang==='pt';
  return 'Especialista conteudo redes sociais.\nTema: "'+d.nm+'". Idioma: '+(pt?'PT-BR':'Espanol')+' APENAS.\n5 CARDS. APENAS JSON:\n{"cards":[{"tipo":"impacto","frase":"","citacao":"","legenda":"2-3 frases + 5 hashtags"},{"tipo":"sabia","numero":"","explicacao":"","fonte":"","legenda":""},{"tipo":"dica","titulo":"","items":["1","2","3","4","5"],"legenda":""},{"tipo":"mito","mito":"","realidade":"","legenda":""},{"tipo":"pergunta","pergunta":"","legenda":""}]}\nConteudo REAL. APENAS JSON.\nCONTEUDO:\n'+c.substring(0,20000);
}

// Step 1 prompts
function buildSegmented(d){
  var prompts=[],inst=d.inst?'\nPara '+d.inst+'.':'';
  var sys='Especialista conteudo educacional nivel '+d.nv+'.\nPublico: '+d.pa+'. Titulo: "'+d.nm+'". '+d.hr+'h.'+inst+'\nAPENAS PT-BR. Markdown.\n'+REGRAS+getFeedbackRules()+'\n5 refs ABNT/secao.';
  d.caps.forEach(function(cap,ci){
    var p=sys+'\n\n==========\nGERE: "'+cap.nome+'"\n==========\n\n## '+cap.nome+'\n### Apresentacao [2-3 par.]\n### Objetivos 1-5\n### Diagnostica 5Q\n';
    cap.secs.forEach(function(sec,si){var sn=sec.nome.replace(/\s+/g,'_').toLowerCase();p+='\n---\n## '+sec.nome+'\n### '+sec.det+'\n#### Texto (3-4 camadas, 400+/camada)\n';['Enquadramento','Explicacao tecnica','Pratica','Sinais de alerta'].forEach(function(cam,k){p+='\n**'+(k+1)+'. '+cam+':**\n[400+]\n'});p+='\n#### Recursos\n';['[[PILULA:'+sn+']]','[[FLASHCARDS:'+sn+']]','[[RED-FLAGS:'+sn+']]','[[CASO-CLINICO:'+sn+']]'].forEach(function(r){p+='- '+r+'\n'});if(d.res>=15)['[[CHECKLIST:'+sn+']]','[[TIMELINE:'+sn+']]','[[TABELA:'+sn+']]'].forEach(function(r){p+='- '+r+'\n'});p+='\n#### Glossario\n#### Mini-Quiz\n#### Refs ABNT\n---\n'});prompts.push(p)});
  prompts.push(sys+'\n\nGLOSSARIO+QUIZ\nGlossario A-Z. Quiz 10Q PT gabarito.');
  return prompts;
}
function buildSegmentedDoc(d,doc){
  var prompts=[],inst=d.inst?'\nPara '+d.inst+'.':'';
  var sys='Especialista transformar documentos em conteudo educacional nivel '+d.nv+'.\nPublico: '+d.pa+'. Titulo: "'+d.nm+'". '+d.hr+'h.'+inst+'\nAPENAS PT-BR. Reorganizar DOC-BASE. NAO inventa — TRANSFORMA. Markdown.\n'+REGRAS+getFeedbackRules()+'\nFonte = documento. Manter dados/refs. Se faltar: [COMPLEMENTAR: tema X]';
  d.caps.forEach(function(cap,ci){var chunk=findDocChunk(doc,cap,d.caps.length,ci);
    var p=sys+'\n\n==========\nTRANSFORME: "'+cap.nome+'"\n==========\nDOC:\n"""\n'+chunk+'\n"""\n\n## '+cap.nome+'\n### Apresentacao\n### Objetivos\n### Diagnostica 5Q\n';
    cap.secs.forEach(function(sec,si){var sn=sec.nome.replace(/\s+/g,'_').toLowerCase();p+='\n---\n## '+sec.nome+'\n### '+sec.det+'\n#### Texto (3-4 camadas, 400+, DO DOC)\n';['Enquadramento','Explicacao','Pratica','Alertas'].forEach(function(cam,k){p+='\n**'+(k+1)+'. '+cam+':**\n[400+ DOC. Se insuf: [COMPLEMENTAR: '+sec.nome+']]\n'});p+='\n#### Recursos\n';['[[PILULA:'+sn+']]','[[FLASHCARDS:'+sn+']]','[[RED-FLAGS:'+sn+']]','[[CASO-CLINICO:'+sn+']]'].forEach(function(r){p+='- '+r+'\n'});if(d.res>=15)['[[CHECKLIST:'+sn+']]','[[TIMELINE:'+sn+']]'].forEach(function(r){p+='- '+r+'\n'});p+='\n#### Glossario\n#### Mini-Quiz\n#### Refs\n---\n'});prompts.push(p)});
  prompts.push(sys+'\n\nDOC:\n"""\n'+doc.substring(0,40000)+'\n"""\nGlossario A-Z. Quiz 10Q PT.');
  return prompts;
}
function findDocChunk(doc,cap,total,idx){var dl=doc.toLowerCase(),kws=cap.nome.toLowerCase().split(/\s+/).filter(function(w){return w.length>3});var bS=-1,bSc=0;for(var i=0;i<doc.length-200;i+=200){var win=dl.substring(i,i+500);var sc=0;kws.forEach(function(k){if(win.indexOf(k)>=0)sc++});cap.secs.forEach(function(s){s.nome.toLowerCase().split(/\s+/).filter(function(w){return w.length>3}).forEach(function(w){if(win.indexOf(w)>=0)sc+=0.5})});if(sc>bSc){bSc=sc;bS=i}}if(bSc>=2&&bS>=0){return doc.substring(Math.max(0,bS-1000),Math.min(doc.length,bS+Math.ceil(doc.length/total)+2000))}var cs=Math.ceil(doc.length/total);return doc.substring(Math.max(0,idx*cs-1000),Math.min(doc.length,idx*cs+cs+3000))}

// ══════ FEEDBACK ══════
function getFeedbackRules(){try{var fb=JSON.parse(localStorage.getItem('cipe_feedback')||'[]');if(!fb.length)return'';var r='\n\nREGRAS APRENDIDAS:\n';fb.forEach(function(f){r+='- '+f.rule+'\n'});return r}catch(e){return''}}
function toggleFeedback(){var b=$('feedback-box');b.style.display=b.style.display==='none'?'':'none';if(b.style.display!=='none')viewFeedback()}
function saveFeedback(){var type=$('fb-type').value,det=$('fb-detail').value.trim();if(!type&&!det){toast('Selecione ou descreva.');return}var ruleMap={'missing_component':'SEMPRE 4 comp obrigatorios. '+det,'empty_section':'NUNCA secoes vazias. Min 300 pal. '+det,'wrong_lang':'NUNCA misturar idiomas. '+det,'short_content':'Min 400 pal/secao. '+det,'wrong_format':'APENAS JSON valido. '+det,'hallucination':'NUNCA inventar dados. '+det,'other':det||'Corrigir'};var rule=ruleMap[type]||det;try{var fb=JSON.parse(localStorage.getItem('cipe_feedback')||'[]');fb.push({type:type,detail:det,rule:rule,date:new Date().toISOString().slice(0,10)});localStorage.setItem('cipe_feedback',JSON.stringify(fb));$('fb-type').value='';$('fb-detail').value='';toast('Regra salva!');viewFeedback()}catch(e){toast('Erro')}}
function viewFeedback(){try{var fb=JSON.parse(localStorage.getItem('cipe_feedback')||'[]');$('fb-count').textContent=fb.length+' regra'+(fb.length!==1?'s':'');if(!fb.length){$('fb-list').innerHTML='<em>Nenhuma.</em>';return}var h='';fb.forEach(function(f,i){h+='<div style="padding:6px 8px;background:rgba(13,56,81,.03);border-radius:6px;margin-bottom:4px;display:flex;justify-content:space-between;font-size:12px"><span>'+f.date+' '+esc(f.rule.substring(0,80))+'</span><button onclick="removeFeedback('+i+')" style="background:none;border:none;color:var(--cv-coral);cursor:pointer">&times;</button></div>'});$('fb-list').innerHTML=h}catch(e){}}
function removeFeedback(idx){try{var fb=JSON.parse(localStorage.getItem('cipe_feedback')||'[]');fb.splice(idx,1);localStorage.setItem('cipe_feedback',JSON.stringify(fb));viewFeedback()}catch(e){}}
function clearFeedback(){if(!confirm('Limpar?'))return;localStorage.removeItem('cipe_feedback');viewFeedback();toast('Limpas.')}

// ══════ UTILITIES ══════
function $(id){return document.getElementById(id)}
function cp(id){var t=$(id).textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){toast('Copiado!')}).catch(function(){cpFB(t)})}else{cpFB(t)}}
function cpFB(t){var a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');toast('Copiado!')}catch(e){toast('Erro.')}document.body.removeChild(a)}
function catalogName(suffix){
  if(!P)return suffix;
  var cod=P.cod||'C001';
  var nome=(P.nm||'curso').replace(/[^a-zA-Z0-9\u00C0-\u024F ]/g,'').trim().replace(/\s+/g,'-').substring(0,50);
  return 'CV-'+cod+'_'+nome+'_'+suffix;
}
function dl(id,name,ext){var t=$(id).textContent;var fname=catalogName(name);var b=new Blob([t],{type:ext==='html'?'text/html;charset=utf-8':'text/plain;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=fname+'.'+ext;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(a.href);toast(fname+'.'+ext+' baixado.')}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function toast(m){var t=$('toast');t.textContent=m;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2800)}
function sleep(ms){return new Promise(function(r){setTimeout(r,ms)})}
function setStatus(id,html){$(id).innerHTML=html}
function setProgress(id,pct){$(id).style.width=Math.min(pct,100)+'%'}
function previewHTML(id){var html=$(id).textContent;var blob=new Blob([html],{type:'text/html;charset=utf-8'});var url=URL.createObjectURL(blob);var w=window.open(url,'_blank','width=1200,height=800');if(!w)toast('Popup bloqueado.')}

// === Item 5: PDF via window.print() — mais confiável que html2pdf.js ===
function downloadPDF(id,name){
  var html=$(id).textContent;
  var fname=catalogName(name);
  // Abrir numa janela nova com CSS print otimizado e disparar print
  var printWin=window.open('','_blank','width=900,height=700');
  if(!printWin){toast('Popup bloqueado. Permita popups.');return}
  // Injetar CSS print se não tiver
  if(html.indexOf('@page')<0)html=injectPrintCSS(html);
  // Adicionar botão de imprimir no topo
  var printBtn='<div id="print-bar" style="position:fixed;top:0;left:0;right:0;background:#0D3851;color:#fff;padding:10px 20px;display:flex;align-items:center;gap:12px;z-index:9999;font-family:sans-serif"><button onclick="document.getElementById(\'print-bar\').style.display=\'none\';window.print()" style="background:#0D8C5E;color:#fff;border:none;padding:8px 20px;border-radius:6px;font-weight:600;cursor:pointer;font-size:14px">📄 Salvar como PDF</button><span style="font-size:13px;opacity:.7">Dica: Em "Destino", escolha "Salvar como PDF" → A4 → Margens minimas</span><button onclick="document.getElementById(\'print-bar\').style.display=\'none\'" style="margin-left:auto;background:none;border:none;color:#fff;cursor:pointer;font-size:18px">✕</button></div><style>@media print{#print-bar{display:none!important}}</style>';
  html=html.replace('<body>','<body>'+printBtn).replace('<body ','<body>'+printBtn+'<body ');
  printWin.document.write(html);
  printWin.document.close();
  toast('Janela aberta — clique "Salvar como PDF".');
}
function toggleEdit(id){var el=$(id),btn=$('edit-btn-'+id);if(el.contentEditable==='true'){el.contentEditable='false';el.style.outline='';el.style.border='';btn.innerHTML='✏️ Editar';btn.classList.remove('btn-g');btn.classList.add('btn-gold');toast('Edicoes salvas!')}else{el.contentEditable='true';el.style.outline='2px solid var(--cv-green)';el.style.border='2px solid var(--cv-green)';el.focus();btn.innerHTML='💾 Salvar';btn.classList.remove('btn-gold');btn.classList.add('btn-g');toast('Modo edicao ativo.')}}

// ══════ SOCIAL HTML BUILDER ══════
function assembleSocialHTML(data,lang){
  var pt=lang==='pt',c=data.cards||[];
  var h='<!DOCTYPE html>\n<html lang="'+(pt?'pt-BR':'es')+'">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Cards '+(pt?'PT':'ES')+'</title>\n<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet">\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\nbody{background:#f5f5f5;padding:40px 20px;font-family:"Source Sans 3",sans-serif}\n.cw{margin:0 auto 60px;max-width:1080px}\n.cw h3{font-size:14px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:1px}\n.sc{width:1080px;height:1080px;position:relative;overflow:hidden}\n.cb{background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:20px;margin-top:16px;max-width:1080px}\n.ct{font-size:15px;line-height:1.6;color:#333;margin-bottom:12px}\n.bc{background:#0D3851;color:#fff;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600}\n@media print{body{padding:0;background:#fff}.cw{page-break-after:always}.cb{display:none}}\n</style>\n</head>\n<body>\n';
  // CARD 1: IMPACTO
  var d1=c[0]||{};
  h+='<div class="cw"><h3>Card 1 — Impacto</h3>\n<div class="sc" style="background:linear-gradient(135deg,#0D3851,#194A6D);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:80px">\n';
  h+='<img src="'+LOGO_CARD+'" style="position:absolute;bottom:30px;right:30px;height:50px;opacity:.7" alt="Cura Vitae">\n';
  h+='<span style="position:absolute;top:60px;left:60px;font-size:120px;color:rgba(255,255,255,.08);font-family:serif">\u201C</span>\n';
  h+='<p style="font-family:Playfair Display,serif;font-size:42px;line-height:1.35;color:#fff;max-width:85%;z-index:1">'+E(d1.frase||'')+'</p>\n';
  h+='<div style="width:100px;height:2px;background:#C8A96E;margin:30px 0"></div>\n';
  h+='<p style="font-size:22px;color:rgba(255,255,255,.7)">'+E(d1.citacao||'')+'</p>\n';
  h+='</div>\n'+capBox(d1.legenda,'1',lang)+'</div>\n\n';
  // CARD 2: VOCE SABIA
  var d2=c[1]||{};
  h+='<div class="cw"><h3>Card 2 — '+(pt?'Voce Sabia?':'Sabias Que?')+'</h3>\n<div class="sc" style="background:#F7F5F0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:80px">\n';
  h+='<img src="'+LOGO_CARD+'" style="position:absolute;bottom:30px;right:30px;height:50px;opacity:.5" alt="Cura Vitae">\n';
  h+='<span style="position:absolute;top:70px;background:#0D8C5E;color:#fff;padding:10px 24px;border-radius:24px;font-size:20px;font-weight:700">'+(pt?'VOCE SABIA?':'SABIAS QUE?')+'</span>\n';
  h+='<p style="font-size:96px;color:#0D8C5E;font-weight:700;font-family:Playfair Display,serif;margin-top:60px">'+E(d2.numero||'')+'</p>\n';
  h+='<div style="width:150px;height:3px;background:#C8A96E;margin:24px 0"></div>\n';
  h+='<p style="font-size:26px;line-height:1.45;color:#2C2C2C;max-width:80%">'+E(d2.explicacao||'')+'</p>\n';
  h+='<p style="position:absolute;bottom:70px;font-size:16px;color:#999">Fonte: '+E(d2.fonte||'')+'</p>\n';
  h+='</div>\n'+capBox(d2.legenda,'2',lang)+'</div>\n\n';
  // CARD 3: DICA
  var d3=c[2]||{};var items=d3.items||[];if(typeof items==='string')items=items.split(';');
  h+='<div class="cw"><h3>Card 3 — '+(pt?'Dica Pratica':'Consejo Practico')+'</h3>\n<div class="sc" style="background:#E6F7F0;display:flex;flex-direction:column;justify-content:flex-start;padding:80px 80px 80px 100px;position:relative">\n';
  h+='<img src="'+LOGO_CARD+'" style="position:absolute;bottom:30px;right:30px;height:50px;opacity:.5" alt="Cura Vitae">\n';
  h+='<div style="position:absolute;left:0;top:0;bottom:0;width:6px;background:#0D8C5E"></div>\n';
  h+='<h3 style="font-family:Playfair Display,serif;font-size:46px;color:#0D3851;margin-bottom:50px">'+E(d3.titulo||(pt?'Dica Pratica':'Consejo'))+'</h3>\n';
  h+='<ul style="list-style:none;padding:0">\n';
  for(var ii=0;ii<items.length&&ii<5;ii++){h+='<li style="font-size:26px;line-height:1.5;color:#2C2C2C;margin-bottom:18px;padding-left:40px;position:relative"><span style="position:absolute;left:0;color:#0D8C5E;font-size:24px">\u2705</span>'+E((items[ii]||'').trim())+'</li>\n'}
  h+='</ul>\n</div>\n'+capBox(d3.legenda,'3',lang)+'</div>\n\n';
  // CARD 4: MITO vs REALIDADE
  var d4=c[3]||{};
  h+='<div class="cw"><h3>Card 4 — Mito vs '+(pt?'Realidade':'Realidad')+'</h3>\n<div class="sc" style="display:flex;position:relative">\n';
  h+='<img src="'+LOGO_CARD+'" style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);height:40px;opacity:.5;z-index:2" alt="Cura Vitae">\n';
  h+='<div style="flex:1;background:#F28B6C;color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:60px">\n<span style="font-size:60px;margin-bottom:24px">\u274C</span>\n<h3 style="font-family:Playfair Display,serif;font-size:44px;margin-bottom:30px">MITO</h3>\n<p style="font-size:26px;line-height:1.45;max-width:90%">'+E(d4.mito||'')+'</p>\n</div>\n';
  h+='<div style="width:4px;background:#C8A96E"></div>\n';
  h+='<div style="flex:1;background:#E6F7F0;color:#2C2C2C;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:60px">\n<span style="font-size:60px;margin-bottom:24px">\u2705</span>\n<h3 style="font-family:Playfair Display,serif;font-size:44px;margin-bottom:30px">'+(pt?'REALIDADE':'REALIDAD')+'</h3>\n<p style="font-size:26px;line-height:1.45;max-width:90%">'+E(d4.realidade||'')+'</p>\n</div>\n</div>\n'+capBox(d4.legenda,'4',lang)+'</div>\n\n';
  // CARD 5: PERGUNTA
  var d5=c[4]||{};
  h+='<div class="cw"><h3>Card 5 — '+(pt?'Pergunta Reflexiva':'Pregunta Reflexiva')+'</h3>\n<div class="sc" style="background:linear-gradient(135deg,#0D8C5E,#10A068);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:80px;position:relative">\n';
  h+='<img src="'+LOGO_CARD+'" style="position:absolute;bottom:30px;right:30px;height:50px;opacity:.5" alt="Cura Vitae">\n';
  h+='<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:400px;color:rgba(255,255,255,.06);font-family:serif">?</span>\n';
  h+='<span style="font-size:64px;margin-bottom:30px;z-index:1">\uD83E\uDD14</span>\n';
  h+='<p style="font-family:Playfair Display,serif;font-size:40px;line-height:1.35;color:#fff;max-width:82%;z-index:1">'+E(d5.pergunta||'')+'</p>\n';
  h+='</div>\n'+capBox(d5.legenda,'5',lang)+'</div>\n\n';
  h+='<script>\nfunction copyCap(id){var t=document.getElementById(id).textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){alert("Copiado!")})}else{var a=document.createElement("textarea");a.value=t;a.style.cssText="position:fixed;opacity:0";document.body.appendChild(a);a.select();document.execCommand("copy");document.body.removeChild(a);alert("Copiado!")}}\n<\/script>\n</body>\n</html>';
  return h;
}
function capBox(text,id,lang){return '<div class="cb"><p class="ct" id="cap-'+id+'-'+lang+'">'+E(text||'')+'</p><button class="bc" onclick="copyCap(\'cap-'+id+'-'+lang+'\')">Copiar legenda</button></div>\n'}
function E(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

// CHECKLIST QA
function updateQA(){
  var checks=document.querySelectorAll('.qa-check');
  var total=checks.length;var done=0;
  checks.forEach(function(c){if(c.checked)done++});
  var pct=Math.round((done/total)*100);
  var color=pct===100?'var(--cv-green)':pct>=70?'var(--cv-gold)':'var(--cv-coral)';
  $('qa-score').innerHTML='<span style="color:'+color+'">'+done+'/'+total+' ('+pct+'%)</span>';
}
function exportQA(){
  var cod=P?P.cod:'';var nm=P?P.nm:'';
  var lines=['═══ RELATÓRIO QA — CURA VITAE ═══','','Curso: '+cod+' — '+nm,'Data: '+($('qa-data').value||new Date().toISOString().split('T')[0]),'Revisor: '+($('qa-revisor').value||'—'),''];
  var sections=document.querySelectorAll('#qa-body h4');
  sections.forEach(function(h4){
    lines.push(h4.textContent);
    var container=h4.closest('div');
    container.querySelectorAll('.qa-item').forEach(function(item){
      var cb=item.querySelector('input[type="checkbox"]');
      var txt=item.textContent.trim();
      lines.push((cb&&cb.checked?'  ✅ ':'  ❌ ')+txt);
    });
    lines.push('');
  });
  lines.push('Observações: '+($('qa-obs').value||'Nenhuma'));
  var checks=document.querySelectorAll('.qa-check');var done=0;
  checks.forEach(function(c){if(c.checked)done++});
  lines.push('');
  lines.push('RESULTADO: '+done+'/'+checks.length+' ('+Math.round((done/checks.length)*100)+'%)');
  lines.push($('qa-aprovado')&&$('qa-aprovado').checked?'STATUS: ✅ APROVADO PARA PUBLICAÇÃO':'STATUS: ⚠️ PENDENTE DE REVISÃO');
  var report=lines.join('\n');
  if(navigator.clipboard)navigator.clipboard.writeText(report).then(function(){toast('Relatório QA copiado!')});
}

// === GERAR TUDO (5 PRODUTOS EM SEQUÊNCIA) ===
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
  
  // Render badges iniciais
  $('all-badges').innerHTML=steps.map(function(s,i){
    return '<span id="ab-'+i+'" style="padding:4px 10px;border-radius:6px;font-size:12px;background:rgba(13,56,81,.08);color:var(--cv-text-light)">'+s.icon+' '+s.name+' ⏳</span>';
  }).join('');
  
  for(var i=0;i<steps.length;i++){
    var s=steps[i];
    $('status-all').innerHTML='<span class="spinner"></span> ['+(i+1)+'/5] Gerando '+s.name+'...';
    setProgress('prog-all',((i)/5)*100);
    $('ab-'+i).style.background='rgba(0,196,14,.12)';
    $('ab-'+i).style.color='var(--cv-green)';
    $('ab-'+i).innerHTML=s.icon+' '+s.name+' <span class="spinner" style="width:12px;height:12px;border-width:2px"></span>';
    
    try{
      await s.fn();
      results.push({name:s.name,ok:true});
      $('ab-'+i).style.background='var(--cv-green)';
      $('ab-'+i).style.color='#fff';
      $('ab-'+i).innerHTML=s.icon+' '+s.name+' ✅';
    }catch(e){
      results.push({name:s.name,ok:false,err:e.message});
      $('ab-'+i).style.background='var(--cv-coral)';
      $('ab-'+i).style.color='#fff';
      $('ab-'+i).innerHTML=s.icon+' '+s.name+' ❌';
    }
    
    setProgress('prog-all',((i+1)/5)*100);
    if(i<steps.length-1)await sleep(1000);
  }
  
  var ok=results.filter(function(r){return r.ok}).length;
  var fail=results.filter(function(r){return!r.ok}).length;
  $('status-all').innerHTML=ok===5
    ?'✅ <strong>Tudo gerado!</strong> 5/5 produtos prontos. Revise e baixe abaixo.'
    :'⚠️ <strong>'+ok+'/5 prontos</strong>'+(fail?' · '+fail+' com erro':'');
  
  $('btn-all').disabled=false;
  toast(ok+'/5 produtos gerados!');
}

// INIT
addT();addT();
// ══════════════════════════════════════════════════════════
// MÓDULO DE GERAÇÃO SEGMENTADA v9.0
// ══════════════════════════════════════════════════════════
// Adicionar este código ao logica-v9.js

/**
 * Gera livro completo em PARTES SEPARADAS
 * NUNCA mais vai cortar conteúdo!
 */
async function generateLivroSegmentado_PT() {
  return await generateLivroSegmentado('pt');
}

async function generateLivroSegmentado_ES() {
  return await generateLivroSegmentado('es');
}

async function generateLivroSegmentado(lang) {
  var pt = lang === 'pt';
  var sid = pt ? 'livro-pt' : 'livro-es';
  
  setStatus('status-' + sid, '<span class="spinner"></span> Iniciando geração segmentada...');
  setProgress('prog-' + sid, 5);
  
  try {
    var parts = [];
    var totalSteps = 5 + P.caps.length; // capa, apresentacao, N caps, glossario/refs, ANEXOS
    var currentStep = 0;
    
    // ────────────────────────────────────────────────────────
    // PARTE 1: CAPA + CRÉDITOS
    // ────────────────────────────────────────────────────────
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando capa e créditos...');
    
    var capaHTML = buildCapa(P, lang);
    parts.push(capaHTML);
    
    setProgress('prog-' + sid, Math.round((currentStep / totalSteps) * 90));
    
    // ────────────────────────────────────────────────────────
    // PARTE 2: SUMÁRIO + APRESENTAÇÃO
    // ────────────────────────────────────────────────────────
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando apresentação...');
    
    var apresentacaoHTML = await buildApresentacao(P, lang);
    parts.push(apresentacaoHTML);
    
    setProgress('prog-' + sid, Math.round((currentStep / totalSteps) * 90));
    
    // ────────────────────────────────────────────────────────
    // PARTE 3-N: CAPÍTULOS (um por vez)
    // ────────────────────────────────────────────────────────
    for (var i = 0; i < P.caps.length; i++) {
      currentStep++;
      var capNum = i + 1;
      setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando capítulo ' + capNum + '...');
      
      var capituloHTML = await buildCapitulo(P, i, fullContent, lang);
      parts.push(capituloHTML);
      
      setProgress('prog-' + sid, Math.round((currentStep / totalSteps) * 90));
      
      await sleep(500); // Pequena pausa entre capítulos
    }
    
    // ────────────────────────────────────────────────────────
    // PARTE FINAL: GLOSSÁRIO + REFERÊNCIAS + SÍNTESE
    // ────────────────────────────────────────────────────────
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando glossário e referências...');
    
    var finalHTML = await buildGlossarioReferencias(P, fullContent, lang);
    parts.push(finalHTML);
    
    setProgress('prog-' + sid, 92);
    
    // ────────────────────────────────────────────────────────
    // ANEXOS: ESCALAS, PROTOCOLOS, FERRAMENTAS (NOVO v9.0)
    // ────────────────────────────────────────────────────────
    currentStep++;
    setStatus('status-' + sid, '<span class="spinner"></span> [' + currentStep + '/' + totalSteps + '] Gerando anexos (escalas, protocolos, ferramentas)...');
    
    var anexosHTML = await buildAnexos(P, fullContent, lang);
    parts.push(anexosHTML);
    
    setProgress('prog-' + sid, 96);
    
    // ────────────────────────────────────────────────────────
    // MONTAR HTML FINAL
    // ────────────────────────────────────────────────────────
    setStatus('status-' + sid, '<span class="spinner"></span> Montando HTML final...');
    
    var htmlFinal = assembleLivroHTML_v9(parts, lang, P);
    
    // Cache para uso posterior
    if (pt) {
      CACHE.livroPtHTML = htmlFinal;
    } else {
      CACHE.livroEsHTML = htmlFinal;
    }
    
    setProgress('prog-' + sid, 100);
    
    var wordCount = countWords(htmlFinal);
    setStatus('status-' + sid, '✅ Livro completo! ' + wordCount.toLocaleString('pt-BR') + ' palavras');
    
    // ────────────────────────────────────────────────────────
    // EXIBIR RESULTADO + BOTÕES
    // ────────────────────────────────────────────────────────
    showLivroResult(sid, htmlFinal, lang);
    
    toast('✅ Livro ' + (pt ? 'PT' : 'ES') + ' gerado com sucesso!');
    
    return htmlFinal;
    
  } catch (error) {
    console.error('Erro na geração segmentada:', error);
    setStatus('status-' + sid, '❌ Erro: ' + error.message);
    setProgress('prog-' + sid, 0);
    toast('Erro ao gerar livro: ' + error.message);
    throw error;
  }
}

// Funções auxiliares de construção
function buildCapa(d, lang) {
  var pt = lang === 'pt';
  return `<div class="capa">
  <div class="capa-header">
    <div class="capa-categoria">${pt ? 'Educação em Saúde' : 'Educación en Salud'}</div>
  </div>
  
  <div class="capa-main">
    <h1 class="capa-titulo">${esc(d.nm)}</h1>
    <p class="capa-subtitulo">${esc(d.pa)}</p>
    
    <div class="capa-badges">
      <div class="capa-badge">⏱️ ${d.hr} ${pt ? 'horas' : 'horas'}</div>
      <div class="capa-badge">🎓 ${pt ? 'Certificado' : 'Certificado'}</div>
      <div class="capa-badge">📚 ${pt ? 'Nível' : 'Nivel'} ${d.nv}</div>
      <div class="capa-badge">🌐 PT/ES</div>
    </div>
  </div>
  
  <div class="capa-footer">
    <div class="capa-instituicao">${d.inst || 'Instituto CIPE Saúde'}</div>
    <div class="capa-ano">2026</div>
  </div>
</div>

<section style="padding:40px;page-break-before:always">
  <h2 style="color:#0D3851;border-bottom:4px solid #0D8C5E;padding-bottom:16px;margin-bottom:32px">${pt ? 'Ficha Técnica' : 'Ficha Técnica'}</h2>
  <div style="background:#F7F5F0;padding:32px;border-radius:12px;line-height:2">
    <p><strong style="color:#194A6D">${pt ? 'Título' : 'Título'}:</strong> ${esc(d.nm)}</p>
    <p><strong style="color:#194A6D">${pt ? 'Código' : 'Código'}:</strong> ${d.cod}</p>
    ${d.inst ? '<p><strong style="color:#194A6D">' + (pt ? 'Instituição' : 'Institución') + ':</strong> ' + esc(d.inst) + '</p>' : ''}
    <p><strong style="color:#194A6D">${pt ? 'Público-alvo' : 'Público objetivo'}:</strong> ${esc(d.pa)}</p>
    <p><strong style="color:#194A6D">${pt ? 'Carga horária' : 'Carga horaria'}:</strong> ${d.hr} ${pt ? 'horas' : 'horas'}</p>
    <p><strong style="color:#194A6D">${pt ? 'Nível' : 'Nivel'}:</strong> ${d.nv}</p>
    <p><strong style="color:#194A6D">${pt ? 'Autoria' : 'Autoría'}:</strong> ${pt ? 'Conteúdo educacional CIPE Saúde' : 'Contenido educacional CIPE Salud'}</p>
    <p><strong style="color:#194A6D">${pt ? 'Ano' : 'Año'}:</strong> 2026</p>
  </div>
</section>`
;
}

async function buildApresentacao(d, lang) {
  var pt = lang === 'pt';
  
  var prompt = `Escreva uma APRESENTAÇÃO completa (3-4 parágrafos) para o ebook "${d.nm}".

PÚBLICO: ${d.pa}
IDIOMA: ${pt ? 'Português' : 'Español'}

A apresentação deve:
1. Contextualizar a importância do tema
2. Explicar o que será abordado
3. Destacar os benefícios para o público-alvo

Retorne APENAS em HTML:
<div style="background:#FFF;padding:36px 30px;border-left:8px solid #0D8C5E;margin-bottom:40px">
  <h2>${pt ? 'Apresentação' : 'Presentación'}</h2>
  <p>[Parágrafo 1]</p>
  <p>[Parágrafo 2]</p>
  <p>[Parágrafo 3]</p>
</div>`;

  var html = await callOpenAI(prompt, 2000);
  return extractHTML(html);
}

async function buildCapitulo(d, capIndex, baseContent, lang) {
  var pt = lang === 'pt';
  var cap = d.caps[capIndex];
  
  var secoesHTML = cap.secs.map(function(s, i) {
    return `Seção ${i + 1}: ${s.nome}${s.det ? ' - ' + s.det : ''}`;
  }).join('\n');
  
  var prompt = `Você é um ESPECIALISTA em ${d.nm} - METODOLOGIA CIPE v9.1

TAREFA: Escrever CAPÍTULO COMPLETO com CLASSES CSS PROFISSIONAIS.

CAPÍTULO ${capIndex + 1}: ${cap.nome}

═══════════════════════════════════════════════════════════
⚠️ CRÍTICO: USE EXATAMENTE AS CLASSES CSS ABAIXO
═══════════════════════════════════════════════════════════

ESTRUTURA HTML OBRIGATÓRIA:

<section>
  <h2>${cap.nome}</h2>
  
  <h3>${cap.secs[0]?.nome || 'Seção 1'}</h3>
  <p>[Texto 450 palavras - 3 parágrafos]</p>
  <p>[Continuar...]</p>
  <p>[Finalizar primeira seção]</p>
  
  <div class="box-saiba-mais">
    <strong>💡 Saiba Mais:</strong>
    <p>[Aprofundamento 150 palavras]</p>
  </div>
  
  <h3>${cap.secs[1]?.nome || 'Seção 2'}</h3>
  <p>[Texto 450 palavras - 3 parágrafos]</p>
  <p>[Continuar...]</p>
  <p>[Finalizar segunda seção]</p>
  
  <div class="box-saiba-mais">
    <strong>💡 Saiba Mais:</strong>
    <p>[Informação complementar 150 palavras]</p>
  </div>
  
  <h3>${cap.secs[2]?.nome || 'Seção 3'}</h3>
  <p>[Texto 500 palavras]</p>
  <p>[Continuar...]</p>
  
  <div class="box-pratica">
    <strong>📝 Prática:</strong>
    <p>[Caso prático 200 palavras]</p>
  </div>
  
  <table>
    <caption>[Título da Tabela]</caption>
    <thead>
      <tr>
        <th>[Coluna 1]</th>
        <th>[Coluna 2]</th>
        <th>[Coluna 3]</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[Dado 1.1]</td>
        <td>[Dado 1.2]</td>
        <td>[Dado 1.3]</td>
      </tr>
      <tr>
        <td>[Dado 2.1]</td>
        <td>[Dado 2.2]</td>
        <td>[Dado 2.3]</td>
      </tr>
      <tr>
        <td>[Dado 3.1]</td>
        <td>[Dado 3.2]</td>
        <td>[Dado 3.3]</td>
      </tr>
      <tr>
        <td>[Dado 4.1]</td>
        <td>[Dado 4.2]</td>
        <td>[Dado 4.3]</td>
      </tr>
      <tr>
        <td>[Dado 5.1]</td>
        <td>[Dado 5.2]</td>
        <td>[Dado 5.3]</td>
      </tr>
    </tbody>
  </table>
  
  <div class="pontos-chave">
    <h3>Pontos-Chave</h3>
    <ol>
      <li><strong>[Ponto 1]:</strong> [Explicação 80 palavras]</li>
      <li><strong>[Ponto 2]:</strong> [Explicação 80 palavras]</li>
      <li><strong>[Ponto 3]:</strong> [Explicação 80 palavras]</li>
      <li><strong>[Ponto 4]:</strong> [Explicação 80 palavras]</li>
      <li><strong>[Ponto 5]:</strong> [Explicação 80 palavras]</li>
    </ol>
  </div>
  
  <div class="media-placeholder">
    <p>📷 ${pt ? '[Espaço para imagem relacionada a ' : '[Espacio para imagen relacionada a '}${cap.nome}]</p>
  </div>
</section>

═══════════════════════════════════════════════════════════
⚠️ REGRAS CRÍTICAS - NÃO VIOLE:
═══════════════════════════════════════════════════════════

✅ USE APENAS AS CLASSES: box-saiba-mais, box-pratica, pontos-chave, media-placeholder
✅ NÃO adicione styles inline (sem style="...")
✅ NÃO mude a estrutura HTML acima
✅ Preencha APENAS o conteúdo entre colchetes [...]
✅ Mantenha os emojis (💡 📝 📷 🎯)
✅ Use exatamente 5 linhas na tabela (thead + 5 tbody tr)

IDIOMA: ${pt ? 'Português BR' : 'Español'}
PÚBLICO: ${d.pa}
TEMA: ${d.nm}

${baseContent ? '\n\nCONTEÚDO BASE:\n' + baseContent.substring(0, 6000) : ''}

COPIE A ESTRUTURA HTML ACIMA E PREENCHA O CONTEÚDO:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PONTOS-CHAVE (400 palavras exatas):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<div class="pontos-chave" style="background:#F0F4F8;padding:24px;border-radius:8px;margin:30px 0">
  <h3 style="color:#0D3851;margin-bottom:16px">Pontos-Chave do Capítulo</h3>
  <ol style="line-height:1.8">
    <li><strong>[Ponto 1]:</strong> [Explicação 80 palavras]</li>
    <li><strong>[Ponto 2]:</strong> [Explicação 80 palavras]</li>
    <li><strong>[Ponto 3]:</strong> [Explicação 80 palavras]</li>
    <li><strong>[Ponto 4]:</strong> [Explicação 80 palavras]</li>
    <li><strong>[Ponto 5]:</strong> [Explicação 80 palavras]</li>
  </ol>
</div>

═══════════════════════════════════════════════════════════
REGRAS CRÍTICAS (NÃO VIOLE):
═══════════════════════════════════════════════════════════

✅ OBRIGATÓRIO incluir TODOS os elementos acima
✅ OBRIGATÓRIO seguir contagem de palavras (tolerância ±50)
✅ OBRIGATÓRIO usar classes CSS especificadas
✅ OBRIGATÓRIO criar tabela com dados REAIS e ESPECÍFICOS ao tema
✅ OBRIGATÓRIO fazer boxes substantivos (não genéricos)
✅ NUNCA pular seções
✅ NUNCA usar placeholders como "[inserir aqui]"
✅ NUNCA fazer texto corrido sem estrutura

TOTAL CAPÍTULO: 2.400 palavras

IDIOMA: ${pt ? 'Português BR' : 'Español'}
PÚBLICO: ${d.pa}
TEMA ESPECÍFICO: ${d.nm}

ESTRUTURA HTML COMPLETA:

<section id="cap${capIndex + 1}">
  <h2>${cap.nome}</h2>
  
  ${cap.secs.map(function(s) {
    return `<h3>${s.nome}</h3>
  <p>[DESENVOLVER: ${s.det || s.nome} - Escreva 4-6 parágrafos SUBSTANTIVOS]</p>
  
  <div class="box-saiba">
    <strong>💡 ${pt ? 'Saiba Mais' : 'Más Información'}:</strong>
    <p>[Informação complementar relevante]</p>
  </div>`;
  }).join('\n  ')}

<section id="cap${capIndex + 1}">
  <h2 style="color:#0D3851;font-family:'Playfair Display',serif;font-size:28px;margin:40px 0 24px">${cap.nome}</h2>
  
  <!-- SEÇÃO 1 -->
  <h3 style="color:#194A6D;font-size:20px;margin-top:30px">${cap.secs[0]?.nome || 'Seção 1'}</h3>
  [Texto base 450 palavras - 3 parágrafos desenvolvidos]
  
  [Box Saiba Mais #1 - 150 palavras]
  
  <!-- SEÇÃO 2 -->
  <h3 style="color:#194A6D;font-size:20px;margin-top:30px">${cap.secs[1]?.nome || 'Seção 2'}</h3>
  [Texto base 450 palavras - 3 parágrafos desenvolvidos]
  
  [Box Saiba Mais #2 - 150 palavras]
  
  <!-- SEÇÃO 3 -->
  <h3 style="color:#194A6D;font-size:20px;margin-top:30px">${cap.secs[2]?.nome || 'Seção 3'}</h3>
  [Texto base 500 palavras]
  
  [Box Prática #1 - 200 palavras]
  
  [Tabela Comparativa - 3 colunas × 5 linhas]
  
  [Pontos-Chave - 5 itens de 80 palavras cada]
  
  <!-- Placeholder mídia -->
  <div class="media-placeholder" style="background:#f0f4f8;padding:20px;text-align:center;border:2px dashed #ccc;margin:20px 0;border-radius:8px">
    <p style="margin:0;color:#666">📷 ${pt ? '[Espaço para imagem relacionada a ' : '[Espacio para imagen relacionada a '}${cap.nome}]</p>
  </div>
</section>

${baseContent ? '\n\nCONTEÚDO BASE (use para inspiração, mas seja específico ao tema):\n' + baseContent.substring(0, 6000) : ''}`;

  var html = await callOpenAI(prompt, 16000);
  return extractHTML(html);
}

async function buildGlossarioReferencias(d, baseContent, lang) {
  var pt = lang === 'pt';
  
  var prompt = `ESPECIALISTA em ${d.nm} - METODOLOGIA CIPE v9.1

TAREFA: Gerar GLOSSÁRIO e REFERÊNCIAS com CLASSES CSS PROFISSIONAIS.

⚠️ CRÍTICO: USE EXATAMENTE AS CLASSES CSS ABAIXO (SEM style inline)

═══════════════════════════════════════════════════════════
ESTRUTURA HTML OBRIGATÓRIA:
═══════════════════════════════════════════════════════════

<section class="glossario">
  <h2>${pt ? 'Glossário A-Z' : 'Glosario A-Z'}</h2>
  
  <dl>
    <dt>[Termo 1]</dt>
    <dd>[Definição 25 palavras + contexto de aplicação]</dd>
    
    <dt>[Termo 2]</dt>
    <dd>[Definição 25 palavras + contexto de aplicação]</dd>
    
    [... CONTINUAR ATÉ COMPLETAR EXATAMENTE 20 TERMOS ...]
  </dl>
</section>

<section class="referencias">
  <h2>${pt ? 'Referências Bibliográficas' : 'Referencias Bibliográficas'}</h2>
  
  <ol>
    <li>[Autor 1]. [Título]. [Revista/Editora], v. X, n. Y, p. Z-W, [ano]. Disponível em: [URL]. Acesso em: [data].</li>
    
    <li>[Autor 2]. [Título]. [Fonte], [ano].</li>
    
    [... CONTINUAR ATÉ COMPLETAR EXATAMENTE 15 REFERÊNCIAS ...]
  </ol>
</section>

<section>
  <h2>${pt ? 'Síntese Final' : 'Síntesis Final'}</h2>
  
  <div style="background:#F7F5F0;padding:30px;border-left:6px solid #0D8C5E;border-radius:8px">
    <p>[Parágrafo 1: Recapitulação 100 palavras]</p>
    <p>[Parágrafo 2: Integração 100 palavras]</p>
    <p>[Parágrafo 3: Próximos passos 100 palavras]</p>
  </div>
</section>

═══════════════════════════════════════════════════════════
⚠️ REGRAS CRÍTICAS:
═══════════════════════════════════════════════════════════

GLOSSÁRIO:
✅ EXATAMENTE 20 termos técnicos
✅ Ordem alfabética
✅ Cada definição: 25 palavras (definição + contexto)
✅ Use <dl>, <dt>, <dd> (NÃO mude)
✅ NÃO adicione styles inline

REFERÊNCIAS:
✅ EXATAMENTE 15 referências
✅ Formato ABNT completo
✅ Anos: 2020-2025 (fontes recentes)
✅ APENAS fontes REAIS (não inventar DOI/PMID)
✅ Use <ol>, <li> (NÃO mude)

FONTES SEGURAS (use se não souber):
- OMS (Organização Mundial da Saúde)
- Ministério da Saúde
- ANVISA
- Conselhos profissionais (CFM, COFEN)

TEMA: ${d.nm}
PÚBLICO: ${d.pa}
IDIOMA: ${pt ? 'Português BR' : 'Español'}

${baseContent ? '\n\nEXTRAIA TERMOS DESTE CONTEÚDO:\n' + baseContent.substring(0, 4000) : ''}

COPIE A ESTRUTURA HTML ACIMA E PREENCHA O CONTEÚDO:`;

  var html = await callOpenAI(prompt, 10000);
  return extractHTML(html);
}

async function buildAnexos(d, baseContent, lang) {
  var pt = lang === 'pt';
  
  var prompt = `ESPECIALISTA em ${d.nm} - ${pt ? 'Português BR' : 'Español'}

TAREFA: Gerar ANEXOS COMPLETOS para o ebook (estrutura A-H).

Os anexos devem fornecer FERRAMENTAS PRÁTICAS, escalas, protocolos e recursos para ${d.pa}.

ESTRUTURA HTML:

<section style="page-break-before:always">
  <h2 style="color:#0D3851;border-bottom:3px solid #0D8C5E;padding-bottom:12px">${pt ? 'ANEXOS' : 'ANEXOS'}</h2>
  
  <!-- ANEXO A: ESCALAS E INSTRUMENTOS -->
  <div style="margin:30px 0">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo A – Escalas e Instrumentos de Avaliação' : 'Anexo A – Escalas e Instrumentos de Evaluación'}</h3>
    
    <div style="background:#f0f4f8;padding:20px;border-radius:8px;margin:16px 0">
      <h4 style="color:#0D8C5E;margin-bottom:10px">[Nome da Escala 1]</h4>
      <p><strong>${pt ? 'Objetivo' : 'Objetivo'}:</strong> [Para que serve]</p>
      <p><strong>${pt ? 'Aplicação' : 'Aplicación'}:</strong> [Como aplicar]</p>
      <table style="width:100%;margin:10px 0;border-collapse:collapse">
        <tr style="background:#0D3851;color:#fff">
          <th style="padding:8px;border:1px solid #ddd">${pt ? 'Item' : 'Ítem'}</th>
          <th style="padding:8px;border:1px solid #ddd">${pt ? 'Pontuação' : 'Puntuación'}</th>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #ddd">[Item 1]</td>
          <td style="padding:8px;border:1px solid #ddd">[0-4 pontos]</td>
        </tr>
      </table>
      <p><strong>${pt ? 'Interpretação' : 'Interpretación'}:</strong> [Como interpretar resultado]</p>
    </div>
    
    [CRIAR 2-3 ESCALAS RELEVANTES PARA O TEMA]
  </div>
  
  <!-- ANEXO B: PROTOCOLOS CLÍNICOS -->
  <div style="margin:30px 0;page-break-before:always">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo B – Protocolos Clínicos' : 'Anexo B – Protocolos Clínicos'}</h3>
    
    <div style="background:#E6F7F0;padding:20px;border-radius:8px;margin:16px 0">
      <h4 style="color:#0D8C5E;margin-bottom:10px">[Nome do Protocolo 1]</h4>
      <p><strong>1.</strong> [Passo 1 do protocolo]</p>
      <p><strong>2.</strong> [Passo 2 do protocolo]</p>
      <p><strong>3.</strong> [Passo 3 do protocolo]</p>
      <div class="box-alerta" style="margin:10px 0">
        <strong>⚠️ ${pt ? 'Atenção' : 'Atención'}:</strong>
        <p>[Alertas importantes sobre o protocolo]</p>
      </div>
    </div>
    
    [CRIAR 2-3 PROTOCOLOS ESPECÍFICOS]
  </div>
  
  <!-- ANEXO C: FERRAMENTAS DE TRIAGEM -->
  <div style="margin:30px 0">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo C – Ferramentas de Triagem e Screening' : 'Anexo C – Herramientas de Triaje y Screening'}</h3>
    
    <div style="background:#FFF8E1;padding:20px;border-radius:8px;margin:16px 0">
      <h4 style="color:#C8A96E;margin-bottom:10px">[Nome da Ferramenta]</h4>
      <p><strong>${pt ? 'Indicação' : 'Indicación'}:</strong> [Quando usar]</p>
      
      <div style="background:#fff;padding:15px;margin:10px 0;border:1px solid #ddd;border-radius:4px">
        <p><strong>${pt ? 'Questão 1' : 'Pregunta 1'}:</strong> [Pergunta da triagem]</p>
        <p style="margin-left:20px">☐ ${pt ? 'Sim' : 'Sí'} ☐ ${pt ? 'Não' : 'No'}</p>
      </div>
      
      [CRIAR CHECKLIST COMPLETO COM 5-8 ITENS]
      
      <p><strong>${pt ? 'Interpretação' : 'Interpretación'}:</strong></p>
      <ul>
        <li>[Resultado positivo: o que significa]</li>
        <li>[Resultado negativo: o que significa]</li>
      </ul>
    </div>
  </div>
  
  <!-- ANEXO D: FRAMEWORKS DE COMUNICAÇÃO -->
  <div style="margin:30px 0;page-break-before:always">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo D – Frameworks de Comunicação' : 'Anexo D – Frameworks de Comunicación'}</h3>
    
    <div style="background:#f0f4f8;padding:20px;border-radius:8px;margin:16px 0">
      <h4 style="color:#0D8C5E;margin-bottom:10px">[Nome da Técnica - ex: SPIKES, NURSE, etc]</h4>
      
      <table style="width:100%;border-collapse:collapse;margin:15px 0">
        <tr style="background:#0D3851;color:#fff">
          <th style="padding:10px;border:1px solid #ddd;width:20%">${pt ? 'Etapa' : 'Etapa'}</th>
          <th style="padding:10px;border:1px solid #ddd">${pt ? 'O que fazer' : 'Qué hacer'}</th>
          <th style="padding:10px;border:1px solid #ddd;width:30%">${pt ? 'Exemplo' : 'Ejemplo'}</th>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #ddd;font-weight:bold">[S]</td>
          <td style="padding:8px;border:1px solid #ddd">[Descrição da etapa]</td>
          <td style="padding:8px;border:1px solid #ddd;font-style:italic">"[Frase exemplo]"</td>
        </tr>
      </table>
    </div>
  </div>
  
  <!-- ANEXO E: FLUXOGRAMAS -->
  <div style="margin:30px 0">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo E – Fluxogramas e Algoritmos de Decisão' : 'Anexo E – Flujogramas y Algoritmos de Decisión'}</h3>
    
    <div style="background:#E6F7F0;padding:20px;border-radius:8px;margin:16px 0">
      <h4 style="color:#0D8C5E;margin-bottom:10px">[Título do Fluxograma]</h4>
      <p>${pt ? 'Descrição textual do fluxo de decisão' : 'Descripción textual del flujo de decisión'}:</p>
      
      <div style="margin:20px 0;padding:15px;background:#fff;border-left:4px solid #0D8C5E">
        <p><strong>INÍCIO:</strong> [Situação inicial]</p>
        <p style="margin-left:20px">↓</p>
        <p><strong>${pt ? 'AVALIAÇÃO' : 'EVALUACIÓN'}:</strong> [Critério de decisão]</p>
        <p style="margin-left:20px">↙ ${pt ? 'SIM' : 'SÍ'} | ${pt ? 'NÃO' : 'NO'} ↘</p>
        <p><strong>${pt ? 'Se SIM' : 'Si SÍ'}:</strong> [Ação A]</p>
        <p><strong>${pt ? 'Se NÃO' : 'Si NO'}:</strong> [Ação B]</p>
      </div>
      
      [CRIAR 2-3 FLUXOGRAMAS EM FORMATO TEXTUAL ESTRUTURADO]
    </div>
  </div>
  
  <!-- ANEXO F: LEGISLAÇÃO -->
  <div style="margin:30px 0;page-break-before:always">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo F – Legislação e Normas Técnicas' : 'Anexo F – Legislación y Normas Técnicas'}</h3>
    
    <div style="background:#FFF0F0;padding:20px;border-radius:8px;margin:16px 0">
      <h4 style="color:#F28B6C;margin-bottom:10px">[Nome da Lei/Resolução]</h4>
      <p><strong>${pt ? 'Número' : 'Número'}:</strong> [Ex: Lei nº 10.741/2003]</p>
      <p><strong>${pt ? 'Ementa' : 'Descripción'}:</strong> [Do que trata]</p>
      <p><strong>${pt ? 'Principais artigos' : 'Principales artículos'}:</strong></p>
      <ul>
        <li><strong>${pt ? 'Art.' : 'Art.'} X:</strong> [Texto ou resumo]</li>
      </ul>
      <p><strong>${pt ? 'Aplicação prática' : 'Aplicación práctica'}:</strong> [Como isso afeta o trabalho do profissional]</p>
    </div>
    
    [LISTAR 3-5 LEGISLAÇÕES RELEVANTES]
  </div>
  
  <!-- ANEXO G: TABELAS DE REFERÊNCIA -->
  <div style="margin:30px 0">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo G – Tabelas de Referência' : 'Anexo G – Tablas de Referencia'}</h3>
    
    <table style="width:100%;border-collapse:collapse;margin:20px 0">
      <caption style="font-weight:bold;margin-bottom:10px;text-align:left;color:#0D3851">[Título da Tabela]</caption>
      <tr style="background:#0D3851;color:#fff">
        <th style="padding:10px;border:1px solid #ddd">[Coluna 1]</th>
        <th style="padding:10px;border:1px solid #ddd">[Coluna 2]</th>
        <th style="padding:10px;border:1px solid #ddd">[Coluna 3]</th>
      </tr>
      <tr>
        <td style="padding:8px;border:1px solid #ddd">[Dado 1]</td>
        <td style="padding:8px;border:1px solid #ddd">[Dado 2]</td>
        <td style="padding:8px;border:1px solid #ddd">[Dado 3]</td>
      </tr>
    </table>
    
    [CRIAR 2-3 TABELAS COM DADOS RELEVANTES]
  </div>
  
  <!-- ANEXO H: RECURSOS -->
  <div style="margin:30px 0;page-break-before:always">
    <h3 style="color:#194A6D;font-size:18px;margin-bottom:16px">${pt ? 'Anexo H – Recursos e Materiais Complementares' : 'Anexo H – Recursos y Materiales Complementarios'}</h3>
    
    <div style="background:#f0f4f8;padding:20px;border-radius:8px;margin:16px 0">
      <h4 style="color:#0D8C5E;margin-bottom:10px">${pt ? 'Websites e Portais' : 'Sitios Web y Portales'}</h4>
      <ul>
        <li><strong>[Nome do Site]</strong> - [URL] - [Descrição breve]</li>
      </ul>
      
      <h4 style="color:#0D8C5E;margin:20px 0 10px">${pt ? 'Aplicativos Recomendados' : 'Aplicaciones Recomendadas'}</h4>
      <ul>
        <li><strong>[Nome do App]</strong> - [Plataforma] - [Para que serve]</li>
      </ul>
      
      <h4 style="color:#0D8C5E;margin:20px 0 10px">${pt ? 'Materiais de Apoio' : 'Materiales de Apoyo'}</h4>
      <ul>
        <li>[Tipo de material] - [Onde encontrar]</li>
      </ul>
    </div>
  </div>
</section>

REGRAS CRÍTICAS:
- TODOS os 8 anexos (A-H) devem ser gerados
- Cada anexo deve ter conteúdo SUBSTANTIVO (mínimo 300 palavras)
- Use tabelas, listas e formatação visual
- Escalas devem ser REAIS e validadas (não inventar)
- Legislação deve ser REAL (Brasil para PT, país hispânico para ES)
- Fluxogramas em formato textual claro
- NUNCA deixar placeholders como "[preencher]"

TEMA: ${d.nm}
PÚBLICO: ${d.pa}

${baseContent ? 'CONTEXTO DO CURSO:\n' + baseContent.substring(0, 5000) : ''}`;

  var html = await callOpenAI(prompt, 16000);
  return extractHTML(html);
}

function assembleLivroHTML_v9(parts, lang, d) {
  var pt = lang === 'pt';
  
  var html = `<!DOCTYPE html>
<html lang="${pt ? 'pt-BR' : 'es'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${pt ? 'Livro' : 'Libro'}: ${esc(d.nm)}</title>
${LIVRO_CSS}
</head>
<body>

${parts.join('\n\n')}

</body>
</html>`;
  
  return html;
}

function livroCSS() {
  return `*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Source Sans 3",sans-serif;max-width:800px;margin:0 auto;padding:40px 32px;color:#2C2C2C;line-height:1.8;text-align:justify}
h1,h2,h3{font-family:"Playfair Display",serif;color:#0D3851;text-align:left}
h1{font-size:28px;margin:24px 0 16px}
h2{font-size:22px;margin:32px 0 14px;padding-bottom:8px;border-bottom:2px solid #0D8C5E}
h3{font-size:17px;margin:20px 0 10px;color:#194A6D}
p{margin-bottom:12px;font-size:15px}
ul,ol{margin:10px 0 16px 24px}
li{margin-bottom:6px}
.cover-page{text-align:center;padding:80px 20px;min-height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center}
.credits-page{padding:60px 40px;font-size:13px;color:#666}
.box-saiba{background:#E6F7F0;border-left:4px solid #0D8C5E;padding:16px 20px;margin:16px 0;border-radius:0 8px 8px 0}
.box-pratica{background:#FFF8E1;border-left:4px solid #C8A96E;padding:16px 20px;margin:16px 0;border-radius:0 8px 8px 0}
.box-alerta{background:#FFF0F0;border-left:4px solid #F28B6C;padding:16px 20px;margin:16px 0;border-radius:0 8px 8px 0}
.pontos-chave{background:#f0f4f8;padding:20px 24px;border-radius:8px;margin:20px 0}
.pontos-chave h3{color:#0D8C5E}
table{width:100%;border-collapse:collapse;margin:16px 0}
th,td{padding:8px 12px;border:1px solid #ddd;font-size:14px;text-align:left}
th{background:#0D3851;color:#fff}
blockquote{border-left:3px solid #C8A96E;padding:12px 20px;margin:16px 0;font-style:italic;color:#555}
.media-placeholder{margin:20px 0;border-radius:8px}
dl{margin:20px 0}
dt{font-weight:bold;color:#0D3851;margin-top:16px}
dd{margin-left:20px;margin-bottom:10px}`;
}

function printCSS() {
  return `@page{size:A4;margin:2.5cm 2cm}
@media print{
  .cover-page{page-break-after:always;min-height:auto}
  .credits-page{page-break-after:always}
  section{page-break-before:always}
  h2{page-break-after:avoid}
  h3{page-break-after:avoid}
  .box-saiba,.box-pratica,.box-alerta,.pontos-chave,table,blockquote{page-break-inside:avoid}
  .media-placeholder{display:none}
  img{max-width:100%}
  body{font-size:12pt;max-width:none;padding:0}
}`;
}

function showLivroResult(sid, htmlContent, lang) {
  var resultBox = $(sid + '-result');
  if (!resultBox) return;
  
  resultBox.style.display = '';
  resultBox.innerHTML = `
    <div class="cb" style="max-height:400px;overflow-y:auto;margin-bottom:16px">
      <pre style="white-space:pre-wrap;font-size:11px">${esc(htmlContent.substring(0, 1500))}...</pre>
    </div>
    <div class="ar" style="gap:12px">
      <button class="btn btn-g" onclick="downloadLivroHTML('${sid}')">⬇️ Baixar HTML</button>
      <button class="btn btn-g" onclick="downloadLivroPDF('${sid}')">📄 Baixar PDF</button>
      <button class="btn btn-o" onclick="previewLivro('${sid}')">👁️ Preview</button>
    </div>
  `;
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
  
  var filename = P.cod + '_livro_' + (sid === 'livro-pt' ? 'pt' : 'es') + '.pdf';
  generatePDF(htmlContent, filename);
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
  toast('Download iniciado: ' + filename);
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
