const dateToPosition = require('../date-to-position')

describe('Date to Position Tests', () => {
    
    test('Returns object', () => {
        const myDate = new Date(2019,5,21,1,0,0,0);
        var positionsObject = dateToPosition(myDate);   
        expect(typeof positionsObject).toBe('object');
    });

    //test('Date is not Passed', () => {
        //var positionsObject = dateToPosition("bubbles");   
        //expect(() => {
        
      //  }).toThrowError('Function expects date');
    //});

    test('Returns hours position', () => {
        const myDate = new Date(2019,5,21,8,0,0,0);
        var positionsObject = dateToPosition(myDate);
        expect(positionsObject.hoursPosition).toEqual(240);
    });

    test('Returns different hours position', () => {
        const myDate = new Date(2019,5,21,10,0,0,0);
        var positionsObject = dateToPosition(myDate);
        expect(positionsObject.hoursPosition).toEqual(300);
    });

    test('Returns minutes position', () => {
        const myDate = new Date(2019,5,21,10,20,0,0);
        var positionsObject = dateToPosition(myDate);
        expect(positionsObject.minutesPosition).toEqual(120);
    });

    test('Returns different minutes position', () => {
        const myDate = new Date(2019,5,21,10,40,0,0);
        var positionsObject = dateToPosition(myDate);
        expect(positionsObject.minutesPosition).toEqual(240);
    });

    test('Returns seconds position', () => {
        const myDate = new Date(2019,5,24,8,21,30,0);
        var positionsObject = dateToPosition(myDate);
        expect(positionsObject.secondsPosition).toEqual(180);
    });

    test('Returns different seconds position', () => {
        const myDate = new Date(2019,5,24,8,21,15,0);
        var positionsObject = dateToPosition(myDate);
        expect(positionsObject.secondsPosition).toEqual(90);
    });

});