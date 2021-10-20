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

function generateMarkdown(data) {
  return `# ${data.title}

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
`;
}

module.exports = generateMarkdown;
