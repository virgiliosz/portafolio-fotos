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

const CLOUD = 'https://res.cloudinary.com/dppeq3fhu/image/upload/q_auto,f_auto';

const series = {
  "automovil": {
    titulo: "Automóvil",
    series: {
      "nascar": {
        portada: `${CLOUD}/nascar_36.JPG`,
        titulo: "Nascar",
        fotos: [
          `${CLOUD}/nascar_1.jpg`,
          `${CLOUD}/nascar_2.jpg`,
          `${CLOUD}/nascar_3.jpg`,
          `${CLOUD}/nascar_4.jpg`,
          `${CLOUD}/nascar_5.jpg`,
          `${CLOUD}/nascar_6.jpg`,
          `${CLOUD}/nascar_7.jpg`,
          `${CLOUD}/nascar_8.jpg`,
          `${CLOUD}/nascar_9.jpg`,
          `${CLOUD}/nascar_10.jpg`,
          `${CLOUD}/nascar_11.jpg`,
          `${CLOUD}/nascar_12.jpg`,
          `${CLOUD}/nascar_13.jpg`,
          `${CLOUD}/nascar_14.jpg`,
          `${CLOUD}/nascar_15.jpg`,
          `${CLOUD}/nascar_16.jpg`,
          `${CLOUD}/nascar_17.jpg`,
          `${CLOUD}/nascar_18.jpg`,
          `${CLOUD}/nascar_19.jpg`,
          `${CLOUD}/nascar_20.jpg`,
          `${CLOUD}/nascar_21.jpg`,
          `${CLOUD}/nascar_22.jpg`,
          `${CLOUD}/nascar_23.jpg`,
          `${CLOUD}/nascar_24.jpg`,
          `${CLOUD}/nascar_25.jpg`,
          `${CLOUD}/nascar_26.jpg`,
          `${CLOUD}/nascar_27.jpg`,
          `${CLOUD}/nascar_28.jpg`,
          `${CLOUD}/nascar_29.jpg`,
          `${CLOUD}/nascar_30.jpg`,
          `${CLOUD}/nascar_31.jpg`,
          `${CLOUD}/nascar_32.jpg`,
          `${CLOUD}/nascar_33.jpg`,
          `${CLOUD}/nascar_34.jpg`,
          `${CLOUD}/nascar_35.jpg`,
          `${CLOUD}/nascar_36.jpg`,
          `${CLOUD}/nascar_37.jpg`,
          `${CLOUD}/nascar_38.jpg`,
          `${CLOUD}/nascar_39.jpg`,
          `${CLOUD}/nascar_40.jpg`,
          `${CLOUD}/nascar_41.jpg`,
          `${CLOUD}/nascar_42.jpg`,
          `${CLOUD}/nascar_43.jpg`
        ]
      },
      "golf": {
        portada: `${CLOUD}/golf_4.jpg`,
        titulo: "Golf",
        fotos: [
          `${CLOUD}/golf_1.jpg`,
          `${CLOUD}/golf_2.jpg`,
          `${CLOUD}/golf_3.jpg`,
          `${CLOUD}/golf_4.jpg`,
          `${CLOUD}/golf_5.jpg`,
          `${CLOUD}/golf_6.jpg`,
          `${CLOUD}/golf_7.jpg`,
          `${CLOUD}/golf_8.jpg`,
          `${CLOUD}/golf_9.jpg`,
          `${CLOUD}/golf_10.jpg`,
          `${CLOUD}/golf_11.jpg`,
          `${CLOUD}/golf_12.jpg`,
          `${CLOUD}/golf_13.jpg`,
          `${CLOUD}/golf_14.jpg`,
          `${CLOUD}/golf_15.jpg`,
          `${CLOUD}/golf_16.jpg`,
          `${CLOUD}/golf_17.jpg`,
          `${CLOUD}/golf_18.jpg`,
          `${CLOUD}/golf_19.jpg`,
          `${CLOUD}/golf_20.jpg`,
          `${CLOUD}/golf_21.jpg`,
          `${CLOUD}/golf_22.jpg`,
          `${CLOUD}/golf_23.jpg`,
          `${CLOUD}/golf_24.jpg`,
          `${CLOUD}/golf_25.jpg`,
          `${CLOUD}/golf_26.jpg`,
          `${CLOUD}/golf_27.jpg`,
          `${CLOUD}/golf_28.jpg`,
          `${CLOUD}/golf_29.jpg`,
          `${CLOUD}/golf_30.jpg`,
          `${CLOUD}/golf_31.jpg`,
          `${CLOUD}/golf_32.jpg`,
          `${CLOUD}/golf_33.jpg`,
          `${CLOUD}/golf_34.jpg`,
          `${CLOUD}/golf_35.jpg`,
          `${CLOUD}/golf_36.jpg`,
          `${CLOUD}/golf_37.jpg`,
          `${CLOUD}/golf_38.jpg`,
          `${CLOUD}/golf_39.jpg`,
          `${CLOUD}/golf_40.jpg`,
          `${CLOUD}/golf_41.jpg`,
          `${CLOUD}/golf_42.jpg`,
          `${CLOUD}/golf_43.jpg`,
          `${CLOUD}/golf_44.jpg`,
          `${CLOUD}/golf_45.jpg`,
          `${CLOUD}/golf_46.jpg`,
          `${CLOUD}/golf_47.jpg`,
          `${CLOUD}/golf_48.jpg`,
          `${CLOUD}/golf_49.jpg`,
          `${CLOUD}/golf_50.jpg`,
          `${CLOUD}/golf_51.jpg`,
          `${CLOUD}/golf_52.jpg`,
          `${CLOUD}/golf_53.jpg`,
          `${CLOUD}/golf_54.jpg`,
          `${CLOUD}/golf_55.jpg`,
          `${CLOUD}/golf_56.jpg`,
          `${CLOUD}/golf_57.jpg`,
          `${CLOUD}/golf_58.jpg`,
          `${CLOUD}/golf_59.jpg`,
          `${CLOUD}/golf_60.jpg`,
          `${CLOUD}/golf_61.jpg`,
          `${CLOUD}/golf_62.jpg`,
          `${CLOUD}/golf_63.jpg`,
          `${CLOUD}/golf_64.jpg`,
          `${CLOUD}/golf_65.jpg`,
          `${CLOUD}/golf_66.jpg`,
          `${CLOUD}/golf_67.jpg`,
          `${CLOUD}/golf_68.jpg`,
          `${CLOUD}/golf_69.jpg`,
          `${CLOUD}/golf_70.jpg`,
          `${CLOUD}/golf_71.jpg`
        ]
      },
      "hulk": {
        portada: `${CLOUD}/hulk_1.jpg`,
        titulo: "Hulk",
        fotos: [
          `${CLOUD}/hulk_1.jpg`,
          `${CLOUD}/hulk_2.jpg`,
          `${CLOUD}/hulk_3.jpg`,
          `${CLOUD}/hulk_4.jpg`,
          `${CLOUD}/hulk_5.jpg`,
          `${CLOUD}/hulk_6.jpg`,
          `${CLOUD}/hulk_7.jpg`,
          `${CLOUD}/hulk_8.jpg`,
          `${CLOUD}/hulk_9.jpg`,
          `${CLOUD}/hulk_10.jpg`,
          `${CLOUD}/hulk_11.jpg`,
          `${CLOUD}/hulk_12.jpg`,
          `${CLOUD}/hulk_13.jpg`,
          `${CLOUD}/hulk_14.jpg`
        ]
      }
    }
  },
  "retrato": {
    titulo: "Retrato",
    series: {
      "graduacion": {
        portada: `${CLOUD}/graduacion_27.jpg`,
        titulo: "Graduacion",
        fotos: [
          `${CLOUD}/graduacion_1.jpg`,
          `${CLOUD}/graduacion_2.jpg`,
          `${CLOUD}/graduacion_3.jpg`,
          `${CLOUD}/graduacion_4.jpg`,
          `${CLOUD}/graduacion_5.jpg`,
          `${CLOUD}/graduacion_6.jpg`,
          `${CLOUD}/graduacion_7.jpg`,
          `${CLOUD}/graduacion_8.jpg`,
          `${CLOUD}/graduacion_9.jpg`,
          `${CLOUD}/graduacion_10.jpg`,
          `${CLOUD}/graduacion_11.jpg`,
          `${CLOUD}/graduacion_12.jpg`,
          `${CLOUD}/graduacion_13.jpg`,
          `${CLOUD}/graduacion_14.jpg`,
          `${CLOUD}/graduacion_15.jpg`,
          `${CLOUD}/graduacion_16.jpg`,
          `${CLOUD}/graduacion_17.jpg`,
          `${CLOUD}/graduacion_18.jpg`,
          `${CLOUD}/graduacion_19.jpg`,
          `${CLOUD}/graduacion_20.jpg`,
          `${CLOUD}/graduacion_21.jpg`,
          `${CLOUD}/graduacion_22.jpg`,
          `${CLOUD}/graduacion_23.jpg`,
          `${CLOUD}/graduacion_24.jpg`,
          `${CLOUD}/graduacion_25.jpg`,
          `${CLOUD}/graduacion_26.jpg`,
          `${CLOUD}/graduacion_27.jpg`,
          `${CLOUD}/graduacion_28.jpg`,
          `${CLOUD}/graduacion_29.jpg`,
          `${CLOUD}/graduacion_30.jpg`,
          `${CLOUD}/graduacion_31.jpg`,
          `${CLOUD}/graduacion_32.jpg`,
          `${CLOUD}/graduacion_33.jpg`,
          `${CLOUD}/graduacion_34.jpg`,
          `${CLOUD}/graduacion_35.jpg`,
          `${CLOUD}/graduacion_36.jpg`,
          `${CLOUD}/graduacion_37.jpg`,
          `${CLOUD}/graduacion_38.jpg`,
          `${CLOUD}/graduacion_39.jpg`,
          `${CLOUD}/graduacion_40.jpg`,
          `${CLOUD}/graduacion_41.jpg`,
          `${CLOUD}/graduacion_42.jpg`,
          `${CLOUD}/graduacion_43.jpg`
        ]
      }
    }
  },
  "paisajes": {
    titulo: "Paisajes",
    series: {
      "rancho": {
        portada: `${CLOUD}/rancho_21.jpg`,
        titulo: "Rancho",
        fotos: [
          `${CLOUD}/rancho_1.jpg`,
          `${CLOUD}/rancho_2.jpg`,
          `${CLOUD}/rancho_3.jpg`,
          `${CLOUD}/rancho_4.jpg`,
          `${CLOUD}/rancho_5.jpg`,
          `${CLOUD}/rancho_6.jpg`,
          `${CLOUD}/rancho_7.jpg`,
          `${CLOUD}/rancho_8.jpg`,
          `${CLOUD}/rancho_9.jpg`,
          `${CLOUD}/rancho_10.jpg`,
          `${CLOUD}/rancho_11.jpg`,
          `${CLOUD}/rancho_12.jpg`,
          `${CLOUD}/rancho_13.jpg`,
          `${CLOUD}/rancho_14.jpg`,
          `${CLOUD}/rancho_15.jpg`,
          `${CLOUD}/rancho_16.jpg`,
          `${CLOUD}/rancho_17.jpg`,
          `${CLOUD}/rancho_18.jpg`,
          `${CLOUD}/rancho_19.jpg`,
          `${CLOUD}/rancho_20.jpg`,
          `${CLOUD}/rancho_21.jpg`,
          `${CLOUD}/rancho_22.jpg`,
          `${CLOUD}/rancho_23.jpg`,
          `${CLOUD}/rancho_24.jpg`,
          `${CLOUD}/rancho_25.jpg`,
          `${CLOUD}/rancho_26.jpg`,
          `${CLOUD}/rancho_27.jpg`,
          `${CLOUD}/rancho_28.jpg`,
          `${CLOUD}/rancho_29.jpg`,
          `${CLOUD}/rancho_30.jpg`,
          `${CLOUD}/rancho_31.jpg`,
          `${CLOUD}/rancho_32.jpg`,
          `${CLOUD}/rancho_33.jpg`,
          `${CLOUD}/rancho_34.jpg`,
          `${CLOUD}/rancho_35.jpg`,
          `${CLOUD}/rancho_36.jpg`,
          `${CLOUD}/rancho_37.jpg`,
          `${CLOUD}/rancho_38.jpg`,
          `${CLOUD}/rancho_39.jpg`,
          `${CLOUD}/rancho_40.jpg`,
          `${CLOUD}/rancho_41.jpg`,
          `${CLOUD}/rancho_42.jpg`,
          `${CLOUD}/rancho_43.jpg`,
          `${CLOUD}/rancho_44.jpg`,
          `${CLOUD}/rancho_45.jpg`
        ]
      },
      "lirios": {
        portada: `${CLOUD}/lirios_13.jpg`,
        titulo: "Lirios",
        fotos: [
          `${CLOUD}/lirios_1.jpg`,
          `${CLOUD}/lirios_2.jpg`,
          `${CLOUD}/lirios_3.jpg`,
          `${CLOUD}/lirios_4.jpg`,
          `${CLOUD}/lirios_5.jpg`,
          `${CLOUD}/lirios_6.jpg`,
          `${CLOUD}/lirios_7.jpg`,
          `${CLOUD}/lirios_8.jpg`,
          `${CLOUD}/lirios_9.jpg`,
          `${CLOUD}/lirios_10.jpg`,
          `${CLOUD}/lirios_11.jpg`,
          `${CLOUD}/lirios_12.jpg`,
          `${CLOUD}/lirios_13.jpg`,
          `${CLOUD}/lirios_14.jpg`,
          `${CLOUD}/lirios_15.jpg`,
          `${CLOUD}/lirios_16.jpg`,
          `${CLOUD}/lirios_17.jpg`,
          `${CLOUD}/lirios_18.jpg`,
          `${CLOUD}/lirios_19.jpg`,
          `${CLOUD}/lirios_20.jpg`,
          `${CLOUD}/lirios_21.jpg`,
          `${CLOUD}/lirios_22.jpg`,
          `${CLOUD}/lirios_23.jpg`,
          `${CLOUD}/lirios_24.jpg`,
          `${CLOUD}/lirios_25.jpg`,
          `${CLOUD}/lirios_26.jpg`,
          `${CLOUD}/lirios_27.jpg`,
          `${CLOUD}/lirios_28.jpg`,
          `${CLOUD}/lirios_29.jpg`,
          `${CLOUD}/lirios_30.jpg`,
          `${CLOUD}/lirios_31.jpg`,
          `${CLOUD}/lirios_32.jpg`,
          `${CLOUD}/lirios_33.jpg`,
          `${CLOUD}/lirios_34.jpg`,
          `${CLOUD}/lirios_35.jpg`,
          `${CLOUD}/lirios_36.jpg`,
          `${CLOUD}/lirios_37.jpg`,
          `${CLOUD}/lirios_38.jpg`,
          `${CLOUD}/lirios_39.jpg`,
          `${CLOUD}/lirios_40.jpg`,
          `${CLOUD}/lirios_41.jpg`,
          `${CLOUD}/lirios_42.jpg`,
          `${CLOUD}/lirios_43.jpg`,
          `${CLOUD}/lirios_44.jpg`,
          `${CLOUD}/lirios_45.jpg`,
          `${CLOUD}/lirios_46.jpg`,
          `${CLOUD}/lirios_47.jpg`,
          `${CLOUD}/lirios_48.jpg`,
          `${CLOUD}/lirios_49.jpg`,
          `${CLOUD}/lirios_50.jpg`,
          `${CLOUD}/lirios_51.jpg`,
          `${CLOUD}/lirios_52.jpg`,
          `${CLOUD}/lirios_53.jpg`,
          `${CLOUD}/lirios_54.jpg`,
          `${CLOUD}/lirios_55.jpg`,
          `${CLOUD}/lirios_56.jpg`,
          `${CLOUD}/lirios_57.jpg`
        ]
      },
      "generalcepeda": {
        portada: `${CLOUD}/generalCepeda_1.jpg`,
        titulo: "General Cepeda",
        fotos: [
          `${CLOUD}/generalCepeda_1.jpg`,
          `${CLOUD}/generalCepeda_2.jpg`,
          `${CLOUD}/generalCepeda_3.jpg`,
          `${CLOUD}/generalCepeda_4.jpg`,
          `${CLOUD}/generalCepeda_5.jpg`,
          `${CLOUD}/generalCepeda_6.jpg`,
          `${CLOUD}/generalCepeda_7.jpg`,
          `${CLOUD}/generalCepeda_8.jpg`,
          `${CLOUD}/generalCepeda_9.jpg`,
          `${CLOUD}/generalCepeda_10.jpg`,
          `${CLOUD}/generalCepeda_11.jpg`,
          `${CLOUD}/generalCepeda_12.jpg`,
          `${CLOUD}/generalCepeda_13.jpg`,
          `${CLOUD}/generalCepeda_14.jpg`,
          `${CLOUD}/generalCepeda_15.jpg`,
          `${CLOUD}/generalCepeda_16.jpg`,
          `${CLOUD}/generalCepeda_17.jpg`,
          `${CLOUD}/generalCepeda_18.jpg`,
          `${CLOUD}/generalCepeda_19.jpg`,
        ]
      },
      "cabañas": {
        portada: `${CLOUD}/cabanas_15.jpg`,
        titulo: "Cabañas",
        fotos: [
          `${CLOUD}/cabanas_1.jpg`,
          `${CLOUD}/cabanas_2.jpg`,
          `${CLOUD}/cabanas_3.jpg`,
          `${CLOUD}/cabanas_4.jpg`,
          `${CLOUD}/cabanas_5.jpg`,
          `${CLOUD}/cabanas_6.jpg`,
          `${CLOUD}/cabanas_7.jpg`,
          `${CLOUD}/cabanas_8.jpg`,
          `${CLOUD}/cabanas_9.jpg`,
          `${CLOUD}/cabanas_10.jpg`,
          `${CLOUD}/cabanas_11.jpg`,
          `${CLOUD}/cabanas_12.jpg`,
          `${CLOUD}/cabanas_13.jpg`,
          `${CLOUD}/cabanas_14.jpg`,
          `${CLOUD}/cabanas_15.jpg`,
          `${CLOUD}/cabanas_16.jpg`,
          `${CLOUD}/cabanas_17.jpg`,
          `${CLOUD}/cabanas_18.jpg`,
          `${CLOUD}/cabanas_19.jpg`,
          `${CLOUD}/cabanas_20.jpg`,
          `${CLOUD}/cabanas_21.jpg`,
          `${CLOUD}/cabanas_22.jpg`,
          `${CLOUD}/cabanas_23.jpg`,
          `${CLOUD}/cabanas_24.jpg`,
          `${CLOUD}/cabanas_25.jpg`,
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
      item.style.display = show ? '' : 'none';
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