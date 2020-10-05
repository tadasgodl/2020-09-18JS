/**
* vNode - virtual object.
*/
export function createNode( {nodeNameOrComponent, attributes, children} ) {
  /** checking if returned object is a function, if so, sending it to renderComponent and ending createNode function prematurely */
  if (typeof nodeNameOrComponent === 'function') {
    return renderComponent(nodeNameOrComponent, attributes);
  }
  /** if element is not a function (and is a string), function carries on normally */
  const element = document.createElement(nodeNameOrComponent);

  for (const attributeName in attributes) {
    if (typeof attributes[attributeName] === 'function') {
      element.addEventListener(attributeName, attributes[attributeName])
    } else {
      element.setAttribute(attributeName, attributes[attributeName]);
    }
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      element.append(textNode);
    } else {
      element.append(createNode(child)); /** recursion, sends child element over createNode function again */
    }
  });

  return element;
};

/** takes arguments from createNode function and summons a class constructor in this case from Main.js file*/
function renderComponent(classComponent, attributes) {
  const component = new classComponent(attributes);
  component.element = createNode(component.render());
  console.log(component, component.element)
  return component.element;
}
