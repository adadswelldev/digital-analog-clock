module.exports = (date) => {

    function checkTypeIsDate(d) {
        if (Object.prototype.toString.call(d) === "[object Date]") {
            return true;
        } else {
            return false;
        }
    }

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