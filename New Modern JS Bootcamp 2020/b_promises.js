const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}, ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false; 

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 3000);
    });
}



//createPosts( { title: 'Post Three', body: 'This is post three'})
//  .then(getPosts)
//   .catch(err => console.log(err)); //Helps print out the reject Error to the dom


//Promise.all
//Comment out the .then .catch code block
const promise1 = Promise.resolve('Hello World!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

//using fetch API to make http request(AJAX calls) which returns a promise. Fetch uses 2 .thens
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); 


Promise.all([promise1, promise2, promise3, promise4]).then(result => console.log(result));