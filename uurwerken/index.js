// =============================================
// index.js — Homepage-specifieke JavaScript
// Bevat: uitgelichte horloges render, counter-animaties
// =============================================

// ---- Uitgelichte horloges ----
// Toont de eerste 6 horloges uit HORLOGES op de homepage
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const container = document.getElementById('uitgelicht-horloges');
    if (!container) return;

    const uitgelicht = HORLOGES.slice(0, 6);

    container.innerHTML = uitgelicht.map(h => {
      // Gebruik foto als beschikbaar, anders SVG-illustratie
      const mediaHtml = h.foto
        ? `<div class="watch-face" style="overflow:hidden;">
            <img src="${h.foto}" alt="${h.merk} ${h.naam}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;">
            <div class="watch-overlay">
              <a class="watch-overlay-btn" href="collectie.html">Bekijk in collectie</a>
            </div>
          </div>`
        : `<div class="watch-face">
            ${h.svg}
            <div class="watch-overlay">
              <a class="watch-overlay-btn" href="collectie.html">Bekijk in collectie</a>
            </div>
          </div>`;

      return `
        <div class="watch-card fade-in">
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

    // Activeer scroll fade-in voor de horloge-kaarten
    document.querySelectorAll('.fade-in').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('zichtbaar'); });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  }, 100);
});


// =============================================
// Counter-animaties voor de statistieken-sectie
// =============================================

// Easing functie: vertraagt op het einde (ease-out cubic)
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

// Animeer een teller van 0 naar eindwaarde
// @param {HTMLElement} el        - het element met de teller
// @param {number}      eindwaarde
// @param {number}      duur       - animatieduur in ms
// @param {boolean}     isFloat    - true voor decimale getallen (bijv. 4.9)
function animeerCounter(el, eindwaarde, duur, isFloat) {
  let start = null;
  function stap(ts) {
    if (!start) start = ts;
    const voortgang = Math.min((ts - start) / duur, 1);
    const eased = easeOutCubic(voortgang);
    el.textContent = isFloat
      ? (eased * eindwaarde).toFixed(1)
      : Math.floor(eased * eindwaarde).toLocaleString('nl-NL');
    if (voortgang < 1) requestAnimationFrame(stap);
  }
  requestAnimationFrame(stap);
}

// Configuratie per teller-kaart
const counterData = [
  { kaart: 'stat-geleverd', el: 'counter-geleverd', waarde: 1000, duur: 2200, float: false },
  { kaart: 'stat-reviews',  el: 'counter-reviews',  waarde: 175,  duur: 1800, float: false },
  { kaart: 'stat-rating',   el: 'counter-rating',   waarde: 4.9,  duur: 1400, float: true  },
];

// Start de teller zodra de kaart in beeld komt
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.geteld) {
      entry.target.dataset.geteld = '1';
      const data = counterData.find(d => d.kaart === entry.target.id);
      if (data) {
        animeerCounter(document.getElementById(data.el), data.waarde, data.duur, data.float);
        // Voeg telt-klaar toe kort voor het einde (triggert gouden lijn + sterren animatie)
        setTimeout(() => entry.target.classList.add('telt-klaar'), data.duur * 0.85);
      } else {
        // Levertijd-kaart heeft geen teller — meteen klaar markeren
        entry.target.classList.add('telt-klaar');
      }
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-kaart').forEach(el => counterObserver.observe(el));