import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/typing-master-logo.png" alt="Typing Master" className="footer-logo" />
          <p className="footer-tagline">Typing speed test — practice smarter.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <a href="mailto:bannysukumar@gmail.com">bannysukumar@gmail.com</a>
          <a href="tel:+916301846681">6301846681</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Typing Master. All rights reserved.</p>
      </div>
      <style>{`
        .site-footer {
          background: var(--teal-dark);
          color: var(--white);
          padding: 2.5rem 0 1.5rem;
          margin-top: auto;
        }
        .footer-inner {
          display: grid;
          gap: 1.5rem;
          text-align: center;
        }
        .footer-brand { }
        .footer-logo {
          height: 36px;
          width: auto;
          margin: 0 auto 0.5rem;
        }
        .footer-tagline {
          font-size: 0.875rem;
          opacity: 0.9;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.25rem;
        }
        .footer-links a {
          color: var(--white);
          opacity: 0.95;
          font-weight: 500;
          font-size: 0.9375rem;
        }
        .footer-links a:hover { opacity: 1; text-decoration: underline; }
        .footer-contact {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.875rem;
        }
        .footer-contact a {
          color: var(--white);
          opacity: 0.95;
        }
        .footer-contact a:hover { opacity: 1; }
        .footer-copy {
          font-size: 0.8125rem;
          opacity: 0.85;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255,255,255,0.2);
        }
        @media (min-width: 640px) {
          .footer-inner {
            grid-template-columns: 1fr auto auto 1fr;
            grid-template-rows: auto auto;
            align-items: start;
            text-align: left;
          }
          .footer-brand { grid-column: 1; }
          .footer-logo { margin-left: 0; }
          .footer-links { grid-column: 2; justify-content: flex-start; }
          .footer-contact { grid-column: 3; justify-content: flex-start; flex-direction: column; gap: 0.25rem; }
          .footer-copy { grid-column: 1 / -1; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
