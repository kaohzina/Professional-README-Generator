const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown =  require('./utils/generateMarkdown');

function promptUser(){
  return inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
    validate: (projectName) => {
      if (projectName) {
        return true;
      } else {
        console.log("Enter project title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "What is the project about?",
    validate: (projectDescription) => {
      if (projectDescription) {
        return true;
      } else {
        console.log("Enter project description.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Installation",
    message: "What are the installation instructions?"
  },
  {
    type: "input",
    name: "Usage",
    message: "What is this project used for?"
  },
  {
    type: "list",
    name: "License",
    message: "What license would you like to use?",
    choices: ['MIT','BSD-3-Clause','EPL-1.0','Apache-2.0', 'NONE'],
  },
  {
    type: "input",
    name: "Contributing",
    message: "How do you contribute to this project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "How does someone test your program?",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter your email address.",
  },
  {
    type: "input",
    name: "Github",
    message: "Enter your GitHub username.",
  },
  ]);
}
  
async function init(){
  const data = await promptUser();
  const generateReadMe = generateMarkdown(data)
  fs.writeFile('./dist/README.md', generateReadMe, err => {
    if (err) { reject(err); return;}
  });
};
init();