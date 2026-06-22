import React from "react";
import { MENU_ITEMS } from "@/app/lib/data";

export const Menu: React.FC = () => {
  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Il Nostro Menù</span>
          <h2 className="section-title">I Nostri Classici</h2>
          <p className="section-sub">
            Una selezione dei piatti che ci rappresentano, dalla tradizione alla brace.
          </p>
        </div>

        <div className="menu-grid">
          {MENU_ITEMS.map((category) => (
            <div key={category.id} className="menu-card">
              <span className="icon">{category.icon}</span>
              <h3>{category.title}</h3>
              {category.items.map((item) => (
                <div key={item.name} className="menu-item">
                  <span className="name">
                    {item.name}
                    <small className="desc">{item.desc}</small>
                  </span>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <a href="#contatti" className="btn btn-primary">
            📋 Vedi il menù completo
          </a>
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
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }
        .menu-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 32px 28px;
          border: 1px solid var(--sand);
          transition: all 0.4s ease;
          box-shadow: var(--shadow);
        }
        .menu-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(44, 36, 26, 0.08);
        }
        .menu-card .icon {
          font-size: 2.6rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        .menu-card h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          border-bottom: 2px solid var(--gold-pale);
          padding-bottom: 0.5rem;
        }
        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 10px 0;
          border-bottom: 1px solid var(--sand);
          gap: 12px;
        }
        .menu-item:last-child {
          border-bottom: none;
        }
        .menu-item .name {
          font-weight: 500;
          font-size: 0.98rem;
        }
        .menu-item .name .desc {
          display: block;
          font-weight: 300;
          font-size: 0.8rem;
          opacity: 0.65;
          margin-top: 2px;
        }
        .menu-item .price {
          font-weight: 600;
          color: var(--gold);
          white-space: nowrap;
          font-size: 0.95rem;
        }
        .menu-cta {
          text-align: center;
          margin-top: 3rem;
        }
        @media (max-width: 1024px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
