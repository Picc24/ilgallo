export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>Il Gallo · Osteria di Charme a Stradella</title>
        <meta name="description" content="Osteria Il Gallo a Stradella. Cucina italiana di classe, carne alla brace, pasta fresca e una cantina ricca di etichette pregiate." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            font-family: 'Nunito Sans', sans-serif;
            background: #EDE8E0;
            color: #2C2420;
            line-height: 1.7;
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

          /* NAVBAR - completamente diversa */
          .navbar {
            position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
            padding: 18px 0;
            background: rgba(237,232,224,0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid #D5CEC4;
          }
          .navbar .container {
            display: flex; align-items: center; justify-content: space-between;
          }
          .logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem; font-weight: 700;
            color: #2C2420;
            text-decoration: none;
            letter-spacing: 0.02em;
          }
          .logo-icon { color: #8B7355; margin-right: 4px; }
          .logo span {
            display: block; font-size: 0.55rem; font-weight: 400;
            letter-spacing: 0.2em; text-transform: uppercase;
            color: #8B7355; font-family: 'Nunito Sans', sans-serif;
            margin-top: -4px;
          }
          .nav-links {
            display: flex; align-items: center; gap: 36px;
          }
          .nav-links a {
            font-size: 0.75rem; font-weight: 500;
            color: #2C2420; opacity: 0.6;
            text-decoration: none;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition: opacity 0.3s;
          }
          .nav-links a:hover { opacity: 1; }
          .nav-links .btn { padding: 10px 28px; font-size: 0.7rem; letter-spacing: 0.1em; }
          .hamburger {
            display: none; flex-direction: column; gap: 5px;
            background: none; border: none; cursor: pointer; padding: 4px;
          }
          .hamburger span {
            display: block; width: 26px; height: 1.5px;
            background: #2C2420; border-radius: 2px;
            transition: 0.3s ease;
          }

          /* BUTTONS - completamente diversi */
          .btn {
            display: inline-flex; align-items: center; justify-content: center;
            gap: 10px; padding: 14px 36px;
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 600; font-size: 0.85rem;
            letter-spacing: 0.04em;
            border: none; cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .btn-primary {
            background: #8B7355;
            color: #FFFFFF;
            border-radius: 4px;
          }
          .btn-primary:hover {
            background: #A0896B;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(139,115,85,0.25);
          }
          .btn-outline {
            background: transparent;
            color: #2C2420;
            border: 1px solid #8B7355;
            border-radius: 4px;
          }
          .btn-outline:hover {
            background: #8B7355;
            color: #FFFFFF;
            transform: translateY(-2px);
          }
          .btn-phone {
            background: #6B2D2D;
            color: #FFFFFF;
            border-radius: 4px;
          }
          .btn-phone:hover {
            background: #8A3A3A;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(107,45,45,0.25);
          }

          /* HERO - layout completamente diverso */
          .hero {
            min-height: 100vh; display: flex; align-items: center;
            padding: 140px 0 80px;
            background: #EDE8E0;
          }
          .hero .container {
            display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
          }
          .hero-content { max-width: 560px; }
          .eyebrow {
            display: inline-block; font-family: 'Nunito Sans', sans-serif;
            font-size: 0.6rem; font-weight: 500; letter-spacing: 0.15em;
            text-transform: uppercase; color: #8B7355;
            margin-bottom: 0.75rem;
          }
          .eyebrow::after {
            content: ''; display: inline-block; width: 40px; height: 1px;
            background: #8B7355; margin-left: 12px; vertical-align: middle;
          }
          .hero-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(3.5rem, 8vw, 5.5rem); font-weight: 700;
            line-height: 1.05; color: #2C2420; margin-bottom: 0.5rem;
          }
          .hero-title em { font-style: italic; color: #8B7355; }
          .hero-subtitle {
            font-size: 1.1rem; font-weight: 400; color: #2C2420;
            opacity: 0.7; margin-bottom: 1.5rem;
            font-family: 'Cormorant Garamond', serif; font-style: italic;
          }
          .hero-desc {
            font-size: 0.95rem; color: #2C2420; opacity: 0.7;
            max-width: 440px; line-height: 1.8; margin-bottom: 2rem;
            font-weight: 300;
          }
          .hero-buttons { display: flex; flex-wrap: wrap; gap: 16px; }
          .hero-image {
            background: #D5CEC4;
            height: 500px;
            display: flex; align-items: center; justify-content: center;
            color: #2C2420; opacity: 0.4; font-size: 1rem;
          }

          /* SECTIONS */
          .section { padding: 80px 0; }
          .section-alt { background: #FFFFFF; }
          .section-dark {
            background: #2C2420;
            color: #EDE8E0;
          }
          .section-dark .section-title { color: #EDE8E0; }
          .section-dark .section-sub { color: #B5A89A; }
          .section-dark .eyebrow { color: #8B7355; }
          .section-dark .eyebrow::after { background: #8B7355; }

          .section-header { margin-bottom: 3rem; }
          .section-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2.2rem, 4vw, 3.5rem);
            font-weight: 700; margin-bottom: 0.75rem;
            color: #2C2420;
          }
          .section-sub {
            font-size: 1rem; color: #2C2420; opacity: 0.6;
            max-width: 520px; line-height: 1.8; font-weight: 300;
          }

          /* ABOUT - diverso */
          .about-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          }
          .about-text p {
            font-size: 0.95rem; opacity: 0.7; line-height: 1.9;
            margin-bottom: 1.2rem; font-weight: 300;
          }
          .about-stats {
            display: flex; gap: 48px; margin-top: 2rem;
          }
          .about-stats .stat { text-align: left; }
          .about-stats .number {
            display: block; font-family: 'Cormorant Garamond', serif;
            font-size: 2.6rem; font-weight: 700; color: #8B7355;
            line-height: 1.1;
          }
          .about-stats .label {
            font-size: 0.7rem; opacity: 0.5; letter-spacing: 0.08em;
            text-transform: uppercase; font-weight: 300;
          }
          .about-image {
            background: #D5CEC4; height: 400px;
            display: flex; align-items: center; justify-content: center;
            color: #2C2420; opacity: 0.4; font-size: 1rem;
          }

          /* MENU - griglia 2 colonne diversa */
          .menu-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px;
          }
          .menu-card {
            background: #FFFFFF; padding: 32px 28px;
            border-left: 4px solid #8B7355;
          }
          .menu-card .icon { font-size: 2rem; margin-bottom: 0.5rem; display: block; opacity: 0.5; }
          .menu-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.3rem; font-weight: 600; margin-bottom: 1.2rem;
            border-bottom: 1px solid #D5CEC4; padding-bottom: 0.5rem;
          }
          .menu-item {
            display: flex; justify-content: space-between; align-items: baseline;
            padding: 8px 0; border-bottom: 1px solid #EDE8E0; gap: 12px;
          }
          .menu-item:last-child { border-bottom: none; }
          .menu-item .name { font-weight: 400; font-size: 0.9rem; }
          .menu-item .name .desc {
            display: block; font-weight: 300; font-size: 0.75rem;
            opacity: 0.6; margin-top: 2px;
          }
          .menu-item .price {
            font-weight: 400; color: #8B7355; white-space: nowrap;
            font-size: 0.9rem;
          }
          .menu-cta { text-align: center; margin-top: 3rem; }

          /* WINE - sezione scura diversa */
          .wine-grid {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 40px;
          }
          .wine-card {
            padding: 24px 0;
            border-bottom: 1px solid rgba(232,223,216,0.08);
          }
          .wine-card h4 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.1rem; color: #8B7355; margin-bottom: 0.3rem;
            font-weight: 600;
          }
          .wine-card p { font-size: 0.8rem; color: #B5A89A; font-weight: 300; }

          /* REVIEWS - diverso */
          .reviews-grid {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px;
          }
          .review-card {
            padding: 24px 0;
            border-top: 1px solid #EDE8E0;
          }
          .review-card .stars { color: #8B7355; font-size: 0.9rem; margin-bottom: 0.5rem; letter-spacing: 2px; }
          .review-card .text {
            font-style: italic; font-size: 0.9rem; line-height: 1.7;
            margin-bottom: 1rem; opacity: 0.8; font-weight: 300;
          }
          .review-card .author { font-weight: 500; font-size: 0.85rem; }
          .review-card .date { font-weight: 300; opacity: 0.4; font-size: 0.75rem; margin-left: 6px; }

          /* CONTACT - diverso */
          .contact-grid {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; margin-top: 40px;
          }
          .contact-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1rem; font-weight: 600; color: #8B7355;
            margin-bottom: 0.75rem; letter-spacing: 0.04em;
          }
          .contact-card p, .contact-card a {
            font-size: 0.9rem; opacity: 0.7; line-height: 1.8; display: block;
            font-weight: 300;
          }
          .contact-card a { color: #8B7355; font-weight: 400; text-decoration: none; }
          .contact-card a:hover { text-decoration: underline; }
          .contact-hours { display: flex; flex-direction: column; gap: 4px; }
          .contact-hours .day {
            display: flex; justify-content: space-between; font-size: 0.85rem;
            padding: 6px 0; border-bottom: 1px solid #EDE8E0;
          }
          .contact-hours .day span:last-child { opacity: 0.6; }
          .contact-cta-box {
            margin-top: 50px; padding: 48px 40px;
            background: #2C2420; text-align: center;
            color: #FFFFFF;
          }
          .contact-cta-box h3 {
            color: #FFFFFF; font-size: 2rem; font-weight: 700;
            font-family: 'Cormorant Garamond', serif;
            margin-bottom: 0.5rem;
          }
          .contact-cta-box p { opacity: 0.6; font-weight: 300; margin-bottom: 1.8rem; }

          /* FOOTER - diverso */
          .footer {
            border-top: 1px solid #D5CEC4; background: #FFFFFF;
            padding: 40px 0 30px; text-align: center;
          }
          .footer-logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.6rem; font-weight: 700; color: #2C2420;
          }
          .footer-logo span {
            display: block; font-size: 0.6rem; font-weight: 300;
            opacity: 0.4; letter-spacing: 0.15em; text-transform: uppercase;
            font-family: 'Nunito Sans', sans-serif;
          }
          .footer-text { font-size: 0.85rem; opacity: 0.5; margin-top: 0.5rem; font-weight: 300; }
          .footer-links {
            display: flex; justify-content: center; gap: 2.5rem;
            margin: 1.5rem 0; flex-wrap: wrap;
          }
          .footer-links a { font-size: 0.8rem; color: #8B7355; font-weight: 400; text-decoration: none; }
          .footer-links a:hover { text-decoration: underline; }
          .footer-copy { font-size: 0.65rem; opacity: 0.2; margin-top: 0.5rem; letter-spacing: 0.04em; }

          @media (max-width: 1024px) {
            .hero .container { grid-template-columns: 1fr; gap: 40px; }
            .hero-image { height: 300px; order: -1; }
            .hero-content { max-width: 100%; text-align: center; }
            .hero-desc { max-width: 100%; margin: 0 auto 2rem; }
            .hero-buttons { justify-content: center; }
            .about-grid { grid-template-columns: 1fr; gap: 40px; }
            .about-image { height: 280px; order: -1; }
            .about-stats { justify-content: center; }
            .menu-grid { grid-template-columns: 1fr; }
            .reviews-grid { grid-template-columns: 1fr 1fr; }
            .contact-grid { grid-template-columns: 1fr 1fr; }
            .wine-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (max-width: 768px) {
            .nav-links {
              display: none; flex-direction: column; gap: 16px;
              position: absolute; top: 72px; left: 0; right: 0;
              background: #FFFFFF; padding: 24px;
              border-bottom: 1px solid #D5CEC4;
            }
            .nav-links.open { display: flex; }
            .hamburger { display: flex; }
            .reviews-grid { grid-template-columns: 1fr; }
            .contact-grid { grid-template-columns: 1fr; gap: 30px; }
            .wine-grid { grid-template-columns: 1fr; }
            .contact-cta-box { padding: 32px 20px; }
            .contact-cta-box h3 { font-size: 1.6rem; }
            .section { padding: 60px 0; }
          }
          @media (max-width: 480px) {
            .hero-title { font-size: 2.8rem; }
            .hero-image { height: 200px; }
            .btn { padding: 12px 24px; font-size: 0.75rem; width: 100%; justify-content: center; }
            .hero-buttons { flex-direction: column; align-items: stretch; }
            .logo { font-size: 1.4rem; }
          }
        `}</style>
      </head>
      <body>

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="container">
            <a href="/" className="logo">
              <span className="logo-icon">⸻</span> Il Gallo
              <span>Osteria</span>
            </a>
            <div className="nav-links" id="navLinks">
              <a href="#menu">Menù</a>
              <a href="#vini">Vini</a>
              <a href="#recensioni">Recensioni</a>
              <a href="#chi-siamo">Chi Siamo</a>
              <a href="#contatti" className="btn btn-primary">Prenota</a>
            </div>
            <button className="hamburger" id="hamburger">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <span className="eyebrow">Dal 2014 a Stradella</span>
              <h1 className="hero-title">Il <em>Gallo</em></h1>
              <p className="hero-subtitle">Cucina di classe · Carne alla brace · Cantina pregiat</p>
              <p className="hero-desc">
                Un'osteria dove la qualità degli ingredienti e il calore dell'ospitalità si incontrano in un'atmosfera elegante.
              </p>
              <div className="hero-buttons">
                <a href="tel:+390383123456" className="btn btn-phone">📞 Chiama Ora</a>
                <a href="#menu" className="btn btn-outline">Esplora il menù</a>
              </div>
            </div>
            <div className="hero-image">FOTO · LOCATION</div>
          </div>
        </section>

        {/* CHI SIAMO */}
        <section className="section section-alt" id="chi-siamo">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <span className="eyebrow">Chi Siamo</span>
                <h2 className="section-title">Un'osteria di charme</h2>
                <p>
                  L'Osteria Il Gallo è un luogo dove la tradizione culinaria italiana incontra l'arte dell'ospitalità. Ogni piatto è un viaggio nei sapori autentici.
                </p>
                <p>
                  Dalla fiorentina alla brace alla pasta fresca fatta in casa, ogni ricetta racconta una storia di famiglia e convivialità.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <span className="number">4.5</span>
                    <span className="label">recensioni ⭐</span>
                  </div>
                  <div className="stat">
                    <span className="number">268</span>
                    <span className="label">clienti soddisfatti</span>
                  </div>
                  <div className="stat">
                    <span className="number">12</span>
                    <span className="label">anni di storia</span>
                  </div>
                </div>
              </div>
              <div className="about-image">FOTO · INTERNO</div>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="section" id="menu">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Il Menù</span>
              <h2 className="section-title">I nostri classici</h2>
              <p className="section-sub">Una selezione dei piatti che ci rappresentano, dalla tradizione alla brace.</p>
            </div>
            <div className="menu-grid">
              <div className="menu-card">
                <span className="icon">◈</span>
                <h3>Antipasti</h3>
                <div className="menu-item">
                  <span className="name">Salumi e formaggi<small className="desc">Selezione di salumi tipici e formaggi stagionati</small></span>
                  <span className="price">€14</span>
                </div>
                <div className="menu-item">
                  <span className="name">Crostini misti<small className="desc">Crostini con fegatini, funghi e pomodoro</small></span>
                  <span className="price">€10</span>
                </div>
                <div className="menu-item">
                  <span className="name">Carpaccio di manzo<small className="desc">Con rucola, grana e scaglie di tartufo</small></span>
                  <span className="price">€16</span>
                </div>
              </div>
              <div className="menu-card">
                <span className="icon">◈</span>
                <h3>Primi Piatti</h3>
                <div className="menu-item">
                  <span className="name">Ravioli del Gallo<small className="desc">Ricotta e spinaci, burro e salvia</small></span>
                  <span className="price">€15</span>
                </div>
                <div className="menu-item">
                  <span className="name">Pappardelle al cinghiale<small className="desc">Pasta fresca con ragù di cinghiale</small></span>
                  <span className="price">€17</span>
                </div>
                <div className="menu-item">
                  <span className="name">Tagliatelle al tartufo<small className="desc">Tartufo nero e burro fuso</small></span>
                  <span className="price">€20</span>
                </div>
              </div>
              <div className="menu-card">
                <span className="icon">◈</span>
                <h3>Secondi</h3>
                <div className="menu-item">
                  <span className="name">Fiorentina alla brace<small className="desc">Bistecca di manzo Chianina</small></span>
                  <span className="price">€35</span>
                </div>
                <div className="menu-item">
                  <span className="name">Ossobuco<small className="desc">Con gremolada e risotto</small></span>
                  <span className="price">€22</span>
                </div>
                <div className="menu-item">
                  <span className="name">Grigliata mista<small className="desc">Tagli di manzo, maiale e salsiccia</small></span>
                  <span className="price">€28</span>
                </div>
              </div>
              <div className="menu-card">
                <span className="icon">◈</span>
                <h3>Pesce</h3>
                <div className="menu-item">
                  <span className="name">Branzino al forno<small className="desc">Con patate e olive</small></span>
                  <span className="price">€24</span>
                </div>
                <div className="menu-item">
                  <span className="name">Salmone alla griglia<small className="desc">Con verdure grigliate</small></span>
                  <span className="price">€22</span>
                </div>
              </div>
            </div>
            <div className="menu-cta">
              <a href="#contatti" className="btn btn-primary">Scopri il menù completo</a>
            </div>
          </div>
        </section>

        {/* VINI */}
        <section className="section section-dark" id="vini">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">La Cantina</span>
              <h2 className="section-title">I nostri vini</h2>
              <p className="section-sub">Una selezione curata di etichette locali e nazionali.</p>
            </div>
            <div className="wine-grid">
              <div className="wine-card">
                <h4>Rossi</h4>
                <p>Barolo · Brunello · Montefalco · Chianti Classico</p>
              </div>
              <div className="wine-card">
                <h4>Bianchi</h4>
                <p>Gavi · Pinot Grigio · Sauvignon Blanc</p>
              </div>
              <div className="wine-card">
                <h4>Bollicine</h4>
                <p>Franciacorta · Prosecco · Champagne</p>
              </div>
            </div>
          </div>
        </section>

        {/* RECENSIONI */}
        <section className="section section-alt" id="recensioni">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Le Recensioni</span>
              <h2 className="section-title">Cosa dicono di noi</h2>
              <p className="section-sub">Il parere dei nostri clienti è il nostro miglior biglietto da visita.</p>
            </div>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars">✦ ✦ ✦ ✦ ✦</div>
                <p className="text">"Ottimo trovato benissimo. Fiorentina e un Montefalco riserva 2021: tutto Ottimo."</p>
                <div className="author">Alessandro Maggi <span className="date">2 mesi fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">✦ ✦ ✦ ✦ ✦</div>
                <p className="text">"Location molto carina e curata. Cibo di alta qualità. Buon rapporto qualità/prezzo."</p>
                <div className="author">Fabio Costaldi <span className="date">4 mesi fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">✦ ✦ ✦ ✦ ✦</div>
                <p className="text">"Cucina italiana di livello, servizio attento e atmosfera elegante."</p>
                <div className="author">Angelo Francione <span className="date">8 anni fa</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section className="section" id="contatti">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Dove siamo</span>
              <h2 className="section-title">Vieni a trovarci</h2>
              <p className="section-sub">Ti aspettiamo a Stradella per un'esperienza culinaria indimenticabile.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Indirizzo</h3>
                <p>Via Parea, 3</p>
                <p>Stradella (PV)</p>
                <a href="https://www.google.com/maps?q=Via+Parea+3+Stradella" target="_blank" rel="noopener noreferrer">Apri su Google Maps →</a>
              </div>
              <div className="contact-card">
                <h3>Contatti</h3>
                <a href="tel:+390383123456" style={{ fontSize: '1.2rem', fontWeight: 400 }}>0383 123456</a>
                <p style={{ marginTop: '4px', fontSize: '0.8rem', opacity: 0.5 }}>Chiama per prenotazioni</p>
              </div>
              <div className="contact-card">
                <h3>Orari</h3>
                <div className="contact-hours">
                  <div className="day"><span>Lunedì</span><span>12–14 / 19:30–22</span></div>
                  <div className="day"><span>Martedì</span><span>Chiuso</span></div>
                  <div className="day"><span>Mercoledì</span><span>12–14 / 19:30–22</span></div>
                  <div className="day"><span>Giovedì</span><span>12–14 / 19:30–22</span></div>
                  <div className="day"><span>Venerdì</span><span>12–14 / 19:30–22</span></div>
                  <div className="day"><span>Sabato</span><span>12–14 / 19:30–22</span></div>
                  <div className="day"><span>Domenica</span><span>12–14 / 19:30–22</span></div>
                </div>
              </div>
            </div>
            <div className="contact-cta-box">
              <h3>Prenota il tuo tavolo</h3>
              <p>Chiamaci per prenotare o per richiedere informazioni.</p>
              <a href="tel:+390383123456" className="btn btn-primary">📞 Chiama Ora</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="footer-logo">
              ⸻ Il Gallo
              <span>Osteria · Stradella</span>
            </div>
            <p className="footer-text">Via Parea, 3 · Stradella (PV) · 0383 123456</p>
            <div className="footer-links">
              <a href="tel:+390383123456">Chiama</a>
              <a href="https://www.google.com/maps?q=Via+Parea+3+Stradella" target="_blank" rel="noopener noreferrer">Mappa</a>
              <a href="mailto:info@ilgallo.it">Email</a>
            </div>
            <p className="footer-copy">© 2026 Il Gallo · Osteria di Charme</p>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            if (hamburger && navLinks) {
              hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('open');
              });
              document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                  navLinks.classList.remove('open');
                });
              });
            }
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  e.preventDefault();
                  const offset = 80;
                  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              });
            });
          `
        }} />
      </body>
    </html>
  );
}
