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
            background: #f4efe7;
            color: #2e2b26;
            line-height: 1.6;
          }

          /* ====== LAYOUT GENERALE ====== */
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
          }
          .sidebar h1 {
            font-size: 1.4rem;
            font-weight: 300;
            letter-spacing: 4px;
            color: #d6c9b7;
          }
          .sidebar h1 span {
            display: block;
            font-size: 0.6rem;
            letter-spacing: 6px;
            color: #8a7a6a;
            margin-top: 4px;
          }
          .sidebar nav a {
            display: block;
            color: #8a7a6a;
            text-decoration: none;
            padding: 10px 0;
            font-size: 0.7rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            border-bottom: 1px solid #3d3832;
            transition: 0.3s;
          }
          .sidebar nav a:hover { color: #d6c9b7; }
          .sidebar .footer-side {
            font-size: 0.6rem;
            color: #4a443e;
            letter-spacing: 1px;
          }

          /* ====== CONTENUTO PRINCIPALE ====== */
          .main {
            padding: 60px 80px 60px 60px;
            overflow-y: auto;
            max-height: 100vh;
          }

          /* ====== HERO ====== */
          .hero {
            margin-bottom: 80px;
            padding-bottom: 60px;
            border-bottom: 1px solid #d6c9b7;
          }
          .hero .tag {
            font-size: 0.6rem;
            letter-spacing: 3px;
            color: #8a7a6a;
            text-transform: uppercase;
          }
          .hero h2 {
            font-size: 3.6rem;
            font-weight: 300;
            letter-spacing: -1px;
            margin: 8px 0 16px;
          }
          .hero h2 em {
            font-style: italic;
            color: #6b5d4e;
          }
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
          .btn {
            padding: 12px 28px;
            font-size: 0.7rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: 1px solid #2e2b26;
            transition: 0.3s;
            background: transparent;
            color: #2e2b26;
            cursor: pointer;
          }
          .btn:hover {
            background: #2e2b26;
            color: #f4efe7;
          }
          .btn-primary {
            background: #2e2b26;
            color: #f4efe7;
          }
          .btn-primary:hover {
            background: #6b5d4e;
            border-color: #6b5d4e;
          }

          /* ====== SEZIONI ====== */
          .section {
            margin-bottom: 80px;
            padding-bottom: 60px;
            border-bottom: 1px solid #d6c9b7;
          }
          .section:last-child { border-bottom: none; margin-bottom: 0; }

          .section h3 {
            font-size: 1.6rem;
            font-weight: 300;
            letter-spacing: 1px;
            margin-bottom: 8px;
          }
          .section .sub {
            font-size: 0.8rem;
            color: #8a7a6a;
            margin-bottom: 32px;
          }

          /* ====== ABOUT ====== */
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 40px;
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
          }
          .about-grid p {
            font-size: 0.9rem;
            color: #5a4f44;
            margin-bottom: 12px;
          }
          .about-grid .sigla {
            font-style: italic;
            color: #8a7a6a;
            font-size: 0.8rem;
          }

          /* ====== MENU ====== */
          .menu-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px 60px;
          }
          .menu-cat h4 {
            font-size: 0.9rem;
            font-weight: 400;
            letter-spacing: 2px;
            color: #6b5d4e;
            border-bottom: 1px solid #d6c9b7;
            padding-bottom: 6px;
            margin-bottom: 12px;
          }
          .menu-item {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            padding: 6px 0;
            border-bottom: 1px solid #e8e0d6;
          }
          .menu-item .price {
            color: #6b5d4e;
          }
          .menu-item .desc {
            display: block;
            font-size: 0.65rem;
            color: #8a7a6a;
          }

          /* ====== VINI ====== */
          .wine-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .wine-card {
            background: #e8e0d6;
            padding: 24px 20px;
          }
          .wine-card h4 {
            font-size: 0.8rem;
            font-weight: 400;
            letter-spacing: 1px;
            color: #2e2b26;
            margin-bottom: 4px;
          }
          .wine-card p {
            font-size: 0.7rem;
            color: #5a4f44;
          }

          /* ====== RECENSIONI ====== */
          .review-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
          }
          .review-card .stars {
            font-size: 0.8rem;
            color: #6b5d4e;
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
            margin-top: 6px;
          }

          /* ====== CONTATTI ====== */
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .contact-grid .map {
            background: #d6c9b7;
            height: 240px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8a7a6a;
            font-size: 0.7rem;
          }
          .contact-info p {
            font-size: 0.85rem;
            color: #5a4f44;
            margin-bottom: 4px;
          }
          .contact-info a {
            color: #6b5d4e;
            text-decoration: none;
            border-bottom: 1px solid #d6c9b7;
          }
          .hours {
            margin-top: 16px;
          }
          .hours .row {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            padding: 4px 0;
            border-bottom: 1px solid #e8e0d6;
            color: #5a4f44;
          }

          /* ====== RESPONSIVE ====== */
          @media (max-width: 1024px) {
            .site { grid-template-columns: 1fr; }
            .sidebar {
              position: relative;
              height: auto;
              flex-direction: row;
              padding: 20px 30px;
              align-items: center;
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

            {/* VINI - primo, per cambiare ordine */}
            <section className="section" id="vini">
              <h3>La cantina</h3>
              <p className="sub">Etichette selezionate</p>
              <div className="wine-grid">
                <div className="wine-card"><h4>Rossi</h4><p>Barolo · Brunello · Montefalco</p></div>
                <div className="wine-card"><h4>Bianchi</h4><p>Gavi · Pinot Grigio · Sauvignon</p></div>
                <div className="wine-card"><h4>Bollicine</h4><p>Franciacorta · Prosecco</p></div>
              </div>
            </section>

            {/* ABOUT */}
            <section className="section" id="chi-siamo">
              <h3>L'osteria</h3>
              <p className="sub">Tradizione e ospitalità</p>
              <div className="about-grid">
                <div className="img">Foto</div>
                <div>
                  <p>L'Osteria Il Gallo è nata nel 2014 dalla passione per la cucina italiana e l'ospitalità. Ogni piatto racconta una storia di famiglia e tradizione.</p>
                  <p>Dalla fiorentina alla brace alla pasta fresca fatta in casa.</p>
                  <div className="sigla">— Da sempre a Stradella</div>
                </div>
              </div>
            </section>

            {/* MENU */}
            <section className="section" id="menu">
              <h3>Il menù</h3>
              <p className="sub">I nostri classici</p>
              <div className="menu-grid">
                <div className="menu-cat">
                  <h4>Antipasti</h4>
                  <div className="menu-item"><span>Salumi e formaggi <span className="desc">Selezione di salumi e formaggi stagionati</span></span><span className="price">€14</span></div>
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
              <p className="sub">Vieni a trovarci</p>
              <div className="contact-grid">
                <div className="map">Mappa · Via Parea 3</div>
                <div className="contact-info">
                  <p>Via Parea, 3 · Stradella (PV)</p>
                  <p><a href="https://www.google.com/maps?q=Via+Parea+3+Stradella">Apri su Google Maps →</a></p>
                  <div className="hours">
                    <div className="row"><span>Lunedì</span><span>12–14 / 19:30–22</span></div>
                    <div className="row"><span>Martedì</span><span>Chiuso</span></div>
                    <div className="row"><span>Mer–Dom</span><span>12–14 / 19:30–22</span></div>
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
