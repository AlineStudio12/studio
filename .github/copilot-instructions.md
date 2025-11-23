# Aline Nail Designer - Instruções do Copilot

## Sobre o Projeto

Portfolio profissional para Aline Nail Designer, especialista em unhas em gel e design de sobrancelha.

**Stack Tecnológico**: React 18 + Vite + CSS3

## Estrutura do Projeto

```
Nail/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Entrada da aplicação
│   └── index.css          # Estilos globais
├── public/                # Arquivos estáticos
├── index.html             # HTML principal
├── vite.config.js         # Configuração Vite
├── package.json           # Dependências
└── README.md              # Documentação
```

## Como Iniciar o Projeto

### Instalação de Dependências
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Visualizar Build
```bash
npm run preview
```

## Componentes Principais

### Header
- Menu de navegação responsivo
- Logo com animação sparkle
- Menu mobile com burger menu

### Hero
- Seção de chamada principal
- Decorações animadas
- CTA button

### Services
- Cards de serviços (Unhas em Gel, Sobrancelha)
- Features listadas
- Hover effects

### Portfolio
- Grid de trabalhos
- Filtros por categoria
- Overlay ao hover

### About
- Apresentação profissional
- Estatísticas
- Skills/especialidades

### Contact
- Formulário funcional
- Informações de contato
- Links de redes sociais

### Footer
- Links rápidos
- Horários
- Redes sociais

## Customizações Comuns

### Alterar Cores
Edite as variáveis CSS em `src/index.css`:
```css
:root {
  --primary: #d63384;
  --secondary: #ff6b9d;
  --accent: #ffc0cb;
  /* ... mais cores */
}
```

### Adicionar Serviços
Edite o array `services` em `src/components/Services.jsx`

### Atualizar Portfolio
Edite o array `portfolioItems` em `src/components/Portfolio.jsx`

### Alterar Informações de Contato
Edite `src/components/Contact.jsx` com dados reais

### Adicionar Imagens
Substitua emojis por URLs de imagens em:
- `Portfolio.jsx` (prop `image`)
- `About.jsx` (section `.image-placeholder`)

## Features Implementadas

✅ Design responsivo (Mobile, Tablet, Desktop)
✅ Navegação suave entre seções
✅ Animações CSS3
✅ Formulário de contato
✅ Portfolio com filtros
✅ Menu mobile responsivo
✅ Cards interativos
✅ Gradientes e sombras modernas
✅ Accessibility (links semânticos, inputs com labels)

## Próximas Melhorias Sugeridas

1. **Integração com Backend**
   - Conectar formulário a API
   - Sistema de agendamento
   - Envio de emails

2. **Imagens Reais**
   - Fotos dos trabalhos
   - Foto de perfil
   - Hero image

3. **SEO**
   - Meta tags
   - Open Graph
   - Sitemap XML

4. **Analytics**
   - Google Analytics
   - Conversão tracking

5. **Performance**
   - Image optimization
   - Code splitting
   - Lazy loading

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor desenvolvimento |
| `npm run build` | Cria build otimizada |
| `npm run preview` | Visualiza build |

## Variáveis de Ambiente

Crie arquivo `.env` (opcional):
```
VITE_API_URL=sua_api_url
VITE_EMAIL_SERVICE=seu_servico_email
```

## Troubleshooting

### Porta 3000 em uso
```bash
npm run dev -- --port 3001
```

### Clear cache
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## Documentação Adicional

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

**Status**: ✅ Projeto completo e funcional
**Última atualização**: 22 de Novembro de 2025
