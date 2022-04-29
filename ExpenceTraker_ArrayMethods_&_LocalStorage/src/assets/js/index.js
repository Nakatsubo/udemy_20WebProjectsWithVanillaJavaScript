import  '../scss/style.scss';

const balance     = document.getElementById('balance'),
      money_plus  = document.getElementById('money-plus'),
      money_minus = document.getElementById('money-minus'),
      list        = document.getElementById('list'),
      form        = document.getElementById('form'),
      text        = document.getElementById('text'),
      amount      = document.getElementById('amount');

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTransactions;

// Add Transactions to DOM List
function addTransactionDOM(transaction) {
  // Get Sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add Class Based on Value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button>
  `;

  list.appendChild(item);
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
}

init();