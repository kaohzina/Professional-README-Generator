const generateProjectTitle = projectName => {
  if(!projectName) {
    return '';
  }

  return `
  ### Project Name
  ${data.projectName}`;
}

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