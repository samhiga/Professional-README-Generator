// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'Title',
  },
  {
    type: 'input',
    message: 'What is your GitHub username',
    name: 'GitHub username',
  },
  {
    type: 'input',
    message: 'what is your email address?',
    name: 'email',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName)
}

// TODO: Create a function to initialize app
function init() {
   writeToFile(fileName, data)

}

// Function call to initialize app
init();
