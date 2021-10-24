const { fs } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='MIT');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "yohoho"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.projectName}

## Description
${data.projectDescription}
      
## Table of Contents
[Installation](#installation)
[Usage](#Usage)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)
[License](#license)   

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## License
This project is under the [${data.License}](https://opensource.org/licenses/${data.License}) license.

## Questions
If you want to contact me you can reach me at ${data.Email} or [${data.Github}](https://github.com/${data.Github}).
`
};


module.exports = generateMarkdown;
