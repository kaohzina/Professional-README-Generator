const { fs } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateProjectTitle = (data) => {};

const createInstall = (data) => {
  if (!data.tableOfContents.includes("Installation")) {
    return "";
  }
  return `
## Installation
${data.installation}`;
};

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
  return new Promise((res, rej) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        rej(err);
        return;
      }

      res({
        ok: true,
        message: 'File created!',
        return: `# ${data.title}

        ## Description
        ${createDescription(data)}
        ${createLicenseSymbol(data)}
        
        ## Table of Contents
        ${createTableOfContents(data)}
        ${createInstall(data)}
        ${createUsage(data)}
        ${createLicense(data)}
        ${createContributing(data)}
        ${createTests(data)}
        ${createQuestions(data)}
        `
      });
    });
  });
};
 
const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

module.exports = { writeFile };


module.exports = generateMarkdown;
