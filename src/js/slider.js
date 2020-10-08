export function onSideSliderNavClick(firstBtn, secondBtn, thirdBtn, allSlides) {
  return function onSideNavClick(e) {
    if (e.target.nodeName !== 'SPAN') return;
    allSlides.forEach(item => {
      item.classList.add('visuallyhidden');
    });
    switch (e.target.dataset.sliderBtn) {
      case 'first':
        firstBtn.classList.remove('visuallyhidden');
        break;
      case 'second':
        secondBtn.classList.remove('visuallyhidden');
        break;
      case 'third':
        thirdBtn.classList.remove('visuallyhidden');
        break;
    }
  };
}
