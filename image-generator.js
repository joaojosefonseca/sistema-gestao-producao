// ══════════════════════════════════════════════════════════
// IMAGE GENERATOR v9.0 - Cards HTML → PNG
// ══════════════════════════════════════════════════════════
// 
// Converte cards HTML (1080x1080) em imagens PNG
// Usa html2canvas para captura de alta qualidade
//
// ══════════════════════════════════════════════════════════

/**
 * Converte todos os cards de um HTML em imagens PNG
 * @param {string} cardsHTML - HTML contendo os cards
 * @param {string} baseFilename - Nome base (ex: 'cards_pt')
 */
async function generateCardsPNG(cardsHTML, baseFilename) {
  toast('Convertendo cards para PNG... Aguarde.');
  
  try {
    // Verificar se html2canvas está carregado
    if (typeof html2canvas === 'undefined') {
      throw new Error('Biblioteca html2canvas não carregada. Recarregue a página.');
    }
    
    // Criar container temporário
    var container = document.createElement('div');
    container.innerHTML = cardsHTML;
    container.style.cssText = 'position:absolute;left:-9999px;top:0';
    document.body.appendChild(container);
    
    // Encontrar todos os cards (.sc = square card)
    var cards = container.querySelectorAll('.sc');
    
    if (cards.length === 0) {
      throw new Error('Nenhum card encontrado no HTML.');
    }
    
    var images = [];
    
    // Converter cada card
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      
      // Capturar como canvas
      var canvas = await html2canvas(card, {
        width: 1080,
        height: 1080,
        scale: 2, // 2x para qualidade HD
        useCORS: true,
        backgroundColor: null,
        logging: false
      });
      
      // Converter canvas para blob
      var blob = await new Promise(function(resolve) {
        canvas.toBlob(resolve, 'image/png', 1.0);
      });
      
      images.push({
        blob: blob,
        filename: baseFilename + '_card_' + (i + 1) + '.png'
      });
      
      toast('Card ' + (i + 1) + '/' + cards.length + ' convertido...');
    }
    
    // Remover container temporário
    document.body.removeChild(container);
    
    // Baixar todas as imagens
    for (var j = 0; j < images.length; j++) {
      downloadBlob(images[j].blob, images[j].filename);
      
      // Pequeno delay entre downloads (evitar bloqueio do navegador)
      await sleep(300);
    }
    
    toast('✅ ' + images.length + ' cards convertidos em PNG!');
    
    return images;
    
  } catch (error) {
    console.error('Erro ao gerar PNGs:', error);
    toast('❌ Erro ao gerar imagens: ' + error.message);
    throw error;
  }
}

/**
 * Baixa um blob como arquivo
 */
function downloadBlob(blob, filename) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Gera ZIP com todos os cards PNG
 */
async function generateCardsZIP(cardsHTML, zipFilename) {
  toast('Gerando ZIP com cards PNG...');
  
  try {
    // Verificar se JSZip está carregado
    if (typeof JSZip === 'undefined') {
      throw new Error('Biblioteca JSZip não carregada.');
    }
    
    // Gerar PNGs
    var images = await generateCardsPNG(cardsHTML, 'card');
    
    // Criar ZIP
    var zip = new JSZip();
    
    images.forEach(function(img) {
      zip.file(img.filename, img.blob);
    });
    
    // Gerar e baixar ZIP
    var zipBlob = await zip.generateAsync({ type: 'blob' });
    downloadBlob(zipBlob, zipFilename);
    
    toast('✅ ZIP gerado: ' + zipFilename);
    
  } catch (error) {
    console.error('Erro ao gerar ZIP:', error);
    toast('❌ Erro: ' + error.message);
  }
}

/**
 * Preview de card antes de converter
 */
function previewCard(cardHTML, cardIndex) {
  var win = window.open('', '_blank', 'width=1100,height=1100');
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Preview Card ${cardIndex}</title>
      <style>body{margin:0;padding:20px;background:#f5f5f5;display:flex;justify-content:center;align-items:center;min-height:100vh}</style>
    </head>
    <body>${cardHTML}</body>
    </html>
  `);
  win.document.close();
}
