import  '../scss/style.scss';

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
const toggleVideoStatus = () => {
  if (video.paused) video.play();
  else video.pause();
}

// Update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  else play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
}

// Update progress & timestamp
const updateProgress = () => {
  return true;
}

// Set video time to progress
const setVideoProgress = () => {
  return true;
}

// Stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
