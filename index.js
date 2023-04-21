// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your GitHub username',
    name: 'gitHubUsername',
  },
  {
    type: 'input',
    message: 'what is your email address?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'what license are you using?',
    name: 'license',
    choices: ['apache', 'mit','none']
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(response => {
    console.log("writing README")
    writeToFile("user_README.md", generateMarkdown(response))
  })

}

// Function call to initialize app
init();
