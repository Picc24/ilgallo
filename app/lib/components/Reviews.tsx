import React from "react";
import { REVIEWS } from "@/app/lib/data";

export const Reviews: React.FC = () => {
  return (
    <section className="section section-alt" id="recensioni">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Le Recensioni</span>
          <h2 className="section-title">Cosa Dicono di Noi</h2>
          <p className="section-sub">
            Il parere dei nostri clienti è il nostro miglior biglietto da visita.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <div key={review.name} className="review-card">
              <div className="stars">{"⭐".repeat(review.rating)}</div>
              <p className="text">"{review.text}"</p>
              <div className="author">
                {review.name} <span className="date">{review.date}</span>
              </div>
            </div>
          ))}
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
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }
        .review-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 28px 26px;
          border: 1px solid var(--sand);
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(44, 36, 26, 0.06);
        }
        .review-card .stars {
          color: var(--gold);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
        }
        .review-card .text {
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          opacity: 0.85;
        }
        .review-card .author {
          font-weight: 600;
          font-size: 0.9rem;
        }
        .review-card .date {
          font-weight: 300;
          opacity: 0.5;
          font-size: 0.8rem;
          margin-left: 6px;
        }
        @media (max-width: 1024px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
