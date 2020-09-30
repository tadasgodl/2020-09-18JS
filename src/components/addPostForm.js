import {mount} from '../library/mount';
import {generateForm} from '../components/generateForm';
import {user} from '../utility/login';

export function addPostForm() {
  return generateForm(inputs, buttons, add);
}

function add(e) {
  e.preventDefault();

  const postInputs = {};

  inputs.forEach(inputData => {
    postInputs[inputData.name] = inputData.value;
  });

  fetch('http://rest.stecenka.lt/login', {
    headers: {
      'Content-type': 'application/json',
      Authorization: user.token
    },
    method: 'POST',
    body: JSON.stringify(postInputs)
  })
    .then(response => response.json())
    .then(data => console.log(data));
}

const inputs = [
  {
    placeholder: 'Title',
    name: 'title',
    type: 'text'
  },
  {
    placeholder: 'Your text here...',
    name: 'body',
    type: 'text'
  }
];

const buttons = [
  {
    name: 'add',
    title: 'Pridėti'
  }
];
