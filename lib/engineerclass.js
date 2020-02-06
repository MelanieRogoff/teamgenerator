const Employee = require('./employeeclass');

//Needs to have properties Employee has
class Engineer extends Employee {
    constructor(name, id, email, github) {//order of Employee constructor was: name, id, email -- therefore, have that first, THEN github, the new variable.
        super(name, id, email, "Engineer"); //employee title=hard-coded in employeeclass -- therefore, hard-code the corresponding title here in order to override the getRole() function. 
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