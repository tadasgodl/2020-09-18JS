import {loginFromToken} from './utility/login';
import {hyperscript} from './library/hyperscript';
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
			return hyperscript('div', {class: 'yep'}, hyperscript(navigation));
		} else {
			return hyperscript('form', {class: 'yep'}, 'nop');
		}	
	}
};