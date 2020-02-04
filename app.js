const inquirer = require('inquirer');

const open = require('open');

const pdf = require('html-pdf');

const generateHTML = require("./lib/generateHTML"); 

const questions = ["Welcome! Let's build your team. To begin, please answer the following: What is your first name?", "What is your email?", "What is your ID?", "Are you an intern, manager, or engineer?"];
inquirer
  .prompt([
    {
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
      if (answers.title == '') {
      console.log("Are you an engineer, intern, or manager? Please choose again.");
      } else {
      console.log("You indicated that your title is " + answers.title + "!");
      }

    //NESTED INQUIRER - IF ENGINEER ASK FOR GITHUB
      if (answers.title == 'engineer') {
        inquirer.prompt([
      { 
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
      },
      ])
      .then(answers => {
        const github = answers.github;    
        console.log(github);
      });

      //IF INTERN, ASK FOR SCHOOL

  if (answers.title == 'intern') {
        inquirer.prompt([
      { 
        type: "input",
        message: "What school do you go to?",
        name: "school"
      },
      ])
      .then(answers => {
        const school = answers.school;    
        console.log(school);
      });

   //IF MANAGER, ASK FOR OFFICE #
      if (answers.title == 'manager') {
        inquirer.prompt([
        { 
          type: "number",
          message: "What is your office number?",
          name: "number"
        },
        ])
      .then(answers => {
        const officeNumber = answers.number;    
        console.log(officeNumber);
      })

      //REGULAR IF STATEMENT CHECKS
      if (answers.name == '') {
        console.log("What is your first name?");
      } else {
      console.log("Welcome, " + answers.name + "!")
      }

      if (answers.email == '') {
          console.log("You don't have an email? Please try again.");
      } else {
          console.log("Your email is " + answers.email + ".");
      }

      if (answers.id == '') {
          console.log("Please enter your ID.");
      } else {
          console.log("Your ID is " + answers.id + ".");
      }
      module.exports = github;
    }
    
    pdf.create(generateHTML(answers)).toFile('./team.pdf', function(err) { 
         if (err) return console.log(err);
         (async () => { 
           await open('.team.pdf');
         })()
        })             
       .catch(error => {
         console.log(error)
       })
      }
      }});
