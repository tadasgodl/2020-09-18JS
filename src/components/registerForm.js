import {generateForm} from '../library/generateForm';
import {loginForm} from './loginForm';
import {mount} from '../library/mount';

export function registerForm() {
  return generateForm(inputs, buttons, register);
}

function register(e) {
  e.preventDefault();

  const credentials = {};

  inputs.forEach(inputData => {
    credentials[inputData.name] = inputData.value;
  });

  fetch('http://rest.stecenka.lt/register', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(data => {
      if (data === 'success') {
        mount(loginForm());
      }
    });
}

const inputs = [
  {
    class: 'input input--register',
    placeholder: 'Aurimas',
    name: 'name',
    type: 'text'
  },
  {
    placeholder: 'aurimas@email.com',
    name: 'email',
    type: 'email'
  },
  {
    placeholder: 'Password',
    name: 'password',
    type: 'password'
  }
];

const buttons = [
  {
    type: 'submit',
    name: 'register',
    title: 'Registruotis'
  }
];
