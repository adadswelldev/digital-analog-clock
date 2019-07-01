const dateUtil = require('./date-to-position');

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
 
    const POSITIONS = dateUtil.dateToPosition(new Date());

    HOURHAND.style.transform = "rotate(" + POSITIONS['hoursPosition'] + "deg)";
    MINUTEHAND.style.transform = "rotate(" + POSITIONS['minutesPosition'] + "deg)";
    SECONDHAND.style.transform = "rotate(" + POSITIONS['secondsPosition'] + "deg)";
    
}

var interval = setInterval(runTheClock, 1000);

