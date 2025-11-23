# 🚀 COMEÇAR AQUI - Aline Nail Designer

## ⚡ INÍCIO RÁPIDO (3 passos)

### 1️⃣ INSTALAR DEPENDÊNCIAS
```bash
npm install
```

⏱️ Tempo: 2-5 minutos

### 2️⃣ INICIAR SERVIDOR
```bash
npm run dev
```

### 3️⃣ ABRIR NO NAVEGADOR
```
http://localhost:3000
```

---

## 📝 PASSO A PASSO DETALHADO

### Se você está usando PowerShell (Windows)

```powershell
# 1. Navegue até a pasta do projeto
cd "C:\Users\pedro\OneDrive\Área de Trabalho\Nail"

# 2. Instale as dependências
npm install

# Aguarde até ver "added X packages..."

# 3. Inicie o servidor
npm run dev

# Você verá algo como:
# ➜  Local:   http://localhost:3000
# ➜  Press h + enter to show help
```

### Se você está usando CMD (Windows)

```cmd
cd C:\Users\pedro\OneDrive\Área de Trabalho\Nail
npm install
npm run dev
```

### Se você está usando Git Bash/Terminal (Mac/Linux)

```bash
cd ~/Desktop/Nail
npm install
npm run dev
```

---

## ✅ O QUE ESPERAR

Quando executar `npm run dev`, você verá:

```
  VITE v4.4.0  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h + enter to show help
```

Então clique em http://localhost:3000 ou copie e cole no seu navegador.

---

## 🎨 O QUE VER NO NAVEGADOR

```
┌─────────────────────────────────────────────┐
│ HEADER COM MENU (sticky)                   │
│ Logo ✨ | Serviços | Portfolio | ...       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SEÇÃO HERO IMPACTANTE                      │
│ "Aline Nail Designer"                      │
│ [Agendar Consulta]                         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SERVIÇOS (2 cards)                         │
│ 💅 Unhas em Gel | ✨ Design Sobrancelha   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ PORTFOLIO (6 trabalhos com filtros)        │
│ [Todos] [Unhas] [Sobrancelha]             │
│ 🎨 ✨ 💎 | 👁️ 💅 💄                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SOBRE (biografia + skills)                 │
│ Bio... | Estatísticas | [Tags skills]      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ CONTATO (formulário + informações)         │
│ [Formulário] | [Info de contato]           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ FOOTER (links + redes sociais)             │
│ © 2025 | Links | Horários | 📱 🔗 👥      │
└─────────────────────────────────────────────┘
```

---

## 🎮 TESTANDO A PÁGINA

Uma vez que estiver rodando, teste:

### 1. Navegação
- [x] Clique em "Serviços" no menu
- [x] Clique em "Portfolio"
- [x] Clique em "Sobre"
- [x] Clique em "Contato"
- Deve dar scroll suave para cada seção

### 2. Menu Mobile
- [x] Redimensione a janela para menos de 768px
- [x] Deve aparecer ícone de hamburger (≡)
- [x] Clique nele - menu abre
- [x] Clique em um link - menu fecha

### 3. Portfolio Filtros
- [x] Clique em "[Todos]" - mostra 6 trabalhos
- [x] Clique em "[Unhas em Gel]" - mostra 4 trabalhos
- [x] Clique em "[Sobrancelha]" - mostra 2 trabalhos

### 4. Formulário
- [x] Digite algo em "Seu Nome"
- [x] Digite um email em "Seu Email"
- [x] Digite telefone em "Seu Telefone"
- [x] Selecione um serviço
- [x] Digite uma mensagem
- [x] Clique "Enviar Mensagem"
- Deve aparecer "Enviado com Sucesso! ✓"

### 5. Responsividade
- [x] Abra DevTools (F12)
- [x] Ative o modo celular (Ctrl+Shift+M)
- [x] Teste em diferentes tamanhos
- [x] Tudo deve ficar alinhado corretamente

### 6. Hover Effects
- [x] Passe mouse sobre os cards de serviços
- [x] Passe mouse sobre os cards do portfolio
- [x] Passe mouse sobre os botões
- Deve ter animações suaves

---

## ⚠️ PROBLEMAS COMUNS

### Erro: "npm: O termo 'npm' não é reconhecido"

**Solução**: Node.js não está instalado

1. Baixe em https://nodejs.org/
2. Instale (recomendado LTS)
3. Reinicie o PowerShell/CMD
4. Tente novamente: `npm install`

### Porta 3000 em uso

**Solução**: Use outra porta

```bash
npm run dev -- --port 3001
```

Depois abra: `http://localhost:3001`

### Mudanças no código não aparecem

**Solução**: Force refresh

