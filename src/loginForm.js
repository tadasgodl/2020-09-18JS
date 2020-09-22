export function loginForm() {
	const formHolder = document.createElement('form');
	formHolder.style.display = 'flex';
	formHolder.style.flexDirection = 'column';
	formHolder.style.alignItems = 'center';
	formHolder.style.width = 40 + '%';

	document.body.style.display = 'flex';
	document.body.style.justifyContent = 'center';

	inputs.forEach(value => {
		const input = document.createElement('input');

		for (const key in value) {
			input.setAttribute(key, value[key]);
		}

		formHolder.append(input);
	});

	buttons.forEach(value => {
		const button = document.createElement('button');

		for (const key in value) {
			button.setAttribute(key, value[key]);
			button.innerHTML = 'Submit';
		}
		formHolder.append(button);
	})
	document.body.append(formHolder);
}

const inputs = [
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
		name: 'login',
		type: 'submit',
		title: 'Submit'
	}
];