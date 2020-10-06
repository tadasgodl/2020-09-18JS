import {loginFromToken} from './utility/login';
import h from './library/hyperscript';
import navigation from './components/navigation.js';
import Component from './library/Component';

export default class Main extends Component {
	/** class constructor is summoned automatically whenever it's called with [const constname = new classname] */
	constructor() {
		super();
		this.login();
	}

	login() {
		this.state.isLoggedIn = loginFromToken()
	}

	render() {
		if (this.state.isLoggedIn) {
			return h('div', {class: 'yep'}, h(navigation, {showing: true}));
		} else {
			return h('form', {class: 'yep'}, h(navigation));
		}	
	}
};