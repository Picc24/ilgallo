export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>Il Gallo · Osteria a Stradella</title>
        <meta name="description" content="Osteria Il Gallo a Stradella. Cucina italiana, carne alla brace." />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            font-family: 'Times New Roman', serif;
            background: #f5f0eb;
            color: #2c241e;
            line-height: 1.6;
          }
          .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }

          /* NAV */
          nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 100;
            padding: 16px 0;
            background: #f5f0eb;
            border-bottom: 1px solid #d5ccc4;
          }
          nav .container {
            display: flex; justify-content: space-between; align-items: center;
          }
          nav h1 {
            font-size: 1.8rem; font-weight: 400;
            letter-spacing: 4px;
          }
          nav h1 span { color: #a67c52; }
          nav a {
            color: #2c241e; text-decoration: none;
            margin-left: 30px; font-size: 0.8rem;
            letter-spacing: 2px;
            opacity: 0.6;
          }
          nav a:hover { opacity: 1; }

          /* HERO - diverso, senza immagine fissa */
          .hero {
            min-height: 100vh;
            display: flex; align-items: center;
            padding: 120px 0 60px;
            background: #f5f0eb;
          }
          .hero .container {
            display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          }
          .hero h2 {
            font-size: 4.5rem; font-weight: 400;
            line-height: 1.1; letter-spacing: 2px;
            color: #2c241e;
          }
          .hero h2 em { font-style: italic; color: #a67c52; }
          .hero p {
            font-size: 1.1rem; color: #2c241e; opacity: 0.6;
            margin: 20px 0 30px; max-width: 440px;
          }
          .hero .btn {
            display: inline-block; padding: 14px 40px;
            background: #2c241e; color: #f5f0eb;
            text-decoration: none; letter-spacing: 2px;
            font-size: 0.8rem;
          }
          .hero .btn-outline {
            background: transparent; color: #2c241e;
            border: 1px solid #2c241e; margin-left: 12px;
          }
          .hero-image {
            background: #d5ccc4; height: 400px;
            display: flex; align-items: center; justify-content: center;
            opacity: 0.4; font-size: 0.9rem;
          }

          /* SECTIONS */
          .section { padding: 80px 0; }
          .section-light { background: #ffffff; }
          .section h3 {
            font-size: 2.8rem; font-weight: 400;
            letter-spacing: 2px; margin-bottom: 10px;
          }
          .section .sub {
            color: #2c241e; opacity: 0.4; max-width: 500px;
            margin-bottom: 40px;
          }

          /* ABOUT - diverso, senza numeri grandi */
          .about-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
            align-items: center;
          }
          .about-grid p { color: #2c241e; opacity: 0.6; margin-bottom: 16px; }
          .about-grid .signature {
            font-style: italic; font-size: 1.2rem;
            color: #a67c52; margin-top: 20px;
          }

          /* MENU - diverso, con bordi e stile rustico */
          .menu-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
          }
          .menu-card {
            background: #f5f0eb; padding: 30px;
            border: 1px solid #d5ccc4;
          }
          .menu-card h4 {
            font-size: 1.3rem; font-weight: 400;
            color: #a67c52; margin-bottom: 16px;
            letter-spacing: 2px;
          }
          .menu-item {
            display: flex; justify-content: space-between;
            padding: 8px 0; border-bottom: 1px solid #e8e0d8;
          }
          .menu-item .price { color: #a67c52; }

          /* WINE - diverso, con sfondo chiaro */
          .wine-grid {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px;
          }
          .wine-card {
            background: #f5f0eb; padding: 30px;
            border: 1px solid #d5ccc4;
          }
          .wine-card h5 { color: #a67c52; font-size: 1.1rem; font-weight: 400; }
          .wine-card p { color: #2c241e; opacity: 0.5; font-size: 0.9rem; }

          /* REVIEWS - diverso, con virgolette */
          .reviews-grid {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px;
          }
          .review-card {
            padding: 24px 0;
          }
          .review-card .stars { color: #a67c52; margin-bottom: 10px; }
          .review-card .text {
            font-style: italic; color: #2c241e; opacity: 0.7;
            font-size: 0.95rem;
          }
          .review-card .author {
            color: #2c241e; opacity: 0.4; font-size: 0.8rem;
            margin-top: 12px;
          }

          /* CONTACT - diverso, con stile più semplice */
          .contact-grid {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px;
          }
          .contact-card h5 {
            font-size: 0.9rem; color: #a67c52;
            letter-spacing: 1px; margin-bottom: 8px;
          }
          .contact-card p { color: #2c241e; opacity: 0.5; }
          .contact-card a { color: #a67c52; text-decoration: none; }
          .hours .day {
            display: flex; justify-content: space-between;
            padding: 4px 0; border-bottom: 1px solid #e8e0d8;
            font-size: 0.9rem; color: #2c241e; opacity: 0.6;
          }
          .cta-box {
            margin-top: 50px; padding: 50px;
            background: #2c241e; text-align: center;
            color: #f5f0eb;
          }
          .cta-box h3 { font-size: 2rem; font-weight: 400; margin-bottom: 10px; color: #f5f0eb; }
          .cta-box p { opacity: 0.4; margin-bottom: 24px; }
          .cta-box .btn {
            background: #a67c52; color: #f5f0eb;
            padding: 14px 40px; text-decoration: none;
            letter-spacing: 2px; font-size: 0.8rem;
          }

          /* FOOTER */
          footer {
            border-top: 1px solid #d5ccc4;
            padding: 40px 0; text-align: center;
          }
          footer p { color: #2c241e; opacity: 0.3; font-size: 0.8rem; }

          @media (max-width: 768px) {
            .hero .container { grid-template-columns: 1fr; }
            .hero h2 { font-size: 3rem; }
            .about-grid { grid-template-columns: 1fr; }
            .menu-grid { grid-template-columns: 1fr; }
            .reviews-grid { grid-template-columns: 1fr; }
            .contact-grid { grid-template-columns: 1fr; }
            .wine-grid { grid-template-columns: 1fr; }
            nav a { margin-left: 16px; font-size: 0.6rem; }
          }
        `}</style>
      </head>
      <body>

        {/* NAV */}
        <nav>
          <div className="container">
            <h1>Il <span>Gallo</span></h1>
            <div>
              <a href="#menu">Menù</a>
              <a href="#vini">Vini</a>
              <a href="#contatti">Contatti</a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div>
              <span style={{ color: '#a67c52', letterSpacing: '3px', fontSize: '0.8rem' }}>Dal 2014</span>
              <h2>Il <em>Gallo</em></h2>
              <p>Osteria · Cucina italiana · Carne alla brace</p>
              <a href="tel:+390383123456" className="btn">Chiama Ora</a>
              <a href="#menu" className="btn btn-outline">Scopri</a>
            </div>
            <div className="hero-image">Foto</div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-light">
          <div className="container">
            <div className="about-grid">
              <div>
                <span style={{ color: '#a67c52', letterSpacing: '2px', fontSize: '0.7rem' }}>Chi Siamo</span>
                <h3 style={{ marginTop: '8px' }}>La nostra storia</h3>
                <p>L'Osteria Il Gallo è nata nel 2014 dalla passione per la cucina italiana e l'ospitalità.</p>
                <p>Ogni piatto racconta una storia di famiglia e tradizione.</p>
                <div className="signature">— Da sempre a Stradella</div>
              </div>
              <div style={{ background: '#d5ccc4', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>Foto</div>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="section" id="menu">
          <div className="container">
            <h3>Il menù</h3>
            <p className="sub">I nostri classici, dalla tradizione alla brace.</p>
            <div className="menu-grid">
              <div className="menu-card">
                <h4>Antipasti</h4>
                <div className="menu-item"><span>Salumi e formaggi</span><span className="price">€14</span></div>
                <div className="menu-item"><span>Crostini misti</span><span className="price">€10</span></div>
                <div className="menu-item"><span>Carpaccio di manzo</span><span className="price">€16</span></div>
              </div>
              <div className="menu-card">
                <h4>Primi</h4>
                <div className="menu-item"><span>Ravioli del Gallo</span><span className="price">€15</span></div>
                <div className="menu-item"><span>Pappardelle al cinghiale</span><span className="price">€17</span></div>
                <div className="menu-item"><span>Tagliatelle al tartufo</span><span className="price">€20</span></div>
              </div>
              <div className="menu-card">
                <h4>Secondi</h4>
                <div className="menu-item"><span>Fiorentina alla brace</span><span className="price">€35</span></div>
                <div className="menu-item"><span>Ossobuco</span><span className="price">€22</span></div>
                <div className="menu-item"><span>Grigliata mista</span><span className="price">€28</span></div>
              </div>
              <div className="menu-card">
                <h4>Pesce</h4>
                <div className="menu-item"><span>Branzino al forno</span><span className="price">€24</span></div>
                <div className="menu-item"><span>Salmone alla griglia</span><span className="price">€22</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* VINI */}
        <section className="section section-light" id="vini">
          <div className="container">
            <h3>La cantina</h3>
            <p className="sub">Una selezione di etichette locali e nazionali.</p>
            <div className="wine-grid">
              <div className="wine-card"><h5>Rossi</h5><p>Barolo · Brunello · Montefalco</p></div>
              <div className="wine-card"><h5>Bianchi</h5><p>Gavi · Pinot Grigio · Sauvignon</p></div>
              <div className="wine-card"><h5>Bollicine</h5><p>Franciacorta · Prosecco</p></div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section" id="recensioni">
          <div className="container">
            <h3>Recensioni</h3>
            <p className="sub">Cosa dicono di noi.</p>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p className="text">"Fiorentina e Montefalco riserva: tutto ottimo."</p>
                <div className="author">Alessandro Maggi · 2 mesi fa</div>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p className="text">"Location curata, cibo di qualità, buon rapporto qualità/prezzo."</p>
                <div className="author">Fabio Costaldi · 4 mesi fa</div>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p className="text">"Cucina di livello, servizio attento e atmosfera elegante."</p>
                <div className="author">Angelo Francione · 8 anni fa</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-light" id="contatti">
          <div className="container">
            <h3>Dove siamo</h3>
            <p className="sub">Vieni a trovarci a Stradella.</p>
            <div className="contact-grid">
              <div className="contact-card">
                <h5>Indirizzo</h5>
                <p>Via Parea, 3</p>
                <p>Stradella (PV)</p>
                <a href="https://www.google.com/maps?q=Via+Parea+3+Stradella">Mappa →</a>
              </div>
              <div className="contact-card">
                <h5>Contatti</h5>
                <a href="tel:+390383123456" style={{ fontSize: '1.2rem' }}>0383 123456</a>
                <p style={{ marginTop: '4px', opacity: 0.3 }}>Chiama per prenotare</p>
              </div>
              <div className="contact-card">
                <h5>Orari</h5>
                <div className="hours">
                  <div className="day"><span>Lunedì</span><span>12–14 / 19:30–22</span></div>
                  <div className="day"><span>Martedì</span><span>Chiuso</span></div>
                  <div className="day"><span>Mer–Dom</span><span>12–14 / 19:30–22</span></div>
                </div>
              </div>
            </div>
            <div className="cta-box">
              <h3>Prenota il tuo tavolo</h3>
              <p>Chiamaci per prenotare o per informazioni.</p>
              <a href="tel:+390383123456" className="btn">📞 Chiama Ora</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="container">
            <p>© 2026 Il Gallo · Osteria a Stradella</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
