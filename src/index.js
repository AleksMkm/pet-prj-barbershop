// подключение css

import './scss/main.scss';

// подключение разметки

import { markupRefs } from './js/partials.js';

const bodyEl = document.querySelector('body');
console.log(bodyEl);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.headerMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.aboutUsMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.servicesMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.strengthsMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.teamMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.galleryMarkup);
bodyEl.insertAdjacentHTML('beforeend', markupRefs.footerMarkup);
