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
const wholePage = document.getElementById('page-container');

function darkToggle() {
    wholePage.classList.toggle('dark');
    document.getElementsByClassName('header-format').classList.toggle('dark');
}