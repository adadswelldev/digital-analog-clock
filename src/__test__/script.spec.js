const dateToPosition = require('../date-to-position')

describe('Clock Tests', () => {
    test('Returns hours position', () => {

        const myDate = new Date(2019,5,21,8,0,0,0);
        
        expect(dateToPosition(myDate)).toEqual({
            hoursPosition: 240 
        });
    
    });

});