import Component from './library/Component.js';
import h from './library/hyperscript';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			route: 'login',
			inputData: [
			{text: 'Email', placeholder: ''},
			{text: 'Password', placeholder: ''}
			],
			buttonData: [
			{type: 'submit'}
			]
		}
	}

	render() {
		const allInputs = this.state.inputData.map(input => {
			return h('label', {}, input.text, h('input', {placeholder: input.placeholder, class: 'required'}))
		})
		const allButtons = this.state.buttonData.map(button => {
			return h('button', button, 'Login');
		})
		console.log(allButtons);
		const form = h('form', {class: 'form'}, ...allInputs, ...allButtons);
		return h('div', {}, form);
	}
}