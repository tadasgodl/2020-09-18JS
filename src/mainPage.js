import {createNode} from './createNods';
import {loginForm} from './loginForm';

export function mainPage() {
	const navigation = createNode('nav');
	const icon = createNode('img');
	icon.src = './favicon.ico';
	const home = createNode('a');
	home.innerHTML = 'Placeholder';
	const info = createNode('a');
	info.innerHTML = 'Placeholder';
	const contact = createNode('a');
	contact.innerHTML = 'Placeholder';
	const buttonHolder = createNode('div');
	const logoutButton = createNode('button');
	logoutButton.innerHTML = 'Logout';
	const postSection = createNode('section');

	let token = localStorage.getItem('token');
	let finalizeToken = `Bearer ${token}`;

	document.body.append(navigation);
	navigation.append(icon, home, info, contact, buttonHolder, postSection);
	buttonHolder.append(logoutButton);

	logoutButton.addEventListener('click', e => {
		localStorage.removeItem('token');
		document.body.removeChild(navigation);
		document.body.appendChild(loginForm());
	})


	fetch('http://rest.stecenka.lt/api/sveikinimai', {
	headers: {
		'Content-type': 'application/json',
		'Authorization':  finalizeToken
	},
	method: 'GET',
	})
	.then(res => res.json())
	.then(data => {
		data.forEach(value => {
			const constructDiv = createNode('div');
			constructDiv.classList.add('constructDiv');
			const date = createNode('p');
			date.innerHTML = value.created_at
			const title = createNode('p');
			title.innerHTML = value.title;
			const body = createNode('p');
			body.innerHTML = value.body;


			postSection.append(constructDiv)
			constructDiv.append(date, title, body);
		})
	})
}