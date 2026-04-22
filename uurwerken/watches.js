// =============================================
// watches.js — Alle horloge data + SVG illustraties
// =============================================
//
// HOE FOTO'S TOEVOEGEN:
//   Voeg `foto: 'images/bestandsnaam.jpg'` toe aan een horloge-object.
//   Als er geen foto is ingesteld, wordt de SVG-illustratie getoond als fallback.
//
// CATEGORIEËN (gebruik exact deze strings):
//   'superclone' — Prijsklasse €900+
//   'bp'         — Prijsklasse €450–€900
//   'aaa'        — Prijsklasse €0–€450
//
// MERKEN (bestaand): Rolex, Audemars Piguet, Patek Philippe, Richard Mille, Cartier
// =============================================

const HORLOGES = [

  // ==========================================
  // SUPER CLONE — 1:1 replica, vanaf €900
  // ==========================================

  {
    id: 'gmt-pepsi',
    merk: 'Rolex',
    naam: 'GMT-Master II "Pepsi"',
    grade: 'Super Clone',
    specs: ['40mm', 'Jubilee band', '126710BLRO'],
    categorie: 'superclone',
    prijs: 1150,
    foto: 'images/pepsisuper.jpg',
    svg: `<svg viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="64" fill="#1a1610" stroke="#c9a96e" stroke-width="1.5"/>
      <circle cx="70" cy="70" r="56" fill="#0d1015" stroke="#4a4030" stroke-width="0.5"/>
      <circle cx="70" cy="70" r="50" fill="none" stroke="#2a2530" stroke-width="0.5"/>
      <circle cx="70" cy="70" r="3" fill="#c9a96e"/>
      <line x1="70" y1="70" x2="70" y2="25" stroke="#c9a96e" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="70" y1="70" x2="96" y2="80" stroke="#f0ece4" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="58" y="60" width="22" height="11" rx="1.5" fill="#0a0a0a" stroke="#c9a96e" stroke-width="0.5"/>
      <text x="69" y="67.5" font-size="5" fill="#c9a96e" text-anchor="middle" letter-spacing="0.5" font-family="sans-serif">PEPSI</text>
      <circle cx="70" cy="12" r="2.5" fill="#c9a96e"/>
      <circle cx="70" cy="128" r="2.5" fill="#c9a96e"/>
      <circle cx="12" cy="70" r="2.5" fill="#c9a96e"/>
      <circle cx="128" cy="70" r="2.5" fill="#c9a96e"/>
      <text x="70" y="90" font-size="4.5" fill="#6a6050" text-anchor="middle" letter-spacing="2" font-family="sans-serif">OYSTER PERPETUAL</text>
    </svg>`
  },
  {
    id: 'gmt-batgirl',
    merk: 'Rolex',
    naam: 'GMT-Master II "Batgirl"',
    grade: 'Super Clone',
    specs: ['40mm', 'Jubilee band', '126710BLNR'],
    categorie: 'superclone',
    prijs: 1100,
    foto: 'images/batgirlsuper.jpg',
    svg: `<svg viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="64" fill="#1a1610" stroke="#c9a96e" stroke-width="1.5"/>
      <circle cx="70" cy="70" r="56" fill="#0a100d" stroke="#4a4030" stroke-width="0.5"/>
      <circle cx="70" cy="70" r="3" fill="#c9a96e"/>
      <line x1="70" y1="70" x2="70" y2="25" stroke="#c9a96e" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="70" y1="70" x2="96" y2="82" stroke="#f0ece4" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="70" cy="46" r="10" fill="none" stroke="rgba(201,169,110,0.3)" stroke-width="0.5"/>
      <text x="70" y="49.5" font-size="5" fill="rgba(201,169,110,0.5)" text-anchor="middle" font-family="sans-serif">GMT</text>
      <text x="70" y="90" font-size="4.5" fill="#c9a96e" text-anchor="middle" letter-spacing="1.5" font-family="sans-serif">GMT-MASTER II</text>
      <circle cx="70" cy="12" r="2.5" fill="#c9a96e"/>
      <circle cx="70" cy="128" r="2.5" fill="#c9a96e"/>
      <circle cx="12" cy="70" r="2.5" fill="#c9a96e"/>
      <circle cx="128" cy="70" r="2.5" fill="#c9a96e"/>
    </svg>`
  },
  {
    id: 'daytona',
    merk: 'Rolex',
    naam: 'Cosmograph Daytona "Panda"',
    grade: 'Super Clone',
    specs: ['40mm', 'Chronograaf', 'Oystersteel', '116500LN'],
    categorie: 'superclone',
    prijs: 1050,
    foto: 'images/panda4131super.jpg',
    svg: `<svg viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="64" fill="#1a1610" stroke="#c9a96e" stroke-width="1.5"/>
      <circle cx="70" cy="70" r="56" fill="#0a0808" stroke="#4a4030" stroke-width="0.5"/>
      <circle cx="70" cy="52" r="13" fill="#0d0d0a" stroke="#2a2015" stroke-width="0.5"/>
      <circle cx="52" cy="78" r="10" fill="#0d0d0a" stroke="#2a2015" stroke-width="0.5"/>
      <circle cx="88" cy="78" r="10" fill="#0d0d0a" stroke="#2a2015" stroke-width="0.5"/>
      <circle cx="70" cy="70" r="3" fill="#c9a96e"/>
      <line x1="70" y1="70" x2="70" y2="28" stroke="#c9a96e" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="70" y1="70" x2="93" y2="82" stroke="#f0ece4" stroke-width="1.5" stroke-linecap="round"/>
      <text x="70" y="92" font-size="5.5" fill="#c9a96e" text-anchor="middle" letter-spacing="1.5" font-family="sans-serif">DAYTONA</text>
    </svg>`
  },
  
  {
    id: 'daydate',
    merk: 'Rolex',
    naam: 'Day-Date 40',
    grade: 'Super Clone',
    specs: ['40mm', 'Rose goud', 'President band', '228235'],
    categorie: 'superclone',
    prijs: 1200,
    foto: 'images/daydateombresuper.jpg',
    svg: `<svg viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="64" fill="#1a1408" stroke="#c9a96e" stroke-width="1.5"/>
      <circle cx="70" cy="70" r="56" fill="#1a1208" stroke="#4a4030" stroke-width="0.5"/>
      <circle cx="70" cy="70" r="3" fill="#c9a96e"/>
      <line x1="70" y1="70" x2="70" y2="25" stroke="#c9a96e" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="70" y1="70" x2="97" y2="82" stroke="#f0ece4" stroke-width="1.5" stroke-linecap="round"/>
      <text x="70" y="57" font-size="4" fill="#8a8070" text-anchor="middle" letter-spacing="1.5" font-family="sans-serif">MONDAY</text>
      <rect x="76" y="65" width="13" height="9" rx="1.5" fill="#0d0d0a" stroke="#c9a96e" stroke-width="0.5"/>
      <text x="82.5" y="71.5" font-size="4.5" fill="#c9a96e" text-anchor="middle" font-family="sans-serif">14</text>
      <text x="70" y="88" font-size="4.5" fill="#c9a96e" text-anchor="middle" letter-spacing="1.5" font-family="sans-serif">DAY-DATE</text>
    </svg>`
  },
  {
    id: 'submariner-black',
    merk: 'Rolex',
    naam: 'Submariner Date',
    grade: 'Super Clone',
    specs: ['41mm', 'Oystersteel', 'Zwarte bezel', '126610LN'],
    categorie: 'superclone',
    prijs: 950,
    foto: 'images/subdatesuper.jpg',
    svg: `<svg viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="64" fill="#1a1610" stroke="#c9a96e" stroke-width="1.5"/>
      <circle cx="70" cy="70" r="56" fill="#0a0f0a" stroke="#4a4030" stroke-width="0.5"/>
      <circle cx="70" cy="70" r="48" fill="none" stroke="#1a2515" stroke-width="8"/>
      <circle cx="70" cy="70" r="3" fill="#c9a96e"/>
      <line x1="70" y1="70" x2="70" y2="26" stroke="#c9a96e" stroke-width="3" stroke-linecap="round"/>
      <line x1="70" y1="70" x2="95" y2="82" stroke="#f0ece4" stroke-width="2" stroke-linecap="round"/>
      <rect x="76" y="65" width="13" height="9" rx="1" fill="#0d0d0a" stroke="#c9a96e" stroke-width="0.5"/>
      <text x="82.5" y="71.5" font-size="4.5" fill="#c9a96e" text-anchor="middle" font-family="sans-serif">28</text>
    </svg>`
  },
  {
    id: 'submariner-green',
    merk: 'Rolex',
    naam: 'Submariner "Starbucks"',
    grade: 'Super Clone',
    specs: ['41mm', 'Oystersteel', 'Groene bezel', '126610LV'],
    categorie: 'superclone',
    prijs: 950,
    foto: 'images/starbuckssuper.jpg',
    svg: `<svg viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="64" fill="#1a1610" stroke="#c9a96e" stroke-width="1.5"/>
      <circle cx="70" cy="70" r="56" fill="#0a0f0a" stroke="#4a4030" stroke-width="0.5"/>
      <circle cx="70" cy="70" r="48" fill="none" stroke="#1a3515" stroke-width="8"/>
      <circle cx="70" cy="70" r="3" fill="#c9a96e"/>
      <line x1="70" y1="70" x2="70" y2="26" stroke="#c9a96e" stroke-width="3" stroke-linecap="round"/>
      <line x1="70" y1="70" x2="95" y2="82" stroke="#f0ece4" stroke-width="2" stroke-linecap="round"/>
      <rect x="76" y="65" width="13" height="9" rx="1" fill="#0d0d0a" stroke="#c9a96e" stroke-width="0.5"/>
      <text x="82.5" y="71.5" font-size="4.5" fill="#c9a96e" text-anchor="middle" font-family="sans-serif">28</text>
    </svg>`
  },


  // ==========================================
  // BP SWISS MADE — Vanaf €450 tot €900
  // ==========================================

  // (Voeg hier BP-horloges toe met categorie: 'bp' en prijs tussen 450-900)

  // ==========================================
  // AAA+ — Betaalbare instapper, tot €450
  // ==========================================

  // (Voeg hier AAA+ horloges toe met categorie: 'aaa' en prijs onder 450)

];

