// ══════════════════════════════════════════════════════
// SITE TEMPLATES v1.0 — Fase 2 Template Engine
// Loaded by index.html as separate <script>
// ══════════════════════════════════════════════════════

// CSS global do site gerado
var SITE_CSS=`
:root{--az:#0D3851;--az2:#194A6D;--az3:#2A6A8F;--vd:#0D8C5E;--vdp:#E6F7F0;--cr:#F7F5F0;--dou:#C8A96E;--cor:#F28B6C;--tx:#2C2C2C;--txl:#666}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Source Sans 3',sans-serif;background:var(--cr);color:var(--tx);line-height:1.7}
.site-header{background:linear-gradient(135deg,var(--az),var(--az2));color:#fff;padding:18px 24px;position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 12px rgba(13,56,81,.3)}
.site-header h1{font-family:'Playfair Display',serif;font-size:22px;margin:0}
.lang-btn{background:var(--az3);color:#fff;border:none;padding:7px 14px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;margin-left:6px}
.lang-btn.active{background:var(--vd)}
.progress-top{height:4px;background:rgba(13,56,81,.1);position:sticky;top:58px;z-index:99}
.progress-top-fill{height:100%;background:var(--vd);width:0;transition:width .3s}
nav.site-nav{background:#fff;border-bottom:1px solid rgba(13,56,81,.08);padding:0 16px;display:flex;overflow-x:auto;position:sticky;top:62px;z-index:98}
nav.site-nav a{padding:12px 16px;font-size:13px;font-weight:600;color:var(--txl);text-decoration:none;white-space:nowrap;border-bottom:3px solid transparent;transition:.2s}
nav.site-nav a:hover,nav.site-nav a.active{color:var(--az);border-bottom-color:var(--vd)}
.container{max-width:900px;margin:0 auto;padding:30px 20px 80px}
section.sec{background:#fff;border-radius:16px;padding:32px;margin-bottom:24px;box-shadow:0 2px 12px rgba(13,56,81,.06);border:1px solid rgba(13,56,81,.05)}
section.sec h2{font-family:'Playfair Display',serif;color:var(--az);font-size:26px;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid var(--vdp)}
section.sec h3{color:var(--az2);font-size:18px;margin:20px 0 10px}
section.sec p{margin-bottom:12px}
.hero{background:linear-gradient(135deg,var(--az) 0%,var(--az2) 50%,var(--az3) 100%);color:#fff;padding:60px 32px;border-radius:16px;text-align:center;margin-bottom:24px}
.hero h2{color:#fff;border:none;font-size:36px;margin-bottom:16px}
.hero p{color:rgba(255,255,255,.8);font-size:18px;max-width:700px;margin:0 auto}
/* Components */
.pilula{background:var(--vdp);border-left:4px solid var(--vd);border-radius:8px;padding:16px 20px;margin:16px 0}
.pilula .pilula-q{display:block;font-weight:700;color:var(--vd);margin-bottom:6px;cursor:pointer}
.pilula .pilula-a{display:none;color:var(--tx)}
.pilula.open .pilula-a{display:block}
.fc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;margin:16px 0}
.fc-card{perspective:800px;height:200px;cursor:pointer}
.fc-inner{position:relative;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d}
.fc-card.flipped .fc-inner{transform:rotateY(180deg)}
.fc-front,.fc-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:12px;display:flex;align-items:center;justify-content:center;padding:20px;text-align:center;font-size:15px}
.fc-front{background:var(--az);color:#fff;font-weight:700}
.fc-back{background:var(--vdp);color:var(--tx);transform:rotateY(180deg)}
.accordion{margin:12px 0;border:1px solid rgba(13,56,81,.1);border-radius:10px;overflow:hidden}
.acc-head{padding:14px 18px;background:rgba(13,56,81,.03);cursor:pointer;font-weight:600;display:flex;justify-content:space-between;align-items:center}
.acc-head::after{content:'+';font-size:20px;color:var(--vd);transition:.3s}
.accordion.open .acc-head::after{content:'-'}
.acc-body{display:none;padding:14px 18px;border-top:1px solid rgba(13,56,81,.08)}
.accordion.open .acc-body{display:block}
.timeline{position:relative;padding-left:30px;margin:20px 0}
.timeline::before{content:'';position:absolute;left:12px;top:0;bottom:0;width:3px;background:var(--vd)}
.tl-item{position:relative;margin-bottom:24px;padding-left:24px}
.tl-item::before{content:'';position:absolute;left:-24px;top:6px;width:14px;height:14px;border-radius:50%;background:var(--vd);border:3px solid var(--vdp)}
.tl-item h4{color:var(--az);margin-bottom:4px}
.box-rf{background:rgba(242,139,108,.06);border:1px solid rgba(242,139,108,.25);border-left:4px solid var(--cor);border-radius:8px;padding:16px 20px;margin:16px 0}
.box-rf h4{color:var(--cor);margin-bottom:8px}
.box-bp{background:var(--vdp);border:1px solid rgba(13,140,94,.2);border-left:4px solid var(--vd);border-radius:8px;padding:16px 20px;margin:16px 0}
.box-bp h4{color:var(--vd);margin-bottom:8px}
.box-ev{background:rgba(200,169,110,.06);border:1px solid rgba(200,169,110,.25);border-left:4px solid var(--dou);border-radius:8px;padding:16px 20px;margin:16px 0}
.box-ev h4{color:var(--dou);margin-bottom:8px}
.box-cc{background:rgba(25,74,109,.04);border:1px solid rgba(25,74,109,.15);border-left:4px solid var(--az2);border-radius:8px;padding:16px 20px;margin:16px 0}
.box-cc h4{color:var(--az2);margin-bottom:8px}
.checklist{margin:16px 0;padding:0;list-style:none}
.checklist li{padding:8px 0 8px 30px;position:relative;border-bottom:1px solid rgba(13,56,81,.06)}
.checklist li::before{content:'\\2610';position:absolute;left:0;color:var(--vd);font-size:18px}
.err-table{width:100%;border-collapse:collapse;margin:16px 0;border-radius:8px;overflow:hidden}
.err-table th{background:var(--az);color:#fff;padding:10px 14px;font-size:13px;text-align:left}
.err-table td{padding:10px 14px;font-size:14px;border-bottom:1px solid rgba(13,56,81,.06)}
.err-table tr:nth-child(even){background:rgba(13,56,81,.02)}
.err-col-bad{color:var(--cor);font-weight:600}
.err-col-good{color:var(--vd);font-weight:600}
.tbl-data{width:100%;border-collapse:collapse;margin:16px 0;border-radius:8px;overflow:hidden}
.tbl-data th{background:var(--az);color:#fff;padding:10px 14px;font-size:13px}
.tbl-data td{padding:10px 14px;font-size:14px;border-bottom:1px solid rgba(13,56,81,.08)}
.tbl-data tr:nth-child(even){background:rgba(13,56,81,.02)}
.nuvem{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding:20px;margin:16px 0;background:rgba(13,56,81,.03);border-radius:12px}
.nuvem span{padding:6px 14px;border-radius:20px;font-weight:600}
.mapa{padding:20px;margin:16px 0;background:#fff;border:1px solid rgba(13,56,81,.1);border-radius:12px}
.ascii-box{font-family:'Courier New',monospace;background:#0d1117;color:#e6edf3;padding:20px;border-radius:8px;margin:16px 0;white-space:pre;overflow-x:auto;font-size:13px;line-height:1.5}
.mini-quiz{margin:16px 0;padding:16px 20px;background:rgba(13,56,81,.03);border-radius:10px}
.mini-quiz h4{margin-bottom:12px;color:var(--az)}
.mq-q{margin-bottom:16px}
.mq-q p{font-weight:600;margin-bottom:6px}
.mq-q label{display:block;padding:6px 12px;margin:3px 0;border-radius:6px;cursor:pointer;font-size:14px}
.mq-q label:hover{background:rgba(13,56,81,.05)}
.mq-fb{display:none;padding:8px 12px;border-radius:6px;margin-top:6px;font-size:13px}
.quiz-box{padding:24px;background:#fff;border-radius:16px;border:2px solid var(--vd)}
.quiz-box h3{text-align:center;color:var(--az);margin-bottom:20px}
.qz-q{display:none;padding:16px 0}
.qz-q.active{display:block}
.qz-q p.qnum{font-size:13px;color:var(--txl);margin-bottom:6px}
.qz-q p.qtxt{font-size:17px;font-weight:600;margin-bottom:14px}
.qz-q label{display:block;padding:10px 14px;margin:4px 0;border:1.5px solid rgba(13,56,81,.12);border-radius:8px;cursor:pointer;font-size:15px}
.qz-q label:hover{border-color:var(--az3);background:rgba(13,56,81,.02)}
.qz-nav{display:flex;justify-content:space-between;margin-top:16px}
.qz-btn{padding:10px 24px;border:none;border-radius:8px;font-weight:600;cursor:pointer;font-size:14px}
.qz-btn-p{background:var(--vd);color:#fff}.qz-btn-s{background:rgba(13,56,81,.08);color:var(--tx)}
.qz-result{text-align:center;padding:30px}
.qz-score{font-size:64px;font-weight:700;color:var(--vd);font-family:'Playfair Display',serif}
.diag-wizard{padding:24px;background:var(--vdp);border-radius:16px;border:2px solid rgba(13,140,94,.2);margin:16px 0}
.diag-q{display:none;text-align:center;padding:20px 0}
.diag-q.active{display:block}
.diag-q p{font-size:18px;font-weight:600;margin-bottom:16px}
.diag-opts label{display:inline-block;padding:10px 20px;margin:4px;border:1.5px solid var(--vd);border-radius:8px;cursor:pointer;font-size:14px}
.diag-opts label:hover{background:var(--vd);color:#fff}
.diag-fb{text-align:center;padding:20px;font-size:20px;font-weight:700}
.floating-btns{position:fixed;bottom:20px;right:20px;display:flex;flex-direction:column;gap:10px;z-index:200}
.float-btn{width:48px;height:48px;border-radius:50%;border:none;font-size:22px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center}
.fb-top{background:#fff;color:var(--az)}
.fb-wpp{background:#25D366;color:#fff;animation:pulse-wpp 2s infinite}
.fb-wpp:hover{transform:scale(1.1);box-shadow:0 4px 16px rgba(37,211,102,.5)}
.fb-ia{background:var(--az);color:#fff}
.fb-ia:hover{transform:scale(1.1);box-shadow:0 4px 16px rgba(13,56,81,.5)}
.fb-wpp svg,.fb-ia svg{width:26px;height:26px;fill:currentColor}
@keyframes pulse-wpp{0%,100%{box-shadow:0 2px 8px rgba(37,211,102,.3)}50%{box-shadow:0 4px 20px rgba(37,211,102,.6)}}
.fb-top{background:var(--az);color:#fff}
.fb-chat{background:var(--vd);color:#fff}
[data-lang]{display:none}
[data-lang="pt"]{display:block}
.diag-opts label[data-lang]{display:none}
.diag-opts label[data-lang="pt"]{display:inline-block}
.qz-q label[data-lang]{display:none}
.qz-q label[data-lang="pt"]{display:block}
.mini-quiz label[data-lang]{display:none}
.mini-quiz label[data-lang="pt"]{display:block}
@media(max-width:700px){.container{padding:16px 12px}section.sec{padding:20px}nav.site-nav a{padding:10px 12px;font-size:12px}.hero{padding:40px 20px}.hero h2{font-size:28px}.fc-grid{grid-template-columns:1fr}}
/* ESTUDO DE CASO INTERATIVO */
.case-study{border:2px solid var(--az3);border-radius:12px;overflow:hidden;margin:20px 0}
.case-study-header{background:linear-gradient(135deg,var(--az),var(--az3));color:#fff;padding:16px 20px;display:flex;align-items:center;gap:10px}
.case-study-header h4{margin:0;font-size:16px}
.case-study-narrative{padding:20px;line-height:1.8;font-size:15px;background:rgba(13,56,81,.02);border-bottom:1px solid rgba(13,56,81,.08)}
.case-study-questions{padding:20px;background:rgba(0,196,14,.03);border-bottom:1px solid rgba(0,196,14,.1);display:none}
.case-study-questions h4{color:var(--vd);margin-bottom:12px;font-size:14px;text-transform:uppercase;letter-spacing:.5px}
.case-study-questions ol{padding-left:20px;line-height:1.8}
.case-study-questions li{margin-bottom:10px;color:var(--tx)}
.case-study-analysis{padding:20px;background:rgba(231,188,80,.05);display:none}
.case-study-analysis h4{color:var(--dou);margin-bottom:12px;font-size:14px;text-transform:uppercase;letter-spacing:.5px}
.case-study-analysis p{line-height:1.8}
.case-study-btn{display:inline-block;padding:8px 18px;border:none;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;margin:12px 20px;transition:all .2s}
.case-study-btn-q{background:var(--vd);color:#fff}
.case-study-btn-q:hover{background:#00a00b}
.case-study-btn-a{background:var(--dou);color:#fff}
.case-study-btn-a:hover{background:#c9a020}
@media print{.case-study-questions,.case-study-analysis{display:block!important}.case-study-btn{display:none}}
@media(max-width:700px){.case-study-narrative,.case-study-questions,.case-study-analysis{padding:14px}}
/* ACESSIBILIDADE */
*:focus-visible{outline:3px solid var(--vd);outline-offset:2px;border-radius:4px}
.skip-nav{position:absolute;top:-999px;left:10px;background:var(--az);color:#fff;padding:10px 20px;z-index:9999;border-radius:0 0 8px 8px;font-weight:600}
.skip-nav:focus{top:0}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
@media(prefers-contrast:more){.sec{border:2px solid #000}.pilula-q,.fc-card,.acc-head{border:2px solid #000}}
@media print{.site-header,.progress-top,nav.site-nav,.floating-btns,.diag-wizard,.quiz-box,.lang-btn,.skip-nav{display:none}.container{max-width:none;padding:0}section.sec{box-shadow:none;page-break-inside:avoid;border:1px solid #ddd}}
`;

