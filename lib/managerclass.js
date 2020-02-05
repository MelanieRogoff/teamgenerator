const Employee = require('./employeeclass');
const answers = require('../app');

//Needs to have properties Employee has
class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    } 
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager; 