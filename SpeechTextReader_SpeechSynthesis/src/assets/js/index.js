import  '../scss/style.scss';

const main         = document.querySelector('main'),
      voicesSelect = document.getElementById('voices'),
      textarea     = document.getElementById('text'),
      readBtn      = document.getElementById('read'),
      toggleBtn    = document.getElementById('toggle'),
      closeBtn     = document.getElementById('close');

const data = [
  {
    image: '/assets/img/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: '/assets/img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: '/assets/img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: '/assets/img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: '/assets/img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: '/assets/img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: '/assets/img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: '/assets/img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: '/assets/img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: '/assets/img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: '/assets/img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: '/assets/img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
]

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  // console.log(item);

  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  })

  // @todo - speck event
  main.appendChild(box);
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Init speech synth
const message = new SpeechSynthesisUtterance(); 

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  console.log(voices);

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerHTML = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  })
}

// Voices change
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.add('show');
})

// Close button
closeBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.remove('show');
})

getVoices();