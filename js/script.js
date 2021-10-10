'use strict';

// Selecting Elements
const vid = document.querySelector('.vid');
const cancelIcon = document.querySelector('.vid');
const logo = document.querySelector('.react');
const body = document.querySelector('body');
const lightTheme = document.querySelector('.light');
const darkTheme = document.querySelector('.dark');
const overlay = document.querySelector('#overlay');
const dropdownMenus = document.querySelectorAll('.main-content');
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#btnSearch');

// CLOSE VIDEO
cancelIcon.addEventListener('click', () => {
  vid.innerHTML = '';

  vid.style.width = '1000px';
  vid.style.height = '800px';

  overlay.style.width = '900px';
  overlay.style.height = '700px';
});

// ADDING DARK/LIGHT THEME

function darkModeOn() {
  body.classList.remove('white');

  logo.setAttribute('src', '/img/logoD.gif');

  body.style.backgroundImage = "url('/img/patd.png')";
}

function lightModeOn() {
  body.classList.add('white');

  logo.setAttribute('src', '/img/logoL.gif');

  if (!vid.innerHTML) {
    vid.innerHTML = '<img class="cat-image" src="/img/cat.png" />';
    setTimeout(function () {
      vid.innerHTML = '';
    }, 1000);
  }

  body.style.backgroundImage = "url('/img/patl.png')";
}

// CHANGING THEME WHEN CLICKED

lightTheme.addEventListener('click', lightModeOn);
darkTheme.addEventListener('click', darkModeOn);

// CLOSING VIDEO WHEN Esc KEY IS PRESSED

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    vid.innerHTML = '';
  }
});

// FETCHING DATA FROM API AND DISPLAYING GIF

const getData = async function () {
  try {
    const str = search.value.trim();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=T2aR1m0un7722AGQA6VLKg4KoBUuelTS&limit=6&q=${str}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.data.length === 0) throw new Error(`No gif's found for ${str} `);

    displayMemes(data);
  } catch (err) {
    alert(err);
  }
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
});

const displayMemes = function (data) {
  document.querySelector('#search').value = '';
  vid.innerHTML = '';

  const content = data.data;

  const memes = content
    .map((meme) => {
      return `<img src="${meme.images.downsized.url}" width="300" height="300"  class="gif"/> `;
    })
    .join('');

  vid.insertAdjacentHTML('afterbegin', memes);
};

// ADD VIDS

dropdownMenus.forEach((el) => {
  el.addEventListener('click', (e) => {
    // If clicked element contains href attribute then
    if (e.target.getAttribute('href')) {
      // Adjusting vid player size
      vid.style.width = '820px';
      vid.style.height = '500px';

      overlay.style.width = '770px';
      overlay.style.height = '450px';

      const className = e.target.getAttribute('href');

      //Adding Video
      vid.innerHTML = `<video width="800" height="500" controls  autoplay=1 poster="/img/poster1.gif" id="video" >
    <source src="/vids/${className}.mp4" type="video/mp4">
    Please Upgrade your browser or change the browser.Your browser does not support the video tag.
     </video>`;

      // Smooth Scroll to Vid PLayer
      vid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
