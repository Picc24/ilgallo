export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>Il Gallo · Osteria a Stradella</title>
        <meta name="description" content="Osteria Il Gallo a Stradella. Cucina italiana, carne alla brace." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap" rel="stylesheet" />
        <style>{`
          /* ====== RESET ====== */
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Inter', sans-serif;
            background: #fcf8f2;
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
            border-right: 4px solid #c97b5a;
          }
          .sidebar h1 {
            font-size: 1.4rem;
            font-weight: 300;
            letter-spacing: 4px;
            color: #fcf8f2;
          }
          .sidebar h1 span {
            display: block;
            font-size: 0.6rem;
            letter-spacing: 6px;
            color: #c97b5a;
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
          .sidebar nav a:hover { color: #c97b5a; padding-left: 8px; }
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
            background-image: 
              repeating-linear-gradient(45deg, rgba(201,123,90,0.03) 0px, rgba(201,123,90,0.03) 2px, transparent 2px, transparent 8px);
          }

          /* ====== HERO ====== */
          .hero {
            margin-bottom: 80px;
            padding: 60px 40px;
            background: linear-gradient(135deg, #2e2b26 0%, #3d3832 100%);
            color: #fcf8f2;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
          }
          .hero::after {
            content: '🍷';
            position: absolute;
            right: 30px;
            bottom: 20px;
            font-size: 6rem;
            opacity: 0.1;
          }
          .hero .tag {
            font-size: 0.6rem;
            letter-spacing: 3px;
            color: #c97b5a;
            text-transform: uppercase;
          }
          .hero h2 {
            font-size: 3.6rem;
            font-weight: 300;
            letter-spacing: -1px;
            margin: 8px 0 16px;
          }
          .hero h2 em { font-style: italic; color: #c97b5a; }
          .hero p {
            font-size: 1rem;
            color: #b5a89a;
            max-width: 400px;
          }
          .hero .btn-group {
            margin-top: 28px;
            display: flex;
            gap: 12px;
          }
          .btn {
            padding: 12px 28px;
            font-size: 0.7rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: 1px solid #c97b5a;
            transition: 0.3s;
            cursor: pointer;
            background: transparent;
            color: #fcf8f2;
            border-radius: 4px;
          }
          .btn:hover {
            background: #c97b5a;
            color: #2e2b26;
          }
          .btn-primary {
            background: #c97b5a;
            color: #2e2b26;
            border-color: #c97b5a;
          }
          .btn-primary:hover {
            background: #d48e6e;
            border-color: #d48e6e;
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
            font-style: italic;
          }
          .section .sub::before {
            content: '✦ ';
            color: #c97b5a;
          }

          /* ====== ABOUT ====== */
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 40px;
            align-items: center;
          }
          .about-grid .img {
            background: #d6c9b7;
            height: 260px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8a7a6a;
            font-size: 0.7rem;
            letter-spacing: 2px;
            border-radius: 8px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" fill="%23d6c9b7"/><text x="50" y="55" font-family="Arial" font-size="12" fill="%238a7a6a" text-anchor="middle">🍽️</text></svg>');
            background-size: 60px;
            background-repeat: no-repeat;
            background-position: center;
          }
          .about-grid p {
            font-size: 0.95rem;
            color: #5a4f44;
            margin-bottom: 12px;
          }
          .about-grid .sigla {
            font-style: italic;
            color: #c97b5a;
            font-size: 0.9rem;
            margin-top: 8px;
            display: inline-block;
            border-left: 3px solid #c97b5a;
            padding-left: 16px;
          }

          /* ====== VINI ====== */
          .wine-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .wine-card {
            background: #fcf8f2;
            padding: 0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.04);
            transition: 0.3s;
            border: 1px solid #e8e0d6;
          }
          .wine-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
          .wine-card .img-wine {
            height: 140px;
            background: #e8e0d6;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
          }
          .wine-card .img-wine.r { background: #e8d6c9; }
          .wine-card .img-wine.b { background: #d6e0d6; }
          .wine-card .img-wine.s { background: #d6d6e0; }
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
            font-size: 0.65rem;
            color: #c97b5a;
            letter-spacing: 1px;
            border: 1px solid #c97b5a;
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
            color: #c97b5a;
            border-bottom: 2px solid #c97b5a;
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
          .menu-item .price {
            color: #c97b5a;
            font-weight: 400;
          }
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
            background: #fcf8f2;
            padding: 24px;
            border-radius: 8px;
            border-left: 4px solid #c97b5a;
            box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          }
          .review-card .stars {
            font-size: 1rem;
            color: #c97b5a;
            margin-bottom: 4px;
            letter-spacing: 2px;
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
            font-style: normal;
          }
          .review-card .author::before {
            content: '— ';
            color: #c97b5a;
          }

          /* ====== CONTATTI ====== */
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .contact-grid .map {
            background: #e8e0d6;
            height: 240px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8a7a6a;
            font-size: 0.7rem;
            border-radius: 8px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" fill="%23e8e0d6"/><text x="50" y="55" font-family="Arial" font-size="12" fill="%238a7a6a" text-anchor="middle">📍</text></svg>');
            background-size: 40px;
            background-repeat: no-repeat;
            background-position: center;
          }
          .contact-info p {
            font-size: 0.9rem;
            color: #5a4f44;
            margin-bottom: 6px;
          }
          .contact-info a {
            color: #c97b5a;
            text-decoration: none;
            border-bottom: 1px solid #c97b5a;
          }
          .hours {
            margin-top: 16px;
            background: #fcf8f2;
            padding: 16px;
            border-radius: 8px;
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
              border-bottom: 4px solid #c97b5a;
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
            .hero { padding: 40px 24px; }
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
              <div className="tag">Osteria dal 2014</div>
              <h2>Il <em>Gallo</em></h2>
              <p>Cucina italiana · Carne alla brace · Cantina selezionata</p>
              <div className="btn-group">
                <a href="tel:+390383123456" className="btn btn-primary">Chiama ora</a>
                <a href="#menu" className="btn">Scopri</a>
              </div>
            </section>

            {/* VINI - con immagini e prezzi finti */}
            <section className="section" id="vini">
              <h3>La cantina</h3>
              <p className="sub">Etichette selezionate dai nostri sommelier</p>
              <div className="wine-grid">
                <div className="wine-card">
                  <div className="img-wine r">🍷</div>
                  <div className="info">
                    <h4>Rossi</h4>
                    <p>Barolo · Brunello · Montefalco</p>
                    <span className="price-tag">€35–120</span>
                  </div>
                </div>
                <div className="wine-card">
                  <div className="img-wine b">🥂</div>
                  <div className="info">
                    <h4>Bianchi</h4>
                    <p>Gavi · Pinot Grigio · Sauvignon</p>
                    <span className="price-tag">€25–70</span>
                  </div>
                </div>
                <div className="wine-card">
                  <div className="img-wine s">🍾</div>
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
