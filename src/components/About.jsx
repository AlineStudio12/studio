import './About.css'
import alineImg from '../img/aline.jpeg'

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>Sobre Mim</h2>
            <p>
              Olá! Sou Aline, uma nail designer apaixonada pela arte e beleza. Com mais de 4 anos de experiência no mercado, 
              desenvolvei uma paixão genuína por transformar as mãos e o olhar das minhas clientes.
            </p>
            <p>
              Minha especialidade está em criar designs únicos e personalizados, utilizando sempre produtos de qualidade premium. 
              Acredito que cada detalhe faz diferença e me dedico a oferecer o melhor atendimento possível.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>200+</h3>
                <p>Clientes Satisfeitos</p>
              </div>
              <div className="stat">
                <h3>4+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Designs Criados</p>
              </div>
            </div>

            <div className="about-skills">
              <h3>Especialidades</h3>
              <div className="skills-list">
                <span className="skill-tag">Unhas em Gel</span>
                <span className="skill-tag">Design de Sobrancelha</span>
                <span className="skill-tag">Alongamento na Tip</span>
                <span className="skill-tag">Alongamento no Molde F1</span>
                <span className="skill-tag">Nail Art</span>
                <span className="skill-tag">Design Personalizado</span>
                <span className="skill-tag">Técnicas Avançadas</span>
                <span className="skill-tag">Blindagem</span>
                <span className="skill-tag">Banho de gel</span>
                <span className="skill-tag">Aerografia</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src={alineImg} alt="Aline - Nail Designer" className="image-placeholder" />
            <div className="decoration-element">Nail Designer Pro</div>
          </div>
        </div>
      </div>
    </section>
  )
}
