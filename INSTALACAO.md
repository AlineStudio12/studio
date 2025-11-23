# 🚀 Guia de Instalação e Execução - Aline Nail Designer

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14.0 ou superior)
  - Download: https://nodejs.org/
  - Verificar: `node --version`

- **npm** (geralmente vem com Node.js)
  - Verificar: `npm --version`

## 📥 Passos para Instalar e Executar

### 1. Abrir Terminal
Navegue até a pasta do projeto:
```bash
cd "c:\Users\pedro\OneDrive\Área de Trabalho\Nail"
```

### 2. Instalar Dependências
```bash
npm install
```

Este comando irá:
- Baixar React, Vite e outras dependências
- Criar pasta `node_modules/`
- Gerar arquivo `package-lock.json`

⏱️ **Tempo estimado**: 2-5 minutos (dependendo da conexão)

### 3. Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```

Você verá uma mensagem como:
```
  ➜  Local:   http://localhost:3000
  ➜  Press h + enter to show help
```

### 4. Abrir no Navegador
Clique no link ou abra manualmente:
- http://localhost:3000

🎉 **Pronto!** O site está rodando!

## 🔨 Comandos Disponíveis

| Comando | Função | Uso |
|---------|--------|-----|
| `npm run dev` | Inicia desenvolvimento | Desenvolvimento local |
| `npm run build` | Cria build otimizada | Antes de fazer deploy |
| `npm run preview` | Visualiza build | Testar build local |

## 📝 Estrutura de Arquivos Criados

```
Nail/
├── .github/
│   └── copilot-instructions.md    # Instruções para Copilot
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── Services.jsx & Services.css
│   │   ├── Portfolio.jsx & Portfolio.css
│   │   ├── About.jsx & About.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx & App.css
│   ├── main.jsx
│   └── index.css
├── index.html                      # HTML principal
├── package.json                    # Dependências do projeto
├── vite.config.js                  # Configuração do Vite
├── tsconfig.json                   # Configuração TypeScript
├── .gitignore                      # Arquivos a ignorar no Git
├── README.md                       # Documentação principal
└── CUSTOMIZACOES.md                # Guia de customização
```

## 🎨 Componentes Criados

### 1. **Header**
- Navegação responsiva com menu mobile
- Logo com animação sparkle
- Links suaves para as seções

### 2. **Hero**
- Seção principal com chamada impactante
- Decorações animadas
- Botão CTA (Call to Action)

### 3. **Services**
- 2 cards de serviços principais
- Unhas em Gel
- Design de Sobrancelha
- Features detalhadas com checkmarks

### 4. **Portfolio**
- Grid responsivo de trabalhos
- Filtros por categoria
- Animações ao hover
- Overlay com informações

### 5. **About**
- Apresentação profissional
- Estatísticas (clientes, anos, designs)
- Tags de especialidades
- Imagem com animação

### 6. **Contact**
- Formulário funcional
- Informações de contato
- Cards com horários
- Links de redes sociais

### 7. **Footer**
- Links rápidos
- Horários
- Ícones de redes sociais
- Créditos

## 🎯 Próximos Passos

### ✅ Imediatamente
1. Instale as dependências: `npm install`
2. Execute o projeto: `npm run dev`
3. Teste todas as páginas no navegador

### 🔄 Curto Prazo (1-2 semanas)
1. Adicione imagens reais (substitua emojis)
2. Atualize informações de contato
3. Configure redes sociais
4. Customize cores se desejado

### 🚀 Médio Prazo (2-4 semanas)
1. Integre formulário com backend
2. Configure sistema de agendamento
3. Implemente Google Analytics
4. Otimize para SEO

### 📦 Deploy (Quando pronto)
1. Crie conta em Vercel (recomendado)
2. Execute: `npm run build`
3. Faça deploy
4. Configure domínio personalizado

## ⚠️ Solução de Problemas

### Erro: "npm: O termo 'npm' não é reconhecido"
**Solução**: Node.js não está instalado. Baixe em https://nodejs.org/

### Porta 3000 em uso
**Solução**: Use outra porta:
```bash
npm run dev -- --port 3001
```

### Erro ao instalar dependências
**Solução**: Limpe o cache:
```bash
npm cache clean --force
rm -r node_modules
rm package-lock.json
npm install
```

### Mudanças CSS/JS não aparecem
**Solução**: Força refresh no navegador:
- Windows/Linux: Ctrl + Shift + R
- Mac: Cmd + Shift + R

## 📚 Recursos Úteis

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **MDN Web Docs**: https://developer.mozilla.org
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations

## 💡 Dicas Importantes

1. **Sempre execute `npm install` após clonar o projeto**
2. **Nunca modifique pasta `node_modules/`**
3. **Commit `package-lock.json` no Git**
4. **Adicione `.env` se usar variáveis de ambiente**
5. **Use `npm run build` antes de fazer deploy**

## 🎓 Para Desenvolvedores

### Adicionar Novo Componente

1. Crie arquivo em `src/components/NomeComponente.jsx`:
```javascript
export default function NomeComponente() {
  return (
    <section className="meu-componente">
      <h2>Conteúdo</h2>
    </section>
  )
}
```

2. Crie arquivo `src/components/NomeComponente.css` com estilos

3. Importe em `src/App.jsx`:
```javascript
import NomeComponente from './components/NomeComponente'
```

4. Use no JSX:
```javascript
<NomeComponente />
```

### Instalar Novas Dependências
```bash
npm install nome-da-dependencia
```

Será adicionado automaticamente ao `package.json`

## ✨ Parabéns!

Seu portfólio está pronto! 

Próximo passo: Execute `npm run dev` e explore o site! 🚀

---

**Dúvidas?** Consulte os arquivos:
- README.md - Documentação geral
- CUSTOMIZACOES.md - Guia de customizações
- .github/copilot-instructions.md - Instruções de desenvolvimento
