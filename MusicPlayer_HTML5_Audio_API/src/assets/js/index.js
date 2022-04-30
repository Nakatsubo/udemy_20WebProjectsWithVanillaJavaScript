import  '../scss/style.scss';

const musicContainer    = document.getElementById('music-container'),
      playBtn           = document.getElementById('play'),
      prevBtn           = document.getElementById('prev'),
      nextBtn           = document.getElementById('next'),
      audio             = document.getElementById('audio'),
      progress          = document.getElementById('progress'),
      progressContainer = document.getElementById('progress-container'),
      title             = document.getElementById('title'),
      cover             = document.getElementById('cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songs
let songIndex = 2;

// Intially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `./assets/music/${song}.mp3`;
  cover.src = `./assets/img/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Event Listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) pauseSong();
  else playSong();
});