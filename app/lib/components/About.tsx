import React from "react";
import { CONFIG } from "@/app/lib/data";

export const About: React.FC = () => {
  return (
    <section className="section section-alt" id="chi-siamo">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="eyebrow">Chi Siamo</span>
            <h2 className="section-title">La Nostra Osteria</h2>
            <p>
              L&apos;Osteria Il Gallo è un luogo dove la tradizione culinaria italiana
              incontra l&apos;arte dell&apos;ospitalità. Ogni piatto è un viaggio nei sapori
              autentici, preparato con ingredienti selezionati e passione.
            </p>
            <p>
              Dalla fiorentina alla brace alla pasta fresca fatta in casa, ogni
              ricetta racconta una storia di famiglia e convivialità.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="number">{CONFIG.googleRating} ⭐</span>
                <span className="label">{CONFIG.googleReviews} recensioni</span>
              </div>
              <div className="stat">
                <span className="number">🔥</span>
                <span className="label">Cucina alla brace</span>
              </div>
              <div className="stat">
                <span className="number">🍷</span>
                <span className="label">Cantina selezionata</span>
              </div>
            </div>
          </div>
          <div className="about-image">🖼️ Interno del ristorante</div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-text p {
          font-size: 1.05rem;
          opacity: 0.8;
          line-height: 1.9;
          margin-bottom: 1.2rem;
        }
        .about-stats {
          display: flex;
          gap: 40px;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .about-stats .stat {
          text-align: center;
        }
        .about-stats .number {
          display: block;
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1.2;
        }
        .about-stats .label {
          font-size: 0.85rem;
          opacity: 0.6;
          font-weight: 300;
        }
        .about-image {
          background: var(--sand);
          border-radius: 20px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark);
          opacity: 0.4;
          font-size: 1.2rem;
          box-shadow: var(--shadow);
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-image {
            height: 280px;
            order: -1;
          }
          .about-stats {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
