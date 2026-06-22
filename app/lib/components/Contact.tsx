import React from "react";
import { CONFIG } from "@/app/lib/data";

export const Contact: React.FC = () => {
  return (
    <section className="section" id="contatti">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Dove Siamo</span>
          <h2 className="section-title">Vieni a Trovarci</h2>
          <p className="section-sub">
            Ti aspettiamo a Stradella per un&apos;esperienza culinaria indimenticabile.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>📍 Indirizzo</h3>
            <p>{CONFIG.address}</p>
            <p style={{ marginTop: "-8px" }}>{CONFIG.city}</p>
            <a
              href={CONFIG.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apri su Google Maps →
            </a>
          </div>

          <div className="contact-card">
            <h3>📞 Contatti</h3>
            <a href={`tel:${CONFIG.phone}`} className="phone-link">
              {CONFIG.phoneFormatted}
            </a>
            <p style={{ marginTop: "4px", fontSize: "0.9rem", opacity: 0.6 }}>
              Chiama per prenotazioni e informazioni
            </p>
          </div>

          <div className="contact-card">
            <h3>🕐 Orari</h3>
            <div className="contact-hours">
              {CONFIG.openingHours.map((day) => (
                <div key={day.day} className="day">
                  <span>{day.day}</span>
                  <span>
                    {day.lunch === "Chiuso" ? "🔴 Chiuso" : `${day.lunch} / ${day.dinner}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-cta-box">
          <h3>📞 Prenota il tuo tavolo</h3>
          <p>Chiamaci per prenotare o per richiedere informazioni sul menù e sugli eventi.</p>
          <a href={`tel:${CONFIG.phone}`} className="btn btn-primary cta-btn">
            📞 Chiama Ora
          </a>
          <p className="cta-note">
            Ti rispondiamo personalmente per rendere la tua esperienza unica.
          </p>
        </div>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header .section-sub {
          margin: 0 auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }
        .contact-card h3 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .contact-card p,
        .contact-card a {
          font-size: 1rem;
          opacity: 0.8;
          line-height: 1.8;
          display: block;
        }
        .contact-card a {
          color: var(--gold);
          font-weight: 500;
          text-decoration: none;
        }
        .contact-card a:hover {
          text-decoration: underline;
        }
        .contact-card .phone-link {
          font-size: 1.3rem;
          font-weight: 600;
        }
        .contact-hours {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .contact-hours .day {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          padding: 6px 0;
          border-bottom: 1px solid var(--sand);
        }
        .contact-hours .day span:last-child {
          opacity: 0.7;
          font-weight: 300;
        }
        .contact-cta-box {
          margin-top: 50px;
          padding: 48px 40px;
          background: var(--dark);
          border-radius: var(--radius);
          text-align: center;
          color: var(--white);
          box-shadow: var(--shadow);
        }
        .contact-cta-box h3 {
          color: var(--white);
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
        }
        .contact-cta-box p {
          opacity: 0.7;
          font-weight: 300;
          font-size: 1.05rem;
          margin-bottom: 1.8rem;
        }
        .contact-cta-box .cta-btn {
          background: var(--white);
          color: var(--dark);
          font-size: 1.1rem;
          padding: 16px 44px;
        }
        .contact-cta-box .cta-btn:hover {
          background: var(--gold-pale);
        }
        .contact-cta-box .cta-note {
          font-size: 0.8rem;
          margin-top: 1.2rem;
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .contact-cta-box {
            padding: 32px 20px;
          }
          .contact-cta-box h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};
