class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };
    //Adding a pause function to stop the timer on click of the pause button
    pause = () => {
        clearInterval(this.interval);
    };
    //Adding a function which monitors the ticks of the timer
    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
    }
    //Introducing a getter and a setter for tick() to hide the complexities seen earlier.
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
