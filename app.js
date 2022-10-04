// SELECTORS
const volumeButton = document.getElementById('volume-button');
const music = document.getElementById('hourglass-mp3');

// EVENT LISTENERS

// FUNCTIONS

// Scrolls to the top of the page
function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMusic() {
    volumeButton.style.display = 'block';
    music.play();
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