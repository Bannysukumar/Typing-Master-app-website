import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    {
      title: '60-second test',
      desc: 'One-minute timed test so you can practice in short, focused sessions.',
    },
    {
      title: 'WPM & CPM',
      desc: 'Words per minute and characters per minute tracked in real time.',
    },
    {
      title: 'Mistake counter',
      desc: 'See every error as you type and improve accuracy over time.',
    },
    {
      title: 'Try Again',
      desc: 'One tap to restart with a new passage and beat your last score.',
    },
  ]

  const screens = [
    { src: '/t1.jpg', alt: 'Typing test ready — time, mistakes, WPM and CPM', caption: 'Start a test with a random passage. Time left, mistakes, WPM and CPM are shown live.' },
    { src: '/t2.jpg', alt: 'Typing in progress with green and red feedback', caption: 'Green for correct, red for errors. Current character is highlighted so you stay on track.' },
    { src: '/t3.jpg', alt: 'Test finished — THE END and Try Again', caption: 'Clear end screen with your stats and Try Again to practice more.' },
  ]

  const topics = [
    'Cyber crime & financial security',
    'Privacy & data protection',
    'Hacking & cyber terrorism',
    'Technology & the internet',
    'Laws and prevention',
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-card card">
            <img src="/typing-master-logo.png" alt="Typing Master" className="hero-logo" />
            <h1 className="hero-title">Typing speed test</h1>
            <p className="hero-subtitle">
              Typing Master Pro helps you type faster and more accurately. Get a 60-second test with real-time stats, 
              mistake counting, and instant feedback — green for correct, red for errors.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary">How it works</Link>
              <Link to="/contact" className="btn btn-secondary">Contact us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="card">
            <h2 className="section-title">What you get</h2>
            <p className="section-desc">Everything you need to measure and improve your typing in one simple app.</p>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} className="feature-item">
                  <span className="feature-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="screens-section">
        <div className="container">
          <div className="card">
            <h2 className="section-title">See it in action</h2>
            <p className="section-desc">Clean, focused interface — just you and the passage.</p>
            <div className="screens-grid">
              {screens.map((s, i) => (
                <div key={i} className="screen-item">
                  <div className="screen-img-wrap">
                    <img src={s.src} alt={s.alt} />
                  </div>
                  <p className="screen-caption">{s.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="topics-section">
        <div className="container">
          <div className="card">
            <h2 className="section-title">Practice with variety</h2>
            <p className="section-desc">Each test picks a random passage so you stay engaged. Topics include:</p>
            <ul className="topics-list">
              {topics.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="card cta-card">
            <h2 className="section-title">Ready to improve your typing?</h2>
            <p className="cta-desc">Download Typing Master Pro and start your typing speed test today.</p>
            <div className="cta-actions">
              <Link to="/about" className="btn btn-primary">About the app</Link>
              <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home { padding-bottom: 3rem; }
        .hero { padding: 1rem 0 2rem; }
        .hero-card { text-align: center; padding: 2.5rem 2rem; }
        .hero-logo { max-width: 200px; margin: 0 auto 1rem; }
        .hero-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .hero-subtitle {
          font-size: 1.0625rem;
          color: var(--gray-700);
          max-width: 560px;
          margin: 0 auto 1.75rem;
          line-height: 1.65;
        }
        .hero-actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        .btn-primary { background: var(--teal); color: var(--white); }
        .btn-primary:hover { background: var(--teal-dark); }
        .btn-secondary {
          background: var(--white);
          color: var(--teal);
          border: 2px solid var(--teal);
        }
        .btn-secondary:hover { background: var(--teal-light); text-decoration: none; }
        .section-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 0.5rem;
        }
        .section-desc { color: var(--gray-600); margin-bottom: 1.5rem; font-size: 0.9375rem; }
        .features-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        .feature-item {
          padding: 1.25rem;
          background: var(--gray-50);
          border-radius: var(--radius);
          border-left: 3px solid var(--teal);
        }
        .feature-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--teal);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        .feature-title { font-size: 1.0625rem; font-weight: 600; margin-bottom: 0.35rem; }
        .feature-desc { font-size: 0.9375rem; color: var(--gray-700); }
        .screens-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr;
        }
        .screen-img-wrap {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
          margin-bottom: 1rem;
        }
        .screen-img-wrap img {
          width: 100%;
          max-height: 340px;
          object-fit: contain;
          background: var(--gray-50);
        }
        .screen-caption { font-size: 0.9375rem; color: var(--gray-700); }
        .topics-list {
          list-style: none;
          display: grid;
          gap: 0.5rem;
        }
        .topics-list li {
          padding: 0.5rem 0 0.5rem 1.25rem;
          position: relative;
          color: var(--gray-700);
          font-size: 0.9375rem;
        }
        .topics-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.85em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal);
        }
        .cta-card { text-align: center; }
        .cta-desc { color: var(--gray-700); margin-bottom: 1.5rem; }
        .cta-actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        @media (min-width: 640px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .hero-title { font-size: 2.25rem; }
          .screens-grid { grid-template-columns: repeat(3, 1fr); }
          .section-title { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  )
}
