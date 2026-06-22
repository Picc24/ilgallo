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

          .site {
            display: grid;
            grid-template-columns: 200px 1fr;
            min-height: 100vh;
          }

          .sidebar {
            background: #1a1a1a;
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

          .main {
            padding: 60px 80px 60px 60px;
            overflow-y: auto;
            max-height: 100vh;
          }

          .hero {
            margin-bottom: 80px;
            padding: 60px 50px;
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            min-height: 350px;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #1a1a1a 0%, #2e2b26 100%);
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          }
          .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(176,128,74,0.15) 0%, transparent 70%);
            animation: pulse 6s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .hero-image-bg {
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            background-image: url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop&crop=center');
            background-size: cover;
            background-position: center;
            opacity: 0.3;
            border-radius: 0 16px 16px 0;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 55%;
          }
          .hero .tag {
            font-size: 0.6rem;
            letter-spacing: 3px;
            color: #b0804a;
            text-transform: uppercase;
          }
          .hero h2 {
            font-size: 3.8rem;
            font-weight: 300;
            letter-spacing: -1px;
            margin: 8px 0 16px;
            color: #f5f0eb;
          }
          .hero h2 em { font-style: italic; color: #b0804a; }
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
            padding: 14px 32px;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: none;
            transition: 0.3s;
            cursor: pointer;
            border-radius: 6px;
            display: inline-block;
          }
          .btn-primary {
            background: #b0804a;
            color: #f5f0eb;
          }
          .btn-primary:hover {
            background: #c4956a;
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(176,128,74,0.3);
          }
          .btn-outline {
            background: transparent;
            color: #f5f0eb;
            border: 1px solid rgba(245,240,235,0.3);
          }
          .btn-outline:hover {
            background: rgba(245,240,235,0.1);
            border-color: #b0804a;
          }

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

          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 40px;
            align-items: center;
          }
          .about-grid .img {
            height: 280px;
            border-radius: 16px;
            background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center');
            background-size: cover;
            background-position: center;
            box-shadow: 0 4px 16px rgba(0,0,0,0.06);
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

          .wine-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .wine-card {
            background: #f5f0eb;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #e8e0d6;
            transition: 0.3s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          }
          .wine-card:hover { transform: translateY(-6px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
          .wine-card .img-wine {
            height: 180px;
            background-size: cover;
            background-position: center;
          }
          .wine-card .img-wine.r1 { background-image: url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop&crop=center'); }
          .wine-card .img-wine.b1 { background-image: url('https://images.unsplash.com/photo-1568214379698-8a5876f9e8d2?w=600&h=400&fit=crop&crop=center'); }
          .wine-card .img-wine.s1 { background-image: url('https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=600&h=400&fit=crop&crop=center'); }
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

          .review-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
          }
          .review-card {
            background: #f5f0eb;
            padding: 24px;
            border-radius: 16px;
            border-left: 4px solid #b0804a;
            border: 1px solid #e8e0d6;
            border-left-width: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.02);
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

          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .contact-grid .map {
            height: 280px;
            border-radius: 16px;
            background-image: url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop&crop=center');
            background-size: cover;
            background-position: center;
            box-shadow: 0 4px 16px rgba(0,0,0,0.06);
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
            border-radius: 16px;
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
            .hero-content { max-width: 100%; }
            .hero-image-bg { display: none; }
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

          <main className="main">

            <section className="hero">
              <div className="hero-image-bg"></div>
              <div className="hero-content">
                <div className="tag">Osteria dal 2014</div>
                <h2>Il <em>Gallo</em></h2>
                <p>Cucina italiana · Carne alla brace · Cantina selezionata</p>
                <div className="btn-group">
                  <a href="tel:+390383123456" className="btn btn-primary">📞 Chiama ora</a>
                  <a href="#menu" className="btn btn-outline">Scopri</a>
                </div>
              </div>
            </section>

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
                  <p style={{ marginTop: 16 }}><a href="tel:+390383123456" className="btn btn-primary" style={{ display: 'inline-block', padding: '10px 24px' }}>📞 Chiama ora</a></p>
                </div>
              </div>
            </section>

          </main>
        </div>

      </body>
    </html>
  );
}
