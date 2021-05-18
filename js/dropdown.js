'use strict';

// SELECTING ELEMENTS
const li = document.querySelectorAll('.li');
const main = [...document.querySelectorAll('.main-content')];
const chapters = [
  document.querySelector('.chaptersys1'),
  document.querySelector('.chaptersys2'),
  document.querySelector('.chaptersys3'),
  document.querySelector('.chaptersys4'),
];

// FUNCTION TO DROPDOWN MENU
function drop(ch) {
  ch.addEventListener('click', () => {
    const mainWrapper = ch.nextElementSibling;
    const style = ch.parentElement;

    mainWrapper.classList.toggle('show');
    style.classList.add('bor');
  });
}

// LOOP TO ADD ELEMENTS FROM chapters array
for (let i = 0; i < chapters.length; i++) {
  drop(chapters[i]);
}

// CLOSE DROPDOWN WHEN CLICKED OUTSIDE OR WHEN SELECTED THE LECTURE
document.addEventListener('mouseup', (event) => {
  for (let t of main) {
    if (event.target.parentNode != t && event.target != t) {
      t.classList.add('show');
      t.parentElement.classList.remove('bor');
    }
  }
});

for (let l of li) {
  l.addEventListener('click', () => {
    setTimeout(function () {
      l.parentElement.classList.add('show');
      l.parentElement.parentElement.classList.remove('bor');
    }, 1000);
  });
}
