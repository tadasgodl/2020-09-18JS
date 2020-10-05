/**
* Virtual Node creator
*/

export default function hyperscript(nodeNameOrComponent, attributes = {}, ...children) {
	return { nodeNameOrComponent, attributes, children}
};