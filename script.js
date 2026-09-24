// ==========================================
// BLOCK TÉRMICO TREJO
// NexoLink
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Menú móvil
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    menuBtn.textContent =
      navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // Cerrar menú al seleccionar una sección
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
      menuBtn.textContent = "☰";
    });
  });
}

// Año automático en footer
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Header con sombra al hacer scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
