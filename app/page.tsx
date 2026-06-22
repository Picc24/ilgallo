export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>Il Gallo - Osteria a Stradella</title>
        <meta name="description" content="Osteria Il Gallo a Stradella. Cucina italiana, carne alla brace." />
        <style>{`
          /* === NUOVO STILE, NUOVA STRUTTURA === */
          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            font-family: 'Georgia', serif;
            background: #faf7f2;
            color: #3a322a;
            line-height: 1.7;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          /* --- NAV --- */
          .nav {
            padding: 24px 0;
            border-bottom: 1px solid #e6ddd2;
          }
          .nav .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .nav-logo {
            font-size: 1.6rem;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: #3a322a;
            text-decoration: none;
          }
          .nav-logo span { color: #b0804a; }
          .nav-links a {
            margin-left: 32px;
            color: #3a322a;
            text-decoration: none;
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0.5;
          }
          .nav-links a:hover { opacity: 1; }

          /* --- HERO (diversa: no immagine, testo centrato, sfondo diviso) --- */
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(135deg, #faf7f2 50%, #e6ddd2 50%);
            padding: 100px 0 80px;
          }
          .hero-content {
            max-width: 700px;
            margin: 0 auto;
          }
          .hero-tag {
            display: inline-block;
            padding: 4px 16px;
            border: 1px solid #b0804a;
            font-size: 0.6rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #b0804a;
            margin-bottom: 24px;
          }
          .hero h1 {
            font-size: 5rem;
            font-weight: 400;
            letter-spacing: 4px;
            color: #3a322a;
          }
          .hero h1 em {
            font-style: italic;
            color: #b0804a;
          }
          .hero p {
            font-size: 1.1rem;
            color: #3a322a;
            opacity: 0.5;
            margin: 16px 0 32px;
          }
          .hero-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
          }
          .btn {
            display: inline-block;
            padding: 14px 40px;
            text-decoration: none;
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: 0.3s;
          }
          .btn-primary {
            background: #3a322a;
            color: #faf7f2;
          }
          .btn-primary:hover {
            background: #b0804a;
          }
          .btn-outline {
            border: 1px solid #3a322a;
            color: #3a322a;
          }
          .btn-outline:hover {
            background: #3a322a;
            color: #faf7f2;
          }

          /* --- SEZIONE "LA CANTINA" (prima, non dopo il menù) --- */
          .wine-section {
            padding: 80px 0;
            background: #3a322a;
            color: #faf7f2;
          }
          .wine-section .section-title {
            text-align: center;
            font-size: 2.4rem;
            font-weight: 400;
            letter-spacing: 3px;
          }
          .wine-section .section-sub {
            text-align: center;
            opacity: 0.4;
            margin-bottom: 48px;
          }
          .wine-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
            background: #4a423a;
          }
          .wine-card {
            background: #3a322a;
            padding: 40px 32px;
          }
          .wine-card h3 {
            font-size: 1.1rem;
            font-weight: 400;
            color: #b0804a;
            margin-bottom: 8px;
          }
          .wine-card p {
            font-size: 0.85rem;
            opacity: 0.4;
          }

          /* --- SEZIONE ABOUT (diversa: immagine grande a tutta larghezza) --- */
          .about-section {
            padding: 80px 0;
          }
          .about-section .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          .about-image {
            background: #e6ddd2;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3a322a;
            opacity: 0.3;
            font-size: 0.9rem;
            letter-spacing: 2px;
          }
          .about-content h2 {
            font-size: 2.2rem;
            font-weight: 400;
            letter-spacing: 3px;
            margin-bottom: 16px;
          }
          .about-content h2 span { color: #b0804a; }
          .about-content p {
            opacity: 0.5;
            margin-bottom: 16px;
          }

          /* --- SEZIONE MENU (diversa: no card, lista elegante) --- */
          .menu-section {
            padding: 80px 0;
            background: #faf7f2;
          }
          .menu-section .section-title {
            text-align: center;
            font-size: 2.4rem;
            font-weight: 400;
            letter-spacing: 3px;
          }
          .menu-section .section-sub {
            text-align: center;
            opacity: 0.4;
            margin-bottom: 48px;
          }
          .menu-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }
          .menu-category h3 {
            font-size: 1.2rem;
            font-weight: 400;
            color: #b0804a;
            letter-spacing: 2px;
            border-bottom: 2px solid #e6ddd2;
            padding-bottom: 12px;
            margin-bottom: 20px;
          }
          .menu-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #f0ece6;
          }
          .menu-item .price {
            color: #b0804a;
          }
          .menu-item .desc {
            display: block;
            font-size: 0.75rem;
            opacity: 0.3;
            font-style: italic;
          }

          /* --- SEZIONE RECENSIONI (diversa: senza card, solo virgolette) --- */
          .reviews-section {
            padding: 80px 0;
            background: #e6ddd2;
          }
          .reviews-section .section-title {
            text-align: center;
            font-size: 2.4rem;
            font-weight: 400;
            letter-spacing: 3px;
          }
          .reviews-section .section-sub {
            text-align: center;
            opacity: 0.4;
            margin-bottom: 48px;
          }
          .reviews-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }
          .review {
            text-align: center;
          }
          .review .stars {
            color: #b0804a;
            font-size: 1.2rem;
            margin-bottom: 8px;
          }
          .review .text {
            font-style: italic;
            font-size: 0.95rem;
            opacity: 0.6;
          }
          .review .author {
            font-size: 0.8rem;
            opacity: 0.3;
            margin-top: 8px;
          }

          /* --- CONTATTI (diverso: mappa finta, orari in colonna) --- */
          .contact-section {
            padding: 80px 0;
          }
          .contact-section .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }
          .contact-map {
            background: #e6ddd2;
            height: 350px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3a322a;
            opacity: 0.3;
          }
          .contact-info h2 {
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: 3px;
            margin-bottom: 24px;
          }
          .contact-info h2 span { color: #b0804a; }
          .contact-info p {
            opacity: 0.5;
            margin-bottom: 8px;
          }
          .contact-info a {
            color: #b0804a;
            text-decoration: none;
          }
          .contact-hours {
            margin-top: 24px;
          }
          .contact-hours .day {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px solid #e6ddd2;
            font-size: 0.9rem;
            opacity: 0.5;
          }
          .contact-cta {
            margin-top: 32px;
            display: inline-block;
            padding: 14px 40px;
            background: #b0804a;
            color: #faf7f2;
            text-decoration: none;
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .contact-cta:hover { background: #3a322a; }

          /* --- FOOTER --- */
          .footer {
            padding: 40px 0;
            text-align: center;
            border-top: 1px solid #e6ddd2;
            font-size: 0.75rem;
            opacity: 0.3;
          }

          /* --- RESPONSIVE --- */
          @media (max-width: 768px) {
            .nav-links a { margin-left: 16px; font-size: 0.6rem; }
            .hero h1 { font-size: 3rem; }
            .hero-buttons { flex-direction: column; align-items: center; }
            .about-section .container { grid-template-columns: 1fr; }
            .about-image { height: 200px; }
            .menu-grid { grid-template-columns: 1fr; gap: 40px; }
            .reviews-grid { grid-template-columns: 1fr; gap: 30px; }
            .contact-section .container { grid-template-columns: 1fr; }
            .contact-map { height: 200px; }
            .wine-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </head>
      <body>

        {/* NAV */}
        <nav className="nav">
          <div className="container">
            <a href="/" className="nav-logo">Il <span>Gallo</span></a>
            <div className="nav-links">
              <a href="#menu">Menù</a>
              <a href="#vini">Vini</a>
              <a href="#recensioni">Recensioni</a>
              <a href="#contatti">Contatti</a>
            </div>
          </div>
        </nav>

        {/* HERO - senza immagine, solo testo centrato */}
        <section className="hero">
          <div className="hero-content">
            <span className="hero-tag">Dal 2014 a Stradella</span>
            <h1>Il <em>Gallo</em></h1>
            <p>Osteria · Cucina italiana · Carne alla brace</p>
            <div className="hero-buttons">
              <a href="tel:+390383123456" className="btn btn-primary">Chiama ora</a>
              <a href="#menu" className="btn btn-outline">Scopri il menù</a>
            </div>
          </div>
        </section>

        {/* LA CANTINA - prima sezione, non dopo il menu */}
        <section className="wine-section" id="vini">
          <div className="container">
            <h2 className="section-title">La cantina</h2>
            <p className="section-sub">Una selezione di etichette locali e nazionali</p>
            <div className="wine-grid">
              <div className="wine-card">
                <h3>Rossi</h3>
                <p>Barolo · Brunello · Montefalco · Chianti Classico</p>
              </div>
              <div className="wine-card">
                <h3>Bianchi</h3>
                <p>Gavi · Pinot Grigio · Sauvignon Blanc</p>
              </div>
              <div className="wine-card">
                <h3>Bollicine</h3>
                <p>Franciacorta · Prosecco · Champagne</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="chi-siamo">
          <div className="container">
            <div className="about-image">Foto · interno</div>
            <div className="about-content">
              <h2>L'osteria <span>Il Gallo</span></h2>
              <p>Un luogo dove la tradizione culinaria italiana incontra l'arte dell'ospitalità.</p>
              <p>Dalla fiorentina alla brace alla pasta fresca fatta in casa, ogni ricetta racconta una storia.</p>
              <p style={{ fontStyle: 'italic', opacity: 0.3, marginTop: '16px' }}>— Da sempre a Stradella</p>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="menu-section" id="menu">
          <div className="container">
            <h2 className="section-title">Il menù</h2>
            <p className="section-sub">I nostri classici, dalla tradizione alla brace</p>
            <div className="menu-grid">
              <div className="menu-category">
                <h3>Antipasti</h3>
                <div className="menu-item"><span>Salumi e formaggi <span className="desc">Selezione di salumi tipici e formaggi stagionati</span></span><span className="price">€14</span></div>
                <div className="menu-item"><span>Crostini misti <span className="desc">Crostini con fegatini, funghi e pomodoro</span></span><span className="price">€10</span></div>
                <div className="menu-item"><span>Carpaccio di manzo <span className="desc">Con rucola, grana e scaglie di tartufo</span></span><span className="price">€16</span></div>
              </div>
              <div className="menu-category">
                <h3>Primi</h3>
                <div className="menu-item"><span>Ravioli del Gallo <span className="desc">Ricotta e spinaci, burro e salvia</span></span><span className="price">€15</span></div>
                <div className="menu-item"><span>Pappardelle al cinghiale <span className="desc">Pasta fresca con ragù di cinghiale</span></span><span className="price">€17</span></div>
                <div className="menu-item"><span>Tagliatelle al tartufo <span className="desc">Tartufo nero e burro fuso</span></span><span className="price">€20</span></div>
              </div>
              <div className="menu-category">
                <h3>Secondi</h3>
                <div className="menu-item"><span>Fiorentina alla brace <span className="desc">Bistecca di manzo Chianina</span></span><span className="price">€35</span></div>
                <div className="menu-item"><span>Ossobuco <span className="desc">Con gremolada e risotto</span></span><span className="price">€22</span></div>
                <div className="menu-item"><span>Grigliata mista <span className="desc">Tagli di manzo, maiale e salsiccia</span></span><span className="price">€28</span></div>
              </div>
              <div className="menu-category">
                <h3>Pesce</h3>
                <div className="menu-item"><span>Branzino al forno <span className="desc">Con patate e olive</span></span><span className="price">€24</span></div>
                <div className="menu-item"><span>Salmone alla griglia <span className="desc">Con verdure grigliate</span></span><span className="price">€22</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* RECENSIONI */}
        <section className="reviews-section" id="recensioni">
          <div className="container">
            <h2 className="section-title">Recensioni</h2>
            <p className="section-sub">Cosa dicono di noi</p>
            <div className="reviews-grid">
              <div className="review">
                <div className="stars">★★★★★</div>
                <p className="text">"Ottimo trovato benissimo. Fiorentina e un Montefalco riserva 2021: tutto Ottimo."</p>
                <div className="author">Alessandro Maggi · 2 mesi fa</div>
              </div>
              <div className="review">
                <div className="stars">★★★★★</div>
                <p className="text">"Location molto carina e curata. Cibo di alta qualità. Buon rapporto qualità/prezzo."</p>
                <div className="author">Fabio Costaldi · 4 mesi fa</div>
              </div>
              <div className="review">
                <div className="stars">★★★★★</div>
                <p className="text">"Cucina italiana di livello, servizio attento e atmosfera elegante."</p>
                <div className="author">Angelo Francione · 8 anni fa</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATTI - mappa a sinistra, info a destra */}
        <section className="contact-section" id="contatti">
          <div className="container">
            <div className="contact-map">Mappa · Via Parea 3, Stradella</div>
            <div className="contact-info">
              <h2>Dove <span>siamo</span></h2>
              <p>Via Parea, 3 · Stradella (PV)</p>
              <p><a href="https://www.google.com/maps?q=Via+Parea+3+Stradella">Apri su Google Maps →</a></p>
              <div className="contact-hours">
                <div className="day"><span>Lunedì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                <div className="day"><span>Martedì</span><span>Chiuso</span></div>
                <div className="day"><span>Mercoledì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                <div className="day"><span>Giovedì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                <div className="day"><span>Venerdì</span><span>12:00–14:00 / 19:30–22:00</span></div>
                <div className="day"><span>Sabato</span><span>12:00–14:00 / 19:30–22:00</span></div>
                <div className="day"><span>Domenica</span><span>12:00–14:00 / 19:30–22:00</span></div>
              </div>
              <a href="tel:+390383123456" className="contact-cta">📞 Chiama Ora</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            © 2026 Il Gallo · Osteria a Stradella
          </div>
        </footer>

      </body>
    </html>
  );
}
