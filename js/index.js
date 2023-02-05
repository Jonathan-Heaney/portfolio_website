const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const portfolioImages = document.querySelectorAll('.portfolio__item');
const portfolioCover = document.querySelectorAll('.portfolio__img__cover');
const portfolioOverlay = document.querySelectorAll('.portfolio__img__overlay');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// portfolioImages.forEach((image) => {
//   image.addEventListener('mouseover', () => {
//     console.log('working');
//     hideCover;
//     showOverlay;
//   });
// });

// portfolioImages.forEach((image) => {
//   image.addEventListener('mouseleave', () => {
//     console.log('leaving');
//     showCover;
//     hideOverlay;
//   });
// });

// const hideCover = portfolioCover.forEach((cover) => {
//   cover.classList.add('cover__hidden');
//   console.log('hideCover working');
// });

// const showOverlay = portfolioCover.forEach((overlay) => {
//   overlay.classList.remove('overlay__hidden');
// });

// const showCover = portfolioCover.forEach((cover) => {
//   cover.classList.remove('cover__hidden');
// });

// const hideOverlay = portfolioCover.forEach((overlay) => {
//   overlay.classList.add('overlay__hidden');
// });
