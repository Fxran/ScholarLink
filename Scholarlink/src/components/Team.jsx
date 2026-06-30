import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/team.css'

const TEAM = [
  { name: 'Maya Santos', role: 'Project Lead & Backend', bio: 'Designs the data model and API.', initials: 'MS' },
  { name: 'Liam Cruz', role: 'Frontend Developer', bio: 'Builds the interface and interactions.', initials: 'LC' },
  { name: 'Ava Reyes', role: 'UI/UX Designer', bio: 'Shapes the look, feel, and flow.', initials: 'AR' },
  { name: 'Noah Tan', role: 'QA & Documentation', bio: 'Tests features and writes the docs.', initials: 'NT' },
]

const SOCIALS = ['in', '𝕏', 'gh']

export default function Team() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">The team</span>
          <h2 className="section-heading">The people behind the project</h2>
          <p className="section-subtext">Four contributors covering design, development, and quality.</p>
        </div>

        <div className="team__grid">
          {TEAM.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, index }) {
  const [ref, isVisible] = useScrollReveal()
  const delay = `reveal-delay-${(index % 5) + 1}`

  return (
    <article
      ref={ref}
      className={`team-card reveal ${delay} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="team-card__photo">
        <span>{member.initials}</span>
      </div>
      <h3 className="team-card__name">{member.name}</h3>
      <p className="team-card__role">{member.role}</p>
      <p className="team-card__bio">{member.bio}</p>
      <div className="team-card__socials">
        {SOCIALS.map((social) => (
          <a key={social} href="#" aria-label={`${member.name} social link`}>
            {social}
          </a>
        ))}
      </div>
    </article>
  )
}
