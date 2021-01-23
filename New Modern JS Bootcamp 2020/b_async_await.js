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

// async function init() {
//     await createPosts( {title: 'Post Three', body: 'This is post three'} );

//     getPosts();
// }

// init();

//Using async await with fetch.
//comment out the async await block above
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json(); //similar to the first .then which cleans the data to a usable format
    
    console.log(data);
}

fetchUsers();