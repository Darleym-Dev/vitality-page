// Iconos de línea (estilo Lucide/Feather) — sin decoración, trazo simple
const ICONS = {
  heart: '<svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/></svg>',
  activity: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  brain: '<svg class="icon" viewBox="0 0 24 24"><path d="M9.5 3a3.5 3.5 0 0 0-3.5 3.5v.5A3 3 0 0 0 4 10v1a3 3 0 0 0 1.5 2.6A3.5 3.5 0 0 0 9 18h.5V3z"/><path d="M14.5 3a3.5 3.5 0 0 1 3.5 3.5v.5A3 3 0 0 1 20 10v1a3 3 0 0 1-1.5 2.6A3.5 3.5 0 0 1 15 18h-.5V3z"/></svg>',
  pill: '<svg class="icon" viewBox="0 0 24 24"><rect x="4.5" y="10" width="15" height="7" rx="3.5" transform="rotate(-45 12 13.5)"/><line x1="9.5" y1="8" x2="14.5" y2="19"/></svg>',
  home: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  footprints: '<svg class="icon" viewBox="0 0 24 24"><circle cx="8" cy="8" r="2.5"/><path d="M6 12v7a2 2 0 0 0 4 0v-3"/><circle cx="16" cy="14" r="2.5"/><path d="M14 18v2a2 2 0 0 0 4 0v-6"/></svg>',
  bed: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 14h18"/><path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M3 18v2"/><path d="M21 18v2"/></svg>',
  stethoscope: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 4v6a4 4 0 0 0 8 0V4"/><path d="M9 4H5"/><path d="M13 4h-4"/><path d="M13 10v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="8" r="2"/></svg>',
  card: '<svg class="icon" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
  coin: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 2.5-1.5c1.4 0 2.5.9 2.5 2s-1 1.5-2.5 2-2.5 1-2.5 2 1.1 2 2.5 2a2.5 2.5 0 0 0 2.5-1.5"/><line x1="12" y1="6" x2="12" y2="7.5"/><line x1="12" y1="16.5" x2="12" y2="18"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/></svg>',
  star: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3l2.6 5.9L21 9.6l-4.7 4.2L17.6 21 12 17.6 6.4 21l1.3-7.2L3 9.6l6.4-.7z"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3 8-8 9-5-1-8-4.5-8-9V6z"/></svg>',
  lock: '<svg class="icon" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>',
  scale: '<svg class="icon" viewBox="0 0 24 24"><line x1="12" y1="3" x2="12" y2="21"/><path d="M5 21h14"/><path d="M12 5l-5 8h10z"/><path d="M12 5l5 8H7z"/><line x1="12" y1="5" x2="12" y2="7"/></svg>',
  alert: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="13"/><circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none"/></svg>',
  radio: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.5 5.5a9 9 0 0 0 0 13"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  building: '<svg class="icon" viewBox="0 0 24 24"><rect x="4" y="3" width="8" height="18"/><rect x="14" y="8" width="6" height="13"/><line x1="7" y1="7" x2="7" y2="7.01"/><line x1="9" y1="7" x2="9" y2="7.01"/><line x1="7" y1="11" x2="7" y2="11.01"/><line x1="9" y1="11" x2="9" y2="11.01"/></svg>',
};

// Animaciones al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Catálogo de servicios (fuente única de verdad para esta página)
const serviciosData = [
  {
    icon: ICONS.heart,
    name: "Cuidado General",
    desc: "Acompañamiento y supervisión continua para el bienestar diario del paciente.",
    tag: "Disponible 24/7",
  },
  {
    icon: ICONS.activity,
    name: "Terapias",
    desc: "Fisioterapia y terapia ocupacional personalizada para recuperar movilidad.",
    tag: "Alta demanda",
  },
  {
    icon: ICONS.brain,
    name: "Psicología",
    desc: "Apoyo emocional profesional para pacientes y familias en cualquier proceso.",
    tag: "Online o a domicilio",
  },
  {
    icon: ICONS.pill,
    name: "Medicamentos",
    desc: "Gestión y administración segura de tratamientos farmacológicos.",
    tag: "Control preciso",
  },
  {
    icon: ICONS.home,
    name: "Atención en casa",
    desc: "Enfermería y medicina a domicilio para recuperaciones sin salir del hogar.",
    tag: "Sin desplazamientos",
  },
  {
    icon: ICONS.footprints,
    name: "Rehabilitación",
    desc: "Programas integrales para recuperar funcionalidad tras lesiones o cirugías.",
    tag: "Plan personalizado",
  },
];

const grid = document.querySelector(".services-grid");
if (grid) {
  grid.innerHTML = serviciosData
    .map(
      (s) => `
    <div class="service-card fade-in">
      <div class="service-icon">${s.icon}</div>
      <div class="service-name">${s.name}</div>
      <p class="service-desc">${s.desc}</p>
      <span class="service-tag">${s.tag}</span>
    </div>
  `,
    )
    .join("");
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

// Resalta el link de nav correspondiente a la sección visible
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color = a.getAttribute("href") === `#${current}` ? "#1d4ed8" : "";
  });
});
