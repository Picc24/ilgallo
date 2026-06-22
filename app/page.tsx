export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>Il Gallo · Osteria a Stradella</title>
        <meta name="description" content="Osteria Il Gallo a Stradella. Cucina italiana, carne alla brace." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Inter', sans-serif;
            background: #f5f0eb;
            color: #2e2b26;
            line-height: 1.6;
          }

          /* ====== LAYOUT ====== */
          .site {
            display: grid;
            grid-template-columns: 200px 1fr;
            min-height: 100vh;
          }

          /* ====== SIDEBAR ====== */
          .sidebar {
            background: #2e2b26;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: sticky;
            top: 0;
            height: 100vh;
            border-right: 4px solid #b0804a;
          }
          .sidebar h1 {
            font-size: 1.4rem;
            font-weight: 300;
            letter-spacing: 4px;
            color: #f5f0eb;
          }
          .sidebar h1 span {
            display: block;
            font-size: 0.6rem;
            letter-spacing: 6px;
            color: #b0804a;
            margin-top: 4px;
          }
          .sidebar nav a {
            display: block;
            color: #8a7a6a;
            text-decoration: none;
            padding: 12px 0;
            font-size: 0.7rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            border-bottom: 1px solid #3d3832;
            transition: 0.3s;
          }
          .sidebar nav a:hover { color: #b0804a; padding-left: 8px; }
          .sidebar .footer-side {
            font-size: 0.6rem;
            color: #4a443e;
            letter-spacing: 1px;
          }

          /* ====== MAIN ====== */
          .main {
            padding: 60px 80px 60px 60px;
            overflow-y: auto;
            max-height: 100vh;
          }

          /* ====== HERO ====== */
          .hero {
            margin-bottom: 80px;
            padding: 60px 50px;
            background: linear-gradient(135deg, #f5f0eb 0%, #e8e0d6 100%);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            min-height: 320px;
            display: flex;
            align-items: center;
          }
          .hero-bg {
            position: absolute;
            right: -40px;
            bottom: -40px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(176,128,74,0.08) 0%, transparent 70%);
            border-radius: 50%;
          }
          .hero-bg2 {
            position: absolute;
            left: -20px;
            top: -20px;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(176,128,74,0.05) 0%, transparent 70%);
            border-radius: 50%;
          }
          .hero-content {
            position: relative;
            z-index: 2;
          }
          .hero .tag {
            font-size: 0.6rem;
            letter-spacing: 3px;
            color: #b0804a;
            text-transform: uppercase;
          }
          .hero h2 {
            font-size: 3.6rem;
            font-weight: 300;
            letter-spacing: -1px;
            margin: 8px 0 16px;
            color: #2e2b26;
          }
          .hero h2 em { font-style: italic; color: #b0804a; }
          .hero p {
            font-size: 1rem;
            color: #5a4f44;
            max-width: 400px;
          }
          .hero .btn-group {
            margin-top: 28px;
            display: flex;
            gap: 12px;
          }

          /* ====== BOTTONI ====== */
          .btn {
            padding: 12px 28px;
            font-size: 0.7rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: 1px solid #b0804a;
            transition: 0.3s;
            cursor: pointer;
            background: transparent;
            color: #2e2b26;
            border-radius: 4px;
          }
          .btn:hover {
            background: #b0804a;
            color: #f5f0eb;
          }
          .btn-primary {
            background: #b0804a;
            color: #f5f0eb;
            border-color: #b0804a;
          }
          .btn-primary:hover {
            background: #c4956a;
            border-color: #c4956a;
          }

          /* ====== SEZIONI ====== */
          .section {
            margin-bottom: 80px;
            padding-bottom: 60px;
            border-bottom: 2px dashed #d6c9b7;
          }
          .section:last-child { border-bottom: none; margin-bottom: 0; }

          .section h3 {
            font-size: 1.8rem;
            font-weight: 300;
            letter-spacing: 1px;
            margin-bottom: 4px;
            color: #2e2b26;
          }
          .section .sub {
            font-size: 0.85rem;
            color: #8a7a6a;
            margin-bottom: 32px;
          }
          .section .sub::before {
            content: '✦ ';
            color: #b0804a;
          }

          /* ====== ABOUT ====== */
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 40px;
            align-items: center;
          }
          .about-grid .img {
            height: 280px;
            border-radius: 12px;
            background: #d6c9b7;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300"><rect width="400" height="300" fill="%23d6c9b7"/><rect x="0" y="0" width="400" height="300" fill="url(%23g)" opacity="0.4"/><defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="%238a7a6a" opacity="0.3"/></pattern></defs><text x="200" y="160" font-family="Arial" font-size="80" fill="%238a7a6a" opacity="0.3" text-anchor="middle">🏛️</text></svg>');
            background-size: cover;
            background-position: center;
          }
          .about-grid p {
            font-size: 0.95rem;
            color: #5a4f44;
            margin-bottom: 12px;
          }
          .about-grid .sigla {
            font-style: italic;
            color: #b0804a;
            font-size: 0.9rem;
            margin-top: 8px;
            display: inline-block;
            border-left: 3px solid #b0804a;
            padding-left: 16px;
          }

          /* ====== VINI ====== */
          .wine-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .wine-card {
            background: #f5f0eb;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e8e0d6;
            transition: 0.3s;
          }
          .wine-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
          .wine-card .img-wine {
            height: 160px;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wine-card .img-wine.r1 { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23e8d6c9"/><text x="200" y="120" font-family="Arial" font-size="60" fill="%23b0804a" opacity="0.6" text-anchor="middle">🍷</text></svg>'); }
          .wine-card .img-wine.b1 { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23d6e8d6"/><text x="200" y="120" font-family="Arial" font-size="60" fill="%23b0804a" opacity="0.6" text-anchor="middle">🥂</text></svg>'); }
          .wine-card .img-wine.s1 { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23d6d6e8"/><text x="200" y="120" font-family="Arial" font-size="60" fill="%23b0804a" opacity="0.6" text-anchor="middle">🍾</text></svg>'); }
          .wine-card .info {
            padding: 16px 20px 20px;
          }
          .wine-card h4 {
            font-size: 0.9rem;
            font-weight: 400;
            letter-spacing: 1px;
            color: #2e2b26;
            margin-bottom: 2px;
          }
          .wine-card p {
            font-size: 0.75rem;
            color: #8a7a6a;
          }
          .wine-card .price-tag {
            display: inline-block;
            margin-top: 8px;
            font-size: 0.6rem;
            color: #b0804a;
            letter-spacing: 1px;
            border: 1px solid #b0804a;
            padding: 2px 12px;
            border-radius: 20px;
          }

          /* ====== MENU ====== */
          .menu-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px 60px;
          }
          .menu-cat h4 {
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 2px;
            color: #b0804a;
            border-bottom: 2px solid #b0804a;
            padding-bottom: 6px;
            margin-bottom: 16px;
          }
          .menu-item {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            padding: 8px 0;
            border-bottom: 1px solid #f0ece6;
          }
          .menu-item .price { color: #b0804a; }
          .menu-item .desc {
            display: block;
            font-size: 0.65rem;
            color: #b5a89a;
            font-style: italic;
          }

          /* ====== RECENSIONI ====== */
          .review-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
          }
          .review-card {
            background: #f5f0eb;
            padding: 24px;
            border-radius: 12px;
            border-left: 4px solid #b0804a;
            border: 1px solid #e8e0d6;
            border-left-width: 4px;
          }
          .review-card .stars {
            font-size: 1rem;
            color: #b0804a;
            margin-bottom: 4px;
          }
          .review-card p {
            font-size: 0.85rem;
            font-style: italic;
            color: #5a4f44;
          }
          .review-card .author {
            font-size: 0.7rem;
            color: #8a7a6a;
            margin-top: 8px;
          }

          /* ====== CONTATTI ====== */
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .contact-grid .map {
            height: 280px;
            border-radius: 12px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23d6c9b7"/><rect x="0" y="0" width="400" height="300" fill="url(%23g)" opacity="0.4"/><defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="%238a7a6a" opacity="0.3"/></pattern></defs><text x="200" y="160" font-family="Arial" font-size="40" fill="%238a7a6a" opacity="0.3" text-anchor="middle">📍 Via Parea 3</text></svg>');
            background-size: cover;
            background-position: center;
          }
          .contact-info p {
            font-size: 0.9rem;
            color: #5a4f44;
            margin-bottom: 6px;
          }
          .contact-info a {
            color: #b0804a;
            text-decoration: none;
            border-bottom: 1px solid #b0804a;
          }
          .hours {
            margin-top: 16px;
            background: #f5f0eb;
            padding: 16px;
            border-radius: 12px;
            border: 1px solid #e8e0d6;
          }
          .hours .row {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            padding: 4px 0;
            border-bottom: 1px solid #f0ece6;
            color: #5a4f44;
          }
          .hours .row:last-child { border-bottom: none; }

          /* ====== RESPONSIVE ====== */
          @media (max-width: 1024px) {
            .site { grid-template-columns: 1fr; }
            .sidebar {
              position: relative;
              height: auto;
              flex-direction: row;
              padding: 20px 30px;
              align-items: center;
              border-right: none;
              border-bottom: 4px solid #b0804a;
            }
            .sidebar nav { display: flex; gap: 20px; }
            .sidebar nav a { border-bottom: none; padding: 4px 0; }
            .sidebar .footer-side { display: none; }
            .main { padding: 40px 30px; max-height: none; }
            .menu-grid { grid-template-columns: 1fr; gap: 30px; }
            .wine-grid { grid-template-columns: 1fr 1fr; }
            .review-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (max-width: 768px) {
            .hero { padding: 30px 20px; min-height: 200px; }
            .hero h2 { font-size: 2.4rem; }
            .about-grid { grid-template-columns: 1fr; }
            .contact-grid { grid-template-columns: 1fr; }
            .wine-grid { grid-template-columns: 1fr; }
            .review-grid { grid-template-columns: 1fr; }
            .sidebar { flex-wrap: wrap; gap: 12px; }
            .sidebar nav { flex-wrap: wrap; gap: 12px; }
            .main { padding: 24px 16px; }
          }
        `}</style>
      </head>
      <body>

        <div className="site">

          {/* ====== SIDEBAR ====== */}
          <aside className="sidebar">
            <div>
              <h1>Il Gallo <span>Osteria</span></h1>
              <nav>
                <a href="#vini">Vini</a>
                <a href="#menu">Menù</a>
                <a href="#recensioni">Recensioni</a>
                <a href="#contatti">Contatti</a>
              </nav>
            </div>
            <div className="footer-side">Stradella · dal 2014</div>
          </aside>

          {/* ====== MAIN ====== */}
          <main className="main">

            {/* HERO */}
            <section className="hero">
              <div className="hero-bg"></div>
              <div className="hero-bg2"></div>
              <div className="hero-content">
                <div className="tag">Osteria dal 2014</div>
                <h2>Il <em>Gallo</em></h2>
                <p>Cucina italiana · Carne alla brace · Cantina selezionata</p>
                <div className="btn-group">
                  <a href="tel:+390383123456" className="btn btn-primary">Chiama ora</a>
                  <a href="#menu" className="btn">Scopri</a>
                </div>
              </div>
            </section>

            {/* VINI */}
            <section className="section" id="vini">
              <h3>La cantina</h3>
              <p className="sub">Etichette selezionate dai nostri sommelier</p>
              <div className="wine-grid">
                <div className="wine-card">
                  <div className="img-wine r1"></div>
                  <div className="info">
                    <h4>Rossi</h4>
                    <p>Barolo · Brunello · Montefalco</p>
                    <span className="price-tag">€35–120</span>
                  </div>
                </div>
                <div className="wine-card">
                  <div className="img-wine b1"></div>
                  <div className="info">
                    <h4>Bianchi</h4>
                    <p>Gavi · Pinot Grigio · Sauvignon</p>
                    <span className="price-tag">€25–70</span>
                  </div>
                </div>
                <div className="wine-card">
                  <div className="img-wine s1"></div>
                  <div className="info">
                    <h4>Bollicine</h4>
                    <p>Franciacorta · Prosecco</p>
                    <span className="price-tag">€30–90</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ABOUT */}
            <section className="section" id="chi-siamo">
              <h3>L'osteria</h3>
              <p className="sub">Tradizione e ospitalità dal 2014</p>
              <div className="about-grid">
                <div className="img"></div>
                <div>
                  <p>L'Osteria Il Gallo è nata nel 2014 dalla passione per la cucina italiana e l'ospitalità. Ogni piatto racconta una storia di famiglia e tradizione.</p>
                  <p>Dalla fiorentina alla brace alla pasta fresca fatta in casa, tutto è preparato con ingredienti selezionati.</p>
                  <div className="sigla">— Da sempre a Stradella</div>
                </div>
              </div>
            </section>

            {/* MENU */}
            <section className="section" id="menu">
              <h3>Il menù</h3>
              <p className="sub">I nostri classici, dalla tradizione alla brace</p>
              <div className="menu-grid">
                <div className="menu-cat">
                  <h4>Antipasti</h4>
                  <div className="menu-item"><span>Salumi e formaggi <span className="desc">Selezione di salumi tipici e formaggi stagionati</span></span><span className="price">€14</span></div>
                  <div className="menu-item"><span>Crostini misti <span className="desc">Crostini con fegatini, funghi e pomodoro</span></span><span className="price">€10</span></div>
                  <div className="menu-item"><span>Carpaccio di manzo <span className="desc">Con rucola, grana e scaglie di tartufo</span></span><span className="price">€16</span></div>
                </div>
                <div className="menu-cat">
                  <h4>Primi</h4>
                  <div className="menu-item"><span>Ravioli del Gallo <span className="desc">Ricotta e spinaci, burro e salvia</span></span><span className="price">€15</span></div>
                  <div className="menu-item"><span>Pappardelle al cinghiale <span className="desc">Pasta fresca con ragù di cinghiale</span></span><span className="price">€17</span></div>
                  <div className="menu-item"><span>Tagliatelle al tartufo <span className="desc">Tartufo nero e burro fuso</span></span><span className="price">€20</span></div>
                </div>
                <div className="menu-cat">
                  <h4>Secondi</h4>
                  <div className="menu-item"><span>Fiorentina alla brace <span className="desc">Bistecca di manzo Chianina</span></span><span className="price">€35</span></div>
                  <div className="menu-item"><span>Ossobuco <span className="desc">Con gremolada e risotto</span></span><span className="price">€22</span></div>
                  <div className="menu-item"><span>Grigliata mista <span className="desc">Tagli di manzo, maiale e salsiccia</span></span><span className="price">€28</span></div>
                </div>
                <div className="menu-cat">
                  <h4>Pesce</h4>
                  <div className="menu-item"><span>Branzino al forno <span className="desc">Con patate e olive</span></span><span className="price">€24</span></div>
                  <div className="menu-item"><span>Salmone alla griglia <span className="desc">Con verdure grigliate</span></span><span className="price">€22</span></div>
                </div>
              </div>
            </section>

            {/* RECENSIONI */}
            <section className="section" id="recensioni">
              <h3>Recensioni</h3>
              <p className="sub">Cosa dicono di noi</p>
              <div className="review-grid">
                <div className="review-card">
                  <div className="stars">★★★★★</div>
                  <p>"Fiorentina e Montefalco riserva: tutto ottimo."</p>
                  <div className="author">Alessandro Maggi · 2 mesi fa</div>
                </div>
                <div className="review-card">
                  <div className="stars">★★★★★</div>
                  <p>"Location curata, cibo di qualità, buon rapporto qualità/prezzo."</p>
                  <div className="author">Fabio Costaldi · 4 mesi fa</div>
                </div>
                <div className="review-card">
                  <div className="stars">★★★★★</div>
                  <p>"Cucina di livello, servizio attento e atmosfera elegante."</p>
                  <div className="author">Angelo Francione · 8 anni fa</div>
                </div>
              </div>
            </section>

            {/* CONTATTI */}
            <section className="section" id="contatti">
              <h3>Dove siamo</h3>
              <p className="sub">Vieni a trovarci a Stradella</p>
              <div className="contact-grid">
                <div className="map"></div>
                <div className="contact-info">
                  <p>Via Parea, 3 · Stradella (PV)</p>
                  <p><a href="https://www.google.com/maps?q=Via+Parea+3+Stradella">Apri su Google Maps →</a></p>
                  <div className="hours">
                    <div className="row"><span>Lunedì</span><span>12–14 / 19:30–22</span></div>
                    <div className="row"><span>Martedì</span><span>Chiuso</span></div>
                    <div className="row"><span>Mercoledì</span><span>12–14 / 19:30–22</span></div>
                    <div className="row"><span>Giovedì</span><span>12–14 / 19:30–22</span></div>
                    <div className="row"><span>Venerdì</span><span>12–14 / 19:30–22</span></div>
                    <div className="row"><span>Sabato</span><span>12–14 / 19:30–22</span></div>
                    <div className="row"><span>Domenica</span><span>12–14 / 19:30–22</span></div>
                  </div>
                  <p style={{ marginTop: 16 }}><a href="tel:+390383123456" className="btn btn-primary" style={{ display: 'inline-block', padding: '10px 24px' }}>Chiama ora</a></p>
                </div>
              </div>
            </section>

          </main>
        </div>

      </body>
    </html>
  );
}
