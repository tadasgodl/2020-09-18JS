export function loginFromToken() {
	let token = localStorage.getItem('token');
	if (token) {
		return true;
	} else {
		return false;
	}
}	