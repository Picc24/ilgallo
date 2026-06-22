export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>Il Gallo - Osteria a Stradella (PV)</title>
        <meta name="description" content="Osteria Il Gallo a Stradella (PV). Cucina italiana tradizionale, carne alla brace, pasta fresca e una cantina selezionata." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Nunito Sans', sans-serif;
            background: #FCF8F2;
            color: #2C241A;
            line-height: 1.7;
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

          /* NAVBAR */
          .navbar {
            position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
            padding: 16px 0;
            background: rgba(252,248,242,0.92);
            backdrop-filter: blur(14px);
            border-bottom: 1px solid #EDE6DB;
          }
          .navbar .container {
            display: flex; align-items: center; justify-content: space-between;
          }
          .logo {
            display: flex; align-items: center; gap: 10px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.8rem; font-weight: 700;
            color: #2C241A;
            text-decoration: none;
          }
          .logo-icon { font-size: 1.6rem; color: #B8944A; }
          .logo span {
            display: block; font-size: 0.6rem; font-weight: 400;
            letter-spacing: 0.15em; text-transform: uppercase;
            color: #B8944A; font-family: 'Nunito Sans', sans-serif;
            margin-top: -4px;
          }
          .nav-links {
            display: flex; align-items: center; gap: 32px;
          }
          .nav-links a {
            font-size: 0.85rem; font-weight: 600;
            color: #2C241A; opacity: 0.7;
            text-decoration: none;
            transition: opacity 0.3s;
          }
          .nav-links a:hover { opacity: 1; }
          .nav-links .btn { padding: 10px 24px; font-size: 0.8rem; }
          .hamburger {
            display: none; flex-direction: column; gap: 5px;
            background: none; border: none; cursor: pointer; padding: 4px;
          }
          .hamburger span {
            display: block; width: 26px; height: 2px;
            background: #2C241A; border-radius: 2px;
            transition: 0.3s ease;
          }

          /* BUTTONS */
          .btn {
            display: inline-flex; align-items: center; justify-content: center;
            gap: 10px; padding: 14px 36px; border-radius: 50px;
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 600; font-size: 1rem;
            border: none; cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .btn-primary {
            background: #B8944A; color: #FFFFFF;
            box-shadow: 0 4px 14px rgba(184,148,74,0.35);
          }
          .btn-primary:hover {
            background: #D4B87A; transform: translateY(-2px);
          }
          .btn-outline {
            background: transparent; color: #2C241A;
            border: 2px solid #B8944A;
          }
          .btn-outline:hover {
            background: #B8944A; color: #FFFFFF; transform: translateY(-2px);
          }
          .btn-phone {
            background: #2C241A; color: #FFFFFF;
            box-shadow: 0 4px 14px rgba(44,36,26,0.25);
          }
          .btn-phone:hover {
            background: #3D3226; transform: translateY(-2px);
          }

          /* HERO */
          .hero {
            min-height: 100vh; display: flex; align-items: center;
            padding: 120px 0 80px;
            background: linear-gradient(145deg, #FCF8F2 0%, #F5EDDD 100%);
          }
          .hero .container {
            display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          }
          .hero-content { max-width: 620px; }
          .eyebrow {
            display: inline-block; font-family: 'Nunito Sans', sans-serif;
            font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em;
            text-transform: uppercase; color: #B8944A; margin-bottom: 0.5rem;
          }
          .eyebrow::before {
            content: ''; display: inline-block; width: 28px; height: 2px;
            background: #B8944A; margin-right: 12px; vertical-align: middle;
          }
          .hero-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(3.2rem, 8vw, 5.2rem); font-weight: 700;
            line-height: 1; color: #2C241A; margin-bottom: 0.5rem;
          }
          .hero-title em { font-style: italic; color: #B8944A; }
          .hero-subtitle {
            font-size: 1.3rem; font-weight: 400; color: #2C241A;
            opacity: 0.7; margin-bottom: 1.5rem;
            font-family: 'Cormorant Garamond', serif; font-style: italic;
          }
          .hero-desc {
            font-size: 1.05rem; color: #2C241A; opacity: 0.75;
            max-width: 480px; line-height: 1.8; margin-bottom: 2rem;
          }
          .hero-buttons { display: flex; flex-wrap: wrap; gap: 16px; }
          .hero-image {
            background: #EDE6DB; border-radius: 20px; height: 460px;
            display: flex; align-items: center; justify-content: center;
            color: #2C241A; opacity: 0.4; font-size: 1.2rem;
            box-shadow: 0 8px 30px rgba(44,36,26,0.08);
          }

          /* SECTIONS */
          .section { padding: 80px 0; }
          .section-alt { background: #FFFFFF; }
          .section-gold { background: #F5EDDD; }
          .section-header { text-align: center; margin-bottom: 3rem; }
          .section-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2.2rem, 4.5vw, 3.8rem);
            font-weight: 700; margin-bottom: 1rem;
          }
          .section-sub {
            font-size: 1.1rem; color: #2C241A; opacity: 0.7;
            max-width: 560px; line-height: 1.8; margin: 0 auto;
          }

          /* ABOUT */
          .about-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          }
          .about-text p {
            font-size: 1.05rem; opacity: 0.8; line-height: 1.9; margin-bottom: 1.2rem;
          }
          .about-stats {
            display: flex; gap: 40px; margin-top: 2rem; flex-wrap: wrap;
          }
          .about-stats .stat { text-align: center; }
          .about-stats .number {
            display: block; font-family: 'Cormorant Garamond', serif;
            font-size: 2.4rem; font-weight: 700; color: #B8944A;
          }
          .about-stats .label { font-size: 0.85rem; opacity: 0.6; }
          .about-image {
            background: #EDE6DB; border-radius: 20px; height: 400px;
            display: flex; align-items: center; justify-content: center;
            color: #2C241A; opacity: 0.4; font-size: 1.2rem;
            box-shadow: 0 8px 30px rgba(44,36,26,0.08);
          }

          /* MENU */
          .menu-grid {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px;
          }
          .menu-card {
            background: #FFFFFF; border-radius: 12px; padding: 32px 28px;
            border: 1px solid #EDE6DB; box-shadow: 0 8px 30px rgba(44,36,26,0.06);
            transition: all 0.4s ease;
          }
          .menu-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(44,36,26,0.08); }
          .menu-card .icon { font-size: 2.6rem; margin-bottom: 0.5rem; display: block; }
          .menu-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.5rem; font-weight: 700; margin-bottom: 1.2rem;
            border-bottom: 2px solid #F5EDDD; padding-bottom: 0.5rem;
          }
          .menu-item {
            display: flex; justify-content: space-between; align-items: baseline;
            padding: 10px 0; border-bottom: 1px solid #EDE6DB; gap: 12px;
          }
          .menu-item:last-child { border-bottom: none; }
          .menu-item .name { font-weight: 500; font-size: 0.98rem; }
          .menu-item .name .desc {
            display: block; font-weight: 300; font-size: 0.8rem; opacity: 0.65; margin-top: 2px;
          }
          .menu-item .price { font-weight: 600; color: #B8944A; white-space: nowrap; font-size: 0.95rem; }
          .menu-cta { text-align: center; margin-top: 3rem; }

          /* WINE */
          .wine-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px; align-items: center;
          }
          .wine-text p { font-size: 1.05rem; opacity: 0.75; line-height: 1.8; }
          .wine-text .btn { margin-top: 1.5rem; }
          .wine-image {
            background: #EDE6DB; border-radius: 20px; height: 280px;
            display: flex; align-items: center; justify-content: center;
            color: #2C241A; opacity: 0.4; font-size: 1.2rem;
            box-shadow: 0 8px 30px rgba(44,36,26,0.08);
          }

          /* REVIEWS */
          .reviews-grid {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px;
          }
          .review-card {
            background: #FFFFFF; border-radius: 12px; padding: 28px 26px;
            border: 1px solid #EDE6DB; box-shadow: 0 8px 30px rgba(44,36,26,0.06);
            transition: all 0.3s ease;
          }
          .review-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(44,36,26,0.06); }
          .review-card .stars { color: #B8944A; font-size: 1.1rem; margin-bottom: 0.5rem; }
          .review-card .text {
            font-style: italic; font-size: 0.95rem; line-height: 1.7;
            margin-bottom: 1rem; opacity: 0.85;
          }
          .review-card .author { font-weight: 600; font-size: 0.9rem; }
          .review-card .date { font-weight: 300; opacity: 0.5; font-size: 0.8rem; margin-left: 6px; }

          /* CONTACT */
          .contact-grid {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; margin-top: 40px;
          }
          .contact-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.2rem; font-weight: 700; margin-bottom: 0.75rem;
          }
          .contact-card p, .contact-card a {
            font-size: 1rem; opacity: 0.8; line-height: 1.8; display: block;
          }
          .contact-card a { color: #B8944A; font-weight: 500; text-decoration: none; }
          .contact-card a:hover { text-decoration: underline; }
          .contact-hours { display: flex; flex-direction: column; gap: 4px; }
          .contact-hours .day {
            display: flex; justify-content: space-between; font-size: 0.95rem;
            padding: 6px 0; border-bottom: 1px solid #EDE6DB;
          }
          .contact-hours .day span:last-child { opacity: 0.7; }
          .contact-cta-box {
            margin-top: 50px; padding: 48px 40px;
            background: #2C241A; border-radius: 12px; text-align: center;
            color: #FFFFFF; box-shadow: 0 8px 30px rgba(44,36,26,0.08);
          }
          .contact-cta-box h3 {
            color: #FFFFFF; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;
          }
          .contact-cta-box p { opacity: 0.7; font-size: 1.05rem; margin-bottom: 1.8rem; }
          .contact-cta-box .btn { font-size: 1.1rem; padding: 16px 44px; }

          /* FOOTER */
          .footer {
            border-top: 1px solid #EDE6DB; background: #FFFFFF;
            padding: 40px 0 30px; text-align: center;
          }
          .footer-logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.6rem; font-weight: 700; color: #2C241A;
          }
          .footer-logo span {
            display: block; font-size: 0.7rem; font-weight: 300;
            opacity: 0.4; letter-spacing: 0.1em; text-transform: uppercase;
            font-family: 'Nunito Sans', sans-serif;
          }
          .footer-text { font-size: 0.95rem; opacity: 0.5; margin-top: 0.5rem; }
          .footer-links {
            display: flex; justify-content: center; gap: 2.5rem;
            margin: 1.5rem 0; flex-wrap: wrap;
          }
          .footer-links a { font-size: 0.9rem; color: #B8944A; font-weight: 500; text-decoration: none; }
          .footer-links a:hover { text-decoration: underline; }
          .footer-copy { font-size: 0.75rem; opacity: 0.3; margin-top: 0.5rem; }

          /* RESPONSIVE */
          @media (max-width: 1024px) {
            .hero .container { grid-template-columns: 1fr; gap: 40px; }
            .hero-image { height: 320px; order: -1; }
            .hero-content { max-width: 100%; text-align: center; }
            .hero-desc { max-width: 100%; margin: 0 auto 2rem; }
            .hero-buttons { justify-content: center; }
            .about-grid { grid-template-columns: 1fr; gap: 40px; }
            .about-image { height: 280px; order: -1; }
            .about-stats { justify-content: center; }
            .menu-grid { grid-template-columns: repeat(2, 1fr); }
            .reviews-grid { grid-template-columns: repeat(2, 1fr); }
            .contact-grid { grid-template-columns: 1fr 1fr; }
            .wine-grid { grid-template-columns: 1fr; }
            .wine-image { height: 220px; order: -1; }
          }
          @media (max-width: 768px) {
            .nav-links {
              display: none; flex-direction: column; gap: 16px;
              position: absolute; top: 72px; left: 0; right: 0;
              background: #FFFFFF; padding: 24px;
              border-bottom: 1px solid #EDE6DB;
              box-shadow: 0 8px 30px rgba(44,36,26,0.08);
            }
            .nav-links.open { display: flex; }
            .hamburger { display: flex; }
            .menu-grid { grid-template-columns: 1fr; }
            .reviews-grid { grid-template-columns: 1fr; }
            .contact-grid { grid-template-columns: 1fr; gap: 30px; }
            .contact-cta-box { padding: 32px 20px; }
            .contact-cta-box h3 { font-size: 1.6rem; }
            .section { padding: 60px 0; }
          }
          @media (max-width: 480px) {
            .hero-title { font-size: 2.8rem; }
            .hero-image { height: 200px; }
            .btn { padding: 12px 24px; font-size: 0.9rem; width: 100%; justify-content: center; }
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
              <span className="logo-icon">🐓</span>
              Il Gallo
              <span>Osteria</span>
            </a>
            <div className="nav-links" id="navLinks">
              <a href="#menu">Menù</a>
              <a href="#vini">Vini</a>
              <a href="#recensioni">Recensioni</a>
              <a href="#chi-siamo">Chi Siamo</a>
              <a href="#contatti" className="btn btn-primary">📞 Prenota</a>
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
              <p className="hero-subtitle">Cucina italiana • Carne alla brace • Tradizione</p>
              <p className="hero-desc">
                Un&apos;osteria dove la qualità della materia prima e il calore dell&apos;ospitalità
                si incontrano. Un&apos;esperienza elegante e conviviale, nel cuore di Stradella.
              </p>
              <div className="hero-buttons">
                <a href="tel:+390383123456" className="btn btn-phone">📞 Chiama Ora</a>
                <a href="#menu" className="btn btn-outline">Scopri il menù →</a>
              </div>
            </div>
            <div className="hero-image">🖼️ Foto del locale</div>
          </div>
        </section>

        {/* CHI SIAMO */}
        <section className="section section-alt" id="chi-siamo">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <span className="eyebrow">Chi Siamo</span>
                <h2 className="section-title">La Nostra Osteria</h2>
                <p>
                  L&apos;Osteria Il Gallo è un luogo dove la tradizione culinaria italiana
                  incontra l&apos;arte dell&apos;ospitalità. Ogni piatto è un viaggio nei sapori
                  autentici, preparato con ingredienti selezionati e passione.
                </p>
                <p>
                  Dalla fiorentina alla brace alla pasta fresca fatta in casa, ogni
                  ricetta racconta una storia di famiglia e convivialità.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <span className="number">4.5 ⭐</span>
                    <span className="label">268 recensioni</span>
                  </div>
                  <div className="stat">
                    <span className="number">🔥</span>
                    <span className="label">Cucina alla brace</span>
                  </div>
                  <div className="stat">
                    <span className="number">🍷</span>
                    <span className="label">Cantina selezionata</span>
                  </div>
                </div>
              </div>
              <div className="about-image">🖼️ Interno del ristorante</div>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="section" id="menu">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Il Nostro Menù</span>
              <h2 className="section-title">I Nostri Classici</h2>
              <p className="section-sub">Una selezione dei piatti che ci rappresentano, dalla tradizione alla brace.</p>
            </div>
            <div className="menu-grid">
              <div className="menu-card">
                <span className="icon">🧀</span>
                <h3>Antipasti</h3>
                <div className="menu-item">
                  <span className="name">Selezione di salumi e formaggi<small className="desc">Misto di salumi tipici e formaggi stagionati</small></span>
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
                <span className="icon">🍝</span>
                <h3>Primi Piatti</h3>
                <div className="menu-item">
                  <span className="name">Ravioli del Gallo<small className="desc">Ravioli ripieni di ricotta e spinaci, burro e salvia</small></span>
                  <span className="price">€15</span>
                </div>
                <div className="menu-item">
                  <span className="name">Pappardelle al cinghiale<small className="desc">Pasta fresca con ragù di cinghiale</small></span>
                  <span className="price">€17</span>
                </div>
                <div className="menu-item">
                  <span className="name">Tagliatelle al tartufo<small className="desc">Tagliatelle fresche, tartufo nero e burro fuso</small></span>
                  <span className="price">€20</span>
                </div>
              </div>
              <div className="menu-card">
                <span className="icon">🥩</span>
                <h3>Secondi e Grigliate</h3>
                <div className="menu-item">
                  <span className="name">Fiorentina alla brace<small className="desc">Bistecca di manzo Chianina, cotta a legna</small></span>
                  <span className="price">€35</span>
                </div>
                <div className="menu-item">
                  <span className="name">Ossobuco<small className="desc">Ossobuco di vitello, gremolada e risotto</small></span>
                  <span className="price">€22</span>
                </div>
                <div className="menu-item">
                  <span className="name">Grigliata mista di carne<small className="desc">Tagli di manzo, maiale e salsiccia</small></span>
                  <span className="price">€28</span>
                </div>
              </div>
            </div>
            <div className="menu-cta">
              <a href="#contatti" className="btn btn-primary">📋 Vedi il menù completo</a>
            </div>
          </div>
        </section>

        {/* VINI */}
        <section className="section section-gold" id="vini">
          <div className="container">
            <div className="wine-grid">
              <div className="wine-text">
                <span className="eyebrow" style={{ color: '#2C241A' }}>La Cantina</span>
                <h2 className="section-title">I Nostri Vini</h2>
                <p>
                  La nostra cantina è una selezione curata di etichette locali e nazionali,
                  scelte per accompagnare al meglio i nostri piatti e valorizzare ogni sorso.
                  Dai grandi rossi toscani ai bianchi freschi del territorio.
                </p>
                <a href="#contatti" className="btn btn-primary" style={{ background: '#2C241A', color: '#FFFFFF' }}>🍷 Scopri la cantina</a>
              </div>
              <div className="wine-image">🍷 Cantina e vini</div>
            </div>
          </div>
        </section>

        {/* RECENSIONI */}
        <section className="section section-alt" id="recensioni">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Le Recensioni</span>
              <h2 className="section-title">Cosa Dicono di Noi</h2>
              <p className="section-sub">Il parere dei nostri clienti è il nostro miglior biglietto da visita.</p>
            </div>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="text">&quot;Ottimo trovato benissimo. Fiorentina e un Montefalco riserva 2021: tutto Ottimo. Anche il dolce pera al vino rosso con gelato. Si poteva anche una stella in più.&quot;</p>
                <div className="author">Alessandro Maggi <span className="date">2 mesi fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="text">&quot;Location molto carina e curata. Cibo di alta qualità. Buon rapporto qualità/prezzo. Esperienza assolutamente da ripetere.&quot;</p>
                <div className="author">ILKASTA - Fabio Costaldi <span className="date">4 mesi fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="text">&quot;Cucina italiana di livello, servizio attento e atmosfera elegante. Un ristorante che merita assolutamente una visita a Stradella.&quot;</p>
                <div className="author">Angelo Francione <span className="date">8 anni fa</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section className="section" id="contatti">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Dove Siamo</span>
              <h2 className="section-title">Vieni a Trovarci</h2>
              <p className="section-sub">Ti aspettiamo a Stradella per un&apos;esperienza culinaria indimenticabile.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>📍 Indirizzo</h3>
                <p>Via Parea, 3</p>
                <p style={{ marginTop: '-8px' }}>Stradella (PV)</p>
                <a href="https://www.google.com/maps?q=Via+Parea+3+Stradella" target="_blank" rel="noopener noreferrer">Apri su Google Maps →</a>
              </div>
              <div className="contact-card">
                <h3>📞 Contatti</h3>
                <a href="tel:+390383123456" style={{ fontSize: '1.3rem', fontWeight: 600 }}>0383 123456</a>
                <p style={{ marginTop: '4px', fontSize: '0.9rem', opacity: 0.6 }}>Chiama per prenotazioni e informazioni</p>
              </div>
              <div className="contact-card">
                <h3>🕐 Orari</h3>
                <div className="contact-hours">
                  <div className="day"><span>Lunedì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                  <div className="day"><span>Martedì</span><span>Chiuso</span></div>
                  <div className="day"><span>Mercoledì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                  <div className="day"><span>Giovedì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                  <div className="day"><span>Venerdì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                  <div className="day"><span>Sabato</span><span>12:00–14:00 / 19:30–22:00</span></div>
                  <div className="day"><span>Domenica</span><span>12:00–14:00 / 19:30–22:00</span></div>
                </div>
              </div>
            </div>
            <div className="contact-cta-box">
              <h3>📞 Prenota il tuo tavolo</h3>
              <p>Chiamaci per prenotare o per richiedere informazioni sul menù e sugli eventi.</p>
              <a href="tel:+390383123456" className="btn btn-primary" style={{ background: '#FFFFFF', color: '#2C241A' }}>📞 Chiama Ora</a>
              <p style={{ fontSize: '0.8rem', marginTop: '1.2rem', opacity: 0.5 }}>Ti rispondiamo personalmente per rendere la tua esperienza unica.</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="footer-logo">
              🐓 Il Gallo
              <span>Osteria • Stradella</span>
            </div>
            <p className="footer-text">Via Parea, 3 • Stradella (PV) • 📞 0383 123456</p>
            <div className="footer-links">
              <a href="tel:+390383123456">Chiama</a>
              <a href="https://www.google.com/maps?q=Via+Parea+3+Stradella" target="_blank" rel="noopener noreferrer">Mappa</a>
              <a href="mailto:info@ilgallo.it">Email</a>
            </div>
            <p className="footer-copy">© 2026 Il Gallo. Tutti i diritti riservati.</p>
          </div>
        </footer>

        {/* JAVASCRIPT */}
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
