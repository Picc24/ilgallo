export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>Il Gallo - Osteria a Stradella (PV)</title>
        <meta name="description" content="Osteria Il Gallo a Stradella. Cucina italiana, carne alla brace, pasta fresca e cantina selezionata." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Nunito Sans', sans-serif;
            background: #F8F5F0;
            color: #2C2420;
            line-height: 1.7;
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

          /* NAVBAR - più elegante */
          .navbar {
            position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
            padding: 14px 0;
            background: rgba(248,245,240,0.92);
            backdrop-filter: blur(14px);
            border-bottom: 1px solid #E8DFD6;
          }
          .navbar .container {
            display: flex; align-items: center; justify-content: space-between;
          }
          .logo {
            display: flex; align-items: center; gap: 10px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem; font-weight: 700;
            color: #2C2420;
            text-decoration: none;
          }
          .logo-icon { font-size: 1.8rem; color: #B8860B; }
          .logo span {
            display: block; font-size: 0.6rem; font-weight: 400;
            letter-spacing: 0.15em; text-transform: uppercase;
            color: #B8860B; font-family: 'Nunito Sans', sans-serif;
            margin-top: -4px;
          }
          .nav-links {
            display: flex; align-items: center; gap: 32px;
          }
          .nav-links a {
            font-size: 0.85rem; font-weight: 600;
            color: #2C2420; opacity: 0.7;
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
            background: #2C2420; border-radius: 2px;
            transition: 0.3s ease;
          }

          /* BUTTONS */
          .btn {
            display: inline-flex; align-items: center; justify-content: center;
            gap: 10px; padding: 14px 36px; border-radius: 4px;
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 600; font-size: 1rem;
            border: none; cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .btn-primary {
            background: #B8860B; color: #FFFFFF;
          }
          .btn-primary:hover {
            background: #D4A017; transform: translateY(-2px);
          }
          .btn-outline {
            background: transparent; color: #2C2420;
            border: 2px solid #B8860B;
          }
          .btn-outline:hover {
            background: #B8860B; color: #FFFFFF; transform: translateY(-2px);
          }
          .btn-phone {
            background: #2C2420; color: #FFFFFF;
          }
          .btn-phone:hover {
            background: #4A3C35; transform: translateY(-2px);
          }

          /* HERO - stile diverso */
          .hero {
            min-height: 100vh; display: flex; align-items: center;
            padding: 120px 0 80px;
            background: linear-gradient(135deg, #F8F5F0 0%, #E8DFD6 100%);
          }
          .hero .container {
            display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          }
          .hero-content { max-width: 620px; }
          .eyebrow {
            display: inline-block; font-family: 'Nunito Sans', sans-serif;
            font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em;
            text-transform: uppercase; color: #B8860B; margin-bottom: 0.5rem;
          }
          .eyebrow::before {
            content: ''; display: inline-block; width: 28px; height: 2px;
            background: #B8860B; margin-right: 12px; vertical-align: middle;
          }
          .hero-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(3.5rem, 8vw, 5.5rem); font-weight: 700;
            line-height: 1; color: #2C2420; margin-bottom: 0.5rem;
          }
          .hero-title em { font-style: italic; color: #B8860B; }
          .hero-subtitle {
            font-size: 1.3rem; font-weight: 400; color: #2C2420;
            opacity: 0.7; margin-bottom: 1.5rem;
            font-family: 'Cormorant Garamond', serif; font-style: italic;
          }
          .hero-desc {
            font-size: 1.05rem; color: #2C2420; opacity: 0.75;
            max-width: 480px; line-height: 1.8; margin-bottom: 2rem;
          }
          .hero-buttons { display: flex; flex-wrap: wrap; gap: 16px; }
          .hero-image {
            background: #E8DFD6; border-radius: 4px; height: 460px;
            display: flex; align-items: center; justify-content: center;
            color: #2C2420; opacity: 0.4; font-size: 1.2rem;
          }

          /* ABOUT - stile diverso */
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
            font-size: 2.4rem; font-weight: 700; color: #B8860B;
          }
          .about-stats .label { font-size: 0.85rem; opacity: 0.6; }
          .about-image {
            background: #E8DFD6; border-radius: 4px; height: 400px;
            display: flex; align-items: center; justify-content: center;
            color: #2C2420; opacity: 0.4; font-size: 1.2rem;
          }

          /* MENU - griglia 2 colonne, stile diverso */
          .menu-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px;
          }
          .menu-card {
            background: #FFFFFF; border-radius: 4px; padding: 32px 28px;
            border-left: 4px solid #B8860B;
          }
          .menu-card .icon { font-size: 2.6rem; margin-bottom: 0.5rem; display: block; }
          .menu-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.5rem; font-weight: 700; margin-bottom: 1.2rem;
            border-bottom: 1px solid #E8DFD6; padding-bottom: 0.5rem;
          }
          .menu-item {
            display: flex; justify-content: space-between; align-items: baseline;
            padding: 10px 0; border-bottom: 1px solid #F0EBE6; gap: 12px;
          }
          .menu-item:last-child { border-bottom: none; }
          .menu-item .name { font-weight: 500; font-size: 0.98rem; }
          .menu-item .name .desc {
            display: block; font-weight: 300; font-size: 0.8rem; opacity: 0.65; margin-top: 2px;
          }
          .menu-item .price { font-weight: 600; color: #B8860B; white-space: nowrap; font-size: 0.95rem; }
          .menu-cta { text-align: center; margin-top: 3rem; }

          /* WINE - sezione vini in stile diverso */
          .wine-section {
            background: #2C2420;
            color: #F8F5F0;
          }
          .wine-section .section-title { color: #F8F5F0; }
          .wine-section .section-sub { color: #D4C8BC; }
          .wine-section .eyebrow { color: #B8860B; }
          .wine-section .eyebrow::before { background: #B8860B; }
          .wine-grid {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px; margin-top: 40px;
          }
          .wine-card {
            background: #3D322C; padding: 28px; border-radius: 4px;
            border-bottom: 3px solid #B8860B;
          }
          .wine-card h4 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.2rem; color: #B8860B; margin-bottom: 0.5rem;
          }
          .wine-card p {
            font-size: 0.9rem; opacity: 0.7;
          }

          /* REVIEWS - stile diverso */
          .reviews-grid {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px;
          }
          .review-card {
            background: #FFFFFF; border-radius: 4px; padding: 28px 26px;
            border-bottom: 3px solid #B8860B;
          }
          .review-card .stars { color: #B8860B; font-size: 1.1rem; margin-bottom: 0.5rem; }
          .review-card .text {
            font-style: italic; font-size: 0.95rem; line-height: 1.7;
            margin-bottom: 1rem; opacity: 0.85;
          }
          .review-card .author { font-weight: 600; font-size: 0.9rem; }
          .review-card .date { font-weight: 300; opacity: 0.5; font-size: 0.8rem; margin-left: 6px; }

          /* CONTACT - stile diverso */
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
          .contact-card a { color: #B8860B; font-weight: 500; text-decoration: none; }
          .contact-card a:hover { text-decoration: underline; }
          .contact-hours { display: flex; flex-direction: column; gap: 4px; }
          .contact-hours .day {
            display: flex; justify-content: space-between; font-size: 0.95rem;
            padding: 6px 0; border-bottom: 1px solid #E8DFD6;
          }
          .contact-hours .day span:last-child { opacity: 0.7; }
          .contact-cta-box {
            margin-top: 50px; padding: 48px 40px;
            background: #2C2420; border-radius: 4px; text-align: center;
            color: #FFFFFF;
          }
          .contact-cta-box h3 {
            color: #FFFFFF; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;
          }
          .contact-cta-box p { opacity: 0.7; font-size: 1.05rem; margin-bottom: 1.8rem; }
          .contact-cta-box .btn { font-size: 1.1rem; padding: 16px 44px; }

          /* FOOTER */
          .footer {
            border-top: 1px solid #E8DFD6; background: #FFFFFF;
            padding: 40px 0 30px; text-align: center;
          }
          .footer-logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.6rem; font-weight: 700; color: #2C2420;
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
          .footer-links a { font-size: 0.9rem; color: #B8860B; font-weight: 500; text-decoration: none; }
          .footer-links a:hover { text-decoration: underline; }
          .footer-copy { font-size: 0.75rem; opacity: 0.3; margin-top: 0.5rem; }

          /* SECTIONS */
          .section { padding: 80px 0; }
          .section-alt { background: #FFFFFF; }
          .section-header { text-align: center; margin-bottom: 3rem; }
          .section-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2.2rem, 4.5vw, 3.8rem);
            font-weight: 700; margin-bottom: 1rem;
          }
          .section-sub {
            font-size: 1.1rem; color: #2C2420; opacity: 0.7;
            max-width: 560px; line-height: 1.8; margin: 0 auto;
          }

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
              border-bottom: 1px solid #E8DFD6;
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
                Un'osteria dove la qualità della materia prima e il calore dell'ospitalità si incontrano.
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
                  L'Osteria Il Gallo è un luogo dove la tradizione culinaria italiana
                  incontra l'arte dell'ospitalità.
                </p>
                <p>
                  Dalla fiorentina alla brace alla pasta fresca fatta in casa, ogni ricetta racconta una storia.
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
              <p className="section-sub">Una selezione dei piatti che ci rappresentano.</p>
            </div>
            <div className="menu-grid">
              <div className="menu-card">
                <span className="icon">🧀</span>
                <h3>Antipasti</h3>
                <div className="menu-item">
                  <span className="name">Selezione di salumi e formaggi<small className="desc">Misto di salumi e formaggi stagionati</small></span>
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
                <span className="icon">🥩</span>
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
                <span className="icon">🐟</span>
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
              <a href="#contatti" className="btn btn-primary">📋 Vedi il menù completo</a>
            </div>
          </div>
        </section>

        {/* VINI */}
        <section className="section wine-section" id="vini">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">La Cantina</span>
              <h2 className="section-title">I Nostri Vini</h2>
              <p className="section-sub">Una selezione curata di etichette locali e nazionali.</p>
            </div>
            <div className="wine-grid">
              <div className="wine-card">
                <h4>🍷 Rossi</h4>
                <p>Barolo, Brunello, Montefalco, Chianti Classico</p>
              </div>
              <div className="wine-card">
                <h4>🥂 Bianchi</h4>
                <p>Gavi, Pinot Grigio, Sauvignon Blanc</p>
              </div>
              <div className="wine-card">
                <h4>🍾 Bollicine</h4>
                <p>Franciacorta, Prosecco, Champagne</p>
              </div>
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
                <p className="text">"Ottimo trovato benissimo. Fiorentina e un Montefalco riserva 2021: tutto Ottimo."</p>
                <div className="author">Alessandro Maggi <span className="date">2 mesi fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="text">"Location molto carina e curata. Cibo di alta qualità. Buon rapporto qualità/prezzo."</p>
                <div className="author">Fabio Costaldi <span className="date">4 mesi fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
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
              <span className="eyebrow">Dove Siamo</span>
              <h2 className="section-title">Vieni a Trovarci</h2>
              <p className="section-sub">Ti aspettiamo a Stradella per un'esperienza culinaria indimenticabile.</p>
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
                <p style={{ marginTop: '4px', fontSize: '0.9rem', opacity: 0.6 }}>Chiama per prenotazioni</p>
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
              <p>Chiamaci per prenotare o per richiedere informazioni.</p>
              <a href="tel:+390383123456" className="btn" style={{ background: '#FFFFFF', color: '#2C2420' }}>📞 Chiama Ora</a>
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
