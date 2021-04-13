// Require the employee object
const Employee = require('./employee');

// Extend the employee object to create the manager object
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
}

// Export for use in index.js
module.exports = Manager;