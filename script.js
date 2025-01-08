  
  // JavaScript for responsive menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open'); // Add or remove the 'open' class
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


  
