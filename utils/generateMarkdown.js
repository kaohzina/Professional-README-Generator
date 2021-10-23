const { fs } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='MIT');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const createTableOfContents = (data) => {
  `${data.tableOfContents}`;
  }

const createDescription = (data) => {
`${data.projectDescription}`;
}

const createInstall = (data) => {
  if (!data.tableOfContents.includes("Installation")) {
    return "";
  }
  return `
${data.installation}`;
}

const createUsage = (data) => {
  if (!data.tableOfContents.includes("Usage")) {
    return "";
  }
  return `
  ## Usage
  ${data.usage}`
}

const createLicense =(data) => {
  if (!data.tableOfContents.includes("License")) {
    return "";
  }
  return `
  ## License
  ${data.license}`
}

const createContributing = (data) => {
  if (!data.tableOfContents.includes("Contributing")){
    return "";
  }
  return `
  ## Contributing
  ${data.contributing}`
}

const createTests = (data) => {
  if (!data.tableOfContents.includes("Tests")) {
    return "";
  }
  return `
  ## Tests
  ${data.tests}`
}

const createQuestions = (data) => {
  if (!data.tableOfContents.includes("Questions")){
    return "";
  }
  return`
  ## Questions
  ${data.questions}
  `
}




function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Description
  ${data.projectDescription}
        
        
  ## Table of Contents
  ${data.tableOfContents}

        
  ## Installation
  ${data.Installation}

  ## License
  ${data.License}

  ## Usage
  ${data.Usage}

  ## Contributing
  ${data.Contributers}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Questions}
  `
};


module.exports = generateMarkdown;
