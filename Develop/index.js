// TODO: Include packages needed for this application

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
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleName => {
      if (titleName) {
        return true;
      } else {
        console.log('Enter project title.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleName => {
      if (titleName) {
        return true;
      } else {
        console.log('Enter project title.');
        return false;
      }
    }
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
