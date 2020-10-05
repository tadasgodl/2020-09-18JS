import {loginFromToken} from './utility/login';
import h from './library/hyperscript';
import navigation from './components/navigation.js';

export default class Main {
	/** class constructor is summoned automatically whenever it's called with [const constname = new classname] */
	constructor() {
		this.login();
	}

	login() {
		this.isLoggedIn = loginFromToken()
	}

	render() {
		if (this.isLoggedIn) {
			return h('div', {class: 'yep'}, h(navigation));
		} else {
			return h('form', {class: 'yep'}, h(navigation));
		}	
	}
};