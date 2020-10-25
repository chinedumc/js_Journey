// const willGoHome = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         console.log(rand);
//         if (rand < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 2000)
    
// });

// willGoHome.then(() => {
//     console.log( 'Yes!');
// });
// willGoHome.catch(() => {
//     console.log('No home now');
// });

//RESOLVING - REJECTING WITH VALUES
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if (rand < 0.5) {
//                 reject({status: 404});
//             }
//             else {
//                 resolve();
//             }
//         }, 1000)
//     });
// };

// fakeRequest()
//     .then(() => {
//         console.log('REQUEST WORKED!');
//     })
//     .catch((res) => {
//         console.log(res.status);
//         console.log('REQUEST FAILED');
//     });

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pages = {
//                 '/users': [
//                     {id: 1, username: 'Bilbo'},
//                     {id: 2, username: 'Esmerelda'}
//                 ],
//                 '/about': 'This is the about page!'
//             };
//             const data = pages[url];
//             if (data) {
//                 resolve({ status: 200, data});
//             }
//             else {
//                 reject({ status: 404});
//             }
//         }, 1000)
//     });
// };

// fakeRequest('/users')
//     .then((res) => {
//         console.log('Status Code', res.status);
//         console.log('Data', res.data);
//         console.log('REQUEST WORKED!');
//     })
//     .catch((res) => {
//         console.log(res.status);
//         console.log('REQUEST FAILED');
//     });

    //PROMISE CHAINING
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    {id: 1, username: 'Bilbo'},
                    {id: 5, username: 'Esmerelda'}
                ],
                '/users/1' : {
                    id: 1,
                    username: 'Bilbo',
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: 454321
                },
                '/users/5' : {
                    id: 5,
                    username: 'Esmerelda',
                    upvotes: 571,
                    city: 'Honolulu'
                },
                '/posts/454321': {
                    id: 454321,
                    title: 'Introduction of Mr Man'
                },
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data}); //resolve with a value!
            }
            else {
                reject({ status: 404}); //reject with a value!
            }
        }, 1000);
    });
};

fakeRequest('/users')
.then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
})
.then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`)
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log('OH NO!', err);
});    