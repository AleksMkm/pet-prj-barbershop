export function onBurgerClick(e) {
  const bodyEl = document.querySelector('body');
  const mobileMenuEl = document.querySelector('[data-menu]');
  const expanded =
    e.currentTarget.getAttribute('aria-expanded') === 'true' || false;

  e.currentTarget.classList.toggle('is-open');

  bodyEl.classList.toggle('body-hidden');

  e.currentTarget.setAttribute('aria-expanded', !expanded);

  mobileMenuEl.classList.toggle('is-open');

  // закрытие по клавише esc
  onEscModalClose();
}

// реализация закрытия по клавише esc

function onEscModalClose() {
  window.addEventListener('keydown', onEscKey);
}

function onEscKey(e) {
  if (e.code === 'Escape') {
    onModalClose();
  }
}

function onModalClose() {
  const bodyEl = document.querySelector('body');
  const mobileMenuEl = document.querySelector('[data-menu]');
  const menuBtnEl = document.querySelector('[data-menu-button]');

  mobileMenuEl.classList.remove('is-open');
  menuBtnEl.classList.remove('is-open');
  bodyEl.classList.remove('body-hidden');

  window.removeEventListener('keydown', onEscKey);
}

// закрытие по клику в бекдроп

export function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
}

// закрыте по клику в навигационные кнопки

export function onModalNavClick(e) {
  if (!e.target.dataset.value === 'backdrop-nav') {
    return;
  }
  onModalClose();
}

export function onModalOnlineClick(e) {
  if (!e.target.dataset.value === 'backdrop-online') {
    return;
  }
  onModalClose();
}
