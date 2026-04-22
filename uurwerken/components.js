// =============================================
// components.js — Gedeelde HTML componenten
// Bevat: topbar, navigatie (incl. mobiel menu),
//        ticker, en footer
// =============================================

// ---- TOPBAR ----
// Smalle gouden balk bovenaan met bezorginfo
const TOPBAR_HTML = `
<div class="topbar">
  <span>&#128666; Voor 20:00 besteld = morgen in huis</span>
  <span>&#128241; Persoonlijk contact via WhatsApp</span>
  <span>&#11088; De beste kwaliteit voor een lage prijs</span>
</div>`;

// ---- NAVIGATIE ----
// Desktop: logo + links + WhatsApp-knop
// Mobiel: logo + hamburger-knop
const NAV_HTML = `
<nav class="nav">
  <!-- Logo -->
  <a class="nav-logo" href="index.html">
    <img class="logo-img" src="images/klokjes.jpg" alt="Uurwerken logo">
    <span class="logo-text">Uurwerken</span>
  </a>

  <!-- Desktop navigatielinks (verborgen op mobiel via CSS) -->
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="collectie.html">Collectie</a>
    <a href="informatie.html">Informatie</a>
    <a href="contact.html">Contact</a>
  </div>

  <!-- Rechtergedeelte: WhatsApp-knop + hamburger (mobiel) -->
  <div class="nav-rechts">
    <a class="nav-wa" href="https://wa.me/31684342980" target="_blank">WhatsApp</a>
    <!-- Hamburger-knop: alleen zichtbaar op mobiel via CSS -->
    <button class="hamburger" id="hamburger" aria-label="Menu openen" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>`;

// ---- MOBIEL MENU ----
// Uitklapbaar overlay-menu voor telefoons (<768px)
// Wordt ingevoegd direct na de <nav> en aangestuurd
// via de hamburger-knop in de navigatiebalk
const MOBIEL_MENU_HTML = `
<div class="mobiel-menu" id="mobiel-menu" role="navigation" aria-label="Mobiel menu">
  <!-- Sluitknop bovenaan het menu -->
  <button class="mobiel-sluit" id="mobiel-sluit" aria-label="Menu sluiten">
    <span></span>
    <span></span>
  </button>
  <a href="index.html">Home</a>
  <a href="collectie.html">Collectie</a>
  <a href="informatie.html">Informatie</a>
  <a href="contact.html">Contact</a>
</div>`;

// ---- TICKER ----
// Scrollende tekstregel met alle merken & kwaliteiten
// Dubbel om de CSS-animatie naadloos te laten loopen
const TICKER_HTML = `
<div class="ticker">
  <div class="ticker-inner">
    <span class="ticker-item"><em>Super Clone</em> 1 op 1 replica</span>
    <span class="ticker-item"><em>BP</em> Swiss Made</span>
    <span class="ticker-item"><em>AAA+</em> Grade</span>
    <span class="ticker-item"><em>Rolex</em></span>
    <span class="ticker-item"><em>Audemars Piguet</em></span>
    <span class="ticker-item"><em>Patek Philippe</em></span>
    <span class="ticker-item"><em>Richard Mille</em></span>
    <span class="ticker-item"><em>Cartier</em></span>
    <!-- Tweede kopie voor naadloze loop -->
    <span class="ticker-item"><em>Super Clone</em> 1 op 1 replica</span>
    <span class="ticker-item"><em>BP</em> Swiss Made</span>
    <span class="ticker-item"><em>AAA+</em> Grade</span>
    <span class="ticker-item"><em>Rolex</em></span>
    <span class="ticker-item"><em>Audemars Piguet</em></span>
    <span class="ticker-item"><em>Patek Philippe</em></span>
    <span class="ticker-item"><em>Richard Mille</em></span>
    <span class="ticker-item"><em>Cartier</em></span>
  </div>
</div>`;

