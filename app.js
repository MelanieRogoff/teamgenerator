const inquirer = require('inquirer');

const Engineer = require("./lib/engineerclass");

const Employee = require("./lib/employeeclass");

const Intern = require("./lib/internclass");

const Manager = require("./lib/managerclass");

const open = require('open');

const pdf = require('html-pdf');

const generateHTML = require("./lib/generateHTML");

let duplicateCheck = true;  //flagging this variable in order to check if there's a duplicate Manager.

let teamArray = [];

const questions = ["Welcome! Let's build your team. To begin, please answer the following: What is your first name?", "What is your email?", "What is your ID?", "Are you an intern, manager, or engineer?"];


function initialPrompt() {
inquirer
    .prompt([{
            type: "checkbox",
            message: questions[3],
            name: "title",
            choices: ["Intern", "Manager", "Engineer"]
        },
        {
            type: "input",
            message: questions[0],
            name: "name"
        },
        {
            type: "input",
            message: questions[1],
            name: "email"
        },
        {
            type: "number",
            message: questions[2],
            name: "id"
        },
    ])
    .then(answers => {
        const employeeDetails = answers;
        //REGULAR IF STATEMENT CHECKS
        if (answers.title == '' || answers.name == '') {
            console.log("Please state your name and if you are an intern, engineer, or manager.");
        } else {
            console.log("Welcome, " + answers.name + "! Your title is " + answers.title + ".");
        }
        if (answers.email == '' || answers.id == '') {
            console.log("Your email and/or ID input cannot be empty. Please try again.");
        } else {
            console.log("Your email is " + answers.email + ", and your ID is " + answers.id + ".");
        }

        if (employeeDetails.title === 'Engineer') {
            addEngineer();
        } 

        if (employeeDetails.title === 'Intern') {
            addIntern();
        } 
        
        if (employeeDetails.title === 'Manager' && !duplicateCheck) {
            addManager();
         } else {
            console.log("You can only have one manager per team.");
            addUser();
        }
        
        
        
            const addUser = () => {
                inquirer.prompt([{
                        "type": "confirm",
                        "message": "Would you like to add another user?",
                        "name": "addUser"
                    }])
                    .then(answers => {
                        if (answers.addUser) {
                            initialPrompt();
                        } else {
                            pdf.create(generateHTML(answers)).toFile('./output_htmls/team.pdf', function (err) {
                                if (err) return console.log(err);
                                (async () => {
                                    await open('./output_htmls/team.pdf');
                                })
                            })
                        }})};
          initialPrompt();





          function addEngineer() {
                //NESTED INQUIRER - IF ENGINEER ASK FOR GITHUB
            inquirer.prompt([{
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "github"
                }, ])
                .then(answers => {
                    engineer = new Engineer(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.github);
                    teamArray.push(engineer)//push to teamArray
                    addUser();
                })
        };
          
          function addIntern() {
              //IF INTERN, ASK FOR SCHOOL
        if (employeeDetails.title === 'Intern') {
            inquirer.prompt([{
                    type: "input",
                    message: "What school do you go to?",
                    name: "school"
                }, ])
                .then(answers => {
                    intern = new Intern(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.school);
                    teamArray.push(intern);//push to teamArray
                    addUser();
                })
        };
          }

          function addManager() {
            inquirer.prompt([{
                    type: "number",
                    message: "What is your office number?",
                    name: "number"
                }, ])
                .then(answers => {
                    manager = new Manager(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.number);
                    teamArray.push(manager);//push to teamArray -- ONLY pushing if duplicateCheck is false
                    addUser();
                })}})}