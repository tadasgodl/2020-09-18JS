import {createNode} from './createNode';


/**
* vNode - virtual object,
* parent - DOM element.
*/
export function mount(vNode, parent) {
	const element = createNode(vNode);
	parent.append(element);
}
