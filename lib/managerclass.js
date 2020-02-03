const Employee = require('./employeeclass');
const answers = require('./../app');

//Needs to have properties Employee has
class Manager extends Employee {
    constructor(officeNumber, name, id, title) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    } 
    getOfficeNumber() {
        return `${answers.number}`;
    }
}

module.exports = Manager; 