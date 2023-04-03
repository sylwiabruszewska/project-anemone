import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

window.addEventListener('load', event => {
  var slider = tns({
    container: '.my-slider',
    items: 2,
    gutter: 16,
    slideBy: '1',
    controlsPosition: 'bottom',
    nav: false,
    controlsContainer: '.controls_container',
    responsive: {
      768: {
        items: 2,
        gutter: 32,
      },
      1280: {
        items: 3,
        gutter: 31,
      },
    },
  });
});
