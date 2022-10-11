// SELECTORS
const volumeButton = document.getElementById('volume-button');
const music = document.getElementById('hourglass-mp3');



// EVENT LISTENERS

// FUNCTIONS

// TOP OF PAGE SCROLL FUNCTION
function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MUSIC FUNCTIONS
function toggleMusic() {
    volumeButton.style.display = 'block';
    if(music.paused) {
        music.play();
        volumeButton.innerHTML = '<i class="fa-sharp fa-solid fa-volume-high"></i>';
    } else {
        music.pause();
        volumeButton.innerHTML = '<i class="fa-sharp fa-solid fa-volume-xmark"></i>';
    }
}

function pausePlay() {
    if(music.paused) {
        music.play();
        volumeButton.innerHTML = '<i class="fa-sharp fa-solid fa-volume-high"></i>';
    } else {
        music.pause();
        volumeButton.innerHTML = '<i class="fa-sharp fa-solid fa-volume-xmark"></i>';
    }
}

// DARK MODE
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  // 3. Change icon to moon
  
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});