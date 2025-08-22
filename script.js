// Smooth scroll for internal links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const menu = document.getElementById('navMenu');
    if (menu && menu.classList.contains('show')) menu.classList.remove('show');
  }
});

function toggleMenu(){
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('show');
}

// Temporary local “message sent” handler.
function handleLocalMessage(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks! Your message was captured locally (no email sent). Connect a form endpoint to receive submissions.';
  e.target.reset();
  return false;
}
