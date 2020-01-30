const inquirer = require('inquirer');

const questions = ["Welcome! Let's build your engineering team. To begin, please answer the following: What is your name?", "What is your email?", "What is your ID?", "Please indicate if you are an intern, manager, or engineer"];

inquirer
  .prompt([
    {
      type: "checkbox",
      message: questions[3],
      name: "title",
      choices: [
        "intern", //this references colors from  generateHTML.js
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
        type: "input",
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
      if (answers.name == '') {
        console.log("What is your name?");
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
    });