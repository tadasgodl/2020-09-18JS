/**
* Virtual Node creator
*/

export function hyperscript(nodeNameOrComponent, attributes = {}, ...children) {
	return { nodeNameOrComponent, attributes, children}
};