import { useState } from 'react'
import './Portfolio.css'
import u1 from '../img/u1.jpeg'
import u2 from '../img/u2.jpeg'
import u3 from '../img/u3.jpeg'
import u4 from '../img/u4.jpeg'
import u5 from '../img/u5.jpeg'
import u6 from '../img/u6.jpeg'
import s1 from '../img/s1.jpeg'
import s2 from '../img/s2.jpeg'
import s3 from '../img/s3.jpeg'
import s4 from '../img/s4.jpeg'
import iconNoBg from '../img/icon_no_bg.png'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const portfolioItems = [
    // Sobrancelhas - 1 a 4
    {
      id: 1,
      category: 'sobrancelha',
      title: 'Design estruturado',
      image: s1,
      description: 'henna para corrigir falhas e uniformizar o tom da sobrancelha.'
    },
    {
      id: 2,
      category: 'sobrancelha',
      title: 'Design preciso',
      image: s2,
      description: 'henna para correção de falhas e mais definição'
    },
    {
      id: 3,
      category: 'sobrancelha',
      title: 'Design natural',
      image: s3,
      description: 'Design natural, resultado impecável'
    },
    {
      id: 4,
      category: 'sobrancelha',
      title: 'Design alinhado',
      image: s4,
      description: 'Design alinhado à simetria natural'
    },
    // Unhas - 1 a 6
    {
      id: 5,
      category: 'gel',
      title: 'Banho de Gel',
      image: u1,
      description: 'Blindagem da unha natural sem alongar.'
    },
    {
      id: 6,
      category: 'gel',
      title: 'Gel Baby Boomer',
      image: u2,
      description: 'Degradê suave do branco ao nude/rosa'
    },
    {
      id: 7,
      category: 'gel',
      title: 'Arte Minimalista',
      image: u3,
      description: 'Traços finos, pontinhos ou desenhos delicados.'
    },
    {
      id: 8,
      category: 'gel',
      title: 'Arte Floral',
      image: u4,
      description: 'Flores delicadas, folhas e detalhes naturais em preto'
    },
    {
      id: 9,
      category: 'gel',
      title: 'Gel com gliter',
      image: u5,
      description: 'Brilho selado na estrutura do gel, garantindo durabilidade e acabamento uniforme'
    },
    {
      id: 10,
      category: 'gel',
      title: 'Arte Abstrata no F1',
      image: u6,
      description: 'Traços finos, pontinhos ou desenhos delicados em tons preto e dourado.'
    },
  ]

  const filtered = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Nosso Portfolio</h2>
        <p className="section-subtitle">Veja alguns dos nossos trabalhos incríveis</p>

        <div className="portfolio-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${filter === 'gel' ? 'active' : ''}`}
            onClick={() => setFilter('gel')}
          >
            Unhas em Gel
          </button>
          <button 
            className={`filter-btn ${filter === 'sobrancelha' ? 'active' : ''}`}
            onClick={() => setFilter('sobrancelha')}
          >
            Sobrancelha
          </button>
        </div>

        <div className="portfolio-grid">
          {filtered.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
