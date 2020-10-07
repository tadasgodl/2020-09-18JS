import Component from './library/Component.js';
import h from './library/hyperscript';

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputData: [ 
			{text: 'First Name', placeholder: 'John', value: ''},
			{text: 'Last Name', placeholder: 'Smith', value: ''},
			{text: 'Email', placeholder: 'John@Smith.com', value: ''},
			{text: 'Password', placeholder: 'Password', value: ''}
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
				console.log('Done'); /**should set state into login*/
			}}))
		});
		const allInputs = this.state.inputData.map(input => {
			return h('label', {}, input.text, h('input', {placeholder: input.placeholder}))
		})
		const allButtons = this.state.buttonData.map(button => {
			return h('button', button, 'Register');
		})
		const form = h('form', {class: 'form', submit: (e) => {
			registerFormFunction(e, allInputs, allButtons) /** incomplete */
		}}, ...allInputs, ...allButtons, ...allLinks);
		return h('div', {}, form);
	}

	transition() {
		this.setState({route: 'login'});
	}
}

function registerFormFunction(e, inputs = [], buttons = []) {
	e.preventDefault();

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
			/**should set state into login*/
		}
	})

}