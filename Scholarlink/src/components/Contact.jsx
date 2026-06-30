import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/contact.css'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [formRef, formVisible] = useScrollReveal()
  const [infoRef, infoVisible] = useScrollReveal()
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // No backend wired up in this demo; simply acknowledge the submission.
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact__grid">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`contact__form glass-card reveal ${formVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-heading">Send us a message</h2>

          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>

          <div className="contact__field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            Send Message
          </button>

          <p className="contact__status" role="status" aria-live="polite">
            {submitted ? 'Thanks — your message has been noted.' : ''}
          </p>
        </form>

        <div
          ref={infoRef}
          className={`contact__info reveal ${infoVisible ? 'is-visible' : ''}`}
        >
          <h3>Contact Information</h3>
          <ul className="contact__details">
            <li>
              <span>Address</span>
              123 University Avenue, Quezon City, Philippines
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:hello@pulsecapstone.dev">hello@pulsecapstone.dev</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+10000000000">+63 900 000 0000</a>
            </li>
          </ul>

          <div className="contact__socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter / X">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">gh</a>
          </div>
        </div>
      </div>
    </section>
  )
}
