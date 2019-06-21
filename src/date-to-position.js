module.exports = (date) => {

    var positions = {
        hoursPosition: date.getHours()*(360/12),
        minutesPosition: date.getMinutes()*(360/60)
    };

    return positions;
}