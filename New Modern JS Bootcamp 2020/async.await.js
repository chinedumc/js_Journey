console.log('Start');

function loginUser(email, password) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ email });
        }, 3000);
    });
};    

function getUserVideos(email) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    });    
};

function videoDetails(video) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['title of the video']);
        }, 2000);
    });
    
};

// loginUser('ed', 'hgsknfs')
// .then(user => getuserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail));

//To run the codes in sync as we would normally read it
async function displayUser() {
    const loggedInUser = await loginUser('ed', 'gdfdsgjd');
    const videos = await getUserVideos(loggedInUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}

displayUser();

console.log('Finish');