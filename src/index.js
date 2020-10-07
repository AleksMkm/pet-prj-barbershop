// подключение css

import './scss/main.scss';

// подключение разметки

import { markupRefs } from './js/partials.js';

const bodyEl = document.querySelector('body');

bodyEl.insertAdjacentHTML('beforeend', markupRefs.headerMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.aboutUsMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.servicesMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.strengthsMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.teamMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.galleryMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.footerMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.upBtnMarkup);

// бургер-меню -открытие / закрытие меню

import { onBurgerClick } from './js/burger-menu.js';

const menuBtnEl = document.querySelector('[data-menu-button]');

menuBtnEl.addEventListener('click', onBurgerClick);

// закрытие бекдропа по клику в бекдроп

import { onBackdropClick } from './js/burger-menu.js';

const mobileMenuEl = document.querySelector('[data-menu]');

mobileMenuEl.addEventListener('click', onBackdropClick);

// закрытие бекдропа по клику в навигационные кнопки

import { onModalNavClick } from './js/burger-menu.js';

const modalNavEl = document.querySelector('[data-backdrop-nav]');

modalNavEl.addEventListener('click', onModalNavClick);

import { onModalOnlineClick } from './js/burger-menu.js';

const modalOnlineEl = document.querySelector('[data-backdrop-online]');

modalOnlineEl.addEventListener('click', onModalOnlineClick);
