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

// CLOSE VIDEO
cancelIcon.addEventListener('click', () => {
  vid.innerHTML = '';

  vid.style.width = '1000px';
  vid.style.height = '1000px';

  overlay.style.width = '900px';
  overlay.style.height = '900px';
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

let APIKEY = 'T2aR1m0un7722AGQA6VLKg4KoBUuelTS';

document.addEventListener('DOMContentLoaded', init);
function init() {
  document.getElementById('btnSearch').addEventListener('click', (ev) => {
    ev.preventDefault();

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById('search').value.trim();
    url = url.concat(str);

    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);

        let img = document.createElement('img');

        img.src = content.data[0].images.downsized.url;

        vid.appendChild(img);

        document.querySelector('#search').value = '';
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

// ADD VIDS

dropdownMenus.forEach((el) => {
  el.addEventListener('click', (e) => {
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
