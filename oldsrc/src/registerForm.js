import {loginForm} from './loginForm';
import {formGenerator} from './formGenerator';

export function registerForm() {
	return formGenerator(inputs, buttons, fetchRegister);
}

function fetchRegister(e) {
	const userInfo = {
		name: 'name',
		email: 'email',
		password: 'password'
	};

	inputs.forEach(inputsValue => {
		userInfo[inputsValue.name] = inputsValue.value;
	})
	console.log(userInfo);

	e.preventDefault();
	fetch('http://rest.stecenka.lt/register', {
	headers: {
		'Content-type': 'application/json'
	},
	method: 'POST',
	body: JSON.stringify(userInfo)
	})
	.then(res => {
		if (res.ok) {
			return res.json();
		}
	})
	.then(user => {
		if (user) {
			console.log('You have successfully registered.');
			localStorage.setItem('user', JSON.stringify(userInfo));
			e.target.remove();
			document.body.append(loginForm());
		}
	});
}

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