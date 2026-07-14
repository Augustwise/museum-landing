'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.gallery-slider__wrapper');
  const slides = document.querySelectorAll('.gallery-slider__slide');
  const dotsContainer = document.querySelector('.gallery-slider__dots');

  if (sliderWrapper && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateDots = () => {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };

    const goToSlide = (index) => {
      const slideWidth = slides[0].clientWidth;

      sliderWrapper.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth',
      });
    };

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');

      dot.classList.add('gallery-slider__dot');

      if (i === 0) {
        dot.classList.add('active');
      }

      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.gallery-slider__dot');

    sliderWrapper.addEventListener('scroll', () => {
      const slideWidth = slides[0].clientWidth;
      const maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
      let index = Math.round(sliderWrapper.scrollLeft / slideWidth);

      if (sliderWrapper.scrollLeft >= maxScroll - 1) {
        index = totalSlides - 1;
      }

      currentIndex = Math.min(index, totalSlides - 1);
      updateDots();
    });
  }
});
