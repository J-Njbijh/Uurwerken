// =============================================
// informatie.js — Informatiepagina JavaScript
// Bevat: sticky progress nav highlight,
//        sectie fade-in, smooth scroll,
//        naar-sectie-btn knoppen
// =============================================

// ---- Sticky progress nav ----
// Markeert de actieve tab op basis van welke sectie in beeld is
const tabs = document.querySelectorAll('.info-progress-tab');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Update actieve tab in de progress nav
      const id = entry.target.id;
      tabs.forEach(t => t.classList.remove('actief'));
      const actiefTab = document.querySelector(`.info-progress-tab[data-section="${id}"]`);
      if (actiefTab) actiefTab.classList.add('actief');

      // Activeer fade-in animatie voor info-secties
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.25 });

// Observeer alle kwaliteitssecties
document.querySelectorAll('.info-sectie').forEach(el => sectionObserver.observe(el));


// ---- Smooth scroll voor anker-links ----
// Houdt rekening met de hoogte van de sticky navbar (offset 140px)
document.querySelectorAll('.info-progress-tab, a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.slice(1));
      if (target) {
        const offset = 140; // hoogte nav + progress nav samen
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });
});


// ---- Naar-sectie knoppen ----
// Knoppen met data-target scrollen naar de gewenste sectie
// Gebruikt door "Naar BP Swiss Made →" en "Naar AAA+ →" knoppen
document.querySelectorAll('.naar-sectie-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) {
      const offset = 140;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});