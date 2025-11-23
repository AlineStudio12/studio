import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // SVG Icons
  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
    </svg>
  )

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.05 22l6.07-1.97A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.78-.36-3.97-1l-.28-.15-2.9.94.97-2.85-.18-.29A8 8 0 1 1 12 20z"/>
    </svg>
  )

  const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aline Nail Designer</h3>
            <p>Sua beleza é nossa prioridade. Oferecemos os melhores serviços de nail design e sobrancelha com produtos premium.</p>
          </div>

          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Horários</h3>
            <ul>
              <li>Seg - Sex: 09:00 - 19:00</li>
              <li>Sábado: 09:00 - 17:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href="mailto:seu@email.com" title="Email" aria-label="Email">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aline Nail Designer. Todos os direitos reservados.</p>
          <p>Desenvolvido com cuidado e atenção aos detalhes</p>
        </div>
      </div>
    </footer>
  )
}
