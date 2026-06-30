import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Decorative blurred orbs + floating shapes, purely CSS driven */}
      <div className="hero__decor" aria-hidden="true">
        <span className="hero__orb hero__orb--violet" />
        <span className="hero__orb hero__orb--teal" />
        <span className="hero__shape hero__shape--1" />
        <span className="hero__shape hero__shape--2" />
        <span className="hero__shape hero__shape--3" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-eyebrow">Capstone Project &middot; 2026</span>
          <h1 className="hero__title">
            AI-Powered <span className="hero__title-accent">Smart Management</span> System
          </h1>
          <p className="hero__subtitle">
            A modern web platform that automates day-to-day management work and turns
            raw activity into clear, real-time analytics &mdash; so teams spend less time
            tracking and more time deciding.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#features" className="btn btn-secondary">Learn More</a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>Stack</dt>
              <dd>React &middot; Node &middot; MySQL</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Live demo ready</dd>
            </div>
          </dl>
        </div>

        {/* Signature element: an animated node graph representing the
            system pulling raw data in, processing it, and emitting insight. */}
        <div className="hero__illustration" role="img" aria-label="Diagram showing data flowing from input nodes through a processing core into an insights node">
          <svg viewBox="0 0 420 420" className="hero__graph" focusable="false" aria-hidden="true">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c5cff" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>

            {/* connecting lines */}
            <path className="hero__graph-line" d="M70 100 L210 210" />
            <path className="hero__graph-line" d="M70 210 L210 210" />
            <path className="hero__graph-line" d="M70 320 L210 210" />
            <path className="hero__graph-line" d="M210 210 L350 100" />
            <path className="hero__graph-line" d="M210 210 L350 210" />
            <path className="hero__graph-line" d="M210 210 L350 320" />

            {/* input nodes */}
            <circle className="hero__graph-node hero__graph-node--small" cx="70" cy="100" r="8" />
            <circle className="hero__graph-node hero__graph-node--small" cx="70" cy="210" r="8" />
            <circle className="hero__graph-node hero__graph-node--small" cx="70" cy="320" r="8" />

            {/* core */}
            <circle className="hero__graph-core" cx="210" cy="210" r="34" />
            <circle className="hero__graph-core-ring" cx="210" cy="210" r="46" />

            {/* output nodes */}
            <circle className="hero__graph-node hero__graph-node--small" cx="350" cy="100" r="8" />
            <circle className="hero__graph-node hero__graph-node--small" cx="350" cy="210" r="8" />
            <circle className="hero__graph-node hero__graph-node--small" cx="350" cy="320" r="8" />
          </svg>
        </div>
      </div>

      <a href="#features" className="hero__scroll-cue" aria-label="Scroll to features">
        <span />
      </a>
    </section>
  )
}
