import {loginFromToken} from './utility/login';
import h from './library/hyperscript';
import navigation from './components/navigation.js';
import Component from './library/Component';
import Register from './pages/Register';

export default class Main extends Component {
	/** class constructor is summoned automatically whenever it's called with [const constname = new classname] */
	constructor() {
		super();
		this.state = {
			route: 'register',
			navigationLinks: ['Home', 'Login', 'Register']
		}
		this.login();
	}

	login() {
		this.state.isLoggedIn = loginFromToken();
	}

	changeRoute = {routeName} => {
		this.setState({route: routeName});
	}

	render() {
		if (this.state.route === 'register') {
			return h(Register, {route: this.changeRoute});
		} else if (this.state.route === 'login') {
			return h(Login, {route: this.changeRoute});
		}	
	}
};