import  '../scss/style.scss';

const main                = document.getElementById('main');
const addUserBtn          = document.getElementById('add-user');
const dubleBtn            = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn             = document.getElementById('sort');
const calculateWealthBtn  = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser()

// fetch random user and money
async function getRandomUser() {
  const res  = await fetch('https://randomuser.me/api');
  const data = await res.json();

  console.log(data);
}