import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/workflow.css'

const STEPS = [
  { title: 'Registration', description: 'A new user or organization creates an account.' },
  { title: 'Login', description: 'Authenticated access through a secure session.' },
  { title: 'Dashboard', description: 'A live overview of current activity and tasks.' },
  { title: 'Data Processing', description: 'Incoming records are validated and stored.' },
  { title: 'Analytics', description: 'Processed data is turned into trends and metrics.' },
  { title: 'Reports', description: 'Insights are packaged into shareable reports.' },
]

export default function Workflow() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section id="workflow" className="workflow section-padding">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">How it works</span>
          <h2 className="section-heading">From sign-up to insight, in six steps</h2>
          <p className="section-subtext">
            Each step in the system feeds the next, so data keeps moving without
            manual handoffs.
          </p>
        </div>

        <ol className="workflow__timeline">
          {STEPS.map((step, index) => (
            <WorkflowStep key={step.title} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function WorkflowStep({ step, index }) {
  const [ref, isVisible] = useScrollReveal()
  const delay = `reveal-delay-${(index % 5) + 1}`

  return (
    <li
      ref={ref}
      className={`workflow__step reveal ${delay} ${isVisible ? 'is-visible' : ''}`}
    >
      <span className="workflow__index">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="workflow__title">{step.title}</h3>
      <p className="workflow__description">{step.description}</p>
    </li>
  )
}
