import Component '../library/Component';
import h from '../library/hyperscript';


export default class Register extends Component {
	consutructor(props) {
		super(props);
		this.state = {
			inputs: [
				{
					labelText: 'Test',
					placeholder: 'Test'
				},
				{
					placeholder: 'Test2'
				}
			];
		}
	}

	render() {
		return h('button', {click: () => this.props.route('login')}, 'Check');
	}
}