/**
* vNode - virtual object.
*/
export function createNode(vNode) {
  const element = document.createElement(vNode.nodeName);

/**
* 
*/
  for (const attributeName in vNode.attributes) {
    if (typeof vNode.attributes[attributeName] === 'function') {
      element.addEventListener(attributeName, vNode.attributes[attributeName])
    } else {
      element.setAttribute(attributeName, vNode.attributes[attributeName]);
    }
  }

  vNode.children.forEach(child => {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      element.append(textNode);
    } else {
      element.append(createNode(child)); /** recursion */
    }
  });

  return element;
};

  // vNode.children.forEach(child => {
  //   console.log(child);
  //   if (typeof child === 'string') {
  //     const textNode = document.createTextNode(child);
  //     element.append(textNode);
  //   } else {
  //     element.append(createNode(child));
  //   }
  // });

