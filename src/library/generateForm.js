import {hyperscript} from '../library/hyperscript';

export function generateForm(inputs = [], buttons = [], handler) {
  const inputNodes = inputs.map(input => {
    input.keyup = (e) => {
      input.value = e.target.value;
    }
    return hyperscript('input', input);
  });

  const buttonNodes = buttons.map(button => {
    return hyperscript('button', {button}, button.title);
  });

  return hyperscript('form', {class: 'form form-login', method: 'POST', submit: handler}, ...inputNodes, ...buttonNodes);
}


// const form = createNode('form', {class: 'form form-login', method: 'POST'});

//   inputs.forEach(inputAttributes => {
//     const inputElement = createNode('input', inputAttributes);

//     inputElement.addEventListener('change', () => {
//       inputAttributes.value = inputElement.value;
//     });

//     form.append(inputElement);
//   });

//   buttons.forEach(buttonAttributes => {
//     const buttonElement = createNode('button', buttonAttributes, buttonAttributes.title);
//     form.append(buttonElement);
//   });

//   form.addEventListener('submit', handler);

