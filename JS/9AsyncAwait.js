// const show = document.querySelector('.btn')

// show.addEventListener('click', () => {console.log('hello there')})

// async returns a promise. Await waits till the Promise is settled !!!

// const example = async () => {
//   return 'hello there'
// }

// async function someFunc() {
//   const result = await example()
//   console.log(result);
//   console.log('hello world');
// }
// someFunc()

const users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Susan" },
	{ id: 3, name: "Anna" },
];

const articles = [
	{ userId: 1, articles: ["one", "two", "three"], reporter: "John" },
	{ userId: 2, articles: ["four", "five"], reporter: "Susan" },
	{ userId: 3, articles: ["six", "seven", "eight", "nine"], reporter: "Anna" },
];

// getUser("John")
// 	.then((user) => getArticles(user.id))
// 	.then((articles) => console.log(articles))
// 	.catch((err) => console.log(err));

const getDataUser = async () => {
	try {
		const user = await getUser("John");
		if (user) {
			const articles = await getArticles(user.id);
			console.log(articles);
		}
	} catch (error) {
		console.log(error);
	}
};
getDataUser();

const getDataUserId = async () => {
	try {
		const article = await getArticles(1);
		// console.log(article, "artikuls")
		if (article) {
			const theUser = await getUser(article.reporter);
			console.log(theUser.name);
		}
	} catch (error) {
		console.log(error);
	}
};
getDataUserId();

function getUser(name) {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.name === name);

		if (user) {
			return resolve(user);
		} else {
			reject(`No such user with name: ${name}`);
		}
	});
}

function getArticles(userId) {
	return new Promise((resolve, reject) => {
		const article = articles.find((user) => user.userId === userId);

		if (article) {
			return resolve(article);
		} else {
			reject(`Wrong ID`);
		}
	});
}

// 3rd Example: Fetch on APIs
fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((users) => {
		const firstUser = users[0];
		console.log(firstUser);
		return fetch(
			"https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
		);
	})
	.then((response) => response.json())
	.then((posts) => console.log(posts));

//Line 87 - 97 as Async-Await code with Second User
const myAsyncFunction = async () => {
	try {
		const usersResponse = await fetch(
			"https://jsonplaceholder.typicode.com/users"
		);
		const users = await usersResponse.json();
		const secondUser = await users[1];
		console.log(secondUser);
	
		const postsResponse = await fetch(
			"https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
		);
		const posts = await postsResponse.json();
		console.log(posts); 
	} catch (error) {
		console.log('There was an error')
	}
};
myAsyncFunction()