// JS global do site gerado
var SITE_JS=`
function switchLang(l){document.querySelectorAll('[data-lang]').forEach(function(e){var show=e.getAttribute('data-lang')===l;if(e.tagName==='LABEL'&&e.closest('.diag-opts')){e.style.display=show?'inline-block':'none'}else if(e.tagName==='LABEL'){e.style.display=show?'block':'none'}else{e.style.display=show?'block':'none'}});document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-l')===l)})}
document.addEventListener('click',function(e){
  var t=e.target;
  // Pilulas
  if(t.classList.contains('pilula-q')){t.closest('.pilula').classList.toggle('open');return}
  // Flashcards
  var fc=t.closest('.fc-card');if(fc){fc.classList.toggle('flipped');return}
  // Accordion
  var ah=t.closest('.acc-head');if(ah){ah.closest('.accordion').classList.toggle('open');return}
  // Estudo de caso — botões reveal
  var csBtn=t.closest('.case-study-btn');
  if(csBtn){
    var target=csBtn.getAttribute('data-target');
    var box=csBtn.closest('.case-study').querySelector('.'+target);
    if(box){
      var show=box.style.display==='none';
      box.style.display=show?'block':'none';
      if(target==='case-study-questions'){csBtn.textContent=show?'Ocultar Questões':'Mostrar Questões Reflexivas'}
      if(target==='case-study-analysis'){csBtn.textContent=show?'Ocultar Análise':'Ver Análise Especializada'}
    }
    return;
  }
});
// Progress bar on scroll
window.addEventListener('scroll',function(){var h=document.documentElement;var pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;var f=document.querySelector('.progress-top-fill');if(f)f.style.width=pct+'%'});
// Quiz engine
var qzCur=0,qzAns={};
function qzNav(d){var qs=document.querySelectorAll('.qz-q');if(!qs.length)return;qs[qzCur].classList.remove('active');qzCur=Math.max(0,Math.min(qzCur+d,qs.length-1));qs[qzCur].classList.add('active');document.getElementById('qz-prog').textContent=(qzCur+1)+'/'+qs.length}
function qzSel(qi,v){qzAns[qi]=v}
function qzEnd(){var qs=document.querySelectorAll('.qz-q');var total=qs.length,cor=0;qs.forEach(function(q,i){var c=q.getAttribute('data-correct');if(qzAns[i]===c)cor++});var pct=Math.round(cor/total*100);document.getElementById('qz-result').style.display='block';document.querySelector('.qz-score').textContent=pct+'%';document.getElementById('qz-detail').textContent=cor+' de '+total+' corretas';qs.forEach(function(q){q.style.display='none'});document.querySelector('.qz-nav').style.display='none'}
function qzReset(){qzCur=0;qzAns={};document.getElementById('qz-result').style.display='none';document.querySelector('.qz-nav').style.display='flex';var qs=document.querySelectorAll('.qz-q');qs.forEach(function(q,i){q.style.display='';q.classList.toggle('active',i===0);q.querySelectorAll('input').forEach(function(inp){inp.checked=false})});document.getElementById('qz-prog').textContent='1/'+qs.length}
// Diagnostic wizard
var diagCur=0,diagScore=0;
function diagNext(pts){diagScore+=pts;var qs=document.querySelectorAll('.diag-q');qs[diagCur].classList.remove('active');diagCur++;if(diagCur<qs.length){qs[diagCur].classList.add('active')}else{var fb=document.getElementById('diag-fb');var pct=Math.round(diagScore/(diagCur*2)*100);var emoji=pct>=70?'\\uD83D\\uDFE2':pct>=40?'\\uD83D\\uDFE1':'\\uD83D\\uDD34';fb.innerHTML=emoji+' '+pct+'% — '+(pct>=70?'Excelente!':pct>=40?'Bom, mas pode melhorar':'Oportunidade de aprendizado');fb.style.display='block'}}
`;

