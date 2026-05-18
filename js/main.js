
// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;

  fetch('https://formspree.io/f/xqegzkbp', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(this)
  })
  .then(response => {
    if (response.ok) {
      this.style.display = 'none';
      document.getElementById('newsletterSuccess').style.display = 'block';
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(() => {
    alert('Something went wrong. Please try again.');
  });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  fetch('https://formspree.io/f/xqegzkbp', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(this)
  })
  .then(response => {
    if (response.ok) {
      this.style.display = 'none';
      this.insertAdjacentHTML('afterend', '<p style="color: var(--accent); text-align: center; margin-top: 1rem;">Thanks! I will be in touch shortly.</p>');
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(() => {
    alert('Something went wrong. Please try again.');
  });
});