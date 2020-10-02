import {loginFromToken} from './utility/login';
import {loginForm} from './components/loginForm';
import {registerForm} from './components/registerForm';
import {main} from './pages/main';
import {mount} from './library/mount';
import {hyperscript} from './library/hyperscript';
import Main from './Main';
import navigation from './components/navigation.js'
import './scss/main.scss';

// if (loginFromToken()) {
//   main();
// } else {
//   mount(loginForm());
// }

const root = document.getElementById('bucket');

// mount(loginForm(), root);

// const mainObj = new Main();

// mount(mainObj.render(), root);


mount(hyperscript(Main), root);