//Accesses the DOM elements
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
 
    //Set up date and gets individual values for hours, minutes and seconds
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let milli = date.getMilliseconds();

    //Create and sets position variables
    let hrPosition = hr*(360/12);
    let minPosition = min*(360/60);
    let secPosition = sec*(360/60);
    
    //Transforms the hands of the clock using CSS
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);

