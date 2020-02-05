const Employee = require('./employeeclass');

//Needs to have properties Employee has
class Engineer extends Employee {
    constructor(name, id, email, github) {//the order of the Employee constructor was: name, id, email -- therefore, we must have that first, THEN github, the new variable.
        super(name, id, email, "Engineer"); //The employee title was hard-coded in employeeclass -- therefore, we must hard-code the corresponding title here in order to override the getRole() function. 
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