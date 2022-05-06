import  '../scss/style.scss';

const word             = document.getElementById('word'),
      text             = document.getElementById('text'),
      scoreEl          = document.getElementById('score'),
      timeEl           = document.getElementById('time'),
      endgameEl        = document.getElementById('end-game-container'),
      settingsBtn      = document.getElementById('settings-btn'),
      settings         = document.getElementById('settings'),
      settingsForm     = document.getElementById('settings-form'),
      difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
// console.log(getRandomWord());

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDOM();

// Event Listers
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  // console.log(insertedText);

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';
  }
})