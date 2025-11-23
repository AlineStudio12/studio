# Guia de Customização - Aline Nail Designer

## 1. Adicionar Imagens Reais ao Portfolio

Edite `src/components/Portfolio.jsx`:

```javascript
const portfolioItems = [
  {
    id: 1,
    category: 'gel',
    title: 'Unhas French Ombre',
    image: 'url-da-imagem-aqui.jpg',  // Altere para URL real
    description: 'Design elegante com degradê de cores'
  },
  // ... mais itens
]
```

## 2. Integrar com Formulário Real

Instale uma biblioteca de email:
```bash
npm install nodemailer
```

Edite `src/components/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch('sua-api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    // ... handle response
  } catch (error) {
    console.error('Erro:', error)
  }
}
```

## 3. Adicionar Google Analytics

Instale:
```bash
npm install react-ga4
```

Em `src/App.jsx`:
```javascript
import ReactGA from 'react-ga4'

ReactGA.initialize('SEU_GA_ID')
```

## 4. Mudar Paleta de Cores

Em `src/index.css`:
```css
:root {
  --primary: #sua-cor;
  --secondary: #sua-cor;
  --accent: #sua-cor;
  --dark: #sua-cor;
  --light: #sua-cor;
  --gray: #sua-cor;
}
```

## 5. Adicionar Novos Serviços

Em `src/components/Services.jsx`:
```javascript
const services = [
  // ... serviços existentes
  {
    id: 3,
    icon: '💄',
    title: 'Seu Novo Serviço',
    description: 'Descrição do serviço',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  }
]
```

## 6. Integrar com WhatsApp

Adicione link ao botão em `src/components/Contact.jsx`:

```javascript
<a href="https://wa.me/5585987654321?text=Olá%20Aline" className="social-btn">
  WhatsApp
</a>
```

## 7. Adicionar Galeria com Lightbox

Instale:
```bash
npm install yet-another-react-lightbox
```

## 8. Implementar Agendamento

Considere usar:
- Calendly
- Acuity Scheduling
- Simplybook

Adicione iframe ou link em `Contact.jsx`

## 9. Otimizações de Performance

### Lazy Loading de Imagens
```javascript
<img 
  src="imagem.jpg" 
  loading="lazy"
  alt="Descrição"
/>
```

### Code Splitting
```javascript
import { lazy, Suspense } from 'react'

const Portfolio = lazy(() => import('./Portfolio'))

<Suspense fallback={<div>Carregando...</div>}>
  <Portfolio />
</Suspense>
```

## 10. Deploy

### Vercel (Recomendado para Vite)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta /dist
```

### GitHub Pages
Edite `vite.config.js`:
```javascript
export default defineConfig({
  base: '/aline-nail/',
  // ... resto da configuração
})
```

Então:
```bash
npm run build
npm run deploy
```

## 11. SEO Básico

Edite `index.html`:
```html
<meta name="description" content="Aline Nail Designer - Especialista em unhas em gel e design de sobrancelha">
<meta name="keywords" content="unhas em gel, design de sobrancelha, nail designer">
<meta property="og:title" content="Aline Nail Designer">
<meta property="og:image" content="url-da-imagem">
<meta property="og:description" content="Descrição do serviço">
```

## 12. Adicionar Avaliações/Depoimentos

Crie novo componente `src/components/Testimonials.jsx`:

```javascript
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Cliente 1',
      text: 'Adorei o trabalho!',
      rating: 5
    }
  ]
  
  return (
    <section className="testimonials">
      {testimonials.map(t => (
        <div key={t.id} className="testimonial-card">
          <p>{t.text}</p>
          <p>⭐ {t.rating}/5</p>
          <p>- {t.name}</p>
        </div>
      ))}
    </section>
  )
}
```

Depois adicione em `App.jsx`:
```javascript
<Testimonials />
```

## 13. Modo Escuro

Adicione em `App.jsx`:
```javascript
const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
  document.body.style.background = darkMode ? '#1a1a1a' : '...'
}, [darkMode])
```

## 14. Internacionalização

Instale:
```bash
npm install i18next
```

Configure para suportar PT-BR, EN, etc.

## Checklist de Customização

- [ ] Adicionar imagens reais
- [ ] Atualizar informações de contato
- [ ] Integrar formulário com backend
- [ ] Adicionar Google Analytics
- [ ] Configurar meta tags para SEO
- [ ] Escolher plataforma de deploy
- [ ] Testar responsividade
- [ ] Otimizar imagens
- [ ] Configurar domínio personalizado
- [ ] Adicionar certificado SSL

---

Dúvidas? Consulte a documentação do React (react.dev) ou Vite (vitejs.dev)
