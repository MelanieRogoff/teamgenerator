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
    getRole() {
        return "Employee";
    }
    getEmail() {
        return `${answers.email}`;
    }
    
}

module.exports = Employee;