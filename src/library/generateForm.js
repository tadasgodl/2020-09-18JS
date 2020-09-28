import {createNode} from './createNode';

export function generateForm(inputs = [], buttons = [], handler) {
  const form = createNode('form', {class: 'form form-login', method: 'POST'});

  inputs.forEach(inputAttributes => {
    const inputElement = createNode('input', inputAttributes);

    inputElement.addEventListener('change', () => {
      inputAttributes.value = inputElement.value;
    });

    form.append(inputElement);
  });

  buttons.forEach(buttonAttributes => {
    const buttonElement = createNode('button', buttonAttributes, buttonAttributes.title);
    form.append(buttonElement);
  });

  form.addEventListener('submit', handler);

  return form;
}
