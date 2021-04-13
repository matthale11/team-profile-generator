// Require the employee object
const Employee = require('./employee');

// Extend the employee object to create the engineer object
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

// Export for use in index.js
module.exports = Engineer;