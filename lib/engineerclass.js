const Employee = require('./employeeclass');

//Needs to have properties Employee has
class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    } 
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer; 