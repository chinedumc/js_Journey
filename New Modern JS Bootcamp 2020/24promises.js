const willGoHome = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.random();
        console.log(rand);
        if (rand < 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 2000)
    
});

willGoHome.then(() => {
    console.log( 'Yes!');
});
willGoHome.catch(() => {
    console.log('No home now');
});