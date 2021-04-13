// Require the employee main class
const Employee = require('./employee');

// Extend the employee class to create the intern subclass
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        
    }
    // Overridden to return intern
    getRole() {

    }
}

// Export for use in index.js
module.exports = Intern;