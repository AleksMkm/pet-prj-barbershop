// подключение css
import './scss/main.scss';
// импорты
import headerTemplate from './partials/header.hbs';
import aboutUsTemplate from './partials/about-us.hbs';
import servicesTemplate from './partials/services.hbs';
import strengthsTemplate from './partials/strengths.hbs';
import teamTemplate from './partials/team.hbs';
import galleryTemplate from './partials/gallery.hbs';
import footerTemplate from './partials/footer.hbs';
import upBtnTemplate from './partials/up-btn.hbs';
import { markupRefs } from './js/partials.js';
import {
  onBurgerClick,
  onBackdropClick,
  onModalNavClick,
  onModalOnlineClick,
} from './js/burger-menu.js';
import { hideElOnScroll, toPageTopOnClick } from './js/up-btn.js';
import { onImageLoad } from './js/image-load.js';
import { onSideSliderNavClick } from './js/slider.js';
import teamListTemplate from './templates/team-card.hbs';
import teammates from './JSON/team-members.json';
import sliderTemplate from './templates/slider.hbs';
import sliderData from './JSON/slider.json';

// библиотеки
const throttle = require('lodash.throttle');

// подключение разметки
const headerMarkup = headerTemplate([{}]);
const aboutUsMarkup = aboutUsTemplate([{}]);
const servicesMarkup = servicesTemplate([{}]);
const strengthsMarkup = strengthsTemplate([{}]);
const teamMarkup = teamTemplate([{}]);
const galleryMarkup = galleryTemplate([{}]);
const footerMarkup = footerTemplate([{}]);
const upBtnMarkup = upBtnTemplate([{}]);

document.body.insertAdjacentHTML('beforeend', headerMarkup);
document.body.insertAdjacentHTML('beforeend', aboutUsMarkup);
document.body.insertAdjacentHTML('beforeend', servicesMarkup);
document.body.insertAdjacentHTML('beforeend', strengthsMarkup);
document.body.insertAdjacentHTML('beforeend', teamMarkup);
document.body.insertAdjacentHTML('beforeend', galleryMarkup);
document.body.insertAdjacentHTML('beforeend', footerMarkup);
document.body.insertAdjacentHTML('beforeend', upBtnMarkup);

// ссылки на узлы

const refs = {
  mobileMenuEl: document.querySelector('[data-menu]'),
  menuBtnEl: document.querySelector('[data-menu-button]'),
  modalNavEl: document.querySelector('[data-backdrop-nav]'),
  modalOnlineEl: document.querySelector('[data-backdrop-online]'),
  upBtn: document.querySelector('[data-up-btn]'),
  teamList: document.querySelector('#team-list'),
  sliderList: document.querySelector('#slider-list'),
  sliderRadioList: document.querySelector('#slider-radio'),
};

// добавление в разметку шаблонов
const teamListMarkup = teamListTemplate(teammates);
refs.teamList.insertAdjacentHTML('beforeend', teamListMarkup);

const sliderMarkup = sliderTemplate(sliderData);
refs.sliderList.insertAdjacentHTML('beforeend', sliderMarkup);

// слайдер

refs.sliderItems = document.querySelectorAll('[data-slider-item]');
refs.sliderFirstItem = document.querySelector('.slide-1');
refs.sliderSecondItem = document.querySelector('.slide-2');
refs.sliderThirdItem = document.querySelector('.slide-3');

refs.sliderFirstItem.classList.remove('visuallyhidden');

refs.sliderRadioList.addEventListener(
  'click',
  onSideSliderNavClick(
    refs.sliderFirstItem,
    refs.sliderSecondItem,
    refs.sliderThirdItem,
    refs.sliderItems,
  ),
);

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
