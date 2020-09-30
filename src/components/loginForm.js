import {mount} from '../library/mount';
import {generateForm} from '../components/generateForm';
import {main} from '../pages/main';
import {user} from '../utility/login';

export function loginForm() {
  return generateForm(inputs, buttons, fn);
}

function fn(e) {
  e.preventDefault();

  const credentials = {};

  inputs.forEach(inputData => {
    credentials[inputData.name] = inputData.value;
  });

  fetch('http://rest.stecenka.lt/login', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(token => {
      if (token) {
        localStorage.setItem('token', token);
        user.token = 'Bearer ' + token;
        main();
      }
    });

    console.log(credentials);

}

const inputs = [
  {
    class: 'input input--white',
    placeholder: 'Email',
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
    name: 'login',
    title: 'Prisijungti'
  }
];
