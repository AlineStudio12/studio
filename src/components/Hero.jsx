import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h2 className="hero-title">Aline Santana Studio</h2>
        <p className="hero-subtitle">Especialista em Unhas em Gel e Design de Sobrancelha</p>
        <p className="hero-description">
          Transforme sua beleza com técnicas profissionais e produtos de qualidade premium
        </p>
        <a href="https://wa.me/5581988532736?text=Ol%C3%A1%2C%20quero%20agendar%20meu%20horário!" target="_blank" rel="noopener noreferrer">
          <button className="hero-btn">Agendar Consulta</button>
        </a>

      </div>

      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  )
}
