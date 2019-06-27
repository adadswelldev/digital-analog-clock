//Require not working
const dateToPosition = require('./date-to-position');

//Accesses the DOM elements
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
 
    const 
    {
        hoursPosition,
        minutesPosition,
        secondsPosition,
    } = dateToPosition(new Date());
    
    //Transforms the hands of the clock using CSS
    HOURHAND.style.transform = "rotate(" + hoursPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutesPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondsPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);

