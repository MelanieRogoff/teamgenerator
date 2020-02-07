const inquirer = require('inquirer');

const Engineer = require("./lib/engineerclass");

const Employee = require("./lib/employeeclass");

const Intern = require("./lib/internclass");

const Manager = require("./lib/managerclass");

const open = require('open');

const fs = require("fs");

let manager;

let intern;

let engineer;

const generateHTML = require("./lib/generateHTML");

const teamArray = []; //can push new things into array if it's a const

function initialPrompt() {
inquirer
    .prompt([{
            type: "checkbox",
            message: "Let's build your team. To begin, please click on Manager to create the team manager.",
            name: "title",
            choices: ["Manager"]
        },
        {
            type: "input",
            message: "What is your manager's first name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your manager's email address?",
            name: "email"
        },
        {
            type: "number",
            message: "What is your manager's ID number?",
            name: "id"
        },
        {
            type: "number",
            message: "What is your manager's office number?",
            name: "number"
        },
    ])
    .then(answers => { 
           //REGULAR IF STATEMENT CHECKS - PUT BEFORE 
           if (answers.title == '' || answers.name == '' || answers.email == '' || answers.id == '' || answers.school == '' || answers.github == '' || answers.number == '') {
            console.log("Please enter a value and start again.");
        } else {

            manager = new Manager(answers.name, answers.id, answers.email, answers.number);
            teamArray.push(manager);// ONLY pushing if duplicateCheck is false
            addUser();  
        }})

    };
        
const addUser = () => {
   inquirer.prompt([{
        "type": "confirm",
        "message": "Would you like to add another user?",
        "name": "addUser"
    },
])
.then(answers => {
    if (answers.addUser) {
        chooser();  //function for adding engineer or intern
     } else {
        const creation = generateHTML(answers);
        fs.writeFile('./output_htmls/team.html', creation, (err, dt) => {
            if (err) {
            throw err;
            }
        console.log("One Team file, coming right up!!");
     });
}})};
                    
        initialPrompt(); //calling initial prompt
    
    function chooser() {
        inquirer
            .prompt([{
                type: "checkbox",
                message: "Please choose whether to add an Engineer, or an Intern.",
                name: "choice",
                choices: ["Engineer", "Intern",]
            },
            ])
            .then (answers => {
                //IF CHOOSING ENGINEER
                if (answers.choice == "Engineer") {
                        inquirer.prompt([{
                            type: "input", 
                            message: "What is the engineer's first name?",
                            name: "name"
                        },
                        {
                            type: "input",
                            message: "What is the engineer's GitHub username?",
                            name: "github"
                        },
                        {
                            type: "input",
                            message: "What is the engineer's ID number?",
                            name: "id"
                        }, 
                        {
                        type: "input",
                        message: "What is the engineer's email address?",
                        name: "email"
                        }, 
                    ])
                    .then(answers => {
                        engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        teamArray.push(engineer)//push to teamArray
                        addUser();
                    })
                }; 
                    if (answers.choice == "Intern") {
                            inquirer.prompt([{
                                type: "input", 
                                message: "What is the intern's first name?",
                                name: "name"
                            },
                            {
                                type: "input",
                                message: "What school does the intern attend?",
                                name: "school"
                            },
                            {
                                type: "input",
                                message: "What is the intern's ID number?",
                                name: "id"
                            }, 
                            {
                                type: "input",
                                message: "What is the intern's email address?",
                                name: "email"
                            }, 
                        ])
                        .then(answers => {
                            intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                            teamArray.push(intern)//push to teamArray
                            addUser();
                        })

                    }
                }
                )}
                   
               
                       