// =============================================
// contact.js — Contact pagina JavaScript
// Bevat: FAQ accordion toggle
// =============================================

// ---- FAQ Accordion ----
// Klikken op een vraag opent het antwoord.
// Alle andere open antwoorden worden automatisch gesloten.
document.querySelectorAll('.faq-vraag').forEach(btn => {
  btn.addEventListener('click', () => {
    const antwoord = btn.nextElementSibling;
    const isOpen   = antwoord.classList.contains('open');

    // Sluit alle open FAQ-items
    document.querySelectorAll('.faq-antwoord').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-vraag').forEach(b => b.classList.remove('open'));

    // Als het item nog niet open was, open het nu
    if (!isOpen) {
      antwoord.classList.add('open');
      btn.classList.add('open');
    }
  });
});