
// JavaScript for responsive menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// JavaScript to animate skill bar percentages
window.addEventListener('scroll', () => {
  const skillBars = document.querySelectorAll('.skill-bar .progress');
  skillBars.forEach((bar) => {
    const percentage = bar.getAttribute('data-percentage');
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (barPosition < screenPosition) {
      bar.style.width = `${percentage}%`;
    }
  });
});

// Theme Toggle Functionality
function toggleTheme() {
  const body = document.body;
  body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  body.classList.toggle('light-mode');

  const header = document.querySelector('header');
  header.style.transition = 'background-color 0.5s ease';
  header.classList.toggle('light-mode');

  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.style.transition = 'color 0.5s ease';
  themeToggle.classList.toggle('light-mode');

  const sections = document.querySelectorAll('.about, .skills, .projects, .contact, .footer');
  sections.forEach(section => {
    section.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    section.classList.toggle('light-mode');
  });

  const navLinks = document.querySelector('.nav-links');
  navLinks.style.transition = 'color 0.5s ease';
  navLinks.classList.toggle('light-mode');

  const themeIcon = document.querySelector('.theme-toggle i');
  if (body.classList.contains('light-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}



// JavaScript to animate skill bar percentages
window.addEventListener('scroll', () => {
  const skillBars = document.querySelectorAll('.skill-bar .progress');
  skillBars.forEach((bar) => {
    const percentage = bar.getAttribute('data-percentage');
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (barPosition < screenPosition) {
      bar.style.width = `${percentage}%`;
    }
  });
});

// Scroll Animation for About Section
const aboutSection = document.querySelector('.about-content');
window.addEventListener('scroll', () => {
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;
  if (aboutPosition < screenPosition) {
    aboutSection.classList.add('animate');
  }
});

// Loading Animation
window.addEventListener('load', () => {
  const loadingAnimation = document.querySelector('.loading-animation');
  loadingAnimation.style.display = 'none';
});
