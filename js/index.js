const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
// const idealCustomerCover = document.querySelector('#ideal-customer-cover');
// const idealCustomerOverlay = document.querySelector('#ideal-customer-overlay');
// const workforceSurveyOverlay = document.querySelector(
//   '#workforce-survey-overlay'
// );
// const workforceSurveyCover = document.querySelector('#workforce-survey-cover');
// const costCenterOverlay = document.querySelector('#cost-center-overlay');
// const costCenterCover = document.querySelector('#cost-center-cover');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// idealCustomerOverlay.addEventListener('mouseover', () => {
//   idealCustomerCover.style.opacity = '0';
// });

// idealCustomerOverlay.addEventListener('mouseleave', () => {
//   idealCustomerCover.style.opacity = '1';
// });

// workforceSurveyOverlay.addEventListener('mouseover', () => {
//   workforceSurveyCover.style.opacity = '0';
// });

// workforceSurveyOverlay.addEventListener('mouseleave', () => {
//   workforceSurveyCover.style.opacity = '1';
// });

// costCenterOverlay.addEventListener('mouseover', () => {
//   costCenterCover.style.opacity = '0';
// });

// costCenterOverlay.addEventListener('mouseleave', () => {
//   costCenterCover.style.opacity = '1';
// });
