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
      },
      "hulk": {
        portada: "Fotos/Automovil/Hulk/foto1.jpg",
        titulo: "Hulk",
        fotos: [
          "Fotos/Automovil/Hulk/foto1.jpg",
          "Fotos/Automovil/Hulk/foto2.jpg",
          "Fotos/Automovil/Hulk/foto3.jpg",
          "Fotos/Automovil/Hulk/foto4.jpg",
          "Fotos/Automovil/Hulk/foto5.jpg",
          "Fotos/Automovil/Hulk/foto6.jpg",
          "Fotos/Automovil/Hulk/foto7.jpg",
          "Fotos/Automovil/Hulk/foto8.jpg",
          "Fotos/Automovil/Hulk/foto9.jpg",
          "Fotos/Automovil/Hulk/foto10.jpg",
          "Fotos/Automovil/Hulk/foto11.jpg",
          "Fotos/Automovil/Hulk/foto12.jpg",
          "Fotos/Automovil/Hulk/foto13.jpg",
          "Fotos/Automovil/Hulk/foto14.jpg"
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
  },
  "paisajes": {
    titulo: "Paisajes",
    series: {
      "rancho": {
        portada: "Fotos/Paisajes/Rancho/foto34.jpg",
        titulo: "Rancho",
        fotos: [
          "Fotos/Paisajes/Rancho/foto1.jpg",
          "Fotos/Paisajes/Rancho/foto2.jpg",
          "Fotos/Paisajes/Rancho/foto3.jpg",
          "Fotos/Paisajes/Rancho/foto4.jpg",
          "Fotos/Paisajes/Rancho/foto5.jpg",
          "Fotos/Paisajes/Rancho/foto6.jpg",
          "Fotos/Paisajes/Rancho/foto7.jpg",
          "Fotos/Paisajes/Rancho/foto8.jpg",
          "Fotos/Paisajes/Rancho/foto9.jpg",
          "Fotos/Paisajes/Rancho/foto10.jpg",
          "Fotos/Paisajes/Rancho/foto11.jpg",
          "Fotos/Paisajes/Rancho/foto12.jpg",
          "Fotos/Paisajes/Rancho/foto13.jpg",
          "Fotos/Paisajes/Rancho/foto14.jpg",
          "Fotos/Paisajes/Rancho/foto15.jpg",
          "Fotos/Paisajes/Rancho/foto16.jpg",
          "Fotos/Paisajes/Rancho/foto17.jpg",
          "Fotos/Paisajes/Rancho/foto18.jpg",
          "Fotos/Paisajes/Rancho/foto19.jpg",
          "Fotos/Paisajes/Rancho/foto20.jpg",
          "Fotos/Paisajes/Rancho/foto21.jpg",
          "Fotos/Paisajes/Rancho/foto22.jpg",
          "Fotos/Paisajes/Rancho/foto23.jpg",
          "Fotos/Paisajes/Rancho/foto24.jpg",
          "Fotos/Paisajes/Rancho/foto25.jpg",
          "Fotos/Paisajes/Rancho/foto26.jpg",
          "Fotos/Paisajes/Rancho/foto27.jpg",
          "Fotos/Paisajes/Rancho/foto28.jpg",
          "Fotos/Paisajes/Rancho/foto29.jpg",
          "Fotos/Paisajes/Rancho/foto30.jpg",
          "Fotos/Paisajes/Rancho/foto31.jpg",
          "Fotos/Paisajes/Rancho/foto32.jpg",
          "Fotos/Paisajes/Rancho/foto33.jpg",
          "Fotos/Paisajes/Rancho/foto34.jpg",
          "Fotos/Paisajes/Rancho/foto35.jpg",
          "Fotos/Paisajes/Rancho/foto36.jpg",
          "Fotos/Paisajes/Rancho/foto37.jpg",
          "Fotos/Paisajes/Rancho/foto38.jpg",
          "Fotos/Paisajes/Rancho/foto39.jpg",
          "Fotos/Paisajes/Rancho/foto40.jpg",
          "Fotos/Paisajes/Rancho/foto41.jpg",
          "Fotos/Paisajes/Rancho/foto42.jpg",
          "Fotos/Paisajes/Rancho/foto43.jpg",
          "Fotos/Paisajes/Rancho/foto44.jpg",
          "Fotos/Paisajes/Rancho/foto45.jpg"
        ]
      },
      "lirios": {
        portada: "Fotos/Paisajes/Lirios/foto27.jpg",
        titulo: "Lirios",
        fotos: [
          "Fotos/Paisajes/Lirios/foto1.jpg",
          "Fotos/Paisajes/Lirios/foto2.jpg",
          "Fotos/Paisajes/Lirios/foto3.jpg",
          "Fotos/Paisajes/Lirios/foto4.jpg",
          "Fotos/Paisajes/Lirios/foto5.jpg",
          "Fotos/Paisajes/Lirios/foto6.jpg",
          "Fotos/Paisajes/Lirios/foto7.jpg",
          "Fotos/Paisajes/Lirios/foto8.jpg",
          "Fotos/Paisajes/Lirios/foto9.jpg",
          "Fotos/Paisajes/Lirios/foto10.jpg",
          "Fotos/Paisajes/Lirios/foto11.jpg",
          "Fotos/Paisajes/Lirios/foto12.jpg",
          "Fotos/Paisajes/Lirios/foto13.jpg",
          "Fotos/Paisajes/Lirios/foto14.jpg",
          "Fotos/Paisajes/Lirios/foto15.jpg",
          "Fotos/Paisajes/Lirios/foto16.jpg",
          "Fotos/Paisajes/Lirios/foto17.jpg",
          "Fotos/Paisajes/Lirios/foto18.jpg",
          "Fotos/Paisajes/Lirios/foto19.jpg",
          "Fotos/Paisajes/Lirios/foto20.jpg",
          "Fotos/Paisajes/Lirios/foto21.jpg",
          "Fotos/Paisajes/Lirios/foto22.jpg",
          "Fotos/Paisajes/Lirios/foto23.jpg",
          "Fotos/Paisajes/Lirios/foto24.jpg",
          "Fotos/Paisajes/Lirios/foto25.jpg",
          "Fotos/Paisajes/Lirios/foto26.jpg",
          "Fotos/Paisajes/Lirios/foto27.jpg",
          "Fotos/Paisajes/Lirios/foto28.jpg",
          "Fotos/Paisajes/Lirios/foto29.jpg",
          "Fotos/Paisajes/Lirios/foto30.jpg",
          "Fotos/Paisajes/Lirios/foto31.jpg",
          "Fotos/Paisajes/Lirios/foto32.jpg",
          "Fotos/Paisajes/Lirios/foto33.jpg",
          "Fotos/Paisajes/Lirios/foto34.jpg",
          "Fotos/Paisajes/Lirios/foto35.jpg",
          "Fotos/Paisajes/Lirios/foto36.jpg",
          "Fotos/Paisajes/Lirios/foto37.jpg",
          "Fotos/Paisajes/Lirios/foto38.jpg",
          "Fotos/Paisajes/Lirios/foto39.jpg",
          "Fotos/Paisajes/Lirios/foto40.jpg",
          "Fotos/Paisajes/Lirios/foto41.jpg",
          "Fotos/Paisajes/Lirios/foto42.jpg",
          "Fotos/Paisajes/Lirios/foto43.jpg",
          "Fotos/Paisajes/Lirios/foto44.jpg",
          "Fotos/Paisajes/Lirios/foto45.jpg",
          "Fotos/Paisajes/Lirios/foto46.jpg",
          "Fotos/Paisajes/Lirios/foto47.jpg",
          "Fotos/Paisajes/Lirios/foto48.jpg",
          "Fotos/Paisajes/Lirios/foto49.jpg",
          "Fotos/Paisajes/Lirios/foto50.jpg",
          "Fotos/Paisajes/Lirios/foto51.jpg",
          "Fotos/Paisajes/Lirios/foto52.jpg",
          "Fotos/Paisajes/Lirios/foto53.jpg",
          "Fotos/Paisajes/Lirios/foto54.jpg",
          "Fotos/Paisajes/Lirios/foto55.jpg",
          "Fotos/Paisajes/Lirios/foto56.jpg",
          "Fotos/Paisajes/Lirios/foto57.jpg"
        ]
      },
      "generalcepeda": {
        portada: "Fotos/Paisajes/GeneralCepeda/foto1.jpg",
        titulo: "General Cepeda",
        fotos: [
          "Fotos/Paisajes/GeneralCepeda/foto1.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto2.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto3.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto4.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto5.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto6.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto7.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto8.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto9.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto10.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto11.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto12.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto13.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto14.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto15.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto16.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto17.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto18.jpg",
          "Fotos/Paisajes/GeneralCepeda/foto19.jpg",
        ]
      },
      "cabañas": {
        portada: "Fotos/Paisajes/Cabanas/foto6.jpg",
        titulo: "Cabañas",
        fotos: [
          "Fotos/Paisajes/Cabanas/foto1.jpg",
          "Fotos/Paisajes/Cabanas/foto2.jpg",
          "Fotos/Paisajes/Cabanas/foto3.jpg",
          "Fotos/Paisajes/Cabanas/foto4.jpg",
          "Fotos/Paisajes/Cabanas/foto5.jpg",
          "Fotos/Paisajes/Cabanas/foto6.jpg",
          "Fotos/Paisajes/Cabanas/foto7.jpg",
          "Fotos/Paisajes/Cabanas/foto8.jpg",
          "Fotos/Paisajes/Cabanas/foto9.jpg",
          "Fotos/Paisajes/Cabanas/foto10.jpg",
          "Fotos/Paisajes/Cabanas/foto11.jpg",
          "Fotos/Paisajes/Cabanas/foto12.jpg",
          "Fotos/Paisajes/Cabanas/foto13.jpg",
          "Fotos/Paisajes/Cabanas/foto14.jpg",
          "Fotos/Paisajes/Cabanas/foto15.jpg",
          "Fotos/Paisajes/Cabanas/foto16.jpg",
          "Fotos/Paisajes/Cabanas/foto17.jpg",
          "Fotos/Paisajes/Cabanas/foto18.jpg",
          "Fotos/Paisajes/Cabanas/foto19.jpg",
          "Fotos/Paisajes/Cabanas/foto20.jpg",
          "Fotos/Paisajes/Cabanas/foto21.jpg",
          "Fotos/Paisajes/Cabanas/foto22.jpg",
          "Fotos/Paisajes/Cabanas/foto23.jpg",
          "Fotos/Paisajes/Cabanas/foto24.jpg",
          "Fotos/Paisajes/Cabanas/foto25.jpg",
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

/* ── Mosaico + visor de foto individual ────────── */
const lightbox        = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxClose   = document.getElementById('lightbox-close');
const lightboxPrev    = document.getElementById('lightbox-prev');
const lightboxNext    = document.getElementById('lightbox-next');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxTitle   = document.getElementById('lightbox-title');

let currentSerieFotos = [];
let currentIndex = 0;
let serieActivaRef = null; // guarda la serie activa para poder volver al mosaico

/* Abre el mosaico al hacer click en una portada */
gallery.addEventListener('click', e => {
  const item = e.target.closest('.masonry-item');
  if (!item) return;

  const genero      = item.dataset.genero;
  const nombreSerie = item.dataset.serie;
  const serie       = series[genero].series[nombreSerie];

  currentSerieFotos = serie.fotos;
  serieActivaRef    = serie;
  showMosaic(serie);
  lightbox.classList.add('open');
});

/* Muestra el mosaico con todas las fotos de la serie */
function showMosaic(serie) {
  lightboxTitle.textContent   = serie.titulo;
  lightboxCounter.textContent = `${serie.fotos.length} fotos`;
  lightboxPrev.style.display  = 'none';
  lightboxNext.style.display  = 'none';

  lightboxContent.innerHTML = '';
  lightboxContent.className = 'lightbox-mosaic';

  serie.fotos.forEach((src, index) => {
    const thumb = document.createElement('div');
    thumb.className = 'mosaic-thumb';
    thumb.innerHTML = `<img src="${src}" alt="${serie.titulo} foto ${index + 1}" loading="lazy" />`;
    thumb.addEventListener('click', () => openSinglePhoto(index));
    lightboxContent.appendChild(thumb);
  });
}

/* Abre una foto individual desde el mosaico */
function openSinglePhoto(index) {
  currentIndex = index;
  lightboxPrev.style.display = 'inline-flex';
  lightboxNext.style.display = 'inline-flex';
  lightboxContent.className  = 'lightbox-single';
  showSinglePhoto();
}

function showSinglePhoto() {
  const src = currentSerieFotos[currentIndex];
  lightboxCounter.textContent = `${currentIndex + 1} / ${currentSerieFotos.length}`;
  lightboxContent.innerHTML   = `<img src="${src}" alt="foto ${currentIndex + 1}" />`;
}

/* Volver al mosaico desde foto individual */
function volverAlMosaico() {
  if (serieActivaRef) showMosaic(serieActivaRef);
}

/* Navegación anterior / siguiente */
lightboxPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentSerieFotos.length) % currentSerieFotos.length;
  showSinglePhoto();
});

lightboxNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentSerieFotos.length;
  showSinglePhoto();
});

/* Cerrar / volver — en foto individual vuelve al mosaico,
   en mosaico cierra el lightbox completamente             */
lightboxClose.addEventListener('click', () => {
  if (lightboxContent.className === 'lightbox-single') {
    volverAlMosaico();
  } else {
    lightbox.classList.remove('open');
  }
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

/* Teclado */
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') {
    if (lightboxContent.className === 'lightbox-single') {
      volverAlMosaico();
    } else {
      lightbox.classList.remove('open');
    }
  }
  if (e.key === 'ArrowRight' && lightboxContent.className === 'lightbox-single') {
    currentIndex = (currentIndex + 1) % currentSerieFotos.length;
    showSinglePhoto();
  }
  if (e.key === 'ArrowLeft' && lightboxContent.className === 'lightbox-single') {
    currentIndex = (currentIndex - 1 + currentSerieFotos.length) % currentSerieFotos.length;
    showSinglePhoto();
  }
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