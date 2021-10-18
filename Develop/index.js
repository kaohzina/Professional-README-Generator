// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
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
        console.log('Enter project .');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Usage Information',
    message: 'What is this project used for?',
    validate: usageName => {
      if (usageName) {
        return true;
      } else {
        console.log('Enter project purpose.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'License',
    message: 'What license would you like to use?',
    choices: [],
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
    type: 'confirm',
    name: 'Contributers',
    message: 'Are you working with contributers?',
    default: false
  },
  {
    type: 'input',
    name: 'Name(s) of contributor(s).',
    message: 'List the name(s) of your contributor(s).',
    when: ({ Contributers }) = Contributers,
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
init();
