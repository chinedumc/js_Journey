const yt = new Promise (resolve => {
    setTimeout(() =>{
        console.log('getting stuff from youtube');
        resolve ({ videos: [1, 2, 3, 4, 5] });
    }, 2000);
});

const fb = new Promise (resolve => {
    setTimeout(() => {
        console.log('stuff from fb');
        resolve ({ user: 'Name' });
    },5000);
})

// We want the results to produced AFTER both functions have completed have completed running, use Promise.all
Promise.all( [yt, fb ]).then(result => console.log(result));