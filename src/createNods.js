export function createNode(nodeName, attributes) {
	const element = document.createElement(nodeName);

	for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		};

	return element;
}