// Smooth scroll for in-page links + close mobile menu after click
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    hideMenu();
  }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

function showMenu(){
  navMenu.classList.add('show');
  navToggle.setAttribute('aria-expanded','true');
}
function hideMenu(){
  navMenu.classList.remove('show');
  navToggle.setAttribute('aria-expanded','false');
}
function toggleMenu(){
  if (navMenu.classList.contains('show')) hideMenu();
  else showMenu();
}
if (navToggle){
  navToggle.addEventListener('click', toggleMenu);
}

// Close menu if you click outside it
document.addEventListener('click', (e) => {
  if (!navMenu) return;
  const clickedInsideMenu = e.target.closest('#navMenu') || e.target.closest('#navToggle');
  if (!clickedInsideMenu) hideMenu();
});

// Temporary local message handler (replace form action with your endpoint later)
function handleLocalMessage(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks! Message captured locally. Connect a form endpoint to receive emails.';
  e.target.reset();
  return false;
}
