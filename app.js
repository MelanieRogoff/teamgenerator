const inquirer = require('inquirer');

const Engineer = require("./lib/engineerclass");

const Employee = require("./lib/employeeclass");

const Intern = require("./lib/internclass");

const Manager = require("./lib/managerclass");

const open = require('open');

const pdf = require('html-pdf');

const generateHTML = require("./lib/generateHTML");

let duplicateCheck = false;  //flagging this variable in order to check if there's a duplicate Manager.

let teamArray = [];

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
    ])
    .then(answers => {
        const employeeDetails = answers;
        if (employeeDetails.title == 'Manager') {
            inquirer.prompt([{
                type: "number",
                message: "What is your manager's office number?",
                name: "number"
            }, 
        ])
            .then(answers => {
                let employeeDetails = answers; 
                manager = new Manager(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.number);
                teamArray.push(manager);// ONLY pushing if duplicateCheck is false
                addUser();  
            })
       

              //REGULAR IF STATEMENT CHECKS
              if (answers.title == '' || answers.name == '' || answers.email == '' || answers.id == '' || answers.school == '' || answers.github == '' || answers.number == '') {
                console.log("Please enter a value and start again.");
            } 



    }})};
    
        
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
                            //If chooser's result was engineer ...  
                            //If chooser's result was intern ...
                        } else {
                            pdf.create(generateHTML(answers)).toFile('./output_htmls/team.pdf', function (err) {
                                if (err) return console.log(err);
                                (async () => {
                                    await open('./output_htmls/team.pdf');
                                })
                            })
                        }})


                    }
        
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
                    let employeeDetails = answers; 
                        inquirer.prompt([{
                            type: "input", 
                            message: "What is the engineer's first name?",
                            name: "engineerName"
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
                        let employeeDetails = answers;
                        engineer = new Engineer(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.github);
                        teamArray.push(engineer)//push to teamArray
                        addUser();
                    })
                }; 
                    if (answers.choice == "Intern") {
                            inquirer.prompt([{
                                type: "input", 
                                message: "What is the intern's first name?",
                                name: "internName"
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
                            let employeeDetails = answers;
                            intern = new Intern(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.github);
                            teamArray.push(intern)//push to teamArray
                            addUser();
                        })

                    }
                }
                )}
                   
               
                       