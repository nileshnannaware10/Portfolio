
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

// Dark Mode Toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');

  const themeIcon = document.querySelector('.theme-toggle i');
  if (body.classList.contains('light-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light-mode');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark-mode');
  }
}

// Check local storage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light-mode') {
  document.body.classList.add('light-mode');
  document.querySelector('.theme-toggle i').classList.remove('fa-moon');
  document.querySelector('.theme-toggle i').classList.add('fa-sun');
}

// Before/After Slider
const slider = document.querySelector('.slider');
const after = document.querySelector('.after');

if (slider && after) {
  slider.addEventListener('input', () => {
    after.style.width = `${slider.value}%`;
  });
}

const typewriterElement = document.getElementById('typewriter');
const sentences = [
  "Welcome to My Portfolio",
  "I'm Nilesh Nannaware",
  "A Passionate Web Developer",
  "Let's Build Something Amazing!"
];
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentSentence = sentences[sentenceIndex];

  // Typing logic
  if (!isDeleting && charIndex < currentSentence.length) {
    typewriterElement.innerHTML += currentSentence.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100); // Typing speed
  }
  // Deleting logic
  else if (isDeleting && charIndex > 0) {
    typewriterElement.innerHTML = currentSentence.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeWriter, 50); // Deleting speed (faster than typing)
  }
  // Move to the next sentence or restart
  else {
    isDeleting = !isDeleting; // Toggle between typing and deleting
    if (!isDeleting) {
      sentenceIndex = (sentenceIndex + 1) % sentences.length; // Loop through sentences
    }
    setTimeout(typeWriter, 1000); // Pause before starting the next sentence
  }
}

// Start the typewriter effect
typeWriter();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links li a');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('flipped');
  });
});