// === VALIDATION & SANITIZATION ===
function validateSiteData(data){
  var w=[];// warnings
  // Normalize key names (LLM may use different keys)
  if(!data.sections&&data.capitulos){data.sections=data.capitulos;delete data.capitulos}
  if(!data.diagnostica&&data.diagnostic){data.diagnostica=data.diagnostic}
  if(!data.quiz&&data.quiz_final){data.quiz=data.quiz_final}
  if(!data.glossario&&data.glossary){data.glossario=data.glossary}
  if(!data.referencias&&data.references){data.referencias=data.references}
  // Ensure arrays
  if(!Array.isArray(data.sections))data.sections=[];
  if(!Array.isArray(data.diagnostica))data.diagnostica=[];
  if(!Array.isArray(data.glossario))data.glossario=[];
  if(!Array.isArray(data.quiz))data.quiz=[];
  // Normalize intro
  if(typeof data.intro==='string')data.intro={pt:data.intro,es:data.intro};
  if(!data.intro)data.intro={pt:'',es:''};
  // Validate sections
  data.sections.forEach(function(sec,i){
    if(!sec.titulo_pt&&sec.titulo){sec.titulo_pt=sec.titulo}
    if(!sec.titulo_pt){sec.titulo_pt='Capitulo '+(i+1);w.push('Secao '+(i+1)+' sem titulo')}
    if(!sec.titulo_es)sec.titulo_es=sec.titulo_pt;
    if(!sec.texto_pt&&sec.texto){sec.texto_pt=sec.texto}
    if(!sec.texto_es)sec.texto_es='';
    // Normalize componentes key
    if(!sec.componentes&&sec.components){sec.componentes=sec.components;delete sec.components}
    if(!sec.componentes&&sec.recursos){sec.componentes=sec.recursos;delete sec.recursos}
    if(!Array.isArray(sec.componentes))sec.componentes=[];
    // Validate each component
    sec.componentes=sec.componentes.filter(function(c){
      if(!c||typeof c!=='object')return false;
      if(!c.tipo&&c.type){c.tipo=c.type;delete c.type}
      if(!c.tipo){w.push('Componente sem tipo na secao '+(i+1));return false}
      c.tipo=c.tipo.toLowerCase().trim();
      // Fix common array issues
      ['items','items_pt','items_es','pares','cards','etapas','questoes','palavras','opcoes','headers','linhas'].forEach(function(k){
        if(c[k]&&!Array.isArray(c[k])){
          if(typeof c[k]==='string')c[k]=c[k].split(/[;,\n]+/).map(function(s){return s.trim()}).filter(Boolean);
          else c[k]=[c[k]];
        }
      });
      return true;
    });
    if(sec.componentes.length===0)w.push('Secao '+(i+1)+' sem componentes');
  });
  // Validate diagnostica
  data.diagnostica=data.diagnostica.filter(function(q){
    if(!q||typeof q!=='object')return false;
    if(!q.pergunta_pt&&q.pergunta){q.pergunta_pt=q.pergunta}
    if(!q.pergunta_pt)return false;
    if(!q.pergunta_es)q.pergunta_es=q.pergunta_pt;
    return true;
  });
  // Validate quiz
  data.quiz=data.quiz.filter(function(q){
    if(!q||typeof q!=='object')return false;
    if(!q.pergunta_pt&&q.pergunta){q.pergunta_pt=q.pergunta}
    if(!q.pergunta_pt)return false;
    if(!q.pergunta_es)q.pergunta_es=q.pergunta_pt;
    if(!q.correta&&q.correct){q.correta=q.correct}
    if(!q.correta)q.correta='a';
    if(!Array.isArray(q.opcoes)&&q.alternativas){q.opcoes=q.alternativas}
    if(!Array.isArray(q.opcoes)&&q.options){q.opcoes=q.options}
    if(!Array.isArray(q.opcoes))q.opcoes=[];
    // Normalize option format
    q.opcoes=q.opcoes.map(function(o){
      if(typeof o==='string')return{pt:o,es:o};
      return o;
    });
    return true;
  });
  // Validate glossario
  data.glossario=data.glossario.filter(function(g){
    if(!g||typeof g!=='object')return false;
    if(!g.termo_pt&&g.termo){g.termo_pt=g.termo}
    if(!g.termo_pt)return false;
    if(!g.termo_es)g.termo_es=g.termo_pt;
    if(!g.definicao_pt&&g.definicao){g.definicao_pt=g.definicao}
    if(!g.definicao_es)g.definicao_es=g.definicao_pt||'';
    return true;
  });
  // Normalize referencias
  if(typeof data.referencias==='string')data.referencias=data.referencias.split('\n').filter(Boolean);
  if(!Array.isArray(data.referencias))data.referencias=[];
  if(data.quiz.length<10)w.push('Quiz: '+data.quiz.length+'/10 questoes');
  if(data.diagnostica.length<5&&data.diagnostica.length>0)w.push('Diagnostica: '+data.diagnostica.length+'/5');
  data._warnings=w;
  return data;
}

