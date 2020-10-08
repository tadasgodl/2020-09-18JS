import Component from './library/Component.js';
import h from './library/hyperscript';

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputData: [ 
			{text: 'First Name', placeholder: 'John', name: 'name', value: '', type: 'text'},
			{text: 'Last Name', placeholder: 'Smith', name: 'surname',value: '', type: 'text'},
			{text: 'Email', placeholder: 'John@Smith.com', name: 'email', value: '', type: 'email'},
			{text: 'Password', placeholder: 'Password', name: 'password', value: '', type: 'password'}
			],
			buttonData: [
			{type: 'submit'}
			],
			linkData: [
			{title: 'Already registered?', class: 'far fa-user'}
			]
		}
	}

	render() {
		const allLinks = this.state.linkData.map(link => {
			return h('p', {}, link.title, h('i', {class: link.class, click: (e) => {
				this.props.route('login');
			}}))
		});
		const allInputs = this.state.inputData.map(input => {
			return h('label', {}, input.text, h('input', {placeholder: input.placeholder, type: input.type, value: input.value, keyup: (e) => {
				input.value = e.target.value;
				console.log(input);
			}}))
		})
		const allButtons = this.state.buttonData.map(button => {
			return h('button', button, 'Register');
		})
		const form = h('form', {class: 'form', submit: (e) => {
			registerFormFunction(e, allInputs, allButtons, this.props.route)
		}}, ...allInputs, ...allButtons, ...allLinks);
		return h('div', {}, form);
	}
}

function registerFormFunction(e, inputs = [], buttons = [], router) {
	e.preventDefault();

	console.log(router);

	const registerInfo = {};

	fetch('http://rest.stecenka.lt/register', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(registerInfo)
  	})
	.then (req => {
		if (req.ok) {
			return req.json();
		}
	})
	.then (res => {
		if (res) {
			router('login')
		}
	})

}