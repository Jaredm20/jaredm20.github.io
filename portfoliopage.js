const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function() {
  navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
  navToggle.classList.toggle('active');
});