function validateSocialData(data){
  var c=data.cards||[];
  if(!Array.isArray(c)){
    c=[data.card1,data.card2,data.card3,data.card4,data.card5].filter(Boolean);
  }
  // Ensure 5 cards, fill missing with empty
  while(c.length<5)c.push({});
  // Normalize each card
  var tipos=['impacto','sabia','dica','mito','pergunta'];
  c.forEach(function(card,i){
    if(!card.tipo)card.tipo=tipos[i]||'';
    // Fix items as string -> array
    if(card.items&&typeof card.items==='string'){
      card.items=card.items.split(/[;,\n]+/).map(function(s){return s.trim()}).filter(Boolean);
    }
    if(!card.legenda)card.legenda='';
  });
  data.cards=c;
  return data;
}

// === ASSEMBLY FUNCTION ===
function assembleSiteHTML(data, title, params){
  params=params||{};
  var d=data;
  var sections=d.sections||d.capitulos||[];
  var diagnostica=d.diagnostica||d.diagnostic||null;
  var glossario=d.glossario||d.glossary||[];
  var quiz=d.quiz||d.quiz_final||[];
  var referencias=d.referencias||d.references||'';
  var anexos=d.anexos||d.annexes||'';
  var intro=d.intro||d.introducao||'';

  var h='<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>'+E(title)+'</title>\n';
  h+='<link rel="icon" href="'+FAVICON+'" type="image/png">\n';
  h+='<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">\n';
  h+='<style>\n'+SITE_CSS+'\n</style>\n</head>\n<body>\n';

  // SKIP NAV (acessibilidade)
  h+='<a class="skip-nav" href="#main-content">Pular para o conteudo principal</a>\n';

  // HEADER with logo + flags
  h+='<header class="site-header" role="banner">\n';
  h+='<div style="display:flex;align-items:center;gap:12px"><img src="'+LOGO_SM+'" alt="Cura Vitae - Instituto de Formacao em Geriatria, Gerontologia e Saude do Idoso" style="height:40px;border-radius:6px"><h1>'+E(title)+'</h1></div>\n';
  h+='<div style="display:flex;align-items:center;gap:6px" role="group" aria-label="Selecionar idioma">';
  h+='<button class="lang-btn active" data-l="pt" onclick="switchLang(\'pt\')" aria-label="Portugues" style="display:flex;align-items:center;gap:5px"><img src="'+FLAG_BR+'" alt="Brasil" style="height:14px;border-radius:2px"><img src="'+FLAG_PT+'" alt="Portugal" style="height:14px;border-radius:2px"> PT</button>';
  h+='<button class="lang-btn" data-l="es" onclick="switchLang(\'es\')" aria-label="Espanol" style="display:flex;align-items:center;gap:5px"><img src="'+FLAG_ES+'" alt="Espana" style="height:14px;border-radius:2px"> ES</button>';
  h+='</div>\n</header>\n';
  h+='<div class="progress-top"><div class="progress-top-fill"></div></div>\n';

  // NAV
  h+='<nav class="site-nav" role="navigation" aria-label="Capitulos do curso">\n<a href="#hero">Inicio</a>\n';
  sections.forEach(function(s,i){h+='<a href="#cap'+(i+1)+'">'+E(s.titulo_pt||s.titulo||('Cap.'+(i+1)))+'</a>\n'});
  h+='<a href="#glossario">Glossario</a>\n<a href="#refs">Referencias</a>\n<a href="#quiz">Quiz</a>\n</nav>\n';

  h+='<main class="container" id="main-content" role="main">\n';

  // HERO
  h+='<div class="hero" id="hero">\n';
  h+='<div data-lang="pt"><h2>'+E(title)+'</h2><p>'+E(typeof intro==='string'?intro:(intro.pt||''))+'</p></div>\n';
  h+='<div data-lang="es"><h2>'+E(title)+'</h2><p>'+E(intro.es||intro.pt||'')+'</p></div>\n';
  h+='</div>\n';

  // DIAGNOSTICA
  if(diagnostica&&diagnostica.length){
    h+='<section class="diag-wizard" id="diagnostica" role="form" aria-label="Questionario diagnostico">\n';
    h+='<h3 data-lang="pt" style="text-align:center;margin-bottom:16px;font-family:Playfair Display,serif;color:var(--az)">Questionario Diagnostico</h3>\n';
    h+='<h3 data-lang="es" style="text-align:center;margin-bottom:16px;font-family:Playfair Display,serif;color:var(--az)">Cuestionario Diagnostico</h3>\n';
    diagnostica.forEach(function(q,i){
      h+='<div class="diag-q'+(i===0?' active':'')+'" role="group" aria-label="Questao '+(i+1)+'">\n';
      h+='<p data-lang="pt">'+E(q.pergunta_pt||q.pergunta||'')+'</p>\n';
      h+='<p data-lang="es">'+E(q.pergunta_es||'')+'</p>\n';
      h+='<div class="diag-opts" role="radiogroup">\n';
      h+='<label onclick="diagNext(2)" data-lang="pt" role="button" tabindex="0">'+E(q.opcao_a_pt||'Sim')+'</label>\n';
      h+='<label onclick="diagNext(1)" data-lang="pt" role="button" tabindex="0">'+E(q.opcao_b_pt||'Parcialmente')+'</label>\n';
      h+='<label onclick="diagNext(0)" data-lang="pt" role="button" tabindex="0">'+E(q.opcao_c_pt||'Nao')+'</label>\n';
      h+='<label onclick="diagNext(2)" data-lang="es" role="button" tabindex="0">'+E(q.opcao_a_es||'Si')+'</label>\n';
      h+='<label onclick="diagNext(1)" data-lang="es" role="button" tabindex="0">'+E(q.opcao_b_es||'Parcialmente')+'</label>\n';
      h+='<label onclick="diagNext(0)" data-lang="es" role="button" tabindex="0">'+E(q.opcao_c_es||'No')+'</label>\n';
      h+='</div>\n</div>\n';
    });
    h+='<div class="diag-fb" id="diag-fb" style="display:none"></div>\n';
    h+='</div>\n';
  }

  // SECTIONS / CHAPTERS
  sections.forEach(function(sec,si){
    h+='<section class="sec" id="cap'+(si+1)+'">\n';
    h+='<h2 data-lang="pt">'+E(sec.titulo_pt||sec.titulo||'')+'</h2>\n';
    h+='<h2 data-lang="es">'+E(sec.titulo_es||sec.titulo||'')+'</h2>\n';

    // Main text content
    if(sec.texto_pt||sec.texto){
      h+='<div data-lang="pt">'+nl2p(sec.texto_pt||sec.texto||'')+'</div>\n';
      h+='<div data-lang="es">'+nl2p(sec.texto_es||'')+'</div>\n';
    }

    // Components
    var comps=sec.componentes||sec.components||sec.recursos||[];
    comps.forEach(function(comp){
      h+=renderComponent(comp);
    });

    h+='</section>\n\n';
  });

  // GLOSSARIO
  if(glossario.length){
    h+='<section class="sec" id="glossario">\n';
    h+='<h2 data-lang="pt">Glossario</h2>\n<h2 data-lang="es">Glosario</h2>\n';
    h+='<div data-lang="pt"><dl>\n';
    glossario.forEach(function(g){h+='<dt style="font-weight:700;color:var(--az);margin-top:12px">'+E(g.termo_pt||g.termo||'')+'</dt><dd>'+E(g.definicao_pt||g.definicao||'')+'</dd>\n'});
    h+='</dl></div>\n';
    h+='<div data-lang="es"><dl>\n';
    glossario.forEach(function(g){h+='<dt style="font-weight:700;color:var(--az);margin-top:12px">'+E(g.termo_es||'')+'</dt><dd>'+E(g.definicao_es||'')+'</dd>\n'});
    h+='</dl></div>\n';
    h+='</section>\n\n';
  }

  // REFERENCIAS
  if(referencias){
    h+='<section class="sec" id="refs">\n<h2>Referencias</h2>\n';
    if(typeof referencias==='string'){h+='<div>'+nl2p(referencias)+'</div>\n'}
    else if(Array.isArray(referencias)){h+='<ol style="padding-left:20px">\n';referencias.forEach(function(r){h+='<li style="margin-bottom:6px;font-size:14px">'+E(typeof r==='string'?r:r.texto||r.ref||'')+'</li>\n'});h+='</ol>\n'}
    h+='</section>\n\n';
  }

  // QUIZ 12Q
  if(quiz.length){
    h+='<section class="sec" id="quiz">\n';
    h+='<div class="quiz-box">\n';
    h+='<h3 data-lang="pt">Quiz Final</h3>\n<h3 data-lang="es">Cuestionario Final</h3>\n';
    h+='<p style="text-align:center;color:var(--txl);margin-bottom:16px" id="qz-prog">1/'+quiz.length+'</p>\n';
    quiz.forEach(function(q,i){
      h+='<div class="qz-q'+(i===0?' active':'')+'" data-correct="'+E(q.correta||q.correct||'a')+'">\n';
      h+='<p class="qnum" data-lang="pt">Questao '+(i+1)+'/'+quiz.length+'</p>\n';
      h+='<p class="qnum" data-lang="es">Pregunta '+(i+1)+'/'+quiz.length+'</p>\n';
      h+='<p class="qtxt" data-lang="pt">'+E(q.pergunta_pt||q.pergunta||'')+'</p>\n';
      h+='<p class="qtxt" data-lang="es">'+E(q.pergunta_es||'')+'</p>\n';
      var opts=q.opcoes||q.alternativas||q.options||[];
      opts.forEach(function(op,oi){
        var letter=String.fromCharCode(97+oi);
        var txt=typeof op==='string'?op:(op.pt||op.texto||'');
        h+='<label data-lang="pt"><input type="radio" name="qz'+i+'" value="'+letter+'" onchange="qzSel('+i+',\''+letter+'\')"> '+E(txt)+'</label>\n';
        var txtEs=typeof op==='string'?op:(op.es||'');
        h+='<label data-lang="es"><input type="radio" name="qz'+i+'e" value="'+letter+'" onchange="qzSel('+i+',\''+letter+'\')"> '+E(txtEs||txt)+'</label>\n';
      });
      h+='</div>\n';
    });
    h+='<div class="qz-nav"><button class="qz-btn qz-btn-s" onclick="qzNav(-1)">Anterior</button><button class="qz-btn qz-btn-p" onclick="qzNav(1)">Proxima</button><button class="qz-btn qz-btn-p" onclick="qzEnd()" style="background:var(--dou)">Finalizar</button></div>\n';
    h+='<div id="qz-result" style="display:none"><div class="qz-result"><p class="qz-score"></p><p id="qz-detail"></p><button class="qz-btn qz-btn-p" onclick="qzReset()" style="margin-top:16px">Refazer</button></div></div>\n';
    h+='</div>\n</section>\n\n';
  }

  h+='</main>\n'; // main container

  // RELATÓRIO DE AUTOAVALIAÇÃO (embutido no documento)
  h+=buildQAReport(data,'site');

  // FLOATING BUTTONS (WhatsApp + IA + Topo)
  h+='<div class="floating-btns">\n';
  if(params.wpp){
    h+='<a class="float-btn fb-wpp" href="'+E(params.wpp)+'" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp — Grupo do curso"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>\n';
  }
  if(params.ia){
    h+='<a class="float-btn fb-ia" href="'+E(params.ia)+'" target="_blank" rel="noopener" aria-label="Tutor IA" title="Tutor IA — Assistente do curso"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1.27A7 7 0 0113 22h-2a7 7 0 01-6.73-3H3a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 9a5 5 0 00-5 5h10a5 5 0 00-5-5z"/></svg></a>\n';
  }
  h+='<button class="float-btn fb-top" onclick="window.scrollTo({top:0,behavior:\'smooth\'})" aria-label="Voltar ao topo" title="Voltar ao topo">&#8593;</button>\n';
  h+='</div>\n';

  // JS
  h+='<script>\n'+SITE_JS+'\n<\/script>\n';
  h+='</body>\n</html>';
  return h;
}

