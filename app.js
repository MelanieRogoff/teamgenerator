const inquirer = require('inquirer');

const open = require('open');

const pdf = require('html-pdf');

const generateHTML = require("./lib/generateHTML");

const questions = ["Welcome! Let's build your team. To begin, please answer the following: What is your first name?", "What is your email?", "What is your ID?", "Are you an intern, manager, or engineer?"];

let teamArray = [];

function initialPrompt() {
inquirer
    .prompt([{
            type: "checkbox",
            message: questions[3],
            name: "title",
            choices: [
                "intern",
                "manager",
                "engineer",
            ]
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


        //NESTED INQUIRER - IF ENGINEER ASK FOR GITHUB
        if (answers.title == 'engineer') {
            inquirer.prompt([{
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "github"
                }, ])
                .then(answers => {
                    const github = answers.github;
                    console.log(github);
                    //push to teamArray
                    addUser();
                })
        }


        //IF INTERN, ASK FOR SCHOOL
        if (answers.title == 'intern') {
            inquirer.prompt([{
                    type: "input",
                    message: "What school do you go to?",
                    name: "school"
                }, ])
                .then(answers => {
                    const school = answers.school;
                    console.log(school);
                    addUser();
                })

        }

        //IF MANAGER, ASK FOR OFFICE #
        if (answers.title == 'manager') {
            inquirer.prompt([{
                    type: "number",
                    message: "What is your office number?",
                    name: "number"
                }, ])
                .then(answers => {
                    const officeNumber = answers.number;
                    console.log(officeNumber);
                    addUser();
                })

            }})
        };
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