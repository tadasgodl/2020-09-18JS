import h from '../library/hyperscript';
import {createNode} from '../library/createNode';

export default class Navigation {
	constructor() {
		
		this.state = {
			navigationLinks: ['Home', 'Login', 'Register'],
			isActive: false
		};
	}

	render() {
		const listItems = this.state.navigationLinks.map(item => {
			const a = h('a', {href: ''}, item);
			const li = h('li', {}, a);
			return li;
		});
		const ul = h('ul', {}, ...listItems);
		const icon = h('i', {class: 'fas fa-bars'})
		const navBurger = h('div', {class: 'burger', click: () => this.active()}, icon);
		const nav = h('nav', {}, ul, navBurger);

		return h('nav', {}, this.state.isActive ? ul : '', navBurger);
	}

	active(e) {
		this.setState({isActive: !this.state.isActive});
	}


	setState(newState) {
		const object = {
			...this.state,
			...newState
		};
		this.state = object;
		this.updateComponent();
		console.log(this.state);
	}

	updateComponent() {
		const vNode = this.render();
		const element = createNode(vNode);
		this.element.replaceWith(element);
		this.element = element;
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