// === COMPONENT RENDERER ===
function renderComponent(comp){
  var type=comp.tipo||comp.type||'';
  var h='';
  switch(type.toLowerCase()){
    case 'pilula':case 'pilulas':
      h+='<div class="pilula" data-lang="pt"><span class="pilula-q">'+E(comp.pergunta_pt||comp.titulo_pt||'Pilula')+'</span><div class="pilula-a">'+E(comp.resposta_pt||comp.conteudo_pt||'')+'</div></div>\n';
      h+='<div class="pilula" data-lang="es"><span class="pilula-q">'+E(comp.pergunta_es||comp.titulo_es||'Pildora')+'</span><div class="pilula-a">'+E(comp.resposta_es||comp.conteudo_es||'')+'</div></div>\n';
      break;
    case 'flashcards':case 'flashcard':
      var cards=comp.cards||comp.pares||[];
      h+='<div class="fc-grid" data-lang="pt">\n';
      cards.forEach(function(c){h+='<div class="fc-card"><div class="fc-inner"><div class="fc-front">'+E(c.frente_pt||c.frente||c.termo||'')+'</div><div class="fc-back">'+E(c.verso_pt||c.verso||c.definicao||'')+'</div></div></div>\n'});
      h+='</div>\n';
      h+='<div class="fc-grid" data-lang="es">\n';
      cards.forEach(function(c){h+='<div class="fc-card"><div class="fc-inner"><div class="fc-front">'+E(c.frente_es||c.frente||c.termo||'')+'</div><div class="fc-back">'+E(c.verso_es||c.verso||c.definicao||'')+'</div></div></div>\n'});
      h+='</div>\n';
      break;
    case 'accordion':
      var items=comp.items||[];
      items.forEach(function(it){
        h+='<div class="accordion" data-lang="pt"><div class="acc-head">'+E(it.titulo_pt||it.titulo||'')+'</div><div class="acc-body">'+E(it.conteudo_pt||it.conteudo||'')+'</div></div>\n';
        h+='<div class="accordion" data-lang="es"><div class="acc-head">'+E(it.titulo_es||'')+'</div><div class="acc-body">'+E(it.conteudo_es||'')+'</div></div>\n';
      });
      break;
    case 'timeline':
      var steps=comp.etapas||comp.items||[];
      h+='<div class="timeline" data-lang="pt">\n';
      steps.forEach(function(s){h+='<div class="tl-item"><h4>'+E(s.titulo_pt||s.titulo||'')+'</h4><p>'+E(s.descricao_pt||s.descricao||'')+'</p></div>\n'});
      h+='</div>\n';
      h+='<div class="timeline" data-lang="es">\n';
      steps.forEach(function(s){h+='<div class="tl-item"><h4>'+E(s.titulo_es||'')+'</h4><p>'+E(s.descricao_es||'')+'</p></div>\n'});
      h+='</div>\n';
      break;
    case 'red-flags':case 'redflags':case 'red_flags':
      h+='<div class="box-rf" data-lang="pt"><h4>&#9888;&#65039; '+(comp.titulo_pt||'Sinais de Alerta')+'</h4><ul>\n';
      (comp.items_pt||comp.items||[]).forEach(function(it){h+='<li>'+E(typeof it==='string'?it:it.pt||it.texto||'')+'</li>\n'});
      h+='</ul></div>\n';
      h+='<div class="box-rf" data-lang="es"><h4>&#9888;&#65039; '+(comp.titulo_es||'Senales de Alerta')+'</h4><ul>\n';
      (comp.items_es||comp.items||[]).forEach(function(it){h+='<li>'+E(typeof it==='string'?it:it.es||it.texto||'')+'</li>\n'});
      h+='</ul></div>\n';
      break;
    case 'boas-praticas':case 'boas_praticas':case 'boaspraticas':
      h+='<div class="box-bp" data-lang="pt"><h4>&#10004;&#65039; '+(comp.titulo_pt||'Boas Praticas')+'</h4><ul>\n';
      (comp.items_pt||comp.items||[]).forEach(function(it){h+='<li>'+E(typeof it==='string'?it:it.pt||'')+'</li>\n'});
      h+='</ul></div>\n';
      h+='<div class="box-bp" data-lang="es"><h4>&#10004;&#65039; '+(comp.titulo_es||'Buenas Practicas')+'</h4><ul>\n';
      (comp.items_es||comp.items||[]).forEach(function(it){h+='<li>'+E(typeof it==='string'?it:it.es||'')+'</li>\n'});
      h+='</ul></div>\n';
      break;
    case 'evidencia':case 'evidence':
      h+='<div class="box-ev" data-lang="pt"><h4>&#128218; Evidencia</h4><p>'+E(comp.texto_pt||comp.texto||'')+'</p><small>'+E(comp.fonte_pt||comp.fonte||'')+'</small></div>\n';
      h+='<div class="box-ev" data-lang="es"><h4>&#128218; Evidencia</h4><p>'+E(comp.texto_es||'')+'</p><small>'+E(comp.fonte_es||'')+'</small></div>\n';
      break;
    case 'conceito':case 'conceito-chave':case 'box':
      h+='<div class="box-cc" data-lang="pt"><h4>&#128161; '+E(comp.titulo_pt||comp.titulo||'Conceito-Chave')+'</h4><p>'+E(comp.texto_pt||comp.texto||comp.conteudo_pt||'')+'</p></div>\n';
      h+='<div class="box-cc" data-lang="es"><h4>&#128161; '+E(comp.titulo_es||'Concepto Clave')+'</h4><p>'+E(comp.texto_es||comp.conteudo_es||'')+'</p></div>\n';
      break;
    case 'checklist':
      h+='<ul class="checklist" data-lang="pt">\n';
      (comp.items_pt||comp.items||[]).forEach(function(it){h+='<li>'+E(typeof it==='string'?it:it.pt||'')+'</li>\n'});
      h+='</ul>\n';
      h+='<ul class="checklist" data-lang="es">\n';
      (comp.items_es||comp.items||[]).forEach(function(it){h+='<li>'+E(typeof it==='string'?it:it.es||'')+'</li>\n'});
      h+='</ul>\n';
      break;
    case 'erros-comuns':case 'erros_comuns':case 'erroscomuns':
      var pares=comp.pares||comp.items||[];
      h+='<table class="err-table" data-lang="pt"><tr><th>&#10060; Erro</th><th>&#9989; Correto</th></tr>\n';
      pares.forEach(function(p){h+='<tr><td class="err-col-bad">'+E(p.erro_pt||p.erro||'')+'</td><td class="err-col-good">'+E(p.correto_pt||p.correto||'')+'</td></tr>\n'});
      h+='</table>\n';
      h+='<table class="err-table" data-lang="es"><tr><th>&#10060; Error</th><th>&#9989; Correcto</th></tr>\n';
      pares.forEach(function(p){h+='<tr><td class="err-col-bad">'+E(p.erro_es||p.erro||'')+'</td><td class="err-col-good">'+E(p.correto_es||p.correto||'')+'</td></tr>\n'});
      h+='</table>\n';
      break;
    case 'tabela':case 'table':
      var headers=comp.headers||[];var rows=comp.linhas||comp.rows||[];
      h+='<table class="tbl-data" data-lang="pt"><tr>';
      headers.forEach(function(hh){h+='<th>'+E(typeof hh==='string'?hh:hh.pt||'')+'</th>'});
      h+='</tr>\n';
      rows.forEach(function(row){h+='<tr>';(Array.isArray(row)?row:(row.pt||[])).forEach(function(cell){h+='<td>'+E(cell)+'</td>'});h+='</tr>\n'});
      h+='</table>\n';
      h+='<table class="tbl-data" data-lang="es"><tr>';
      headers.forEach(function(hh){h+='<th>'+E(typeof hh==='string'?hh:hh.es||hh.pt||'')+'</th>'});
      h+='</tr>\n';
      rows.forEach(function(row){h+='<tr>';(Array.isArray(row)?row:(row.es||row.pt||[])).forEach(function(cell){h+='<td>'+E(cell)+'</td>'});h+='</tr>\n'});
      h+='</table>\n';
      break;
    case 'nuvem':case 'nuvem-palavras':case 'wordcloud':
      var words=comp.palavras||comp.words||[];
      var colors=['var(--az)','var(--vd)','var(--az3)','var(--dou)','var(--cor)'];
      h+='<div class="nuvem" data-lang="pt">\n';
      words.forEach(function(w,i){var sz=14+Math.floor(Math.random()*14);h+='<span style="font-size:'+sz+'px;color:'+colors[i%5]+'">'+E(typeof w==='string'?w:w.pt||'')+'</span>\n'});
      h+='</div>\n';
      h+='<div class="nuvem" data-lang="es">\n';
      words.forEach(function(w,i){var sz=14+Math.floor(Math.random()*14);h+='<span style="font-size:'+sz+'px;color:'+colors[i%5]+'">'+E(typeof w==='string'?w:w.es||w.pt||'')+'</span>\n'});
      h+='</div>\n';
      break;
    case 'mini-quiz':case 'miniquiz':
      var qs=comp.questoes||comp.questions||[];
      h+='<div class="mini-quiz" data-lang="pt"><h4>Mini-Quiz</h4>\n';
      qs.forEach(function(q,i){
        h+='<div class="mq-q"><p>'+E(q.pergunta_pt||q.pergunta||'')+'</p>';
        (q.opcoes||q.options||[]).forEach(function(o){h+='<label><input type="radio" name="mq'+i+'"> '+E(typeof o==='string'?o:o.pt||'')+'</label>'});
        h+='</div>\n';
      });
      h+='</div>\n';
      h+='<div class="mini-quiz" data-lang="es"><h4>Mini-Quiz</h4>\n';
      qs.forEach(function(q,i){
        h+='<div class="mq-q"><p>'+E(q.pergunta_es||q.pergunta_pt||'')+'</p>';
        (q.opcoes||q.options||[]).forEach(function(o){h+='<label><input type="radio" name="mqe'+i+'"> '+E(typeof o==='string'?o:o.es||o.pt||'')+'</label>'});
        h+='</div>\n';
      });
      h+='</div>\n';
      break;
    case 'caso-clinico':case 'caso':case 'mini-caso':
      h+='<div class="box-ev" data-lang="pt" style="border-left-color:var(--cor)"><h4>&#128203; '+E(comp.titulo_pt||'Caso Clinico')+'</h4><p>'+E(comp.texto_pt||comp.texto||comp.narrativa_pt||'')+'</p></div>\n';
      h+='<div class="box-ev" data-lang="es" style="border-left-color:var(--cor)"><h4>&#128203; '+E(comp.titulo_es||'Caso Clinico')+'</h4><p>'+E(comp.texto_es||comp.narrativa_es||'')+'</p></div>\n';
      break;
    case 'estudo-de-caso':case 'estudo_de_caso':case 'case-study':
      // PT
      h+='<div class="case-study" data-lang="pt">\n';
      h+='<div class="case-study-header"><span style="font-size:22px">&#128218;</span><h4>'+E(comp.titulo_pt||'Estudo de Caso')+'</h4></div>\n';
      h+='<div class="case-study-narrative">'+nl2p(comp.narrativa_pt||comp.texto_pt||comp.texto||'')+'</div>\n';
      h+='<button class="case-study-btn case-study-btn-q" data-target="case-study-questions">Mostrar Questões Reflexivas</button>\n';
      h+='<div class="case-study-questions"><h4>&#129300; Questões para Reflexão</h4><ol>\n';
      (comp.questoes_pt||comp.questoes||[]).forEach(function(q){h+='<li>'+E(typeof q==='string'?q:q.pt||q.texto||'')+'</li>\n'});
      h+='</ol>\n';
      h+='<button class="case-study-btn case-study-btn-a" data-target="case-study-analysis">Ver Análise Especializada</button>\n';
      h+='</div>\n';
      h+='<div class="case-study-analysis"><h4>&#127891; Análise Especializada</h4>'+nl2p(comp.analise_pt||comp.analise||'')+'</div>\n';
      h+='</div>\n';
      // ES
      h+='<div class="case-study" data-lang="es">\n';
      h+='<div class="case-study-header"><span style="font-size:22px">&#128218;</span><h4>'+E(comp.titulo_es||'Estudio de Caso')+'</h4></div>\n';
      h+='<div class="case-study-narrative">'+nl2p(comp.narrativa_es||comp.texto_es||'')+'</div>\n';
      h+='<button class="case-study-btn case-study-btn-q" data-target="case-study-questions">Mostrar Preguntas Reflexivas</button>\n';
      h+='<div class="case-study-questions"><h4>&#129300; Preguntas para Reflexión</h4><ol>\n';
      (comp.questoes_es||comp.questoes||[]).forEach(function(q){h+='<li>'+E(typeof q==='string'?q:q.es||q.texto||'')+'</li>\n'});
      h+='</ol>\n';
      h+='<button class="case-study-btn case-study-btn-a" data-target="case-study-analysis">Ver Análisis Especializado</button>\n';
      h+='</div>\n';
      h+='<div class="case-study-analysis"><h4>&#127891; Análisis Especializado</h4>'+nl2p(comp.analise_es||'')+'</div>\n';
      h+='</div>\n';
      break;
    case 'algoritmo':case 'fluxograma':
      h+='<div class="ascii-box" data-lang="pt">'+E(comp.texto_pt||comp.texto||'')+'</div>\n';
      if(comp.texto_es)h+='<div class="ascii-box" data-lang="es">'+E(comp.texto_es)+'</div>\n';
      break;
    case 'esquema-ascii':case 'esquema':
      h+='<div class="ascii-box">'+E(comp.texto||comp.conteudo||'')+'</div>\n';
      break;
    case 'infografico':case 'mapa-mental':case 'mapa':
      h+='<div class="mapa" data-lang="pt"><h4 style="color:var(--az);margin-bottom:12px">'+E(comp.titulo_pt||comp.titulo||type)+'</h4><p>'+E(comp.texto_pt||comp.texto||comp.conteudo_pt||'')+'</p></div>\n';
      h+='<div class="mapa" data-lang="es"><h4 style="color:var(--az);margin-bottom:12px">'+E(comp.titulo_es||type)+'</h4><p>'+E(comp.texto_es||comp.conteudo_es||'')+'</p></div>\n';
      break;
    default:
      // Fallback: render as generic box
      h+='<div class="box-cc" data-lang="pt"><h4>'+E(comp.titulo_pt||comp.titulo||type||'Recurso')+'</h4><p>'+E(comp.texto_pt||comp.texto||comp.conteudo_pt||comp.conteudo||'')+'</p></div>\n';
      if(comp.texto_es||comp.conteudo_es)h+='<div class="box-cc" data-lang="es"><h4>'+E(comp.titulo_es||type||'Recurso')+'</h4><p>'+E(comp.texto_es||comp.conteudo_es||'')+'</p></div>\n';
  }
  return h;
}

