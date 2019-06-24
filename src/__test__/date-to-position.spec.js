const dateToPosition = require('../date-to-position')

describe('Clock Tests', () => {
    
    test('Returns object', () => {

        const myDate = new Date(2019,5,21,1,0,0,0);
        var positionsObject = dateToPosition(myDate);
        
        expect(typeof positionsObject).toBe('object');
    
    });



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



});