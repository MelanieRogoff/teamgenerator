const Employee = require('./employeeclass');

//Needs to have properties Employee has
class Intern extends Employee {
    constructor(school) {
        super(name, id, title);
        this.school = school;
    }
    getSchool() {
        console.log(`${answers.school}`);
    }
    getRole() {
    //override to return "Intern"
    } 
}