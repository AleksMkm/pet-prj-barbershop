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
import { onImageLoad } from './js/image-load.js';
import teamListTemplate from './templates/team-card.hbs';
import teammates from './JSON/team-members.json';

// библиотеки
const throttle = require('lodash.throttle');

// подключение разметки

document.body.insertAdjacentHTML('beforeend', markupRefs.headerMarkup);
document.body.insertAdjacentHTML('beforeend', markupRefs.aboutUsMarkup);
document.body.insertAdjacentHTML('beforeend', markupRefs.servicesMarkup);
document.body.insertAdjacentHTML('beforeend', markupRefs.strengthsMarkup);
document.body.insertAdjacentHTML('beforeend', markupRefs.teamMarkup);
document.body.insertAdjacentHTML('beforeend', markupRefs.galleryMarkup);
document.body.insertAdjacentHTML('beforeend', markupRefs.footerMarkup);
document.body.insertAdjacentHTML('beforeend', markupRefs.upBtnMarkup);

// ссылки на узлы

const refs = {
  mobileMenuEl: document.querySelector('[data-menu]'),
  menuBtnEl: document.querySelector('[data-menu-button]'),
  modalNavEl: document.querySelector('[data-backdrop-nav]'),
  modalOnlineEl: document.querySelector('[data-backdrop-online]'),
  upBtn: document.querySelector('[data-up-btn]'),
  teamList: document.querySelector('#team-list'),
};

// добавление в разметку шаблонов
const teamListMarkup = teamListTemplate(teammates);
refs.teamList.insertAdjacentHTML('beforeend', teamListMarkup);

// бургер-меню -открытие / закрытие меню

refs.menuBtnEl.addEventListener(
  'click',
  onBurgerClick(document.body, refs.mobileMenuEl),
);

// закрытие бекдропа по клику в бекдроп

refs.mobileMenuEl.addEventListener('click', onBackdropClick);

// закрытие бекдропа по клику в навигационные кнопки

refs.modalNavEl.addEventListener('click', onModalNavClick);
refs.modalOnlineEl.addEventListener('click', onModalOnlineClick);

// работа кнопки "вверх"

window.addEventListener('scroll', throttle(hideElOnScroll(refs.upBtn), 250));
refs.upBtn.addEventListener('click', toPageTopOnClick);

// анимация загрузки картинок

refs.lazyImages = document.querySelectorAll('img[loading="lazy"]');

refs.lazyImages.forEach(img => {
  img.classList.add('img-not-loaded');
});

refs.lazyImages.forEach(img => {
  img.addEventListener('load', onImageLoad, { once: true });
});

if ('loading' in HTMLImageElement.prototype) {
  refs.lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';
  document.body.appendChild('script');
}
