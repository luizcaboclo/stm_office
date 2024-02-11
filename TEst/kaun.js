/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function playVideo(index) {
    const video = document.getElementById(`video${index}`);
    video.play();
}

// eslint-disable-next-line no-unused-vars
function pauseVideo(index) {
    const video = document.getElementById(`video${index}`);
    video.pause();
}

////////////////

function changeOpacity(isHovered) {
    const elo = document.getElementById('elo');
    elo.style.opacity = isHovered ? 1 : 0
}