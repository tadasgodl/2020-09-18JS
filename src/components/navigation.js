import {hyperscript} from '../library/hyperscript';

export default class Navigation {
	constructor() {
		this.navigationLinks = ['Home', 'Login', 'Register'];
	}

	render() {
		const listItems = this.navigationLinks.map(item => {
			const a = hyperscript('a', {href: 'yep'}, item);
			const li = hyperscript('li', {}, a);
			return li;
		});
		const ul = hyperscript('ul', {}, ...listItems);
		const nav = hyperscript('nav', {}, ul);
		return nav;
	}
}





// this.navigationLinks = [
// 			{
// 			title: 'home'
// 			},
// 			{
// 			title: 'login'
// 			},
// 			{
// 			title: 'register'
// 			}
// 		]