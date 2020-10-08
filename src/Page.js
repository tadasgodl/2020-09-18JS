import Component from './library/Component.js';
import h from './library/hyperscript';

export default class Page extends Component {
	constructor() {
		super();
		this.state = {
			buttonData: [
			{text: 'All Posts'},
			{text: 'New Post'},
			{text: 'Logout'}
			]
		}
	}

	render() {
		const allButtons = this.state.buttonData.map(button => {
			return h('p', {}, button.text);
		})
		const nav = h('nav', {class: 'nav'}, ...allButtons);
		const div = h('div', {}, 'main page info');
		return h('section', {class: 'mainpage'}, nav, div);
	}
}