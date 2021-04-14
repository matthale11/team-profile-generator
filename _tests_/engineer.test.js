const Engineer = require('../lib/engineer.js');

describe("Tests to see if engineer class exists", () => {
    it('should be an object', () => {
        const engineerObject = new Engineer();
        expect(typeof(engineerObject)).toBe('object');
    })
})