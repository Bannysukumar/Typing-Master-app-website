export default function PrivacyPolicy() {
  return (
    <div className="container">
      <h1 className="page-title">Privacy Policy</h1>

      <section className="card privacy-card">
        <p className="privacy-updated">Last updated: February 2025</p>

        <div className="privacy-summary">
          <h2>Data safety summary</h2>
          <p>
            <strong>Typing Master Pro does not collect any personal data.</strong> We do not collect, store, or transmit your name, email, phone number, location, device identifiers, crash logs, or any other personally identifiable information. All typing test activity (passage text, WPM, CPM, mistakes) is processed only on your device. This policy is intended to comply with applicable laws in India, including the Information Technology Act, 2000 and related regulations.
          </p>
        </div>

        <h2>1. Introduction</h2>
        <p>
          Typing Master Pro (“we”, “our”, or “the app”) is committed to protecting your privacy. 
          This Privacy Policy explains how we handle information when you use our typing speed test app.
        </p>

        <h2>2. Privacy and your data</h2>
        <p>
          Privacy crime includes stealing your private data which you do not want to share with the world. 
          Moreover, due to it, people suffer a lot and some even face serious harm because of their data’s misuse. 
          We take privacy seriously and do not collect, sell, or misuse your personal data.
        </p>

        <h2>3. Information we do not collect</h2>
        <p>
          Our app is designed to be minimal and respectful of your privacy. We do not collect 
          personal identification data, typing content, or usage analytics that identify you. 
          Any data used for the typing test (e.g. passage text) is processed locally on your device.
        </p>

        <h2>4. Local data</h2>
        <p>
          Typing test results (such as WPM, CPM, mistakes) may be stored locally on your device 
          for your own reference. We do not transmit this data to our servers unless you explicitly 
          use a feature that requires it (e.g. cloud backup, if we offer it in the future).
        </p>

        <h2>5. Third parties</h2>
        <p>
          We do not share your data with third parties for advertising or marketing. If our app 
          uses any third-party services (e.g. app stores, analytics), their own privacy policies 
          apply to those services.
        </p>

        <h2>6. Children</h2>
        <p>
          Our app does not knowingly collect information from children. If you believe a child 
          has provided us with personal data, please contact us and we will take steps to delete it.
        </p>

        <h2>7. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top 
          will reflect the latest version. Continued use of the app after changes means you accept 
          the updated policy.
        </p>

        <h2>8. Applicable laws</h2>
        <p>
          We aim to comply with applicable laws in India governing data and privacy, including the Information Technology Act, 2000 and the rules framed thereunder, as may be amended from time to time.
        </p>

        <h2>9. Contact</h2>
        <p>
          For privacy-related questions or requests, contact us at{' '}
          <a href="mailto:bannysukumar@gmail.com">bannysukumar@gmail.com</a> or call{' '}
          <a href="tel:+916301846681">6301846681</a>.
        </p>
      </section>

      <style>{`
        .privacy-card { max-width: 720px; margin-left: auto; margin-right: auto; }
        .privacy-summary {
          background: var(--teal-light);
          border: 1px solid rgba(23, 162, 184, 0.25);
          border-radius: var(--radius);
          padding: 1.25rem;
          margin-bottom: 2rem;
        }
        .privacy-summary h2 { margin-top: 0; margin-bottom: 0.5rem; font-size: 1.125rem; }
        .privacy-summary p { margin-bottom: 0; line-height: 1.65; }
        .privacy-updated {
          font-size: 0.875rem;
          color: var(--gray-500);
          margin-bottom: 2rem;
        }
        .privacy-card h2 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .privacy-card h2:first-of-type { margin-top: 0; }
        .privacy-card p {
          color: var(--gray-700);
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .privacy-card a { font-weight: 500; }
      `}</style>
    </div>
  )
}
