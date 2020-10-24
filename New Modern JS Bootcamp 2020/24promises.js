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
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                reject({status: 404});
            }
            else {
                resolve();
            }
        }, 1000)
    });
};

fakeRequest()
    .then(() => {
        console.log('REQUEST WORKED!');
    })
    .catch((res) => {
        console.log(res.status);
        console.log('REQUEST FAILED');
    });