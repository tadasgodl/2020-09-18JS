/**
* Virtual Node creator
*/

export function hyperscript(nodeName, attributes = {}, ...children) {
	return {
	nodeName: nodeName,
	attributes: attributes,
	children: children
	};
}