# 📖 GUIA DE USO - Sistema Gerador v9.0

**Atualizado:** 10/02/2026  
**Versão:** 9.0 - Geração Completa

---

## 🎯 VISÃO GERAL

O Sistema v9.0 gera automaticamente:

1. **Site Interativo HTML** (PT/ES)
   - Quiz, flashcards, diagnóstica
   - Totalmente responsivo

2. **Livro Digital HTML** (PT/ES)
   - ✅ **NOVO:** Conteúdo 100% completo
   - ✅ **NOVO:** Placeholders para imagens/vídeos
   - ✅ **NOVO:** Sem relatório de autoavaliação

3. **PDF de Alta Qualidade**
   - ✅ **NOVO:** Geração automática
   - Formato A4, pronto para impressão

4. **Cards para Redes Sociais** (PT/ES)
   - Formato 1080x1080px
   - ✅ **NOVO:** Exportação em PNG

---

## 🚀 INÍCIO RÁPIDO

### 1. Configuração Inicial

#### a) Testar Conexão API

1. Na tela inicial, clique em **"🔌 Testar Conexão"**
2. Deve aparecer: ✅ Conectado! Modelo: gpt-4o
3. Se houver erro, verifique a configuração no Netlify

#### b) Preencher Dados do Curso

- **Código:** Ex: C001
- **Título:** Ex: "Fundamentos do Cuidado à Pessoa Idosa"
- **Público-Alvo:** Ex: "Cuidadores de idosos e profissionais de saúde"
- **Duração:** Ex: 20h
- **Nível:** Intermediário

#### c) Escolher Fonte de Conteúdo

**Opção 1: Documento-Base (Recomendado)**
- Fazer upload de PDF/DOCX/TXT
- Sistema transforma em curso estruturado

**Opção 2: Geração por IA**
- Sistema cria conteúdo do zero
- Baseado apenas no título e capítulos

### 2. Estruturar Capítulos

1. Clicar em **"➕ Adicionar Capítulo"**
2. Preencher:
   - Título do capítulo
   - Seções (subcapítulos)
   - Descrição de cada seção

**Exemplo:**

```
Capítulo 1: Envelhecimento e o Papel do Cuidador
  └─ Seção 1: O Processo de Envelhecimento
     Descrição: Dimensões biológica, psicológica e social
  └─ Seção 2: Desafios do Envelhecimento
     Descrição: Fragilidade, mobilidade, autonomia
```

### 3. Iniciar Geração

1. Clicar em **"⚡ Iniciar Geração Automática"**
2. Aguardar processamento (2-5 minutos)
3. Aprovar cada capítulo gerado
4. Avançar para entregas

---

## 📦 GERANDO ENTREGAS

### Site Interativo

1. Na aba "Entregas", clicar em **"▶ Gerar Site"**
2. Aguardar ~2-3 minutos
3. Botões disponíveis:
   - **⬇ Baixar HTML** - Arquivo único
   - **👁️ Preview** - Abrir em nova aba

**Recursos do Site:**
- Bilíngue PT/ES (botão de idioma)
- Quiz de 12 questões
- Flashcards interativos
- Diagnóstica pré/pós

### Livro Digital (NOVO v9.0!)

#### Gerar Livro PT

1. Clicar em **"▶ Gerar Livro PT"**
2. Aguardar geração em 7 partes:
   - [1/7] Capa + Créditos
   - [2/7] Sumário + Apresentação
   - [3/7] Capítulo 1
   - [4/7] Capítulo 2
   - [5/7] Capítulo N
   - [6/7] Glossário
   - [7/7] Referências + Síntese

3. Botões disponíveis:
   - **⬇️ Baixar HTML** - Livro completo
   - **📄 Baixar PDF** - PDF de alta qualidade

#### Gerar Livro ES

Mesmo processo, em espanhol.

**⚠️ IMPORTANTE:**
- A geração é **MUITO MAIS LENTA** que v8.0 (7 chamadas à API)
- Mas o resultado é **100% COMPLETO** (sem cortes)

### Cards para Redes Sociais

1. Clicar em **"▶ Gerar Cards"**
2. Escolher PT ou ES
3. Botões:
   - **⬇ Baixar HTML** - Ver cards no navegador
   - **🖼️ Baixar PNG** - Converter todos para imagem
   - **📦 Baixar ZIP** - Todas as imagens em um arquivo

---

## 🎨 INSERINDO IMAGENS E VÍDEOS

### No Livro HTML

Após baixar o livro HTML:

1. Abrir arquivo em editor de texto (VS Code, Notepad++)
2. Procurar por placeholders:

```html
<!-- PLACEHOLDER DE IMAGEM -->
<div class="media-placeholder" data-type="image">
  <p>📷 [INSERIR IMAGEM: Conceito X]</p>
</div>
```

3. Substituir por:

```html
<img src="https://exemplo.com/imagem.jpg" 
     alt="Descrição da imagem"
     style="max-width:100%;border-radius:8px;margin:20px 0">
```

4. Para vídeos:

