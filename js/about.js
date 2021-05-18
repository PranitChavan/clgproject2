// SKEWED ANIMATION
const skewedOne = document.querySelector('.SkewedOne');
const skewedTwo = document.querySelector('.SkewedTwo');

window.addEventListener('scroll', () => {
  const value1 = -15 + window.scrollY / 45;
  const value2 = 15 + window.scrollY / -45;
  skewedOne.style.transform = 'skewY(' + value1 + 'deg)';
  skewedTwo.style.transform = 'skewY(' + value2 + 'deg)';
});

// C1
const toggle1 = document.querySelector('.toggle1');

const section1 = document.querySelector('.sec1');

toggle1.addEventListener('click', () => {
  section1.classList.toggle('dark1');
});

// C2
const toggle = document.querySelector('.toggle');

const section = document.querySelector('.sec');

toggle.addEventListener('click', () => {
  section.classList.toggle('dark');
});

document.querySelector('.main').addEventListener('click', () => {
  const card = document.querySelector('.sec1');

  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
