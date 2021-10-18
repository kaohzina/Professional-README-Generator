// TODO: Include packages needed for this application
const fs = requires('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
let readMeContent = {}

const questions = [
  {
    type: 'input',
    name: 'Project name',
    message: 'What is the name of your project?',
    validate: projectName => {
      if (projectName) {
        return true;
      } else {
        console.log('Enter project title.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Project Description',
    message: 'What is the project about?',
    validate: projectDescription => {
      if (projectDescription) {
        return true;
      } else {
        console.log('Enter project description.');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'Table of Contents',
    message: 'Include in README?',
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests'] 
  },
  {
    validate: tableOfContents => {
      if (tableOfContents) {
        return true;
      } else {
        console.log('Select what to include in README.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What is used in this project?',
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes('Installation')){
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Usage Information',
    message: 'What is this project used for?',
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes('Usage')){
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'License',
    message: 'What license would you like to use?',
    choices: [],
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes('License')){
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'Contributers',
    message: 'Are you working with contributers?',
    default: false
  },
  {
    type: 'input',
    name: 'contributersName',
    message: 'Enter contributers name.'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'How does someone test your program?',
    validate: titleName => {
      if (titleName) {
        return true;
      } else {
        console.log('');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Do you have any questions?'
  },
];
const promptUser = () => {
  return inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init() {
  return inquirer.prompt(questions).then(response => {readMeContent = response},
  };
