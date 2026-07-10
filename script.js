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
    emoji: "🧑‍⚕️",
    name: "Cuidado General",
    desc: "Acompañamiento y supervisión continua para el bienestar diario del paciente.",
    color: "#eff6ff",
    tag: "Disponible 24/7",
    tagColor: "#2563eb",
    tagBg: "#dbeafe",
  },
  {
    emoji: "🏋️",
    name: "Terapias",
    desc: "Fisioterapia y terapia ocupacional personalizada para recuperar movilidad.",
    color: "#f0fdf4",
    tag: "Alta demanda",
    tagColor: "#16a34a",
    tagBg: "#dcfce7",
  },
  {
    emoji: "🧠",
    name: "Psicología",
    desc: "Apoyo emocional profesional para pacientes y familias en cualquier proceso.",
    color: "#faf5ff",
    tag: "Online o a domicilio",
    tagColor: "#7c3aed",
    tagBg: "#ede9fe",
  },
  {
    emoji: "💊",
    name: "Medicamentos",
    desc: "Gestión y administración segura de tratamientos farmacológicos.",
    color: "#fff1f2",
    tag: "Control preciso",
    tagColor: "#dc2626",
    tagBg: "#fee2e2",
  },
  {
    emoji: "🏠",
    name: "Atención en casa",
    desc: "Enfermería y medicina a domicilio para recuperaciones sin salir del hogar.",
    color: "#e0f7fa",
    tag: "Sin desplazamientos",
    tagColor: "#0891b2",
    tagBg: "#cffafe",
  },
  {
    emoji: "🚶",
    name: "Rehabilitación",
    desc: "Programas integrales para recuperar funcionalidad tras lesiones o cirugías.",
    color: "#fef9c3",
    tag: "Plan personalizado",
    tagColor: "#d97706",
    tagBg: "#fef3c7",
  },
];

const grid = document.querySelector(".services-grid");
if (grid) {
  grid.innerHTML = serviciosData
    .map(
      (s) => `
    <div class="service-card fade-in">
      <div class="service-icon" style="background:${s.color}">${s.emoji}</div>
      <div class="service-name">${s.name}</div>
      <p class="service-desc">${s.desc}</p>
      <span class="service-tag" style="background:${s.tagBg};color:${s.tagColor}">${s.tag}</span>
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
    a.style.color = a.getAttribute("href") === `#${current}` ? "#2563eb" : "";
  });
});
