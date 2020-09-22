export function createNode(nodeName, attributes = {}, children = []) {
	const element = document.createElement(nodeName);

	for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		};

	children.forEach(child => {
		const textNode = document.createTextNode(child);
		element.append(textNode);
	});

	return element;
}