import {loginFromToken} from './utility/login';
import h from './library/hyperscript';
import navigation from './components/navigation.js';
import Component from './library/Component';
import Registration from './Registration';
import Login from './Login';

// console.log(Register);

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			route: 'register',
			// navigationLinks: ['Home', 'Login', 'Register']
		}
		this.login()
	}

	login() {
		this.state.isLoggedIn = loginFromToken()
	}

	changeRoute = (routeName) => {
		this.setState({route: routeName})
	}

	render() {
		if (this.state.route === 'register') {
			return h(Registration, {route: this.changeRoute});
		} else if (this.state.route === 'login') {
			return h(Login, {route: this.changeRoute});
		} else if (this.state.route === 'main') {
			return h(Main, {route: this.changeRoute});
		} else if (this.state.route === 'addPost') {
			return h(AddPost, {route: this.changeRoute});
		};
	}
};