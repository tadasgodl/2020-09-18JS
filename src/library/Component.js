import {createNode} from '../library/createNode';

export default class Component {
	constructor(props) {
		this.props = props;
		this.state = {};
		this.element = null;
	}
	
	setState(newState) {
		const object = {
			...this.state,
			...newState
		};
		this.state = object;
		this.updateComponent();
		console.log(newState);
	}

	updateComponent() {
		const vNode = this.render();
		const element = createNode(vNode);
		this.element.replaceWith(element);
		this.element = element;
	}
}