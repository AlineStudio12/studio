import './Services.css'
import { useState } from 'react'
import icon1 from '../img/icon_no_bg.png'
import icon2Bg from '../img/icon2_no_bg.png'

export default function Services() {
  const [flipped, setFlipped] = useState({})

  const services = [
    {
      id: 1,
      icon: icon1,
      title: 'Unhas em Gel',
      description: 'Unhas em gel premium com designs sofisticados. Durabilidade de 30 dias com acabamento impecável.',
      features: ['Gel de qualidade premium', 'Designs personalizados', 'Sem danos às unhas', 'Longa durabilidade'],
      prices: [
        { name: 'ALONGAMENTO)' },
        { name: 'Tip', price: 'R$ 90,00' },
        { name: 'Model F1', price: 'R$ 80,00' },
        { name: 'UNHAS NATURAIS ' },
        { name: 'Banho de gel', price: 'R$ 40,00' },
        { name: 'Blindagem', price: 'R$ 30,00' },
        { name: 'Mão com esmaltação em gel e decoração', price: 'R$ 30,00' },
        { name: 'EXTRAS ' },
        { name: 'Manutenção', price: 'R$ 55,00' },
        { name: 'Reposição de unha (cada uni)', price: 'R$ 10,00' },
        { name: 'Françesa Reversa', price: 'R$ 10,00' }
      ]
    },
    {
      id: 2,
      icon: icon2Bg,
      title: 'Design de Sobrancelha',
      description: 'Design profissional de sobrancelha com técnicas avançadas. Moldura perfeita para seu rosto.',
      features: ['Análise facial personalizada', 'Design harmônico', 'Acabamento profissional', 'Produtos premium'],
      prices: [
        { name: 'Design Básico', price: 'R$ 25,00' },
        { name: 'Design com Henna', price: 'R$ 35,00' }
      ]
    }
  ]

  const toggleFlip = (id) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="servicos" className="services">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">Oferecemos os melhores serviços com produtos de qualidade premium</p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${flipped[service.id] ? 'flipped' : ''}`}>
              <div className="service-card-inner">
                {/* Frente do card */}
                <div className="service-card-front">
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="check">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="service-btn" onClick={() => toggleFlip(service.id)}>
                    Ver Preço
                  </button>
                </div>

                {/* Verso do card */}
                <div className="service-card-back">
                  <div className="price-container">
                    <h4> Tabela de Preços </h4>
                    <div className="price-list">
                      {service.prices.map((item, idx) => (
                        <div key={idx} className={`price-item ${!item.price ? 'price-category' : ''}`}>
                          <span className="price-name">{item.name}</span>
                          {item.price && <span className="price-value">{item.price}</span>}
                        </div>
                      ))}
                    </div>
                    <button className="service-btn" onClick={() => toggleFlip(service.id)}>
                      ← Voltar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