```html
<!-- Vídeo do YouTube -->
<div style="position:relative;padding-bottom:56.25%;height:0;margin:20px 0">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID"
    style="position:absolute;top:0;left:0;width:100%;height:100%"
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

### Onde Hospedar Imagens

**Opções gratuitas:**
- Imgur: https://imgur.com
- ImgBB: https://imgbb.com
- Cloudinary: https://cloudinary.com (grátis até 25GB)

**Processo:**
1. Fazer upload da imagem
2. Copiar URL pública
3. Usar no `<img src="URL">`

---

## 📄 GERANDO PDFs

### Automático (Recomendado)

1. Após gerar livro, clicar em **"📄 Baixar PDF"**
2. Aguardar 5-10 segundos
3. PDF baixa automaticamente

**Configurações do PDF:**
- Formato: A4 (210 x 297mm)
- Margens: 15mm (topo/baixo), 10mm (lados)
- Qualidade: Alta (2x scale)
- Compressão: Sim

### Manual (Fallback)

Se o botão PDF der erro:

1. Abrir livro HTML no navegador
2. Pressionar **Ctrl + P** (Windows) ou **Cmd + P** (Mac)
3. Selecionar "Salvar como PDF"
4. Configurar:
   - Tamanho: A4
   - Margens: Padrão
   - Fundo: Sim

---

## 🖼️ CONVERTENDO CARDS PARA PNG

### Individual

1. Baixar HTML dos cards
2. Abrir em navegador
3. Clicar com botão direito no card
4. "Capturar screenshot" (extensão de navegador)

### Em Massa (Recomendado)

1. No sistema, após gerar cards, clicar em **"🖼️ Baixar PNG"**
2. Aguardar conversão (1s por card)
3. Imagens baixam automaticamente

**Formato PNG:**
- Resolução: 1080 x 1080px
- Qualidade: HD (2x scale)
- Fundo: Gradiente original preservado

### Gerando ZIP

1. Clicar em **"📦 Baixar ZIP"**
2. Todas as imagens PNG em um arquivo
3. Ideal para compartilhar ou fazer backup

---

## 🐛 SOLUÇÃO DE PROBLEMAS

### "html2pdf is not defined"

**Causa:** Biblioteca não carregou  
**Solução:** Recarregar página (F5)

### PDF não baixa

**Causa:** Bloqueio de pop-up ou erro na biblioteca  
**Solução:**
1. Permitir pop-ups no site
2. Usar impressão manual (Ctrl + P)

### Cards PNG com baixa qualidade

**Causa:** Escala configurada em 1x  
**Solução:**
Editar `image-generator.js`, linha 27:
```javascript
scale: 3, // Aumentar para 3x
```

### Livro ainda está incompleto

**Causa:** Erro em alguma parte da geração  
**Solução:**
1. Ver console do navegador (F12)
2. Copiar erro e reportar
3. Tentar gerar novamente

### Imagens/vídeos não aparecem

**Causa:** Placeholders não foram substituídos  
**Solução:**
Editar HTML manualmente (ver seção "Inserindo Imagens")

---

## 💡 DICAS E BOAS PRÁTICAS

### Otimizando Geração

1. **Use documento-base quando possível**
   - Resultado mais rico e preciso
   - Menos chances de conteúdo genérico

2. **Seja específico nas descrições das seções**
   - ❌ "Falar sobre o tema"
   - ✅ "Abordar dimensões biológica, psicológica e social do envelhecimento"

3. **Revise antes de aprovar**
   - Ler cada capítulo gerado
   - Verificar se tem conteúdo substantivo
   - Regenerar se necessário

### Melhorando Qualidade

1. **Referências:**
   - Sempre validar manualmente
   - Buscar DOIs reais em PubMed
   - Formatar corretamente em ABNT

2. **Imagens:**
   - Usar imagens de alta resolução
   - Respeitar direitos autorais
   - Adicionar legendas descritivas

3. **Vídeos:**
   - Preferir vídeos curtos (5-10min)
   - Usar YouTube (melhor compatibilidade)
   - Testar embed antes de finalizar

### Compartilhando Conteúdo

1. **Site HTML:**
   - Hospedar no Netlify (grátis)
   - Ou GitHub Pages
   - Compartilhar URL pública

2. **PDF:**
   - Subir no Google Drive
   - Ou enviar por email
   - Ou disponibilizar no Moodle

3. **Cards PNG:**
   - Instagram: 1080x1080 (formato perfeito)
   - Facebook: redimensionar para 1200x630
   - LinkedIn: usar como está

---

## 📊 CUSTOS ESTIMADOS

### Por Curso Completo (v9.0)

**Geração de Conteúdo:**
- 2 capítulos + glossário + refs: ~$0.30

**Livro PT (7 partes):**
- ~$0.20

**Livro ES (7 partes):**
- ~$0.20

**Site Interativo:**
- ~$0.40

**TOTAL:** ~$1.10 por curso completo

**Nota:** Valores aproximados usando GPT-4o (fev/2026)

---

## 🔜 PRÓXIMOS RECURSOS

Planejado para v9.1:

- [ ] Editor visual para imagens/vídeos
- [ ] Preview de PDF antes de baixar
- [ ] Compressão automática de imagens
- [ ] Busca automática de imagens Creative Commons

Planejado para v10.0:

- [ ] **Referências automáticas (DOI → ABNT)**
- [ ] Dashboard de custos
- [ ] Exportação SCORM

---

## 📞 SUPORTE

**Problemas não resolvidos?**

1. Verificar CHANGELOG para bugs conhecidos
2. Abrir console do navegador (F12)
3. Copiar mensagem de erro
4. Reportar com detalhes

**Recursos úteis:**

- Netlify Docs: https://docs.netlify.com
- html2pdf.js: https://github.com/eKoopmans/html2pdf.js
- html2canvas: https://html2canvas.hertzen.com

---

**🎉 Aproveite o Sistema v9.0!**
