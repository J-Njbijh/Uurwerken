// =============================================
// collectie.js — Collectie pagina JavaScript
// Bevat: filter, sortering, zoeken, render
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const grid           = document.getElementById('collectie-grid');
    const teller         = document.getElementById('teller-getal');
    const geen           = document.getElementById('geen-resultaten');
    const pillsContainer = document.getElementById('actieve-filters');

    // ---- Actieve filter-staat ----
    // Houdt bij welke filters momenteel actief zijn
    let actieveFilters = {
      categorie: 'alles',
      merk:      '',
      prijs:     '',
      zoek:      '',
      sortering: 'standaard'
    };

    // ---- Standaard prijzen per categorie ----
    // Wordt gebruikt als fallback wanneer h.prijs niet is opgegeven
    // AAA+: 0–450 | BP: 450–900 | Super Clone: 900+
    const prijsPerCategorie = {
      superclone: 950,
      bp:         600,
      aaa:        200
    };

    // Geeft de prijs van een horloge terug (eigen prijs of categorie-fallback)
    function getPrijs(h) {
      return h.prijs || prijsPerCategorie[h.categorie] || 300;
    }


    // ---- filterEnSorteer ----
    // Filtert en sorteert de HORLOGES-lijst op basis van actieveFilters
    function filterEnSorteer() {
      let lijst = [...HORLOGES];

      // Filter op categorie (superclone / bp / aaa)
      if (actieveFilters.categorie !== 'alles') {
        lijst = lijst.filter(h => h.categorie === actieveFilters.categorie);
      }

      // Filter op merk
      if (actieveFilters.merk) {
        lijst = lijst.filter(h => h.merk === actieveFilters.merk);
      }

      // Filter op prijsrange (formaat: "min-max")
      if (actieveFilters.prijs) {
        const [min, max] = actieveFilters.prijs.split('-').map(Number);
        lijst = lijst.filter(h => {
          const p = getPrijs(h);
          return p >= min && p <= max;
        });
      }

      // Filter op zoekterm (naam, merk of grade)
      if (actieveFilters.zoek) {
        const z = actieveFilters.zoek.toLowerCase();
        lijst = lijst.filter(h =>
          h.naam.toLowerCase().includes(z)  ||
          h.merk.toLowerCase().includes(z)  ||
          h.grade.toLowerCase().includes(z)
        );
      }

      // Sortering
      if      (actieveFilters.sortering === 'naam-az')    lijst.sort((a, b) => a.naam.localeCompare(b.naam));
      else if (actieveFilters.sortering === 'naam-za')    lijst.sort((a, b) => b.naam.localeCompare(a.naam));
      else if (actieveFilters.sortering === 'prijs-laag') lijst.sort((a, b) => getPrijs(a) - getPrijs(b));
      else if (actieveFilters.sortering === 'prijs-hoog') lijst.sort((a, b) => getPrijs(b) - getPrijs(a));

      return lijst;
    }


    // ---- renderPills ----
    // Toont actieve filters als verwijderbare pills
    function renderPills() {
      const pills = [];

      if (actieveFilters.categorie !== 'alles') {
        const labels = { superclone: 'Super Clone', bp: 'BP Swiss Made', aaa: 'AAA+' };
        pills.push({ label: labels[actieveFilters.categorie], key: 'categorie', reset: 'alles' });
      }
      if (actieveFilters.merk) {
        pills.push({ label: actieveFilters.merk, key: 'merk', reset: '' });
      }
      if (actieveFilters.prijs) {
        const labels = { '0-450': '€0–€450', '450-900': '€450–€900', '900-9999': '€900+' };
        pills.push({ label: labels[actieveFilters.prijs] || actieveFilters.prijs, key: 'prijs', reset: '' });
      }
      if (actieveFilters.zoek) {
        pills.push({ label: `"${actieveFilters.zoek}"`, key: 'zoek', reset: '' });
      }

      pillsContainer.innerHTML = pills.map(p => `
        <div class="filter-pill">
          ${p.label}
          <span class="filter-pill-x" data-key="${p.key}" data-reset="${p.reset}">×</span>
        </div>
      `).join('');

      // Klik op × in een pill verwijdert dat filter
      pillsContainer.querySelectorAll('.filter-pill-x').forEach(btn => {
        btn.addEventListener('click', () => {
          const key      = btn.dataset.key;
          const resetVal = btn.dataset.reset;
          actieveFilters[key] = resetVal || '';

          // Synchroniseer UI-elementen
          if (key === 'categorie') {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('actief'));
            document.querySelector('[data-filter="alles"]').classList.add('actief');
          }
          if (key === 'merk')  document.getElementById('filter-merk').value  = '';
          if (key === 'prijs') document.getElementById('filter-prijs').value = '';
          if (key === 'zoek')  document.getElementById('filter-zoek').value  = '';

          render();
        });
      });
    }


    // ---- render ----
    // Bouwt de horloge-kaarten op basis van gefilterde lijst
    function render() {
      const lijst = filterEnSorteer();
      teller.textContent = lijst.length;
      renderPills();

      if (lijst.length === 0) {
        grid.innerHTML = '';
        geen.style.display = 'block';
        return;
      }
      geen.style.display = 'none';

      grid.innerHTML = lijst.map(h => {
        const prijs = getPrijs(h);

        // Foto als beschikbaar, anders SVG-illustratie
        const mediaHtml = h.foto
          ? `<div class="watch-face-foto">
              <img src="${h.foto}" alt="${h.merk} ${h.naam}" loading="lazy">
              <div class="watch-foto-overlay">
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
              <div class="watch-prijs">v.a. €${prijs}</div>
            </div>
          </div>
        `;
      }).join('');

      // Scroll fade-in voor de horloge-kaarten
      document.querySelectorAll('#collectie-grid .fade-in').forEach(el => {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('zichtbaar'); });
        }, { threshold: 0.06 });
        obs.observe(el);
      });
    }


    // =============================================
    // Event listeners voor alle filter-elementen
    // =============================================

    // Categorie-tabs (Alles / Super Clone / BP / AAA+)
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('actief'));
        btn.classList.add('actief');
        actieveFilters.categorie = btn.dataset.filter;
        render();
      });
    });

    // Merk-dropdown
    document.getElementById('filter-merk').addEventListener('change', e => {
      actieveFilters.merk = e.target.value;
      render();
    });

    // Prijs-dropdown
    document.getElementById('filter-prijs').addEventListener('change', e => {
      actieveFilters.prijs = e.target.value;
      render();
    });

    // Sortering-dropdown
    document.getElementById('filter-sortering').addEventListener('change', e => {
      actieveFilters.sortering = e.target.value;
      render();
    });

    // Zoekbalk met debounce (wacht 250ms na laatste toetsaanslag)
    let zoekTimeout;
    document.getElementById('filter-zoek').addEventListener('input', e => {
      clearTimeout(zoekTimeout);
      zoekTimeout = setTimeout(() => {
        actieveFilters.zoek = e.target.value.trim();
        render();
      }, 250);
    });

    // Wis alle filters knop
    document.getElementById('filter-reset-btn').addEventListener('click', () => {
      actieveFilters = { categorie: 'alles', merk: '', prijs: '', zoek: '', sortering: 'standaard' };
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('actief'));
      document.querySelector('[data-filter="alles"]').classList.add('actief');
      document.getElementById('filter-merk').value      = '';
      document.getElementById('filter-prijs').value     = '';
      document.getElementById('filter-sortering').value = 'standaard';
      document.getElementById('filter-zoek').value      = '';
      render();
    });

    // ---- URL hash filter ----
    // Staat toe dat andere pagina's direct doorlinken naar een categorie
    // bijv. collectie.html#superclone
    const hash = window.location.hash.replace('#', '');
    if (['superclone', 'bp', 'aaa'].includes(hash)) {
      actieveFilters.categorie = hash;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('actief'));
      const tabBtn = document.getElementById('tab-' + hash);
      if (tabBtn) tabBtn.classList.add('actief');
    }

    // Initiële render
    render();

  }, 100);
});