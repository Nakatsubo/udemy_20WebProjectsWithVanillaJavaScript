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

// // Check email is valid
// const isValidEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// Check email is valid
const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) showSuccess(input);
  else showError(input, 'Email is not valid');
}

// Check required fields
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    console.log(input.id)
    if (input.value.trim() === '') showError(input, `${getFieldName(input)} is required`);
    else showSuccess(input);
  });
}

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) showError(input, `${getFieldName(input)} must be at least ${min} charactors`);
  else if (input.value.length > max) showError(input, `${getFieldName(input)} must be at less than ${max} charactors`);
  else showSuccess(input);
}

// Check passwords match
const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) showError(input2, 'Passwords do not match');
}

// Get fieldname
const getFieldName = (input) => {
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
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2)
});