// const promises = new Promise(things);

// function things(res, rej) {
// 	const thingOne = 'xd';

// 	setTimeout(() => res(thingOne), 2000);
// }

// promises.then(actions).catch(failedActions);

// function actions(a) {
// 	console.log(a);
// }

// function failedActions(b) {
// 	console.log(b);
// }

const credentials = {
	name: 'jeff',
	email: 'jeff@jeff.com',
	password: 'ffej'
};

// console.log(JSON.stringify(credentials));

// fetch('http://rest.stecenka.lt/register', {
// 	headers: {
// 		'Content-type': 'application/json'
// 	},
// 	method: 'POST',
// 	body: JSON.stringify(credentials)
// })

// fetch('http://rest.stecenka.lt/login', {
// 	headers: {
// 		'Content-type': 'application/json'
// 	},
// 	method: 'POST',
// 	body: JSON.stringify(credentials)
// })

// const TOKEN = 'Bearer 16|viSxArHZOM7zeKDA1BHTtjX6g4dZrCmwuCowRKvo';

const TOKEN = 'Bearer 71|sxyjL6zIW859J3a3eliFaxi6aIX8M1aQmLz1GFmt';

// fetch('http://rest.stecenka.lt/api/posts', {
// 	headers: {
// 		'Content-type': 'application/json',
// 		'Authorization': TOKEN
// 	},
// 	method: 'POST',
// 	body: JSON.stringify({title: 'another', body: 'one'}),
// })


fetch('http://rest.stecenka.lt/api/posts', {
	headers: {
		'Content-type': 'application/json',
		'Authorization': TOKEN
	},
})
.then (res => res.json())
.then (data => console.log(data));


fetch('http://rest.stecenka.lt/api/posts/5', {
	headers: {
		'Content-type': 'application/json',
		'Authorization': TOKEN
	},
	method: 'PATCH',
	body: JSON.stringify({title: 'hello', body: 'man'})
})

.then (res => res.json())
.then (data => console.log(data));