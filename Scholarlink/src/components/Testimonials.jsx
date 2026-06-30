import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Dr. Elena Cruz',
    position: 'Capstone Adviser',
    feedback: 'A clean, well-structured system that solves a real coordination problem.',
    initials: 'EC',
  },
  {
    name: 'Marco Villanueva',
    position: 'Department Coordinator',
    feedback: 'Cut our weekly reporting time down significantly during the pilot run.',
    initials: 'MV',
  },
  {
    name: 'Sofia Lim',
    position: 'Student Council Officer',
    feedback: 'Registration and dashboard views are intuitive even for first-time users.',
    initials: 'SL',
  },
]

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">Feedback</span>
          <h2 className="section-heading">What early users are saying</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollReveal()
  const delay = `reveal-delay-${(index % 5) + 1}`

  return (
    <figure
      ref={ref}
      className={`testimonial-card glass-card reveal ${delay} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
        {'★★★★★'}
      </div>
      <blockquote>&ldquo;{testimonial.feedback}&rdquo;</blockquote>
      <figcaption>
        <span className="testimonial-card__avatar">{testimonial.initials}</span>
        <div>
          <span className="testimonial-card__name">{testimonial.name}</span>
          <span className="testimonial-card__position">{testimonial.position}</span>
        </div>
      </figcaption>
    </figure>
  )
}
