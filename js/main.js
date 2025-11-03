// --- MENU BURGER RESPONSIVE ---
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Fermer le menu quand on clique sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      nav.classList.remove('active');
    });
  });
}


// --- Apparition au scroll ---
const sections = document.querySelectorAll('.service-item, .project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
