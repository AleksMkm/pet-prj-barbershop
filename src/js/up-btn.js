export function hideElOnScroll(el) {
  return function hideOnScroll(e) {
    if (pageYOffset < document.documentElement.clientHeight) {
      el.classList.add('visuallyhidden');
    } else {
      el.classList.remove('visuallyhidden');
    }
  };
}

export function toPageTopOnClick(e) {
  window.scrollTo(pageXOffset, 0);
}
