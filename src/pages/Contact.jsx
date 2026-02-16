export default function Contact() {
  return (
    <div className="container">
      <h1 className="page-title">Contact us</h1>

      <section className="card contact-card">
        <p className="contact-intro">
          Have a question, feedback, or need support? Get in touch with the Typing Master Pro team. 
          We’ll do our best to respond as soon as possible.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:bannysukumar@gmail.com" className="contact-value">bannysukumar@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <a href="tel:+916301846681" className="contact-value">6301846681</a>
          </div>
        </div>
      </section>

      <section className="card contact-brand">
        <img src="/typing-master-logo.png" alt="Typing Master" className="contact-logo" />
        <p className="contact-thanks">Thank you for using Typing Master Pro.</p>
      </section>

      <style>{`
        .contact-card { max-width: 480px; margin-left: auto; margin-right: auto; }
        .contact-intro {
          color: var(--gray-700);
          margin-bottom: 1.75rem;
          line-height: 1.65;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          padding: 1.25rem;
          background: var(--gray-50);
          border-radius: var(--radius);
          border-left: 3px solid var(--teal);
        }
        .contact-label {
          display: block;
          font-weight: 600;
          color: var(--gray-900);
          font-size: 0.8125rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }
        .contact-value {
          font-size: 1.0625rem;
          font-weight: 500;
        }
        .contact-brand { text-align: center; max-width: 360px; margin-left: auto; margin-right: auto; }
        .contact-logo { max-width: 140px; margin: 0 auto 1rem; }
        .contact-thanks { font-size: 0.9375rem; color: var(--gray-700); }
      `}</style>
    </div>
  )
}
