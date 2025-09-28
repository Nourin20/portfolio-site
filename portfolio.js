const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Optional: Hide nav after clicking a link (improves UX)
document.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('show'))
);

const btnToggle = document.querySelector('.theme-toggle-button');
const body = document.body;

if (btnToggle) {
  btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      btnToggle.textContent = '☀️';
    } else {
      btnToggle.textContent = '🌙';
    }
  });
}

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('href').slice(1);
    const section = document.getElementById(target);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const popup = document.getElementById('message-popup');
  const popupCloseBtn = document.getElementById('popup-close-btn');

  form.addEventListener('submit', (e) => {
    const name = form.elements['name'].value.trim();
    const email = form.elements['_replyto'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Prevent default submit to show popup first
    e.preventDefault();

    // Show popup overlay
    popup.querySelector('p').textContent = `Thanks, ${name}! Your message has been sent.`;
    popup.classList.add('show');
    popupCloseBtn.focus();

    // Close popup on click, then submit the form
    popupCloseBtn.onclick = () => {
      popup.classList.remove('show');
      form.submit();
    };
  });
});


