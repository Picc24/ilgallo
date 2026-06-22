import React from "react";
import { CONFIG } from "@/app/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          🐓 Il Gallo
          <span>Osteria • Stradella</span>
        </div>
        <p className="footer-text">
          {CONFIG.address} • {CONFIG.city} • 📞 {CONFIG.phoneFormatted}
        </p>
        <div className="footer-links">
          <a href={`tel:${CONFIG.phone}`}>Chiama</a>
          <a href={CONFIG.mapLink} target="_blank" rel="noopener noreferrer">
            Mappa
          </a>
          <a href="mailto:info@ilgallo.it">Email</a>
        </div>
        <p className="footer-copy">© 2026 Il Gallo. Tutti i diritti riservati.</p>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--sand);
          background: var(--white);
          padding: 40px 0 30px;
          text-align: center;
        }
        .footer-logo {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--dark);
        }
        .footer-logo span {
          display: block;
          font-size: 0.7rem;
          font-weight: 300;
          opacity: 0.4;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: var(--font-sans);
        }
        .footer-text {
          font-size: 0.95rem;
          opacity: 0.5;
          margin-top: 0.5rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin: 1.5rem 0;
          flex-wrap: wrap;
        }
        .footer-links a {
          font-size: 0.9rem;
          color: var(--gold);
          font-weight: 500;
          text-decoration: none;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .footer-copy {
          font-size: 0.75rem;
          opacity: 0.3;
          margin-top: 0.5rem;
        }
      `}</style>
    </footer>
  );
};
