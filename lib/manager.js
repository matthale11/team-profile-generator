// Require the employee main class
const Employee = require('./employee');

// Extend the employee class to create the manager subclass
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
    // Overridden to return manager
    getRole() {
        return "Manager";
    }
}

// Export for use in index.js
module.exports = Manager;