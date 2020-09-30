import {loginFromToken} from './utility/login';
import {hyperscript} from './library/hyperscript';

export default class Main {
	constructor() {
		this.login();
	}

	login() {
		this.isLoggedIn = loginFromToken()
	}

	render() {
		if (this.isLoggedIn) {
			return hyperscript('div', {class: 'yep'}, 'yep');
		} else {
			return hyperscript('div', {class: 'yep'}, 'nope');
		}
		
	}
};