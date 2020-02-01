const answers = require('./../app');

class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }
    getName() {
        return `${answers.name}`;
    }
    getId() {
        return `${answers.id}`;
    }
    getEmail() {
        return `${answers.email}`;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;