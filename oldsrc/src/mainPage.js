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
	const form = createNode('form');
	form.classList.add('post-form');
	const titleInput = createNode('input');
	const bodyInput = createNode('textarea');
	const buttonPost = createNode('button');
	buttonPost.innerHTML = 'Post';

	let check = titleInput.innerHTML;

	let token = localStorage.getItem('token');
	let finalizeToken = `Bearer ${token}`;

	document.body.append(navigation);
	navigation.append(icon, home, info, contact, buttonHolder, postSection, form);
	form.append(titleInput, bodyInput, buttonPost);
	buttonHolder.append(logoutButton);

	buttonPost.addEventListener('click', e => {
		let newPost = {
			title: `${titleInput.value}`,
			body: `${bodyInput.value}`
		}
		e.preventDefault();
		fetch('http://rest.stecenka.lt/api/sveikinimai', {
			headers: {
				'Content-type': 'application/json',
				'Authorization': finalizeToken
			},
			method: 'POST',
			body: JSON.stringify(newPost)
		})
		window.location.reload(true);
	})

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
			const title = createNode('p');
			title.innerHTML = value.title;
			const body = createNode('p');
			body.innerHTML = value.body;
			const editButton = createNode('button');
			editButton.innerHTML = 'Edit';
			editButton.classList.add('edit-button');
			const deleteButton = createNode('button');
			deleteButton.innerHTML = 'Delete';
			deleteButton.classList.add('delete-button');

			const postNumber = value.id;

			deleteButton.addEventListener('click', e => {
				fetch(`http://rest.stecenka.lt/api/sveikinimai/${postNumber}`, {
					headers: {
						'Content-type': 'application/json',
						'Authorization': finalizeToken
					},
					method: 'DELETE'
				})
				.then(res => {
					if (res.ok) {
						return res.json();
					}
				})
				.then(answer => {
					if (answer) {
						window.location.reload(true);
					}
				})
			})


			postSection.append(constructDiv)
			constructDiv.append(title, body, editButton, deleteButton);
		})
	})
}