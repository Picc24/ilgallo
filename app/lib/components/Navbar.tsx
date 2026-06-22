"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CONFIG } from "@/app/lib/data";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <span className="logo-icon">🐓</span>
          Il Gallo
          <span>Osteria</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link href="#menu">Menù</Link>
          <Link href="#vini">Vini</Link>
          <Link href="#recensioni">Recensioni</Link>
          <Link href="#chi-siamo">Chi Siamo</Link>
          <a href={`tel:${CONFIG.phone}`} className="btn btn-primary">
            📞 Prenota
          </a>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          background: rgba(252, 248, 242, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--sand);
        }
        .navbar .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark);
          text-decoration: none;
        }
        .logo-icon {
          font-size: 1.6rem;
          color: var(--gold);
        }
        .logo span {
          display: block;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          font-family: var(--font-sans);
          margin-top: -4px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links a {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark);
          opacity: 0.7;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .nav-links a:hover {
          opacity: 1;
        }
        .nav-links .btn {
          padding: 10px 24px;
          font-size: 0.8rem;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 26px;
          height: 2px;
          background: var(--dark);
          border-radius: 2px;
          transition: 0.3s ease;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            gap: 16px;
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: var(--white);
            padding: 24px;
            border-bottom: 1px solid var(--sand);
            box-shadow: var(--shadow);
          }
          .nav-links.open {
            display: flex;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};