// =============================================
// renderHorloges() — Render horloge-kaarten
//
// @param {string} containerSelector  - CSS selector van de target container
// @param {string|null} filter        - Optioneel categoriefilter ('superclone', 'bp', 'aaa')
//
// Toont foto als h.foto is ingesteld, anders SVG fallback.
// Koppelt IntersectionObserver voor scroll fade-in animaties.
// =============================================
function renderHorloges(containerSelector, filter = null) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Filter de lijst op categorie als filter is meegegeven
  const gefilterd = filter ? HORLOGES.filter(h => h.categorie === filter) : HORLOGES;

  container.innerHTML = gefilterd.map(h => {
    // Gebruik foto als beschikbaar, anders SVG-illustratie
    const mediaHtml = h.foto
      ? `<div class="watch-face" style="overflow:hidden;">
          <img src="${h.foto}" alt="${h.merk} ${h.naam}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;">
          <div class="watch-overlay">
            <a class="watch-overlay-btn" href="https://wa.me/31684342980" target="_blank">Vraag prijs op</a>
          </div>
        </div>`
      : `<div class="watch-face">
          ${h.svg}
          <div class="watch-overlay">
            <a class="watch-overlay-btn" href="https://wa.me/31684342980" target="_blank">Vraag prijs op</a>
          </div>
        </div>`;

    return `
      <div class="watch-card fade-in" data-categorie="${h.categorie}">
        ${mediaHtml}
        <div class="watch-info">
          <div class="watch-merk">${h.merk}</div>
          <div class="watch-naam">${h.naam}</div>
          <div class="watch-tags">
            <span class="tag goud">${h.grade}</span>
            ${h.specs.map(s => `<span class="tag">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Activeer scroll-fade-in via IntersectionObserver
  document.querySelectorAll('.fade-in').forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('zichtbaar'); });
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}