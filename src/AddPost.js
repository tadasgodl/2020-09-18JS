import Component from './library/Component.js';
import h from './library/hyperscript';

export default class addPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonData: [
			{text: 'All Posts'},
			{text: 'New Post'},
			{text: 'Logout'}
			],
			inputData: [
			{text: 'Title', placeholder: 'Enter your title.', name: 'add-post-title', type: 'text'},
			{text: 'Body', placeholder: 'Write what your post is about.', name: 'add-post-body', type: 'text'}
			],
			formButtonData: [
			{type: 'submit', text: 'Post'}
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
		const allInputs = this.state.inputData.map(input => {
			return h('label', {}, input.text, h('input', {placeholder: input.placeholder, type: input.type, name: input.name}))
		})

		const formButton = this.state.formButtonData.map(fButton => {
			return h('button', {type: fButton.type}, fButton.text);
		})
		const nav = h('nav', {class: 'nav'}, ...allButtons);
		const form = h('form', {class: 'form'}, ...allInputs, ...formButton);
		const div = h('div', { submit: (e) => {
			addNewPost(e, allInputs, this.props.route)
		}}, form);
		return h('section', {class: 'mainpage'}, nav, div);
	}
}

function addNewPost(e, inputs = [], router) {

	/** input not feeding information into postInfo, fetch incomplete.*/

	e.preventDefault();

	const postInfo = {};

	fetch('http://rest.stecenka.lt/api/skelbimai', {
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer 965|Doljydys5knw0kTlZpyPM9DpELqH55IVTpAvDJ6y'
    },
    method: 'POST',
    body: JSON.stringify(postInfo)
  })
    .then(req => {
      if (req.ok) {
        return req.json();
      }
    })
    .then(res => {
      if (res) {
        router('mainpage');
      }
    });
}

