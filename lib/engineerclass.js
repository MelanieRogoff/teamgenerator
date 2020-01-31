const Employee = require('/employeeclass');

//Needs to have properties Employee has
class Engineer extends Employee {
    constructor(github) {
        super(name, id, title);
        this.github = github;
    }
    getGithub() {

    }
    getRole() {
        //override to return "Engineer"
    } 
}