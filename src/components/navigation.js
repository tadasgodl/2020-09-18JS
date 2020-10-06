import h from '../library/hyperscript';
import Component from '../library/Component';

export default class Navigation extends Component {
	constructor(props) {	
		super(props);
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
}