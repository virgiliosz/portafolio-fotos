/* ═══════════════════════════════════════════════
   main.js — Portfolio Virgilio Sánchez
   ═══════════════════════════════════════════════ */

/* ── Nav al hacer scroll ──────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Animaciones de entrada ───────────────────── */
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));
}

/* ── Series de fotos ──────────────────────────────
   Agrega o quita series editando solo este objeto.
   - portada: foto que aparece en la galería
   - titulo:  texto que se muestra en el overlay
   - fotos:   todas las fotos del carrusel
   ─────────────────────────────────────────────── */
const series = {
  "automovil": {
    titulo: "Automóvil",
    series: {
      "nascar": {
        portada: "Fotos/Automovil/Nascar/foto7.JPG",
        titulo: "Nascar",
        fotos: [
          "Fotos/Automovil/Nascar/foto1.jpg",
          "Fotos/Automovil/Nascar/foto2.jpg",
          "Fotos/Automovil/Nascar/foto3.jpg",
          "Fotos/Automovil/Nascar/foto4.jpg",
          "Fotos/Automovil/Nascar/foto5.jpg",
          "Fotos/Automovil/Nascar/foto6.jpg",
          "Fotos/Automovil/Nascar/foto7.jpg",
          "Fotos/Automovil/Nascar/foto8.jpg",
          "Fotos/Automovil/Nascar/foto9.jpg",
          "Fotos/Automovil/Nascar/foto10.jpg",
          "Fotos/Automovil/Nascar/foto11.jpg",
          "Fotos/Automovil/Nascar/foto12.jpg",
          "Fotos/Automovil/Nascar/foto13.jpg",
          "Fotos/Automovil/Nascar/foto14.jpg",
          "Fotos/Automovil/Nascar/foto15.jpg",
          "Fotos/Automovil/Nascar/foto16.jpg",
          "Fotos/Automovil/Nascar/foto17.jpg",
          "Fotos/Automovil/Nascar/foto18.jpg",
          "Fotos/Automovil/Nascar/foto19.jpg",
          "Fotos/Automovil/Nascar/foto20.jpg",
          "Fotos/Automovil/Nascar/foto21.jpg",
          "Fotos/Automovil/Nascar/foto22.jpg",
          "Fotos/Automovil/Nascar/foto23.jpg",
          "Fotos/Automovil/Nascar/foto24.jpg",
          "Fotos/Automovil/Nascar/foto25.jpg",
          "Fotos/Automovil/Nascar/foto26.jpg",
          "Fotos/Automovil/Nascar/foto27.jpg",
          "Fotos/Automovil/Nascar/foto28.jpg",
          "Fotos/Automovil/Nascar/foto29.jpg",
          "Fotos/Automovil/Nascar/foto30.jpg",
          "Fotos/Automovil/Nascar/foto31.jpg",
          "Fotos/Automovil/Nascar/foto32.jpg",
          "Fotos/Automovil/Nascar/foto33.jpg",
          "Fotos/Automovil/Nascar/foto34.jpg",
          "Fotos/Automovil/Nascar/foto35.jpg",
          "Fotos/Automovil/Nascar/foto36.jpg",
          "Fotos/Automovil/Nascar/foto37.jpg",
          "Fotos/Automovil/Nascar/foto38.jpg",
          "Fotos/Automovil/Nascar/foto39.jpg",
          "Fotos/Automovil/Nascar/foto40.jpg",
          "Fotos/Automovil/Nascar/foto41.jpg",
          "Fotos/Automovil/Nascar/foto42.jpg",
          "Fotos/Automovil/Nascar/foto43.jpg"
        ]
      },
      "golf": {
        portada: "Fotos/Automovil/Golf/foto48.jpg",
        titulo: "Golf",
        fotos: [
          "Fotos/Automovil/Golf/foto1.jpg",
          "Fotos/Automovil/Golf/foto2.jpg",
          "Fotos/Automovil/Golf/foto3.jpg",
          "Fotos/Automovil/Golf/foto4.jpg",
          "Fotos/Automovil/Golf/foto5.jpg",
          "Fotos/Automovil/Golf/foto6.jpg",
          "Fotos/Automovil/Golf/foto7.jpg",
          "Fotos/Automovil/Golf/foto8.jpg",
          "Fotos/Automovil/Golf/foto9.jpg",
          "Fotos/Automovil/Golf/foto10.jpg",
          "Fotos/Automovil/Golf/foto11.jpg",
          "Fotos/Automovil/Golf/foto12.jpg",
          "Fotos/Automovil/Golf/foto13.jpg",
          "Fotos/Automovil/Golf/foto14.jpg",
          "Fotos/Automovil/Golf/foto15.jpg",
          "Fotos/Automovil/Golf/foto16.jpg",
          "Fotos/Automovil/Golf/foto17.jpg",
          "Fotos/Automovil/Golf/foto18.jpg",
          "Fotos/Automovil/Golf/foto19.jpg",
          "Fotos/Automovil/Golf/foto20.jpg",
          "Fotos/Automovil/Golf/foto21.jpg",
          "Fotos/Automovil/Golf/foto22.jpg",
          "Fotos/Automovil/Golf/foto23.jpg",
          "Fotos/Automovil/Golf/foto24.jpg",
          "Fotos/Automovil/Golf/foto25.jpg",
          "Fotos/Automovil/Golf/foto26.jpg",
          "Fotos/Automovil/Golf/foto27.jpg",
          "Fotos/Automovil/Golf/foto28.jpg",
          "Fotos/Automovil/Golf/foto29.jpg",
          "Fotos/Automovil/Golf/foto30.jpg",
          "Fotos/Automovil/Golf/foto31.jpg",
          "Fotos/Automovil/Golf/foto32.jpg",
          "Fotos/Automovil/Golf/foto33.jpg",
          "Fotos/Automovil/Golf/foto34.jpg",
          "Fotos/Automovil/Golf/foto35.jpg",
          "Fotos/Automovil/Golf/foto36.jpg",
          "Fotos/Automovil/Golf/foto37.jpg",
          "Fotos/Automovil/Golf/foto38.jpg",
          "Fotos/Automovil/Golf/foto39.jpg",
          "Fotos/Automovil/Golf/foto40.jpg",
          "Fotos/Automovil/Golf/foto41.jpg",
          "Fotos/Automovil/Golf/foto42.jpg",
          "Fotos/Automovil/Golf/foto43.jpg",
          "Fotos/Automovil/Golf/foto44.jpg",
          "Fotos/Automovil/Golf/foto45.jpg",
          "Fotos/Automovil/Golf/foto46.jpg",
          "Fotos/Automovil/Golf/foto47.jpg",
          "Fotos/Automovil/Golf/foto48.jpg",
          "Fotos/Automovil/Golf/foto49.jpg",
          "Fotos/Automovil/Golf/foto50.jpg",
          "Fotos/Automovil/Golf/foto51.jpg",
          "Fotos/Automovil/Golf/foto52.jpg",
          "Fotos/Automovil/Golf/foto53.jpg",
          "Fotos/Automovil/Golf/foto54.jpg",
          "Fotos/Automovil/Golf/foto55.jpg",
          "Fotos/Automovil/Golf/foto56.jpg",
          "Fotos/Automovil/Golf/foto57.jpg",
          "Fotos/Automovil/Golf/foto58.jpg",
          "Fotos/Automovil/Golf/foto59.jpg",
          "Fotos/Automovil/Golf/foto60.jpg",
          "Fotos/Automovil/Golf/foto61.jpg",
          "Fotos/Automovil/Golf/foto62.jpg",
          "Fotos/Automovil/Golf/foto63.jpg",
          "Fotos/Automovil/Golf/foto64.jpg",
          "Fotos/Automovil/Golf/foto65.jpg",
          "Fotos/Automovil/Golf/foto66.jpg",
          "Fotos/Automovil/Golf/foto67.jpg",
          "Fotos/Automovil/Golf/foto68.jpg",
          "Fotos/Automovil/Golf/foto69.jpg",
          "Fotos/Automovil/Golf/foto70.jpg",
          "Fotos/Automovil/Golf/foto71.jpg"
        ]
      }
    }
  },
  "retrato": {
    titulo: "Retrato",
    series: {
      "graduacion": {
        portada: "Fotos/Retratos/Graduacion/foto3.jpg",
        titulo: "Graduacion",
        fotos: [
          "Fotos/Retratos/Graduacion/foto1.jpg",
          "Fotos/Retratos/Graduacion/foto2.jpg",
          "Fotos/Retratos/Graduacion/foto3.jpg",
          "Fotos/Retratos/Graduacion/foto4.jpg",
          "Fotos/Retratos/Graduacion/foto5.jpg",
          "Fotos/Retratos/Graduacion/foto6.jpg",
          "Fotos/Retratos/Graduacion/foto7.jpg",
          "Fotos/Retratos/Graduacion/foto8.jpg",
          "Fotos/Retratos/Graduacion/foto9.jpg",
          "Fotos/Retratos/Graduacion/foto10.jpg",
          "Fotos/Retratos/Graduacion/foto11.jpg",
          "Fotos/Retratos/Graduacion/foto12.jpg",
          "Fotos/Retratos/Graduacion/foto13.jpg",
          "Fotos/Retratos/Graduacion/foto14.jpg",
          "Fotos/Retratos/Graduacion/foto15.jpg",
          "Fotos/Retratos/Graduacion/foto16.jpg",
          "Fotos/Retratos/Graduacion/foto17.jpg",
          "Fotos/Retratos/Graduacion/foto18.jpg",
          "Fotos/Retratos/Graduacion/foto19.jpg",
          "Fotos/Retratos/Graduacion/foto20.jpg",
          "Fotos/Retratos/Graduacion/foto21.jpg",
          "Fotos/Retratos/Graduacion/foto22.jpg",
          "Fotos/Retratos/Graduacion/foto23.jpg",
          "Fotos/Retratos/Graduacion/foto24.jpg",
          "Fotos/Retratos/Graduacion/foto25.jpg",
          "Fotos/Retratos/Graduacion/foto26.jpg",
          "Fotos/Retratos/Graduacion/foto27.jpg",
          "Fotos/Retratos/Graduacion/foto28.jpg",
          "Fotos/Retratos/Graduacion/foto29.jpg",
          "Fotos/Retratos/Graduacion/foto30.jpg",
          "Fotos/Retratos/Graduacion/foto31.jpg",
          "Fotos/Retratos/Graduacion/foto32.jpg",
          "Fotos/Retratos/Graduacion/foto33.jpg",
          "Fotos/Retratos/Graduacion/foto34.jpg",
          "Fotos/Retratos/Graduacion/foto35.jpg",
          "Fotos/Retratos/Graduacion/foto36.jpg",
          "Fotos/Retratos/Graduacion/foto37.jpg",
          "Fotos/Retratos/Graduacion/foto38.jpg",
          "Fotos/Retratos/Graduacion/foto39.jpg",
          "Fotos/Retratos/Graduacion/foto40.jpg",
          "Fotos/Retratos/Graduacion/foto41.jpg",
          "Fotos/Retratos/Graduacion/foto42.jpg",
          "Fotos/Retratos/Graduacion/foto43.jpg"
        ]
      }
    }
  }
};

