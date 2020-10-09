import Component from './library/Component.js';
import h from './library/hyperscript';

export default class Page extends Component {
	constructor(props) {
		super(props);
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
			return h('p', {text: button.text, click: () => {
				if (button.text === 'All Posts') {
					this.props.route('mainpage');
				} else if (button.text === 'New Post') {
					this.props.route('addPost');
				} else if (button.text === 'Logout') {
					this.props.route('login');
				}
			}}, button.text);
		})
		const nav = h('nav', {class: 'nav'}, ...allButtons);
		const div = h('div', {}); /** cant insert fetch response data*/
		return h('section', {class: 'mainpage'}, nav, div);
	}
}


function mainpageFetch() {

	/** cant insert fetch response data*/

	fetch('http://rest.stecenka.lt/api/skelbimai', {
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer 965|Doljydys5knw0kTlZpyPM9DpELqH55IVTpAvDJ6y',
    },
    method: 'GET'
  	})
  	.then(req => req.json())
  	.then(response => {
  		response.forEach(res => {
  			const title = h('p', {class: 'post-title'}, res.title);
  			const body = h('p', {class: 'post-body'}, res.body)
  			const div = h('div', {class: 'post-container'}, title, body);
  			return div;
  		})
  	})
}
