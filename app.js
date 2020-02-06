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
              //REGULAR IF STATEMENT CHECKS
              if (answers.title == '' || answers.name == '' || answers.email == '' || answers.id == '' || answers.school == '' || answers.github == '' || answers.number == '') {
                console.log("Please enter a value and start again.");
            } 

        const employeeDetails = answers;
        //INTERN CHECK
        if (employeeDetails.title == 'Intern') {
            inquirer.prompt([{
                type: "input",
                message: "What school do you go to?",
                name: "school"
                },
            ])
        .then(answers => {
          intern = new Intern(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.school);
          teamArray.push(intern);//push to teamArray
          addUser();
        })
    };
    //ENGINEER CHECK
    if (employeeDetails.title == 'Engineer') {
        inquirer.prompt([{
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        }, 
        ])
        .then(answers => {
            engineer = new Engineer(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.github);
            teamArray.push(engineer)//push to teamArray
            addUser();
        })
    }

    //MANAGER CHECK + DUPLICATE CHECK
        if (employeeDetails.title == 'Manager' && !duplicateCheck) {
            inquirer.prompt([{
                type: "number",
                message: "What is your office number?",
                name: "number"
            }, 
        ])
            .then(answers => {
                manager = new Manager(employeeDetails.name, employeeDetails.id, employeeDetails.email, answers.number);
                teamArray.push(manager);// ONLY pushing if duplicateCheck is false
                addUser();  
            })
       
        //RIGHT NOW, MANAGER CAN STILL DUPLICATE. 



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
                            initialPrompt();
                        } else {
                            pdf.create(generateHTML(answers)).toFile('./output_htmls/team.pdf', function (err) {
                                if (err) return console.log(err);
                                (async () => {
                                    await open('./output_htmls/team.pdf');
                                })
                            })
                        }})




                    }
        
        initialPrompt();
    
