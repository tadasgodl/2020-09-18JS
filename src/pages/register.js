import Component from '../library/Component.js';
import h from '../library/hyperscript';


export default class register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					text: 'First Name',
					placeholder: 'Test'
				},
				{
					placeholder: 'Test2',

				}
			]
		}
	}

	render() {
		// return h('button', {click: () => this.props.route('login')}, 'Check');
		const inputs = this.state.data.map(input => {
			return h('label', {}, input.text, h('input', {placeholder: input.placeholder}))
		});

		const form = h('form', {class: form}, ...inputs);
		return h('div', {class: 'register-container'}, form)
	}
}