import  '../scss/style.scss';

function caclulate() {
  // fetch('./assets/data/items.json', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'applictation/json'}
  // })
  fetch('./assets/data/items.json')
    .then(res => res.json())
    .then(data => document.body.innerHTML = data[0].text);
}
caclulate();