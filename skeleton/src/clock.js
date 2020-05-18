import {htmlGenerator} from "./warmup.js"

class Clock {
    constructor() {
        // 1. Create a Date object.
        const currentTime = new Date();

        // 2. Store the hour, minute, and second.
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        const timeString = [this.hours, this.minutes, this.seconds].join(":");

        // if (this.hours < 10 && this.minutes < 10 && this.seconds < 10) {
        //     console.log(`0${this.hours}:0${this.minutes}:0${this.seconds}`)
        // } else if (this.minutes < 10 && this.seconds < 10) {
        //     console.log(`${this.hours}:0${this.minutes}:0${this.seconds}`)
        // } else if (this.seconds < 10) {
        //     console.log(`${this.hours}:${this.minutes}:0${this.seconds}`)
        // } else {
        //     console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
        // }
        // Use console.log to print it.
        htmlGenerator(timeString, clockElement)
    }

    _tick() {
        // 1. Increment the time by one second.
        this._incrementSeconds();

        // 2. Call printTime.
        this.printTime();
    }

    _incrementSeconds() {
        // 1. Increment the time by one second.
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours = (this.hours + 1) % 24;
    }
}

const clockElement = document.getElementById("clock");
const clock = new Clock();

