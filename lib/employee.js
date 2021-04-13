// Create a main class called employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    // Returns employee
    getRole() {
        return Employee;
    }
}

// Export employee main class for use in manager, engineer, and intern subclasses
module.exports = Employee;