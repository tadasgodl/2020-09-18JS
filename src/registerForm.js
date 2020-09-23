import {formGenerator} from './formGenerator';

export function registerForm() {
	return formGenerator(inputs, buttons);
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