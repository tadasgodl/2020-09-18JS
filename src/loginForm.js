import {formGenerator} from './formGenerator';

export function loginForm() {
	return formGenerator(inputs, buttons, fetchLogin);
}

function fetchLogin(e) {

	const userInfo = {
		email: '',
		password: ''
	}
	
	inputs.forEach(inputsValue => {
		userInfo[inputsValue.name] = inputsValue.value;
	});

	console.log(userInfo);

	e.preventDefault();
	fetch('http://rest.stecenka.lt/login', {
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
	.then(token => {
		if (token) {
			localStorage.setItem('token', token);
			e.target.remove();
		}
	});
}

const inputs = [
	{
		placeholder: "Email",
		name: 'email',
		type: 'email',
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
		title: 'Login'
	}
];