const Employee = require('./employeeclass');
const answers = require('./../app');

//Needs to have properties Employee has
class Intern extends Employee {
    constructor(school, name, id, title) {
        super(name, id, title);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    } 
}

module.exports = Intern;