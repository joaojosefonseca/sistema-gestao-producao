// ══════════════════════════════════════════════════════════
// PDF GENERATOR v9.0
// ══════════════════════════════════════════════════════════
// 
// Gera PDFs de alta qualidade a partir de HTML
// Usa html2pdf.js (biblioteca leve e eficiente)
//
// ══════════════════════════════════════════════════════════

/**
 * Gera PDF a partir de HTML
 * @param {string} htmlContent - HTML completo do livro
 * @param {string} filename - Nome do arquivo (ex: 'livro.pdf')
 */
async function generatePDF(htmlContent, filename) {
  toast('Gerando PDF... Aguarde.');
  
  try {
    // Verificar se html2pdf está carregado
    if (typeof html2pdf === 'undefined') {
      throw new Error('Biblioteca html2pdf não carregada. Recarregue a página.');
    }
    
    // Configurações de qualidade do PDF
    var opt = {
      margin: [15, 10, 15, 10], // mm: top, left, bottom, right
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, // Qualidade 2x (melhor definição)
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.cover-page, .credits-page, section'
      }
    };
    
    // Preparar HTML para PDF (remover placeholders de mídia)
    var cleanHTML = htmlContent
      .replace(/<div class="media-placeholder"[^>]*>.*?<\/div>/gs, '')
      .replace(/<!-- PARTE \d+ -->/g, '');
    
    // Criar elemento temporário
    var container = document.createElement('div');
    container.innerHTML = cleanHTML;
    container.style.cssText = 'position:absolute;left:-9999px;top:0;width:210mm'; // A4 width
    document.body.appendChild(container);
    
    // Gerar PDF
    await html2pdf().set(opt).from(container).save();
    
    // Remover elemento temporário
    document.body.removeChild(container);
    
    toast('✅ PDF gerado com sucesso!');
    
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    toast('❌ Erro ao gerar PDF: ' + error.message);
    
    // Fallback: oferecer impressão nativa
    if (confirm('Erro ao gerar PDF automaticamente. Deseja imprimir via navegador?')) {
      printHTML(htmlContent);
    }
  }
}

/**
 * Fallback: Impressão nativa do navegador
 */
function printHTML(htmlContent) {
  var win = window.open('', '_blank');
  win.document.write(htmlContent);
  win.document.close();
  
  setTimeout(function() {
    win.print();
  }, 500);
}

/**
 * Preview de PDF antes de baixar
 */
function previewPDF(htmlContent) {
  var win = window.open('', '_blank', 'width=800,height=1000');
  win.document.write(htmlContent);
  win.document.close();
  
  toast('Preview aberto em nova aba. Use Ctrl+P para imprimir como PDF.');
}
