import {createNode} from '../library/createNode';
import {user} from '../utility/login';
import {sveikinimas} from '../components/sveikinimas';
import {addPostForm} from '../components/addPostForm';
import {mount} from '../library/mount';

export function main() {
  fetch('http://rest.stecenka.lt/api/sveikinimai', {
    headers: {
      'Content-type': 'application/json',
      'Authorization': user.token,
    }
  })
    .then(response => response.json())
    .then(sveikinimai => {
      const sveikinimuElementai = sveikinimai.map(sveikinimasData => sveikinimas(sveikinimasData));
      const main = createNode('main', {}, ...sveikinimuElementai);
      mount(main);
    });
}
