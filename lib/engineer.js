// Require the employee main class
const Employee = require('./employee');

// Extend the employee class to create the engineer subclass
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    // Overridden to return engineer
    getRole() {
        return "Engineer";
    }
}

// Export for use in index.js
module.exports = Engineer;