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

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    {id: 1, username: 'Bilbo'},
                    {id: 2, username: 'Esmerelda'}
                ],
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data});
            }
            else {
                reject({ status: 404})
            }
        }, 1000)
    });
};

fakeRequest('/users')
    .then((res) => {
        console.log('Status Code', res.status);
        console.log('Data', res.data);
        console.log('REQUEST WORKED!');
    })
    .catch((res) => {
        console.log(res.status);
        console.log('REQUEST FAILED');
    });