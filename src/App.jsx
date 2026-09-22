import React, { useState, useEffect } from 'react';
import './App.css';

// Graphical Assets
import bgImg from './assets/background_hd.jpg';
import bgMobileImg from './assets/background_mobile.jpg';
import iconInstagram from './assets/icon_instagram.png';
import iconLinkedin from './assets/icon_linkedin.png';
import iconEmail from './assets/icon_email.png';
import goldDividerLine from './assets/gold_divider_line.png';
import cleanCardTransparent from './assets/clean_card_transparent.png';
import mapGoldFrame from './assets/map_gold_frame.png';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth <= 900) {
        document.documentElement.style.setProperty('--stage-scale', '1');
        return;
      }
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      const s = Math.min(scaleX, scaleY);
      document.documentElement.style.setProperty('--stage-scale', s.toString());
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() && !phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
    }, 3000);
  };

  return (
    <div
      className="canvas-wrapper"
      style={{
        backgroundImage: `url(${bgImg})`,
        '--mobile-bg': `url(${bgMobileImg})`
      }}
    >
      <div className="canvas-stage">

        {/* FEEDBACK Header */}
        <div className="stage-elem feedback-header">
          <h1 className="gold-michroma-text feedback-header-text">FEEDBACK</h1>
        </div>

        {/* Tribute Subtitle with original gold divider line component */}
        <div className="stage-elem tribute-block">
          <div className="tribute-text-heading gold-michroma-text">LEAVE YOUR MARK TRIBUTE</div>
          <img
            src={goldDividerLine}
            className="tribute-gold-line"
            alt="Divider Line"
          />
        </div>

        {/* Feedback Card Box with Exact Figma Graphics & HTML Typography */}
        <div className="stage-elem feedback-card">
          <img
            src={cleanCardTransparent}
            className="card-base-img"
            alt="Feedback Box"
          />

          <form className="card-interactive-overlay" onSubmit={handleSubmit}>
            {/* Name Input Overlay */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="feedback-input name-input-field"
              autoComplete="off"
              spellCheck="false"
              required
            />

            {/* Phone Number Input Overlay */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="feedback-input phone-input-field"
              autoComplete="off"
              spellCheck="false"
              required
            />

            {/* Send Request Button Overlay */}
            <button
              type="submit"
              className="feedback-submit-btn"
              title="Send Request"
            >
              <span>— SEND REQUEST —</span>
            </button>
          </form>

          {/* Submission Toast */}
          {submitted && (
            <div className="card-toast">
              <span>REQUEST TRANSMITTED</span>
            </div>
          )}
        </div>

        {/* LEFT COLUMN: INFO */}
        <div className="stage-elem info-title">
          <h2 className="gold-michroma-text info-title-text">INFO</h2>
        </div>

        <nav className="stage-elem nav-links-container">
          <a
            href="https://www.djss4ds.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link home-link"
            title="Home"
          >
            <span className="gold-michroma-text nav-link-text">HOME</span>
          </a>
          <a
            href="https://www.djss4ds.in/team"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link team-link"
            title="Team"
          >
            <span className="gold-michroma-text nav-link-text">TEAM</span>
          </a>
          <a
            href="https://www.djss4ds.in/events"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link events-link"
            title="Events"
          >
            <span className="gold-michroma-text nav-link-text events-text">Events</span>
          </a>
        </nav>

        {/* LEFT COLUMN: CONTACT US */}
        <div className="stage-elem contact-us-title">
          <h2 className="gold-michroma-text contact-us-title-text">CONTACT US</h2>
        </div>

        <div className="stage-elem contact-person-block">
          <div className="contact-person-info">
            <div className="gold-michroma-text contact-person-name">KHUSH THAKKAR</div>
            <div className="gold-michroma-text contact-person-role">(S4DS CHAIRPERSON)</div>
            <a
              href="tel:+919858107107"
              className="gold-michroma-text contact-person-phone"
              title="Call +919858107107"
            >
              +919858107107
            </a>
          </div>
        </div>

        {/* LEFT COLUMN: SOCIAL MEDIA */}
        <div className="stage-elem social-media-title">
          <h2 className="gold-michroma-text social-media-title-text">SOCIAL MEDIA</h2>
        </div>

        <div className="stage-elem social-icons-container">
          <a
            href="https://www.instagram.com/djs.s4ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="Instagram"
          >
            <img src={iconInstagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/djs-s4ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="LinkedIn"
          >
            <img src={iconLinkedin} alt="LinkedIn" />
          </a>
          <a
            href="mailto:info.djss4ds@gmail.com"
            className="social-btn"
            title="Email"
          >
            <img src={iconEmail} alt="Email" />
          </a>
        </div>

        {/* RIGHT COLUMN: ADDRESS */}
        <div className="stage-elem address-title">
          <h2 className="gold-michroma-text address-title-text">ADDRESS</h2>
        </div>

        <div className="stage-elem address-block">
          <a
            href="https://maps.google.com/?q=SVKM+Dwarkadas+J+Sanghvi+College+of+Engineering+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="address-click-link"
            title="Open in Google Maps"
          >
            <div className="gold-michroma-text address-text-content">
              <p>No. U-15, J.V.P.D. Scheme,</p>
              <p>Bhaktivedanta Swami Marg,</p>
              <p>Opp. Cooper Hospital,</p>
              <p>Vile Parle (West),</p>
              <p>Mumbai - 400 056, India</p>
            </div>
          </a>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE MAP (Exact Xtract 4.0 Embed) */}
        <div className="stage-elem map-container">
          <iframe
            className="map-iframe-layer"
            title="Dwarkadas J. Sanghvi College of Engineering"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.0063298265954!2d72.8358360896312!3d19.10710054930386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas+J.+Sanghvi+College+of+Engineering!5e0!3m2!1sen!2sin!4v1511171768631"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <img src={mapGoldFrame} className="map-frame-layer" alt="Map Frame" />
        </div>

      </div>
    </div>
  );
}

export default App;