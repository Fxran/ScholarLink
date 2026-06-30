import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/about.css'

const OBJECTIVES = [
  'Replace scattered spreadsheets with one connected system of record.',
  'Give managers a live view of operations instead of end-of-week reports.',
  'Cut manual data entry through automated capture and validation.',
]

const BENEFITS = [
  'Faster decisions backed by current, accurate data.',
  'Lower operating overhead from automated routine work.',
  'A single source of truth shared across every role.',
]

export default function About() {
  const [textRef, textVisible] = useScrollReveal()
  const [illustrationRef, illustrationVisible] = useScrollReveal()

  return (
    <section id="about" className="about section-padding">
      <div className="container about__grid">
        <div
          ref={textRef}
          className={`about__text reveal ${textVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">About the project</span>
          <h2 className="section-heading">Built to remove the busywork from management</h2>
          <p className="section-subtext">
            Pulse is a capstone platform that centralizes registration, scheduling,
            and reporting for small teams and organizations, replacing manual
            tracking with one connected, automated system.
          </p>

          <div className="about__block">
            <h3>Objectives</h3>
            <ul>
              {OBJECTIVES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about__block">
            <h3>Benefits</h3>
            <ul>
              {BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          ref={illustrationRef}
          className={`about__illustration reveal ${illustrationVisible ? 'is-visible' : ''}`}
        >
          <div className="about__illustration-card glass-card">
            <div className="about__bar about__bar--1" />
            <div className="about__bar about__bar--2" />
            <div className="about__bar about__bar--3" />
            <div className="about__ring" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
