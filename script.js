// ============================================
// VITALITY — script.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initFadeInOnScroll();
  initCarousel();
  initNavScrollState();
  initScrollSpy();
});

// ===== FADE-IN AL HACER SCROLL =====
function initFadeInOnScroll() {
  const items = document.querySelectorAll(".fade-in");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

// ===== CARRUSEL DE CAPTURAS =====
// SOLO el track se anima (transform). Los slides no llevan transition
// propia — eso fue lo que causaba el bug de "rebote" en la versión anterior.
function initCarousel() {
  const track = document.getElementById("carouselTrack");
  const dots = document.querySelectorAll(".carousel-dot");
  if (!track || dots.length === 0) return;

  let current = 0;
  let autoplayTimer = null;
  const total = dots.length;

  function goToSlide(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  function nextSlide() {
    goToSlide(current + 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 4200);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(parseInt(dot.dataset.slide, 10));
      startAutoplay();
    });
  });

  const wrap = track.closest(".app-carousel");
  if (wrap) {
    wrap.addEventListener("mouseenter", stopAutoplay);
    wrap.addEventListener("mouseleave", startAutoplay);
  }

  // Soporte táctil (swipe) para mobile
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const delta = touchEndX - touchStartX;
      const threshold = 40;

      if (delta > threshold) {
        goToSlide(current - 1);
      } else if (delta < -threshold) {
        goToSlide(current + 1);
      }
      startAutoplay();
    },
    { passive: true }
  );

  goToSlide(0);
  startAutoplay();
}

// ===== NAV: sombra sutil al hacer scroll =====
function initNavScrollState() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  function update() {
    if (window.scrollY > 8) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ===== SCROLL-SPY: resalta el link activo en la nav =====
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}