function nl2p(text){
  if(!text)return'';
  return text.split(/\n\n+/).map(function(p){return'<p>'+E(p.trim())+'</p>'}).join('\n');
}

// === RELATÓRIO DE AUTOAVALIAÇÃO EMBUTIDO ===
function buildQAReport(data,tipo){
  var h='';
  var checks=[];var warns=[];
  
  if(tipo==='site'){
    // Contar dados reais
    var secs=data.sections||[];
    var totalComps=0;var totalWords=0;var totalFC=0;var totalRF=0;var totalEC=0;var totalPil=0;var totalCC=0;
    var secDetails=[];
    
    secs.forEach(function(sec,i){
      var wc=(sec.texto_pt||'').split(/\s+/).length;
      totalWords+=wc;
      var comps=sec.componentes||[];
      totalComps+=comps.length;
      var fc=0,rf=0,ec=0,pil=0,cc=0;
      comps.forEach(function(c){
        var t=(c.tipo||'').toLowerCase();
        if(t==='flashcards'||t==='flashcard'){fc+=(c.cards||[]).length}
        if(t==='red-flags')rf+=(c.items_pt||c.items||[]).length;
        if(t==='estudo-de-caso'||t==='estudo_de_caso'||t==='case-study')ec++;
        if(t==='pilula'||t==='pilulas')pil++;
        if(t==='caso-clinico'||t==='caso')cc++;
      });
      totalFC+=fc;totalRF+=rf;totalEC+=ec;totalPil+=pil;totalCC+=cc;
      var hasES=sec.texto_es&&sec.texto_es.length>50;
      secDetails.push({titulo:sec.titulo_pt||'Cap '+(i+1),words:wc,comps:comps.length,fc:fc,rf:rf,ec:ec,pil:pil,cc:cc,hasES:hasES});
    });
    
    var quizLen=(data.quiz||[]).length;
    var diagLen=(data.diagnostica||[]).length;
    var glossLen=(data.glossario||[]).length;
    
    // Checks globais
    checks.push({ok:secs.length>=2,label:'Capítulos',val:secs.length,min:2});
    checks.push({ok:quizLen>=10,label:'Quiz final',val:quizLen+' questões',min:10});
    checks.push({ok:diagLen>=5,label:'Diagnóstica',val:diagLen+' questões',min:5});
    checks.push({ok:glossLen>=8,label:'Glossário',val:glossLen+' termos',min:8});
    checks.push({ok:totalFC>=6,label:'Flashcards (total)',val:totalFC,min:6});
    checks.push({ok:totalRF>=6,label:'Red-flags (total)',val:totalRF,min:6});
    checks.push({ok:totalEC>=secs.length,label:'Estudos de caso',val:totalEC+'/'+secs.length+' caps',min:secs.length});
    checks.push({ok:totalPil>=secs.length,label:'Pílulas',val:totalPil+'/'+secs.length+' caps',min:secs.length});
    checks.push({ok:totalCC>=secs.length,label:'Casos clínicos',val:totalCC+'/'+secs.length+' caps',min:secs.length});
    
    // Warnings por capítulo
    secDetails.forEach(function(sd){
      if(sd.words<300)warns.push('⚠️ "'+sd.titulo+'": '+sd.words+' palavras (mín: 300)');
      if(sd.fc<3)warns.push('⚠️ "'+sd.titulo+'": '+sd.fc+' flashcards (mín: 3)');
      if(!sd.hasES)warns.push('⚠️ "'+sd.titulo+'": tradução ES ausente ou curta');
      if(sd.ec<1)warns.push('⚠️ "'+sd.titulo+'": estudo de caso ausente');
    });
    
    var passed=checks.filter(function(c){return c.ok}).length;
    var total=checks.length;
    var pct=Math.round((passed/total)*100);
    var color=pct>=90?'#0d8c5e':pct>=70?'#d4a017':'#cc4444';
    
    // Render HTML
    h+='<section class="sec" id="qa-report" style="border:2px solid '+color+';margin-top:40px;page-break-before:always">\n';
    h+='<div style="background:'+color+';color:#fff;padding:16px 24px;margin:-24px -24px 20px;border-radius:10px 10px 0 0">\n';
    h+='<h2 style="margin:0;font-size:20px;color:#fff">📋 Relatório de Autoavaliação</h2>\n';
    h+='<p style="margin:4px 0 0;opacity:.9;font-size:13px">Gerado automaticamente pelo sistema Cura Vitae · Dados verificados no momento da criação</p>\n';
    h+='</div>\n';
    
    // Score
    h+='<div style="text-align:center;padding:16px 0;margin-bottom:16px;border-bottom:1px solid rgba(0,0,0,.08)">\n';
    h+='<span style="font-size:48px;font-weight:700;color:'+color+'">'+pct+'%</span>\n';
    h+='<p style="margin:4px 0 0;color:#666;font-size:14px">'+passed+'/'+total+' verificações aprovadas</p>\n';
    h+='</div>\n';
    
    // Tabela de verificações
    h+='<table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">\n';
    h+='<tr style="background:rgba(0,0,0,.04)"><th style="padding:8px 12px;text-align:left;border-bottom:1px solid rgba(0,0,0,.1)">Item</th><th style="padding:8px 12px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)">Valor</th><th style="padding:8px 12px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)">Mínimo</th><th style="padding:8px 12px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)">Status</th></tr>\n';
    checks.forEach(function(c){
      h+='<tr><td style="padding:8px 12px;border-bottom:1px solid rgba(0,0,0,.05)">'+c.label+'</td>';
      h+='<td style="padding:8px 12px;text-align:center;border-bottom:1px solid rgba(0,0,0,.05)">'+c.val+'</td>';
      h+='<td style="padding:8px 12px;text-align:center;border-bottom:1px solid rgba(0,0,0,.05)">'+c.min+'</td>';
      h+='<td style="padding:8px 12px;text-align:center;border-bottom:1px solid rgba(0,0,0,.05)">'+(c.ok?'✅':'❌')+'</td></tr>\n';
    });
    h+='</table>\n';
    
    // Detalhes por capítulo
    h+='<h3 style="font-size:15px;color:#032859;margin:20px 0 10px">Detalhes por Capítulo</h3>\n';
    h+='<table style="width:100%;border-collapse:collapse;font-size:13px">\n';
    h+='<tr style="background:rgba(0,0,0,.04)"><th style="padding:6px 10px;text-align:left;border-bottom:1px solid rgba(0,0,0,.1)">Capítulo</th><th style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)">Palavras</th><th style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)">Comp.</th><th style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)">FC</th><th style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)">ES</th></tr>\n';
    secDetails.forEach(function(sd){
      h+='<tr><td style="padding:6px 10px;border-bottom:1px solid rgba(0,0,0,.05)">'+E(sd.titulo)+'</td>';
      h+='<td style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.05);color:'+(sd.words<300?'#cc4444':'inherit')+'">'+sd.words+'</td>';
      h+='<td style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.05)">'+sd.comps+'</td>';
      h+='<td style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.05);color:'+(sd.fc<3?'#cc4444':'inherit')+'">'+sd.fc+'</td>';
      h+='<td style="padding:6px 10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.05)">'+(sd.hasES?'✅':'❌')+'</td></tr>\n';
    });
    h+='</table>\n';
    
    // Alertas
    if(warns.length>0){
      h+='<div style="margin-top:16px;padding:14px;background:rgba(212,160,23,.08);border-left:3px solid #d4a017;border-radius:6px;font-size:13px">\n';
      h+='<strong>Alertas para revisão:</strong><br>\n';
      warns.forEach(function(w){h+=w+'<br>\n'});
      h+='</div>\n';
    }
    
    // Nota importante
    h+='<p style="margin-top:16px;font-size:12px;color:#999;font-style:italic">Este relatório verifica estrutura e completude. A precisão do conteúdo, qualidade da tradução e veracidade das referências devem ser validadas por um revisor humano.</p>\n';
    h+='</section>\n';
  }
  
  return h;
}

// HTML escape — also defined in logica.js but needed here for independence
if(typeof E==='undefined'){function E(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}}
