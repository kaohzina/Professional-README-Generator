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
    type: "checkbox",
    name: "tableOfContents",
    message: "Include in README?",
    choices: ["Installation", "Usage", "License", "Contributers", "Tests"],
  },
  {
    type: "input",
    name: "Installation",
    message: "What is used in this project?",
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes("Installation")) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "What is this project used for?",
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes("Usage")) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "License",
    message: "What license would you like to use?",
    choices: ['Eclipse','GNU','GNU GPL v3','GNU GPL v2','GNU AGPL v3','GNU AGPL v2','GNU LGPL v3','GNU FDL v1.3'],
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes("License")) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "Contributers",
    message: "Are you working with contributers?",
    default: false,
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes("Contributers")) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributersName",
    message: "Enter contributers name.",
    when: ({Contributers}) => (Contributers)
  },
  {
    type: "confirm",
    name: "Contributers",
    message: "Do you want to add another contributer?",
    default: false,
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes("Contributers")) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Tests",
    message: "How does someone test your program?",
    when: ({ tableOfContents }) => {
      if (tableOfContents.includes("Tests")) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Questions",
    message: "Do you have any questions?",
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