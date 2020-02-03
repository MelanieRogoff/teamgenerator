const answers = require('./../app');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `${answers.name}`;
    }
    getId() {
        return `${answers.id}`;
    }
    getRole() {
        return "Employee";
    }
    getEmail() {
        return `${answers.email}`;
    } 
}
module.exports = Employee;