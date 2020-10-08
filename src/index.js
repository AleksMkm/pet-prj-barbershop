// подключение css
import './scss/main.scss';
// импорты
import { markupRefs } from './js/partials.js';
import {
  onBurgerClick,
  onBackdropClick,
  onModalNavClick,
  onModalOnlineClick,
} from './js/burger-menu.js';
import { hideElOnScroll, toPageTopOnClick } from './js/up-btn.js';

// подключение разметки

const bodyEl = document.querySelector('body');

bodyEl.insertAdjacentHTML('beforeend', markupRefs.headerMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.aboutUsMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.servicesMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.strengthsMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.teamMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.galleryMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.footerMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.upBtnMarkup);

// ссылки на узлы

const refs = {
  mobileMenuEl: document.querySelector('[data-menu]'),
  menuBtnEl: document.querySelector('[data-menu-button]'),
  modalNavEl: document.querySelector('[data-backdrop-nav]'),
  modalOnlineEl: document.querySelector('[data-backdrop-online]'),
  upBtn: document.querySelector('[data-up-btn]'),
};

// бургер-меню -открытие / закрытие меню

refs.menuBtnEl.addEventListener(
  'click',
  onBurgerClick(bodyEl, refs.mobileMenuEl),
);

// закрытие бекдропа по клику в бекдроп

refs.mobileMenuEl.addEventListener('click', onBackdropClick);

// закрытие бекдропа по клику в навигационные кнопки

refs.modalNavEl.addEventListener('click', onModalNavClick);
refs.modalOnlineEl.addEventListener('click', onModalOnlineClick);

// работа кнопки "вверх"

window.addEventListener('scroll', hideElOnScroll(refs.upBtn));
refs.upBtn.addEventListener('click', toPageTopOnClick);