// ---- FOOTER ----
// Volledige footer met merklinks
const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-top">
    <!-- Merkbeschrijving -->
    <div>
      <div class="footer-brand-naam">Uurwerken</div>
      <div class="footer-brand-sub">@klokjesnl</div>
      <p class="footer-brand-tekst">1 op 1 replica horloges van de hoogste kwaliteit tot BP Swiss Made en AAA+ grade. Snel, discreet en persoonlijk.</p>
    </div>
    <!-- Collectie links -->
    <div>
      <div class="footer-kop">Collectie</div>
      <ul class="footer-links-lijst">
        <li><a href="collectie.html">Alle horloges</a></li>
        <li><a href="collectie.html#superclone">Super Clone</a></li>
        <li><a href="collectie.html#bp">BP Swiss Made</a></li>
        <li><a href="collectie.html#aaa">AAA+</a></li>
      </ul>
    </div>
    <!-- Merken — incl. Richard Mille en Cartier -->
    <div>
      <div class="footer-kop">Merken</div>
      <ul class="footer-links-lijst">
        <li><a href="collectie.html" onclick="localStorage.setItem('filterMerk','Rolex')">Rolex</a></li>
        <li><a href="collectie.html" onclick="localStorage.setItem('filterMerk','Patek Philippe')">Patek Philippe</a></li>
        <li><a href="collectie.html" onclick="localStorage.setItem('filterMerk','Cartier')">Cartier</a></li>
        <li><a href="collectie.html" onclick="localStorage.setItem('filterMerk','Audemars Piguet')">Audemars Piguet</a></li>
        <li><a href="collectie.html" onclick="localStorage.setItem('filterMerk','Richard Mille')">Richard Mille</a></li>
      </ul>
    </div>
    <!-- Info en contact -->
    <div>
      <div class="footer-kop">Info &amp; Contact</div>
      <ul class="footer-links-lijst">
        <li><a href="informatie.html">Kwaliteitsverschillen</a></li>
        <li><a href="informatie.html#superclone">Super Clone uitleg</a></li>
        <li><a href="informatie.html#bp">BP uitleg</a></li>
        <li><a href="informatie.html#aaa">AAA+ uitleg</a></li>
        <li><a href="contact.html">Contact &amp; FAQ</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">&copy; 2025 Uurwerken &middot; klokjesnl &middot; Alle rechten voorbehouden</span>
    <div class="footer-socials">
      <a href="https://www.instagram.com/klokjesnl" target="_blank">Instagram</a>
      <a href="https://www.tiktok.com/@klokjesnl" target="_blank">TikTok</a>
      <a href="https://wa.me/31684342980" target="_blank">WhatsApp</a>
    </div>
  </div>
</footer>`;

// =============================================
// Injecteer alle componenten op elke pagina
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // Haal de placeholder-elementen op
  const topbarEl = document.getElementById('topbar');
  const navEl    = document.getElementById('nav');
  const tickerEl = document.getElementById('ticker');
  const footerEl = document.getElementById('footer');

  // Vul de placeholders met de HTML-constanten
  if (topbarEl) topbarEl.innerHTML = TOPBAR_HTML;
  if (navEl)    navEl.innerHTML    = NAV_HTML;
  if (tickerEl) tickerEl.innerHTML = TICKER_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // ---- Mobiel menu injecteren ----
  // Voeg het mobiele menu in direct na de <nav>
  const navDom = document.querySelector('.nav');
  if (navDom) {
    navDom.insertAdjacentHTML('afterend', MOBIEL_MENU_HTML);
  }

  // ---- Hamburger toggle logica ----
  const hamburger  = document.getElementById('hamburger');
  const mobielmenu = document.getElementById('mobiel-menu');

  const sluitBtn = document.getElementById('mobiel-sluit');

  if (hamburger && mobielmenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobielmenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Sluitknop (×) sluit het menu met animatie
    if (sluitBtn) {
      sluitBtn.addEventListener('click', () => {
        mobielmenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    }

    // Sluit het menu als de gebruiker buiten het menu klikt
    document.addEventListener('click', (e) => {
      if (!navDom.contains(e.target) && !mobielmenu.contains(e.target)) {
        mobielmenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Actieve nav-link markeren ----
  // Vergelijkt de huidige paginanaam met de href van elke link
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobiel-menu a').forEach(link => {
    if (link.getAttribute('href') === pagina) link.classList.add('actief');
  });
});