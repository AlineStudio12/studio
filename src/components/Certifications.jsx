import './Certifications.css'
import { useState } from 'react'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certifications = [
    {
      id: 1,
      title: 'PROFISSIONAL - Aperfeiçoamento na Fibra de Vidro',
      issuer: 'Instituto de Beleza Brasil',
      year: '2022',
      description: 'Especialização em aplicação de fibra de vidro premium, designs avançados e técnicas de alongamento.',
      image: '/src/img/certificado1.jpeg'
    },
    {
      id: 2,
      title: 'Curso - Molde F1',
      issuer: 'Academia de Beleza Luxe',
      year: '2023',
      description: 'Especialização em aplicação de Molde F1 premium, designs avançados e técnicas de alongamento.',
      image: '/src/img/certificado2.png'
    },
    {
      id: 3,
      title: 'Aperfeiçoamento na TIPS',
      issuer: 'Ministério da Saúde - Certificado',
      year: '2023',
      description: 'Treinamento completo em Aperfeiçoamento na TIPS, Técnicas de aplicação e cuidados profissionais.',
      image: '/src/img/certificado3.jpeg'
    },
    // {
    //   id: 4,
    //   title: 'Atendimento ao Cliente e Profissionalismo',
    //   issuer: 'Centro de Desenvolvimento Profissional',
    //   year: '2022',
    //   description: 'Formação em excelência no atendimento, comunicação e gestão de relacionamento com clientes.',
    //   icon: '💼',
    //   image: 'https://via.placeholder.com/400x300?text=Certificado+Atendimento'
    // }
  ]

  const aulas = [
    {
      id: 1,
      title: 'Treinamento - Design de Sobrancelha',
      date: 'Ferreiro 2025',
      image: '/src/img/aula.jpeg'
    },
    {
      id: 2,
      title: 'Workshop - Designs Avançados',
      date: 'Outubro 2025',
      image: '/src/img/aula2.png'
    },
    {
      id: 3,
      title: 'Treinamento - Design de Nail design',
      date: 'Setembro 2025',
      image: '/src/img/aula3.png'
    }
    // {
    //   id: 4,
    //   title: 'Demonstração - Produtos Premium',
    //   date: 'Agosto 2025',
    //   image: 'https://via.placeholder.com/400x300?text=Demo+Produtos'
    // }
  ]

  return (
    <>
      <section id="certificacoes" className="certifications">
        <div className="container">
          <h2 className="section-title">Certificações</h2>
          <p className="section-subtitle">Formação profissional contínua e especializada</p>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card" onClick={() => setSelectedCert(cert)}>
                <div className="cert-image-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                  <div className="cert-overlay">
                    <span className="view-text">Ver Certificado</span>
                  </div>
                </div>
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <div className="cert-year">{cert.year}</div>
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-badge">
                    <span className="badge-check">✓</span> Certificado
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-highlight">
            <div className="highlight-content">
              <h3>Comprometimento com a Excelência</h3>
              <p>
                Mantenho-me sempre atualizada com os últimos trends e técnicas do mercado de beleza, 
                realizando cursos de especialização contínua para oferecer o melhor serviço aos clientes.
              </p>
              <ul className="highlight-list">
                <li>✓ Atualizações constantes em técnicas</li>
                <li>✓ Produtos premium de qualidade internacional</li>
                <li>✓ Ambiente seguro e higienizado</li>
                <li>✓ Atendimento personalizado e profissional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="aulas" className="aulas">
        <div className="container">
          <h2 className="section-title">Aulas & Treinamentos</h2>
          <p className="section-subtitle">Conheça nossos momentos de aprendizado e desenvolvimento</p>

          <div className="aulas-grid">
            {aulas.map((aula) => (
              <div key={aula.id} className="aula-card">
                <div className="aula-image-wrapper">
                  <img src={aula.image} alt={aula.title} className="aula-image" />
                  <div className="aula-overlay">
                    <h3>{aula.title}</h3>
                  </div>
                </div>
                <div className="aula-content">
                  <p className="aula-date">
                    <span className="calendar-icon">📅</span> {aula.date}
                  </p>
                  <p className="aula-title">{aula.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img src={selectedCert.image} alt={selectedCert.title} className="modal-image" />
            <div className="modal-text">
              <h2>{selectedCert.title}</h2>
              <p className="modal-issuer">{selectedCert.issuer}</p>
              <p className="modal-year">{selectedCert.year}</p>
              <p className="modal-description">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
