const Employee = require('./employeeclass');

//Needs to have properties Employee has
class Intern extends Employee {
    constructor(name, id, title, school) {//has to be in order, with the new variable called last
        super(name, id, title, "Intern"); // hard-coding the title of intern
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