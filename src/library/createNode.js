/**
* vNode - virtual object.
*/
export function createNode(vNode) {
  const element = document.createElement(vNode.nodeName);

  for (const attributeName in vNode.attributes) {
    element.setAttribute(attributeName, vNode.attributes[attributeName]);
  }

  vNode.children.forEach(child => {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      element.append(textNode);
    } else {
      element.append(createNode(child));
    }
  });

  return element;
};