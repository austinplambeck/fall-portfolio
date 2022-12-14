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
const darkLightSwitch = document.getElementById('dark-light-switch');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  // 3. Change icon to dark
  darkLightSwitch.innerHTML = '<i class="fa-solid fa-moon" id="dark-mode-toggle" onclick="switchMode()"></i><span class="tooltiptext4">Change theme</span>';  
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
  // 3. Change icon to light
  darkLightSwitch.innerHTML = '<i class="fa-regular fa-sun" id="dark-mode-toggle" onclick="switchMode()"></i><span class="tooltiptext4">Change theme</span>';
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
switchMode = () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
};