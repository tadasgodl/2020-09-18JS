import {loginForm} from './loginForm';

export function login() {


}

export function loginFromToken() {
	let token = localStorage.getItem('token');
	if (token) {
		return true;
	} else {
		loginForm();
		return false;
	}
}	