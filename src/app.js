import {loginFromToken} from './utility/login';
import {loginForm} from './components/loginForm';
import {registerForm} from './components/registerForm';
import {main} from './pages/main';
import {mount} from './library/mount';
import h from './library/hyperscript';
import Main from './Main';
import navigation from './components/navigation.js'
import './scss/main.scss';


const root = document.getElementById('bucket');


mount(h(Main), root);