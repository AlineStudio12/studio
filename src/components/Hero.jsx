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
        <button className="hero-btn">Agendar Consulta</button>
      </div>

      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  )
}
