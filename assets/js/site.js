const root = document.documentElement;
const header = document.querySelector('.site-header');
const navigation = document.querySelector('#navigation');
const menuToggle = document.querySelector('.menu-toggle');
const motionToggle = document.querySelector('.motion-toggle');
const motionLabel = document.querySelector('.motion-label');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileNavigation = window.matchMedia('(max-width: 760px)');
let userPaused = false;
let scrollFrame = null;

function closeMenu() {
  header.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = 'Menu';
}

menuToggle.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header.classList.contains('menu-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener('pointerdown', (event) => {
  if (!header.contains(event.target)) closeMenu();
});

mobileNavigation.addEventListener('change', closeMenu);

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.remove('is-pending');
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });

for (const element of document.querySelectorAll('.reveal')) {
  if (!reducedMotion.matches && element.getBoundingClientRect().top > window.innerHeight) {
    element.classList.add('is-pending');
    revealObserver.observe(element);
  }
}

// A keyboard jump must never land on content waiting for a visual reveal.
document.addEventListener('focusin', (event) => {
  const section = event.target.closest('.reveal');
  if (section) {
    section.classList.remove('is-pending');
    revealObserver.unobserve(section);
  }
});

function motionIsPaused() {
  return userPaused || reducedMotion.matches;
}

function updateParallax() {
  scrollFrame = null;
  if (motionIsPaused() || document.hidden) return;
  const offset = Math.min(Math.max(window.scrollY, 0) * 0.018, 16);
  root.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
}

function queueParallax() {
  if (scrollFrame !== null || motionIsPaused() || document.hidden) return;
  scrollFrame = window.requestAnimationFrame(updateParallax);
}

function syncMotion() {
  const paused = motionIsPaused();
  root.dataset.motion = paused ? 'paused' : 'running';
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.disabled = reducedMotion.matches;
  motionLabel.textContent = reducedMotion.matches ? 'Motion reduced' : userPaused ? 'Resume atmosphere' : 'Pause atmosphere';

  if (paused) {
    if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
    scrollFrame = null;
    revealObserver.disconnect();
    document.querySelectorAll('.is-pending').forEach((element) => element.classList.remove('is-pending'));
  } else {
    queueParallax();
  }
}

motionToggle.addEventListener('click', () => {
  userPaused = !userPaused;
  syncMotion();
});

reducedMotion.addEventListener('change', syncMotion);

window.addEventListener('scroll', queueParallax, { passive: true });
document.addEventListener('visibilitychange', () => {
  root.dataset.pageVisible = String(!document.hidden);
  if (!document.hidden) queueParallax();
});

menuToggle.hidden = false;
motionToggle.hidden = false;
root.dataset.pageVisible = String(!document.hidden);
root.classList.add('js');
syncMotion();
