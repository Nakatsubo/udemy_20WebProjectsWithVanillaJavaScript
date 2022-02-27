import  '../scss/style.scss';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}  

// Check required fields
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    console.log(input.id)
    if (input.value.trim() === '') showError(input, `${getFildName(input)} is required`);
    else showSuccess(input);
  });
}

// Get fieldname
const getFildName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', (e) => {
  // event.preventDefaultメソッドは、submitイベントの発生元であるフォームが持つデフォルトの動作をキャンセルするメソッドです。
  e.preventDefault();

  // if (username.value === '') showError(username, 'Username is required');
  // else showSuccess(username);

  // if (email.value === '') showError(email, 'Email is required');
  // else if (!isValidEmail(email.value)) showError(email, 'Email is not valid');
  // else showSuccess(email);

  // if (password.value === '') showError(password, 'Password is required');
  // else showSuccess(password);

  // if (password2.value === '') showError(password2, 'Password2 is required');
  // else showSuccess(password2);

  checkRequired([username,email, password, password2]);
});