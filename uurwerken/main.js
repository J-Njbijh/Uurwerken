// =============================================
// main.js — Globale JavaScript voor alle pagina's
// =============================================
// Let op: hamburger menu logica staat in components.js
// omdat het menu daar ook wordt aangemaakt (na DOM inject).

// ---- Actieve nav-link markeren ----
// Vergelijkt de huidige URL met de href van elke nav-link
// Uitgeschakeld: wordt nu afgehandeld in components.js na injectie
// (Blijft hier als fallback voor statische nav-implementaties)
(function() {
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === pagina) link.classList.add('actief');
  });
})();

// ---- Scroll fade-in animatie ----
// Elementen met klasse .fade-in worden zichtbaar als ze in beeld komen
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('zichtbaar');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ---- Counter animatie ----
// Animeert een getal van 0 naar eindwaarde met easing
// Wordt gebruikt op de statistieken-sectie van de homepage
function animeerTeller(el, eindwaarde, duur = 1800) {
  let start = null;
  const stap = (timestamp) => {
    if (!start) start = timestamp;
    const voortgang = Math.min((timestamp - start) / duur, 1);
    const easing = 1 - Math.pow(1 - voortgang, 3);
    el.textContent = Math.floor(easing * eindwaarde);
    if (voortgang < 1) requestAnimationFrame(stap);
  };
  requestAnimationFrame(stap);
}

// Starten van de teller zodra het element in beeld komt
const tellerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.klaar) {
      entry.target.dataset.klaar = '1';
      animeerTeller(entry.target, parseInt(entry.target.dataset.waarde));
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.teller').forEach(el => tellerObserver.observe(el));

// ---- Smooth scroll voor anker-links ----
// Klikt op #hash-links scrolt soepel naar het doel-element
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const doel = document.querySelector(link.getAttribute('href'));
    if (doel) { e.preventDefault(); doel.scrollIntoView({ behavior: 'smooth' }); }
  });
});