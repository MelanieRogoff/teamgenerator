const Employee = require('./employeeclass');

//Needs to have properties Employee has
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
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