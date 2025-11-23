import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'gel',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulando envio de formulário
    console.log('Formulário enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'gel',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">Agende seu horário ou tire suas dúvidas</p>

        <div className="contact-grid">
          <div className="contact-info">

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:alinesantana.studio@gmail.com">alinesantana.studio@gmail.com</a></p>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Horário de Funcionamento</h3>
              <p>Seg - Dom: 07:30 - 17:00<br/></p>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/alinesantana_studio_?igsh=MTg5cmIycTRrM3Uxbw%3D%3D&utm_source=qr" className="social-btn">Instagram</a>
              <a href="https://wa.me/5581981919421?text=Ol%C3%A1%2C%20quero%20agendar%20meu%20horário!" className="social-btn">WhatsApp</a>
              <p><a href="mailto:alinesantana.studio@gmail.com" className="social-btn">Email</a></p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Seu Telefone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="gel">Unhas em Gel</option>
                <option value="sobrancelha">Design de Sobrancelha</option>
                <option value="combo">Combo (Gel + Sobrancelha)</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={submitted}
            >
              {submitted ? 'Enviado com Sucesso!' : 'Enviar Mensagem'}
            </button>

            {submitted && (
              <div className="success-message">
                Obrigado! Entraremos em contato em breve.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
