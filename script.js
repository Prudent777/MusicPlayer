const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '&#9658;'; // Play icon
    }
});
