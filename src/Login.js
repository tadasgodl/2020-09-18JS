import Component from './library/Component.js';
import h from './library/hyperscript';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputData: [
			{text: 'Email', placeholder: '', value: ''},
			{text: 'Password', placeholder: '', value: ''}
			],
			buttonData: [
			{type: 'submit'}
			],
			linkData: [
			{title: 'Not a member?', class: 'fas fa-user-plus'}]
		}
	}

	render() {
		const allLinks = this.state.linkData.map(link => {
			return h('p', {}, link.title, h('i', {class: link.class, click: (e) => {
				this.props.route('register');
			}}))
		})
		const allInputs = this.state.inputData.map(input => {
			return h('label', {}, input.text, h('input', {placeholder: input.placeholder, class: 'required'}))
		})
		const allButtons = this.state.buttonData.map(button => {
			return h('button', button, 'Login');
		})
		const form = h('form', {class: 'form', submit: (e) => {
			loginFormFunction(e, allInputs, allButtons, this.props.route) /** incomplete */
		}}, ...allInputs, ...allButtons, ...allLinks);
		return h('div', {class: 'form-container'}, form);
	}
}


function loginFormFunction(e, inputs = [], buttons = [], router) {
	e.preventDefault();

	/** input not feeding information into loginInfo, fetch incomplete.*/

	// router('mainpage');

	const loginInfo = {
		email: '',
		password: ''
	};

	fetch('http://rest.stecenka.lt/login', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify()
  })
    .then(req => {
      if (req.ok) {
        return req.json();
      }
    })
    .then(token => {
      if (token) {
      	console.log(token);
        localStorage.setItem('token', token);
        user.token = 'Bearer ' + token;
        router('mainpage');
      }
    });
}