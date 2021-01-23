// console.log('Start');

// setTimeout(() => {
//     console.log('We are in the time out')
// }, 2000);

// console.log('End');

//Another Example
console.log('Start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        callback({ email });
    }, 3000);
}

function getuserVideos(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 2000);
}

function videoDetails(video, callback) {
    setTimeout(() => {
        callback(['title of the video']);
    }, 2000);
}

const user = loginUser('devedf@goomail.com', 123456, user => {
    console.log(user);
    getuserVideos( user, videos => {
        console.log(videos);
        videoDetails(user, video => {
            console.log(video);
        })
    })
});

console.log('Finish');