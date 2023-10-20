// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      var licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
      break;
    default:
      return;
  }
  return licenseLink;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      var licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    case "Boost Software License 1.0":
      var licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    default:
      return "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache License 2.0":
      var licenseText = `The license used for this project is the Apache License 2.0. For more information about this license, visit ${renderLicenseLink(
        license
      )}.`;
      break;
    default:
      return `The license for this project was unspecified when this README was generated. Please replace this text with information about the license of your project.`;
  }
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Table of Contents

• [Description](#description)  
• [Installation](#installation)  
• [Usage](#usage)  
• [License](#license)  
• [Contributing](#contributing)  
• [Tests](#tests)  
• [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Find me on GitHub: [${data.username}](https://github.com/${data.username})

Please reach out to me at ${data.email} with any additional questions.`;
}

module.exports = generateMarkdown;
