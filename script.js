
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

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.width = `${scrolled}%`;
});

// Form Validation
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  const email = document.querySelector('input[type="email"]');
  if (!email.value.includes('@')) {
    e.preventDefault();
    email.parentElement.classList.add('error');
    alert('Please enter a valid email address');
  }
});

const CACHE_NAME = 'portfolio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/Nilesh.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

// Updated Menu Toggle Function
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon');
  
  // Toggle menu open/close
  navLinks.classList.toggle('open');
  
  // Add animation to menu icon
  menuIcon.classList.toggle('active');
}

// Enhanced Theme Toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
  
  const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  
  // Update theme icon
  const themeIcon = document.querySelector('.theme-toggle i');
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');
}

// Check saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
  }
});

// Scroll to Top Functionality
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Enhanced Skills Animation
const skillBars = document.querySelectorAll('.skill-bar .progress');

const animateSkills = () => {
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.width = `${percentage}%`;
  });
};

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillsObserver.observe(bar.parentElement);
});

// Enhanced Form Submission
document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const messageDiv = document.querySelector('.form-message');
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      messageDiv.textContent = 'Message sent successfully!';
      messageDiv.classList.remove('error');
      messageDiv.classList.add('success');
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    messageDiv.textContent = 'Oops! Something went wrong. Please try again.';
    messageDiv.classList.remove('success');
    messageDiv.classList.add('error');
  }
  
  setTimeout(() => {
    messageDiv.classList.remove('success', 'error');
    messageDiv.textContent = '';
  }, 5000);
});