- Windows/Linux: Ctrl + Shift + R
- Mac: Cmd + Shift + R

### Erro ao instalar dependências

**Solução**: Limpe o cache

```bash
npm cache clean --force
rm -r node_modules
rm package-lock.json
npm install
```

---

## 📁 ONDE ESTÃO OS ARQUIVOS IMPORTANTES

```
Nail/
├── src/components/          ← Componentes React
├── README.md                ← Documentação
├── INSTALACAO.md            ← Como instalar
├── CUSTOMIZACOES.md         ← Como customizar
└── package.json             ← Dependências
```

---

## 🔧 COMANDOS ÚTEIS

```bash
# Iniciar desenvolvimento
npm run dev

# Criar build otimizada
npm run build

# Visualizar build localmente
npm run preview

# Ver versão do npm
npm --version

# Ver versão do Node
node --version
```

---

## 📞 PRIMEIRA CUSTOMIZAÇÃO

### Alterar informações de contato

Edite `src/components/Contact.jsx`:

Procure por estas linhas e altere:
```javascript
<p>(85) 98765-4321</p>          // ← Seu telefone
<p>contato@alinenail.com</p>    // ← Seu email
<p>Rua Principal, 123</p>       // ← Seu endereço
```

### Alterar cores

Edite `src/index.css`:

```css
:root {
  --primary: #d63384;      // ← Altere esta cor
  --secondary: #ff6b9d;    // ← E esta também
  --accent: #ffc0cb;       // ← E esta
}
```

---

## 🎨 CUSTOMIZAÇÕES SIMPLES

### Adicionar link do WhatsApp

No `Contact.jsx`, encontre:
```javascript
<a href="#" className="social-btn">WhatsApp</a>
```

Altere para:
```javascript
<a href="https://wa.me/5585987654321?text=Olá%20Aline" 
   className="social-btn">WhatsApp</a>
```

Trocar `5585987654321` pelo seu número com código do país.

### Mudar nome no header

No `Header.jsx`, encontre:
```javascript
<h1>Aline Nail</h1>
```

Altere para seu nome.

---

## 🚀 PREPARAR PARA PRODUÇÃO

Quando quiser fazer deploy:

### 1. Criar build otimizada
```bash
npm run build
```

Isso cria pasta `dist/` com arquivos otimizados.

### 2. Fazer deploy

Opção A: Vercel (recomendado)
- Vá para https://vercel.com
- Conecte seu GitHub
- Deploy automático

Opção B: Netlify
- Vá para https://netlify.com
- Faça upload da pasta `dist/`
- Pronto!

---

## 📊 ESTRUTURA APÓS INSTALAÇÃO

```
Nail/
├── node_modules/            ← (criado após npm install)
├── dist/                    ← (criado após npm run build)
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## ✨ DICAS FINAIS

1. **Sempre comece com `npm install`**
2. **Use `npm run dev` para desenvolver**
3. **Use `npm run build` antes de fazer deploy**
4. **Leia os arquivos de documentação** (README.md, CUSTOMIZACOES.md)
5. **Teste em mobile com F12 + Ctrl+Shift+M**

---

## 🎯 PRÓXIMAS AÇÕES APÓS CONFIRMAR QUE TUDO FUNCIONA

1. ✅ Instalar e rodar o projeto (FEITO!)
2. 📝 Customizar informações (nome, telefone, email)
3. 🖼️ Adicionar imagens reais
4. 🎨 Alterar cores se desejar
5. 🌐 Fazer deploy
6. 📈 Adicionar Google Analytics
7. ✉️ Integrar envio de email

---

## 💬 DÚVIDAS?

Consulte:
- **README.md** - Documentação completa
- **INSTALACAO.md** - Guia detalhado
- **CUSTOMIZACOES.md** - Como customizar
- **ESTRUTURA.md** - Mapa visual

---

## ✅ CHECKLIST RÁPIDO

- [ ] Node.js instalado (`node --version` retorna versão)
- [ ] npm funciona (`npm --version` retorna versão)
- [ ] Executou `npm install`
- [ ] Executou `npm run dev`
- [ ] Abriu http://localhost:3000
- [ ] Viu a página carregando
- [ ] Testou os filtros do portfolio
- [ ] Testou o formulário
- [ ] Testou em mobile

Se tudo estiver ✅, **você está pronto!**

---

## 🎉 SUCESSO!

Agora você tem um portfólio profissional totalmente funcional! 

**Comande agora**:
```bash
npm install && npm run dev
```

Vejo você em http://localhost:3000! 🚀

---

*Criado em 22 de Novembro de 2025*
*Desenvolvido com React + Vite + ❤️*
