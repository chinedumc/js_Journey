class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 50); //Making the tick very frequent so the circle motion is smoother
    };
    //Adding a pause function to stop the timer on click of the pause button
    pause = () => {
        clearInterval(this.interval);
    };
    //Adding a function which monitors the ticks of the timer
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05; //0.05 corresponds to the 50ms
            if (this.onTick) {
                this.onTick();
            }
        }
        
    }
    //Introducing a getter and a setter for tick() to hide the complexities seen earlier.
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

let currentOffset = 0;
//Grab the radius of the circle and use it to calculate the perimeter
const perimeter = circle.getAttribute('r') * 2 * Math.PI; 
//Set the stroke-dasharray to the perimeter so the dash goes round the circle
circle.setAttribute('stroke-dasharray', perimeter);

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('Timer Started!');
    },
    onTick() {
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset = currentOffset - 1;
    },
    onComplete() {
        console.log('Timer Completed');
    }
});
