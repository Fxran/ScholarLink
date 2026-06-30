import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/faq.css'

const FAQS = [
  {
    question: 'What is this project?',
    answer: 'Pulse is a capstone web platform that automates routine management tasks and presents the results as live analytics.',
  },
  {
    question: 'Who can use it?',
    answer: 'Any small team or organization that needs to track registrations, schedules, and reports in one shared place.',
  },
  {
    question: 'What technologies are used?',
    answer: 'The frontend is built with React and plain CSS; the backend runs on Node.js, Express, and a MySQL database.',
  },
  {
    question: 'Is the system secure?',
    answer: 'Access is role-based, sessions are authenticated, and every change is recorded in an audit trail.',
  },
]

export default function FAQ() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="faq section-padding">
      <div className="container faq__container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-heading">Common questions</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div className="faq__item" key={item.question}>
                <h3>
                  <button
                    type="button"
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggle(index)}
                  >
                    {item.question}
                    <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`} aria-hidden="true">+</span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={`faq__answer ${isOpen ? 'faq__answer--open' : ''}`}
                  role="region"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
