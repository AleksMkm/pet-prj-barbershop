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
// bodyEl.insertAdjacentHTML('beforeend', markupRefs.galleryMarkup);
// bodyEl.insertAdjacentHTML('beforeend', markupRefs.footerMarkup);

// бургер-меню

import onBurgerClick from './js/burger-menu.js';

const menuBtnEl = document.querySelector('[data-menu-button]');

menuBtnEl.addEventListener('click', onBurgerClick);
