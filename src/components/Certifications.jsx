import './Certifications.css'
import { useState } from 'react'
import cert1 from '../img/certificado1.jpeg'
import cert2 from '../img/certificado2.png'
import cert3 from '../img/certificado3.jpeg'
import cert4 from '../img/certificado4.jpeg'
import cert5 from '../img/certificado5.jpeg'
import cert6 from '../img/certificado6.jpeg'
import cert7 from '../img/certificado7.jpeg'
import cert8 from '../img/certificado8.jpeg'
import cert9 from '../img/certificado9.jpeg'
import cert10 from '../img/certificado10.jpeg'
import aula1 from '../img/aula.jpeg'
import aula2 from '../img/aula2.png'
import aula3 from '../img/aula3.png'
import aula5 from '../img/aula5.png'
import aula6 from '../img/aula6.png'
import aula7 from '../img/aula7.png'


export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const certifications = [
    {
      id: 1,
      title: 'PROFISSIONAL - Aperfeiçoamento na Fibra de Vidro',
      issuer: 'Nails Pro Academy',
      year: '2024',
      description: 'Especialização em aplicação de fibra de vidro premium, designs avançados e técnicas de alongamento.',
      image: cert1
    },
    {
      id: 2,
      title: 'Curso - Molde F1',
      issuer: 'Nails Pro Academy',
      year: '2024',
      description: 'Especialização em aplicação de Molde F1 premium, designs avançados e técnicas de alongamento.',
      image: cert2
    },
    {
      id: 3,
      title: 'Aperfeiçoamento na TIPS',
      issuer: 'Nails Pro Academy',
      year: '2024',
      description: 'Treinamento completo em Aperfeiçoamento na TIPS, Técnicas de aplicação e cuidados profissionais.',
      image: cert3
    },
    {
      id: 4,
      title: 'AEROGRAFIA 1.0 - Técnicas e Aplicações',
      issuer: 'ONEAIR Cursos',
      year: '2025',
      description: 'Curso intensivo em Aerografia, incluindo técnicas básicas, avançadas e aplicações criativas.',
      image: cert4
    },
    {
      id: 5,
      title: 'CURSO - Design de Sobrancelha',
      issuer: 'Elisa Nascimento',
      year: '2026',
      description: 'Especialização em técnicas em design de sobrancelha, incluindo modelagem, coloração e cuidados estéticos.',
      image: cert5
    },
    {
      id: 6,
      title: 'Especialização - Spar dos Pés',
      issuer: 'Potente Cosméticos',
      year: '2026',
      description: 'Especialização em Spar dos Pés, incluindo técnicas avançadas e produtos premium.',
      image: cert6
    },
    {
      id: 7,
      title: 'Especialização - Alogamento de unha ',
      issuer: 'Potente Cosméticos',
      year: '2024',
      description: 'Especialização em design de nail design, incluindo técnicas avançadas e alongamento.',
      image: cert7
    },
    {
      id: 8,
      title: 'CURSO - Alongamento de unha em gel em gel na TIP e Fibra de vidro',
      issuer: 'Camila madruga',
      year: '2025',
      description: 'Especialização em técnicas de alongamento de unha em gel na TIP e Fibra de vidro, incluindo designs modernos e produtos premium.',
      image: cert8
    },
    {
      id: 9,
      title: 'Workshop - Alongamento com naturalidade e durabilidade',
      issuer: 'Camila madruga',
      year: '2024',
      description: 'Especialização em cuidados com a pele, incluindo técnicas avançadas e produtos premium.',
      image: cert9
    },
    {
      id: 10,
      title: 'CURSO -nail design inicaante',
      issuer: 'Alice Rodrigues',
      year: '2023',
      description: 'Especialização em técnicas de corte, incluindo designs modernos e produtos premium.',
      image: cert10
    }
  ]
  const aulas = [
    {
      id: 1,
      title: 'Treinamento - Design de Sobrancelha',
      date: 'Ferreiro 2025',
      image: aula1
    },
    {
      id: 2,
      title: 'Workshop - Designs Avançados',
      date: 'Outubro 2025',
      image: aula2
    },
    {
      id: 3,
      title: 'Treinamento - Design de Nail design',
      date: 'Setembro 2025',
      image: aula3
    },
    {
      id: 4,
      title: 'Workshop - Técnicas Avançadas de design de sobrancelha',
      date: 'Novembro 2025',
      image: aula5
    },
    {
      id: 5,
      title: 'Treinamento - Técnicas de Alongamento da Potente Cosméticos',
      date: 'Abril 2026',
      image: aula6
    },
    {
      id: 6,
      title: 'Workshop - Design de Unhas com aerógrafo',
      date: 'Fevereiro 2026',
      image: aula7
    }
  ]

  return (
    <>
      <section id="certificacoes" className="certifications">
        <div className="container">
          <h2 className="section-title">Certificações</h2>
          <p className="section-subtitle">Formação profissional contínua e especializada</p>

          <div className="certifications-grid">
            {certifications.slice(0, showAll ? certifications.length : 6).map((cert) => (
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
          {certifications.length > 6 && (
            <div className="certifications-actions">
              <button
                className="button-secondary"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? 'Ver menos' : 'Ver mais certificados'}
              </button>
            </div>
          )}

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
