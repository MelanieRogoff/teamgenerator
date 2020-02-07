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

const generateIntern = require("./lib/generateIntern");

const generateEngineer = require("./lib/generateEngineer");

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
            generateHTML(manager);
            const creation = generateHTML(answers);
            fs.writeFile('./output_htmls/manager.html', creation, (err, dt) => {
                if (err) {
                throw err;
                }
            });
            addUser();  
        }
    });
        
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
        console.log("One Team file, coming right up!!");
        const built = buildTeam(manager, intern, engineer);
        fs.writeFile('./output_htmls/teams.html', built, (err, dt) => {
            if (err) {
                throw err;
                }
        });
     };
});
                    
    
    function chooser() {
        inquirer
            .prompt([{
                type: "checkbox",
                message: "Please choose whether to add an Engineer, or an Intern.",
                name: "choice",
                choices: ["Engineer", "Intern"]
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
                        generateEngineer(engineer);
                        const engineerHTML = generateEngineer(engineer);
                            fs.writeFile('./output_htmls/engineer.html', engineerHTML, (err, dt) => {
                                if (err) {
                                    throw err;
                                    }
                            });
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
                            generateIntern(intern);
                            const internHTML = generateIntern(intern);
                            fs.writeFile('./output_htmls/intern.html', internHTML, (err, dt) => {
                                if (err) {
                                    throw err;
                                }
                            });
                            addUser();
                        })

                    }
                }
                )}
            }}
                       
initialPrompt(); //calling initial prompt

        function buildTeam(manager, intern, engineer) { 
            for (let i = 0; i < teamArray.length; i++) {
            if (teamArray[i].title === "Manager") {
                generateHTML(manager);
            }
            if (teamArray[i].title === "Intern") {
                generateIntern(intern);
            }
            if (teamArray[i].title === "Engineer") {
                generateEngineer(engineer);
            }
        }
    
    return `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
          <title>Document</title>
          <style>
            .card {
                display:inline-block;
                width: 200px;
                height: 255px;
            }
            .surround {
                border: 1px solid black;
            }
            .card-text {
                font-size: 12px;
            }
            .sep2 {
                margin-left: 80px;
            }
            .stylers {
                height: 60px;
                width: 60px;
            }
          </style>
          </head>
          <body>  
    
          <div class="jumbotron">
                    <h1 class="display-4">My Team</h1>
                  </div>

          <div class="card text-white bg-danger mb-3 dif1">
          <div class="card-header">${manager.name}</div>
              <div class="card-body">
                  <h5 class="card-text"> <img class="stylers" src="../images/coffee.png"> ${manager.title}</h5>
                  <p class="card-text surround">ID: ${manager.id}</p>
                  <p class="card-text surround">Email: ${manager.email}</p>
                  <p class="card-text surround">Office Number: ${manager.number}</p>
              </div>
          </div>  
    
          <div class="card text-white bg-danger mb-3 dif1">
          <div class="card-header">${engineer.name}</div>
              <div class="card-body">
                  <h5 class="card-text"> <img class="stylers" src="../images/glasses.png"> ${engineer.title}</h5>
                  <p class="card-text surround">ID: ${engineer.id}</p>
                  <p class="card-text surround">Email: ${engineer.email}</p>
                  <p class="card-text surround"><a href="github.com/${engineer.github}">Github</a></p>
              </div>
          </div>   
    
                <div class="card text-white bg-danger mb-3 dif1">
                <div class="card-header">${intern.name}</div>
                    <div class="card-body">
                        <h5 class="card-text"> <img class="stylers" src="../images/student.png"> ${intern.title}</h5>
                        <p class="card-text surround">ID: ${intern.id}</p>
                        <p class="card-text surround">Email: ${intern.email}</p>
                        <p class="card-text surround">School: ${intern.school}</p>
                    </div>

            </body>
            </html>`
        }