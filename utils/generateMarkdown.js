const { fs } = require("fs");

function renderLicenseBadge(License) {
  
    if (License==='MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'};
  
    if (License==='BSD-3-Clause') {return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'};
    
  
    if (License==='EPL-1.0'){
    return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'};
  
    if (License==='Apache-2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'};
  
    if (License==='NONE'); {
    return ''};
}


function generateMarkdown(data) {
  return `# ${data.projectName} ${renderLicenseBadge(data.License)}
 
## Description
${data.projectDescription}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)
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
If you want to contact me you can reach me at ${data.Email} or checkout my GitHub account at [${data.Github}](https://github.com/${data.Github}).
`
};


module.exports = generateMarkdown;
