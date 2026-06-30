import '../styles/footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
]

const RESOURCES = [
  { label: 'Documentation', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-mark" aria-hidden="true" />
            Pulse
          </a>
          <p>An AI-powered smart management system, built as a university capstone project.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter / X">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">gh</a>
          </div>
        </div>

        <div className="footer__column">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>Resources</h4>
          <ul>
            {RESOURCES.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>Contact</h4>
          <ul>
            <li>hello@pulsecapstone.dev</li>
            <li>+63 900 000 0000</li>
            <li>Quezon City, Philippines</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {year} Pulse Capstone Project. All rights reserved.</p>
      </div>
    </footer>
  )
}
