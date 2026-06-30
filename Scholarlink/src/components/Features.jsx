import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/features.css'

const FEATURES = [
  {
    icon: '⚡',
    title: 'Automated Workflows',
    description: 'Routine tasks like approvals, reminders, and data entry run themselves in the background.',
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Live dashboards turn raw activity into trends you can act on the same day.',
  },
  {
    icon: '🔐',
    title: 'Role-Based Security',
    description: 'Every account only sees and edits what its role permits, with full audit trails.',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    description: 'The system flags what needs attention instead of burying it in a busy inbox.',
  },
  {
    icon: '🧩',
    title: 'Modular Architecture',
    description: 'Features are built as independent modules, so the platform grows without breaking.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Ready Deployment',
    description: 'Designed to scale from a local demo to a production server with no rewrites.',
  },
]

export default function Features() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="section-heading">Everything management needs, in one place</h2>
          <p className="section-subtext">
            Six core capabilities work together so teams spend less time chasing
            status updates and more time making decisions.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useScrollReveal()
  const delay = `reveal-delay-${(index % 5) + 1}`

  return (
    <article
      ref={ref}
      className={`feature-card glass-card reveal ${delay} ${isVisible ? 'is-visible' : ''}`}
    >
      <span className="feature-card__icon" aria-hidden="true">{feature.icon}</span>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__description">{feature.description}</p>
    </article>
  )
}
