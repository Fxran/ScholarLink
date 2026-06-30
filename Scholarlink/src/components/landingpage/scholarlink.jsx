import React from "react";
import "./ScholarLink.css";

/* =========================================================================
   IMAGE PLACEHOLDERS
   Swap any of these constants with your own image path / import / URL.
   e.g. import heroImg from "./assets/hero.png"; then HERO_IMAGE = heroImg;
   ========================================================================= */
const HERO_IMAGE =
  "https://placehold.co/640x520/cccccc/666666?text=Hero+Image";
const ABOUT_IMAGE =
  "https://placehold.co/640x420/cccccc/666666?text=About+Us+Image";

export default function ScholarLink() {
  return (
    <div className="sl-page">
      {/* ---------------- NAVBAR ---------------- */}
      <header className="sl-navbar">
        <div className="sl-container sl-navbar-inner">
          <div className="sl-logo">
            <span className="sl-logo-icon" aria-hidden="true">
              🎓
            </span>
            <span className="sl-logo-text">ScholarLink</span>
          </div>
          <nav className="sl-nav-right">
            <a href="#contact" className="sl-nav-link">
              Contact
            </a>
            <button className="sl-btn sl-btn-outline">Login</button>
            <button className="sl-btn sl-btn-primary">Sign Up</button>
          </nav>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="sl-hero">
        <div className="sl-container sl-hero-inner">
          <div className="sl-hero-text">
            <h1>
              ScholarLink: <span className="sl-hero-light">AI-Powered</span>
              <br />
              Scholarship Search Made Easy
            </h1>
            <p className="sl-hero-sub">
              Find and apply for the perfect scholarship opportunities with
              ease.
            </p>
            <button className="sl-btn sl-btn-cta">Get Started</button>
          </div>

          <div className="sl-hero-image-wrap">
            {/* Placeholder hero image - replace HERO_IMAGE constant above */}
            <img
              src={HERO_IMAGE}
              alt="Person using ScholarLink on a laptop"
              className="sl-hero-image"
            />

            <div className="sl-floating-card sl-floating-card--heart">
              <span className="sl-float-icon">💚</span>
              <div className="sl-float-lines">
                <span className="sl-float-line" />
                <span className="sl-float-line sl-float-line--short" />
              </div>
            </div>

            <div className="sl-floating-card sl-floating-card--msg-top">
              <span className="sl-float-icon">➤</span>
              <span className="sl-float-bar" />
            </div>

            <div className="sl-floating-card sl-floating-card--msg-bottom">
              <span className="sl-float-icon">➤</span>
              <span className="sl-float-bar" />
            </div>

            <div className="sl-floating-card sl-floating-card--profile">
              <span className="sl-float-icon sl-float-icon--circle">👤</span>
              <span className="sl-float-bar sl-float-bar--dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <section className="sl-stats">
        <div className="sl-container sl-stats-inner">
          <div className="sl-stat-item">
            <span className="sl-stat-icon">📚</span>
            <div>
              <p className="sl-stat-title">100+</p>
              <p className="sl-stat-sub">Scholarships Available</p>
            </div>
          </div>
          <div className="sl-stat-divider" />
          <div className="sl-stat-item">
            <span className="sl-stat-icon">🔍</span>
            <div>
              <p className="sl-stat-title">AI-Powered</p>
              <p className="sl-stat-sub">Matching</p>
            </div>
          </div>
          <div className="sl-stat-divider" />
          <div className="sl-stat-item">
            <span className="sl-stat-icon">📝</span>
            <div>
              <p className="sl-stat-title">Easy</p>
              <p className="sl-stat-sub">Application Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="sl-how">
        <div className="sl-container">
          <h2 className="sl-section-title">How ScholarLink Works</h2>
          <div className="sl-how-grid">
            {[
              {
                step: 1,
                icon: "👤",
                title: "Create Profile",
                desc: "Sign up and create your academic profile.",
              },
              {
                step: 2,
                icon: "🔍",
                title: "Get Matched",
                desc: "Receive personalized scholarship recommendations.",
              },
              {
                step: 3,
                icon: "📄",
                title: "Apply Easily",
                desc: "Submit your application and required documents.",
              },
              {
                step: 4,
                icon: "📈",
                title: "Track Applications",
                desc: "Monitor your application status in real time.",
              },
              {
                step: 5,
                icon: "🔔",
                title: "Get Notified",
                desc: "Receive updates on deadlines, results, and announcements.",
              },
            ].map((item) => (
              <div className="sl-how-card" key={item.step}>
                <span className="sl-how-step">{item.step}</span>
                <span className="sl-how-icon">{item.icon}</span>
                <h3 className="sl-how-title">{item.title}</h3>
                <p className="sl-how-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT US ---------------- */}
      <section className="sl-about">
        <div className="sl-container sl-about-grid">
          <div className="sl-about-text">
            <h2 className="sl-section-title sl-about-title">About Us</h2>
            <p>
              ScholarLink is an AI-powered platform designed to make
              scholarship search and application simple, efficient, and
              accessible for everyone. Our mission is to connect deserving
              students with the right opportunities and help them achieve
              their academic dreams.
            </p>
          </div>

          <div className="sl-about-cols">
            <div className="sl-about-col">
              <span className="sl-about-icon">🎓</span>
              <h4>Our Mission</h4>
              <p>
                Empower students by making scholarship opportunities easy to
                find and apply.
              </p>
            </div>
            <div className="sl-about-col">
              <span className="sl-about-icon">👥</span>
              <h4>Our Vision</h4>
              <p>
                A world where every student has access to the financial
                support they deserve.
              </p>
            </div>
            <div className="sl-about-col">
              <span className="sl-about-icon">🛡️</span>
              <h4>Our Commitment</h4>
              <p>
                We are committed to innovation, integrity, and student
                success.
              </p>
            </div>
            <div className="sl-about-col">
              <span className="sl-about-icon">🤝</span>
              <h4>Who We Serve</h4>
              <p>
                We support students, scholarship providers, and institutions
                in building a better future.
              </p>
            </div>
          </div>

          <div className="sl-about-image-wrap">
            {/* Placeholder about image - replace ABOUT_IMAGE constant above */}
            <img
              src={ABOUT_IMAGE}
              alt="Students collaborating around a laptop"
              className="sl-about-image"
            />
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="sl-footer" id="contact">
        <div className="sl-container sl-footer-grid">
          <div className="sl-footer-brand">
            <div className="sl-logo sl-logo--footer">
              <span className="sl-logo-icon" aria-hidden="true">
                🎓
              </span>
              <span className="sl-logo-text">ScholarLink</span>
            </div>
            <p>
              Your smart partner in finding and applying for scholarships.
              Empowering students. Connecting opportunities.
            </p>
          </div>

          <div className="sl-footer-contact">
            <h4>Contact Us</h4>
            <p>
              <span className="sl-footer-icon">✉️</span>{" "}
              menese.scholarlink@gmail.com
            </p>
            <p>
              <span className="sl-footer-icon">📍</span> Meneses Campus,
              Bulacan State University
            </p>
            <div className="sl-footer-social">
              <a href="#" aria-label="Facebook" className="sl-social-icon">
                f
              </a>
              <a href="#" aria-label="Twitter" className="sl-social-icon">
                t
              </a>
              <a href="#" aria-label="Instagram" className="sl-social-icon">
                i
              </a>
              <a href="#" aria-label="LinkedIn" className="sl-social-icon">
                in
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}