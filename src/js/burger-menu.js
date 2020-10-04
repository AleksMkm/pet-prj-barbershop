export default function onBurgerClick(e) {
  const mobileMenuEl = document.querySelector('[data-menu]');
  const bodyEl = document.querySelector('body');
  const expanded = e.target.getAttribute('aria-expanded') === 'true' || false;

  e.target.classList.toggle('is-open');

  bodyEl.classList.toggle('body-hidden');

  e.target.setAttribute('aria-expanded', !expanded);

  mobileMenuEl.classList.toggle('is-open');
}
