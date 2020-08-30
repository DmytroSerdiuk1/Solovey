import Swiper from '../vendor/swiper';
import vars from '../_vars';

const example = new Swiper(vars.$exampleSlider, {
  spaceBetween: -15,
});

const projectSlider = new Swiper(vars.$projectWrapper, {
  spaceBetween: 1,
});

const changestWrapper = new Swiper(vars.$changestWrapper, {
  spaceBetween: -5,
});
