import {loginFromToken} from './utility/login';
import {loginForm} from './components/loginForm';
import {registerForm} from './components/registerForm';
import {main} from './pages/main';
import {mount} from './library/mount';
import {hyperscript} from './library/hyperscript';

// if (loginFromToken()) {
//   main();
// } else {
//   mount(loginForm());
// }

const root = document.getElementById('bucket');
const birdup = hyperscript('div', {class: 'jeff'}, 'test', ' ye');

mount(birdup, root);
