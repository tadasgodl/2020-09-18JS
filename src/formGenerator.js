import {createNode} from './createNods';

export function formGenerator(inputs, buttons) {
	const form = createNode('form');
	form.style.display = 'flex';
	form.style.flexDirection = 'column';
	form.style.alignItems = 'center';
	form.style.width = 40 + '%';
	document.body.style.display = 'flex';
	document.body.style.justifyContent = 'center';

	inputs.forEach(inputValue => {
		const input = createNode('input', inputValue)
		input.style.padding = 10 + 'px';
		input.style.margin = 5 + 'px';
		form.append(input);

	});

	buttons.forEach(buttonValue => {
		const button = createNode('button', buttonValue);
		button.innerHTML = buttonValue.title;
		button.style.width = 100 + 'px';
		button.style.padding = 8 + 'px';
		button.style.margin = 5 + 'px';
		form.append(button);

	});
	return form;
};