import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCF8F2]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FCF8F2]/90 backdrop-blur-sm border-b border-[#EDE6DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐓</span>
              <div>
                <span className="font-serif text-2xl font-bold text-[#2C241A]">Il Gallo</span>
                <span className="block text-[10px] font-sans font-normal tracking-widest uppercase text-[#B8944A]">Osteria</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#menu" className="text-sm font-semibold text-[#2C241A]/70 hover:text-[#2C241A]">Menù</Link>
              <Link href="#vini" className="text-sm font-semibold text-[#2C241A]/70 hover:text-[#2C241A]">Vini</Link>
              <Link href="#recensioni" className="text-sm font-semibold text-[#2C241A]/70 hover:text-[#2C241A]">Recensioni</Link>
              <Link href="#chi-siamo" className="text-sm font-semibold text-[#2C241A]/70 hover:text-[#2C241A]">Chi Siamo</Link>
              <a href="tel:+390383123456" className="bg-[#B8944A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4B87A] transition shadow-lg shadow-[#B8944A]/25">
                📞 Prenota
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#B8944A] mb-4">
                <span className="inline-block w-7 h-0.5 bg-[#B8944A] align-middle mr-3"></span>
                Dal 2014 a Stradella
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2C241A] leading-[1.1] mb-3">
                Il <em className="not-italic text-[#B8944A]">Gallo</em>
              </h1>
              <p className="font-serif text-xl text-[#2C241A]/70 italic mb-6">Cucina italiana • Carne alla brace • Tradizione</p>
              <p className="text-[#2C241A]/70 max-w-md leading-relaxed mb-8">
                Un&apos;osteria dove la qualità della materia prima e il calore dell&apos;ospitalità si incontrano.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+390383123456" className="bg-[#2C241A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3D3226] transition shadow-lg">
                  📞 Chiama Ora
                </a>
                <a href="#menu" className="border-2 border-[#B8944A] text-[#2C241A] px-8 py-4 rounded-full font-semibold hover:bg-[#B8944A] hover:text-white transition">
                  Scopri il menù →
                </a>
              </div>
            </div>
            <div className="bg-[#EDE6DB] rounded-3xl h-[400px] flex items-center justify-center text-[#2C241A]/40 text-lg shadow-xl">
              🖼️ Foto del locale
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section id="chi-siamo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#B8944A] mb-4">
                <span className="inline-block w-7 h-0.5 bg-[#B8944A] align-middle mr-3"></span>
                Chi Siamo
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C241A] mb-4">La Nostra Osteria</h2>
              <p className="text-[#2C241A]/80 leading-relaxed mb-4">
                L&apos;Osteria Il Gallo è un luogo dove la tradizione culinaria italiana incontra l&apos;arte dell&apos;ospitalità.
              </p>
              <p className="text-[#2C241A]/80 leading-relaxed mb-8">
                Dalla fiorentina alla brace alla pasta fresca fatta in casa, ogni ricetta racconta una storia.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <span className="font-serif text-3xl font-bold text-[#B8944A] block">4.5 ⭐</span>
                  <span className="text-sm text-[#2C241A]/60">268 recensioni</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl font-bold text-[#B8944A] block">🔥</span>
                  <span className="text-sm text-[#2C241A]/60">Cucina alla brace</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl font-bold text-[#B8944A] block">🍷</span>
                  <span className="text-sm text-[#2C241A]/60">Cantina selezionata</span>
                </div>
              </div>
            </div>
            <div className="bg-[#EDE6DB] rounded-3xl h-[400px] flex items-center justify-center text-[#2C241A]/40 text-lg shadow-xl">
              🖼️ Interno del ristorante
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#B8944A] mb-4">
              <span className="inline-block w-7 h-0.5 bg-[#B8944A] align-middle mr-3"></span>
              Il Nostro Menù
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C241A] mb-3">I Nostri Classici</h2>
            <p className="text-[#2C241A]/60 max-w-xl mx-auto">Una selezione dei piatti che ci rappresentano.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Antipasti */}
            <div className="bg-white rounded-2xl p-8 border border-[#EDE6DB] shadow-sm hover:shadow-md transition">
              <span className="text-4xl block mb-3">🧀</span>
              <h3 className="font-serif text-2xl font-bold text-[#2C241A] mb-4 border-b-2 border-[#F5EDDD] pb-3">Antipasti</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-[#EDE6DB]">
                  <div>
                    <div className="font-medium">Selezione di salumi e formaggi</div>
                    <div className="text-sm text-[#2C241A]/50">Misto di salumi e formaggi stagionati</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€14</span>
                </div>
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-[#EDE6DB]">
                  <div>
                    <div className="font-medium">Crostini misti</div>
                    <div className="text-sm text-[#2C241A]/50">Crostini con fegatini, funghi e pomodoro</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€10</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-medium">Carpaccio di manzo</div>
                    <div className="text-sm text-[#2C241A]/50">Con rucola, grana e scaglie di tartufo</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€16</span>
                </div>
              </div>
            </div>

            {/* Primi */}
            <div className="bg-white rounded-2xl p-8 border border-[#EDE6DB] shadow-sm hover:shadow-md transition">
              <span className="text-4xl block mb-3">🍝</span>
              <h3 className="font-serif text-2xl font-bold text-[#2C241A] mb-4 border-b-2 border-[#F5EDDD] pb-3">Primi Piatti</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-[#EDE6DB]">
                  <div>
                    <div className="font-medium">Ravioli del Gallo</div>
                    <div className="text-sm text-[#2C241A]/50">Ricotta e spinaci, burro e salvia</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€15</span>
                </div>
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-[#EDE6DB]">
                  <div>
                    <div className="font-medium">Pappardelle al cinghiale</div>
                    <div className="text-sm text-[#2C241A]/50">Pasta fresca con ragù di cinghiale</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€17</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-medium">Tagliatelle al tartufo</div>
                    <div className="text-sm text-[#2C241A]/50">Tartufo nero e burro fuso</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€20</span>
                </div>
              </div>
            </div>

            {/* Secondi */}
            <div className="bg-white rounded-2xl p-8 border border-[#EDE6DB] shadow-sm hover:shadow-md transition">
              <span className="text-4xl block mb-3">🥩</span>
              <h3 className="font-serif text-2xl font-bold text-[#2C241A] mb-4 border-b-2 border-[#F5EDDD] pb-3">Secondi</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-[#EDE6DB]">
                  <div>
                    <div className="font-medium">Fiorentina alla brace</div>
                    <div className="text-sm text-[#2C241A]/50">Bistecca di manzo Chianina</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€35</span>
                </div>
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-[#EDE6DB]">
                  <div>
                    <div className="font-medium">Ossobuco</div>
                    <div className="text-sm text-[#2C241A]/50">Con gremolada e risotto</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€22</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-medium">Grigliata mista</div>
                    <div className="text-sm text-[#2C241A]/50">Tagli di manzo, maiale e salsiccia</div>
                  </div>
                  <span className="font-semibold text-[#B8944A]">€28</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contatti" className="bg-[#B8944A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#D4B87A] transition shadow-lg shadow-[#B8944A]/25 inline-block">
              📋 Vedi il menù completo
            </a>
          </div>
        </div>
      </section>

      {/* VINI */}
      <section id="vini" className="py-20 bg-[#F5EDDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#2C241A] mb-4">
                <span className="inline-block w-7 h-0.5 bg-[#2C241A] align-middle mr-3"></span>
                La Cantina
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C241A] mb-4">I Nostri Vini</h2>
              <p className="text-[#2C241A]/70 leading-relaxed mb-8">
                Una selezione curata di etichette locali e nazionali, scelte per accompagnare i nostri piatti.
              </p>
              <a href="#contatti" className="bg-[#2C241A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3D3226] transition shadow-lg inline-block">
                🍷 Scopri la cantina
              </a>
            </div>
            <div className="bg-[#EDE6DB] rounded-3xl h-[300px] flex items-center justify-center text-[#2C241A]/40 text-lg shadow-xl">
              🍷 Cantina e vini
            </div>
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section id="recensioni" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#B8944A] mb-4">
              <span className="inline-block w-7 h-0.5 bg-[#B8944A] align-middle mr-3"></span>
              Le Recensioni
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C241A] mb-3">Cosa Dicono di Noi</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FCF8F2] rounded-2xl p-8 border border-[#EDE6DB] shadow-sm">
              <div className="text-[#B8944A] text-xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="italic text-[#2C241A]/80 leading-relaxed mb-4">
                &quot;Ottimo trovato benissimo. Fiorentina e un Montefalco riserva 2021: tutto Ottimo.&quot;
              </p>
              <div className="font-semibold">Alessandro Maggi <span className="font-normal text-sm text-[#2C241A]/50">2 mesi fa</span></div>
            </div>
            <div className="bg-[#FCF8F2] rounded-2xl p-8 border border-[#EDE6DB] shadow-sm">
              <div className="text-[#B8944A] text-xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="italic text-[#2C241A]/80 leading-relaxed mb-4">
                &quot;Location molto carina e curata. Cibo di alta qualità. Buon rapporto qualità/prezzo.&quot;
              </p>
              <div className="font-semibold">Fabio Costaldi <span className="font-normal text-sm text-[#2C241A]/50">4 mesi fa</span></div>
            </div>
            <div className="bg-[#FCF8F2] rounded-2xl p-8 border border-[#EDE6DB] shadow-sm">
              <div className="text-[#B8944A] text-xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="italic text-[#2C241A]/80 leading-relaxed mb-4">
                &quot;Cucina italiana di livello, servizio attento e atmosfera elegante.&quot;
              </p>
              <div className="font-semibold">Angelo Francione <span className="font-normal text-sm text-[#2C241A]/50">8 anni fa</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#B8944A] mb-4">
              <span className="inline-block w-7 h-0.5 bg-[#B8944A] align-middle mr-3"></span>
              Dove Siamo
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C241A] mb-3">Vieni a Trovarci</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-[#EDE6DB] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#2C241A] mb-3">📍 Indirizzo</h3>
              <p className="text-[#2C241A]/80">Via Parea, 3</p>
              <p className="text-[#2C241A]/80 -mt-1">Stradella (PV)</p>
              <a href="https://www.google.com/maps?q=Via+Parea+3+Stradella" target="_blank" rel="noopener" className="text-[#B8944A] font-semibold hover:underline inline-block mt-2">
                Apri su Google Maps →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#EDE6DB] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#2C241A] mb-3">📞 Contatti</h3>
              <a href="tel:+390383123456" className="text-2xl font-semibold text-[#B8944A] hover:underline block">
                0383 123456
              </a>
              <p className="text-[#2C241A]/60 text-sm mt-1">Chiama per prenotazioni</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#EDE6DB] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#2C241A] mb-3">🕐 Orari</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-[#EDE6DB] pb-2">
                  <span>Lunedì</span><span className="text-[#2C241A]/70">12:00–14:00 / 19:30–22:00</span>
                </div>
                <div className="flex justify-between border-b border-[#EDE6DB] pb-2">
                  <span>Martedì</span><span className="text-[#2C241A]/70 font-semibold text-[#9E2A2A]">Chiuso</span>
                </div>
                <div className="flex justify-between border-b border-[#EDE6DB] pb-2">
                  <span>Mercoledì</span><span className="text-[#2C241A]/70">12:00–14:00 / 19:30–22:00</span>
                </div>
                <div className="flex justify-between border-b border-[#EDE6DB] pb-2">
                  <span>Giovedì</span><span className="text-[#2C241A]/70">12:00–14:00 / 19:30–22:00</span>
                </div>
                <div className="flex justify-between border-b border-[#EDE6DB] pb-2">
                  <span>Venerdì</span><span className="text-[#2C241A]/70">12:00–14:00 / 19:30–22:00</span>
                </div>
                <div className="flex justify-between border-b border-[#EDE6DB] pb-2">
                  <span>Sabato</span><span className="text-[#2C241A]/70">12:00–14:00 / 19:30–22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domenica</span><span className="text-[#2C241A]/70">12:00–14:00 / 19:30–22:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2C241A] rounded-3xl p-12 text-center text-white shadow-xl">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">📞 Prenota il tuo tavolo</h3>
            <p className="text-white/70 max-w-xl mx-auto mb-8">Chiamaci per prenotare o per richiedere informazioni.</p>
            <a href="tel:+390383123456" className="bg-white text-[#2C241A] px-10 py-4 rounded-full font-semibold hover:bg-[#EDE6DB] transition shadow-lg inline-block">
              📞 Chiama Ora
            </a>
            <p className="text-white/40 text-sm mt-4">Ti rispondiamo personalmente.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#EDE6DB] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-serif text-2xl font-bold text-[#2C241A]">
            🐓 Il Gallo
            <span className="block text-xs font-sans font-normal tracking-widest uppercase text-[#2C241A]/40">Osteria • Stradella</span>
          </div>
          <p className="text-[#2C241A]/50 text-sm mt-2">Via Parea, 3 • Stradella (PV) • 📞 0383 123456</p>
          <div className="flex justify-center gap-8 mt-4">
            <a href="tel:+390383123456" className="text-[#B8944A] font-medium hover:underline text-sm">Chiama</a>
            <a href="https://www.google.com/maps?q=Via+Parea+3+Stradella" target="_blank" rel="noopener" className="text-[#B8944A] font-medium hover:underline text-sm">Mappa</a>
            <a href="mailto:info@ilgallo.it" className="text-[#B8944A] font-medium hover:underline text-sm">Email</a>
          </div>
          <p className="text-[#2C241A]/30 text-xs mt-6">© 2026 Il Gallo. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
