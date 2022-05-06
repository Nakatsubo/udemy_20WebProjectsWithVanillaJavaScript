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

  box.classList.add('.box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  // @todo - speck event
  main.appendChild(box);
}