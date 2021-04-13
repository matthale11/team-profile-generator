// Create an employee object
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

// Export employee object for use in manager, engineer, and intern scripts
module.exports = Employee;