(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.dateToPosition = (date) => {
    
    if (checkTypeIsDate(date) === false) {
        throw "Function expects date";
    }

    var positions = {
        hoursPosition: date.getHours()*(360/12),
        minutesPosition: date.getMinutes()*(360/60),
        secondsPosition: date.getSeconds()*(360/60)
    };

    return positions;
}

function checkTypeIsDate(d) {
    if (Object.prototype.toString.call(d) === "[object Date]") {
        return true;
    } else {
        return false;
    }
}
},{}],2:[function(require,module,exports){
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


},{"./date-to-position":1}]},{},[2]);
