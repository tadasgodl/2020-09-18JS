import {createNode} from '../library/createNode';

export function sveikinimas(sveikinimasData) {
  const title = createNode('h2', {}, sveikinimasData.title);
  const body = createNode('p', {}, sveikinimasData.body);

  const article = createNode('article', {}, title, body);

  return article;
}
