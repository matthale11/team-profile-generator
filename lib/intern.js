// Require the employee object
const Employee = require('./employee');

// Extend the employee object to create the intern object
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

// Export for use in index.js
module.exports = Intern;