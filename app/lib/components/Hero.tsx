import React from "react";
import { CONFIG } from "@/app/lib/data";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow">Dal 2014 a Stradella</span>
          <h1 className="hero-title">
            Il <em>Gallo</em>
          </h1>
          <p className="hero-subtitle">Cucina italiana • Carne alla brace • Tradizione</p>
          <p className="hero-desc">{CONFIG.description}</p>
          <div className="hero-buttons">
            <a href={`tel:${CONFIG.phone}`} className="btn btn-phone">
              📞 Chiama Ora
            </a>
            <a href="#menu" className="btn btn-outline">
              Scopri il menù →
            </a>
          </div>
        </div>
        <div className="hero-image">🖼️ Foto del locale</div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          background: linear-gradient(145deg, var(--cream) 0%, var(--gold-pale) 100%);
        }
        .hero .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-content {
          max-width: 620px;
        }
        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(3.2rem, 8vw, 5.2rem);
          font-weight: 700;
          line-height: 1;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold);
        }
        .hero-subtitle {
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--dark);
          opacity: 0.7;
          margin-bottom: 1.5rem;
          font-family: var(--font-serif);
          font-style: italic;
        }
        .hero-desc {
          font-size: 1.05rem;
          color: var(--dark);
          opacity: 0.75;
          max-width: 480px;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .hero-image {
          background: var(--sand);
          border-radius: 20px;
          height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark);
          opacity: 0.4;
          font-size: 1.2rem;
          box-shadow: var(--shadow);
        }
        @media (max-width: 1024px) {
          .hero .container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-image {
            height: 320px;
            order: -1;
          }
          .hero-content {
            max-width: 100%;
            text-align: center;
          }
          .hero-desc {
            max-width: 100%;
            margin: 0 auto 2rem;
          }
          .hero-buttons {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-image {
            height: 200px;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </section>
  );
};
