import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/technology.css'

const STACK = [
  { icon: '⚛️', name: 'React.js', description: 'Component-driven interface layer.' },
  { icon: '🟢', name: 'Node.js', description: 'JavaScript runtime powering the server.' },
  { icon: '🚂', name: 'Express.js', description: 'Lightweight API and routing layer.' },
  { icon: '🗄️', name: 'MySQL', description: 'Relational database for structured records.' },
  { icon: '🌐', name: 'HTML5', description: 'Semantic markup for accessible pages.' },
  { icon: '🎨', name: 'CSS3', description: 'Styling, layout, and animation.' },
  { icon: '✨', name: 'JavaScript', description: 'Core interactivity across the stack.' },
]

export default function Technology() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section id="technology" className="technology section-padding">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">Technology stack</span>
          <h2 className="section-heading">Built on a familiar, dependable stack</h2>
          <p className="section-subtext">
            A standard JavaScript stack keeps the project easy to read, run, and extend.
          </p>
        </div>

        <div className="technology__grid">
          {STACK.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechCard({ tech, index }) {
  const [ref, isVisible] = useScrollReveal()
  const delay = `reveal-delay-${(index % 5) + 1}`

  return (
    <div
      ref={ref}
      className={`tech-card reveal ${delay} ${isVisible ? 'is-visible' : ''}`}
    >
      <span className="tech-card__icon" aria-hidden="true">{tech.icon}</span>
      <h3 className="tech-card__name">{tech.name}</h3>
      <p className="tech-card__description">{tech.description}</p>
    </div>
  )
}