/* ── Genera los masonry-items en la galería ───── */
const gallery = document.getElementById('gallery');

Object.entries(series).forEach(([genero, data]) => {
  Object.entries(data.series).forEach(([nombreSerie, serie]) => {
    const item = document.createElement('div');
    item.className = 'masonry-item reveal';
    item.dataset.cat = genero;
    // Guardamos la clave completa en un atributo propio para evitar
    // problemas si el nombre lleva guiones
    item.dataset.genero = genero;
    item.dataset.serie = nombreSerie;
    item.innerHTML = `
      <img src="${serie.portada}" alt="${serie.titulo} portada" />
      <div class="overlay">
        <span class="overlay-cat">${data.titulo}</span>
        <span class="overlay-title">${serie.titulo}</span>
      </div>
    `;
    gallery.appendChild(item);
  });
});

/* ── Filtros de galería ───────────────────────────
   Se inicializan DESPUÉS de generar las tarjetas   */
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;

    // Leemos las tarjetas en el momento del click, no antes
    document.querySelectorAll('.masonry-item').forEach(item => {
      const show = cat === 'all' || item.dataset.cat === cat;
      item.style.opacity = show ? '1' : '0.2';
      item.style.pointerEvents = show ? 'auto' : 'none';
    });
  });
});

/* ── Carrusel / Lightbox ──────────────────────── */
const lightbox       = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxClose  = document.getElementById('lightbox-close');
let currentIndex = 0;
let currentSeries = [];

