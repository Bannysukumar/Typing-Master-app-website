import { Link } from 'react-router-dom'

export default function About() {
  const steps = [
    { n: 1, title: 'Open the app', desc: 'Launch Typing Master Pro and you’ll see the title “Typing speed test” and a random passage ready to type.' },
    { n: 2, title: 'Type the passage', desc: 'Start typing. The timer runs for 60 seconds. Correct characters turn green, mistakes turn red with a highlight.' },
    { n: 3, title: 'Watch your stats', desc: 'Time left, mistakes, WPM (words per minute), and CPM (characters per minute) update in real time.' },
    { n: 4, title: 'Try again', desc: 'When time’s up you see “THE END.” and your final stats. Tap Try Again to get a new passage and improve.' },
  ]

  const stats = [
    { label: 'Test duration', value: '60 seconds' },
    { label: 'WPM', value: 'Words per minute (5 chars = 1 word)' },
    { label: 'CPM', value: 'Correct characters per minute' },
    { label: 'Mistakes', value: 'Counted live; backspace fixes count' },
  ]

  const topics = [
    'Cyber crime types (financial, privacy, hacking, cyber terrorism)',
    'Privacy and data misuse',
    'Web and cyberspace, internet safety',
    'Laws and cyber cells',
    'Black Hat, White Hat, Gray Hat hackers',
    'Ransomware, phishing, and real-world examples',
  ]

  return (
    <div className="container">
      <h1 className="page-title">About Typing Master Pro</h1>

      <section className="card">
        <h2 className="about-h2">The app</h2>
        <p className="about-p">
          <strong>Typing Master Pro</strong> is a typing speed test app that helps you improve your typing speed (WPM) and accuracy (CPM). 
          You get a 60-second timed test with a passage to type, real-time mistake counting, and visual feedback: green for correct characters, 
          red for errors. When the test ends, you see “THE END.” with your stats and a <strong>Try Again</strong> button to practice again.
        </p>
      </section>

      <section className="card">
        <h2 className="about-h2">How it works</h2>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <span className="step-num">{s.n}</span>
              <div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="about-h2">Stats explained</h2>
        <ul className="stats-list">
          {stats.map((s, i) => (
            <li key={i}>
              <strong>{s.label}</strong> — {s.value}
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="about-h2">Passage topics</h2>
        <p className="about-p">
          Each test loads a random passage so every run feels fresh. Topics are drawn from real content about technology and safety, including:
        </p>
        <ul className="topics-list">
          {topics.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="card about-screenshot-card">
        <img src="/t2.jpg" alt="Typing test in progress with live feedback" className="about-screenshot" />
        <p className="about-caption">
          Real-time feedback as you type: green for correct, red for mistakes. The current character is highlighted so you always know where you are.
        </p>
      </section>

      <section className="card cta-card">
        <p className="cta-text">Questions or feedback? We’d love to hear from you.</p>
        <Link to="/contact" className="btn">Contact us</Link>
      </section>

      <style>{`
        .about-h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 1rem;
        }
        .about-p {
          color: var(--gray-700);
          margin-bottom: 0.75rem;
          line-height: 1.65;
        }
        .about-p:last-of-type { margin-bottom: 0; }
        .steps { display: flex; flex-direction: column; gap: 1.25rem; }
        .step {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--gray-50);
          border-radius: var(--radius);
        }
        .step-num {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          background: var(--teal);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9375rem;
        }
        .step-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; }
        .step-desc { font-size: 0.9375rem; color: var(--gray-700); }
        .stats-list {
          list-style: none;
        }
        .stats-list li {
          padding: 0.5rem 0;
          color: var(--gray-700);
          font-size: 0.9375rem;
          border-bottom: 1px solid var(--gray-200);
        }
        .stats-list li:last-child { border-bottom: 0; }
        .topics-list {
          list-style: none;
          margin-top: 0.75rem;
        }
        .topics-list li {
          padding: 0.4rem 0 0.4rem 1.25rem;
          position: relative;
          color: var(--gray-700);
          font-size: 0.9375rem;
        }
        .topics-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.75em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal);
        }
        .about-screenshot-card { text-align: center; }
        .about-screenshot {
          border-radius: 12px;
          box-shadow: var(--shadow);
          max-width: 360px;
          margin: 0 auto 1rem;
        }
        .about-caption { font-size: 0.9375rem; color: var(--gray-700); }
        .cta-card { text-align: center; }
        .cta-text { margin-bottom: 1rem; color: var(--gray-700); }
      `}</style>
    </div>
  )
}
