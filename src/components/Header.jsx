import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo-link" aria-label="Typing Master - Home">
          <img src="/typing-master-logo.png" alt="Typing Master" className="logo" />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-header">Contact</Link>
      </div>
      <style>{`
        .site-header {
          background: var(--white);
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.875rem 1.5rem;
          gap: 1rem;
        }
        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-link:hover { text-decoration: none; }
        .logo {
          height: 42px;
          width: auto;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-link {
          color: var(--gray-700);
          font-weight: 500;
          font-size: 0.9375rem;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover {
          color: var(--teal);
          background: var(--teal-light);
          text-decoration: none;
        }
        .nav-link.active {
          color: var(--teal);
          background: var(--teal-light);
        }
        .btn-header {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .logo { height: 36px; }
          .nav { gap: 0; }
          .nav-link { padding: 0.4rem 0.5rem; font-size: 0.875rem; }
          .btn-header { padding: 0.4rem 0.75rem; font-size: 0.8125rem; }
        }
      `}</style>
    </header>
  )
}
