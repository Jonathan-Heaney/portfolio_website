const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const idealCustomer = document.querySelector('#ideal-customer-img');
const idealCustomerCover = document.querySelector('#ideal-customer-cover');
const costCenter = document.querySelector('#cost-center-img');
const costCenterCover = document.querySelector('#cost-center-cover');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

idealCustomer.addEventListener('mouseover', () => {
  idealCustomerCover.style.opacity = '0';
});

idealCustomer.addEventListener('mouseleave', () => {
  idealCustomerCover.style.opacity = '1';
});

costCenter.addEventListener('mouseover', () => {
  costCenterCover.style.opacity = '0';
});

costCenter.addEventListener('mouseleave', () => {
  costCenterCover.style.opacity = '1';
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
