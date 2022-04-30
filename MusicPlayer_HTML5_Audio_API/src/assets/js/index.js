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

// Previous song
function prevSong() {
  songIndex --;

  // 最後の曲に戻す
  if (songIndex < 0) songIndex = songs.length - 1;

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex ++;

  // 最初の曲に戻す
  if (songIndex > songs.length - 1) songIndex = 0;

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  // console.log(duration, currentTime);

  const progressPercent = (currentTime / duration) * 100;
  // console.log(progressPercent);

  progress.style.width = `${progressPercent}%`;
}

// Set Progress bar
function setProgress(e) {
  // console.log(this); -> progressContainer
  // Element.clientWidth プロパティは、インライン要素や CSS のない要素ではゼロになります。それ以外では、要素の内側の寸法をピクセル単位で表します。パディングは含みますが、境界、マージン、（もしあれば）垂直スクロールバーは含みません。
  const width    = this.clientWidth;
  // 位置を取得
  const clickX   = e.offsetX;
  const duration = audio.duration;

  // console.log(clickX);

  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) pauseSong();
  else playSong();
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progess bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);