import Component from './library/Component.js';
import h from './library/hyperscript';

export default class Registration extends Component {
	constructor() {
		super();
		this.state = {
			inputData: [ 
			{text: 'First Name', placeholder: 'John'},
			{text: 'Last Name', placeholder: 'Smith'},
			{text: 'Email', placeholder: 'John@Smith.com'},
			{text: 'Password', placeholder: 'Password'}
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
			return h('button', button, 'Register');
		})
		const form = h('form', {class: 'form', submit: (e) => {
			registerFormFunction(e, allInputs, allButtons);
		}}, ...allInputs, ...allButtons);
		return h('div', {}, form);
	}
}

function registerFormFunction(e, allInputs = [], allButtons = []) {
	e.preventDefault();
}