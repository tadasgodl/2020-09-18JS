import {formGenerator} from './formGenerator';

const inputs = [
	{
		placeholder: "Name",
		name: 'name',
		type: 'text'
	},
	{
		placeholder: "Email",
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
		name: 'register',
		type: 'submit',
		title: 'Register'
	}
];


export function registerForm() {
	return formGenerator(inputs, buttons);
}

// export function registerForm() {
// 	const formHolder = document.createElement('form');
// 	formHolder.style.display = 'flex';
// 	formHolder.style.flexDirection = 'column';
// 	formHolder.style.alignItems = 'center';
// 	formHolder.style.width = 40 + '%';
// 	document.body.style.display = 'flex';
// 	document.body.style.justifyContent = 'center';

// 	inputs.forEach(value => {
// 		const input = document.createElement('input');

// 		for (const key in value) {
// 			input.setAttribute(key, value[key]);
// 		};

// 		input.style.padding = 10 + 'px';
// 		input.style.margin = 5 + 'px';
// 		formHolder.append(input);

// 	});

// 	buttons.forEach(value => {
// 		const button = document.createElement('button');

// 		for (const key in value) {
// 			button.setAttribute(key, value[key]);
// 			button.innerHTML = value.title;
// 		};

// 		button.style.width = 100 + 'px';
// 		button.style.padding = 8 + 'px';
// 		button.style.margin = 5 + 'px';
// 		formHolder.append(button);

// 	});
// 	return formHolder;
// };