gallery.addEventListener('click', e => {
  const item = e.target.closest('.masonry-item');
  if (!item) return;

  const genero     = item.dataset.genero;
  const nombreSerie = item.dataset.serie;
  const serie      = series[genero].series[nombreSerie];

  currentSeries = serie.fotos.map(src => {
    const img = new Image();
    img.src = src;
    img.alt = `${serie.titulo} foto`;
    return img;
  });

  currentIndex = 0;
  showSlide(currentIndex);
  lightbox.classList.add('open');
});

function showSlide(index) {
  const img = currentSeries[index];
  if (!img) return;
  lightboxContent.innerHTML = '';
  const clone = img.cloneNode();
  clone.style.cssText = 'max-width:85vw;max-height:85vh;object-fit:contain;';
  lightboxContent.appendChild(clone);
  document.getElementById('lightbox-counter').textContent =
    `${index + 1} / ${currentSeries.length}`;
}

document.getElementById('lightbox-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentSeries.length) % currentSeries.length;
  showSlide(currentIndex);
});

document.getElementById('lightbox-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentSeries.length;
  showSlide(currentIndex);
});

lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape')      lightbox.classList.remove('open');
  if (e.key === 'ArrowRight')  { currentIndex = (currentIndex + 1) % currentSeries.length; showSlide(currentIndex); }
  if (e.key === 'ArrowLeft')   { currentIndex = (currentIndex - 1 + currentSeries.length) % currentSeries.length; showSlide(currentIndex); }
});

/* ── Animaciones (después de generar las tarjetas) */
initReveal();

/* ── Formulario de contacto ───────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Mensaje enviado ✓';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;
    e.target.reset();
  }, 3500);
}
