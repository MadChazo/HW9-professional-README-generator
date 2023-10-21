// Return license link
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      var licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "Boost Software License 1.0":
      var licenseLink = "https://www.boost.org/users/license.html";
      break;
    case "GNU AGPLv3":
      var licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html";
      break;
    case "GNU GPLv3":
      var licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "GNU LGPLv3":
      var licenseLink = "https://www.gnu.org/licenses/lgpl-3.0.en.html";
      break;
    case "MIT License":
      var licenseLink = "https://choosealicense.com/licenses/mit/";
      break;
    case "Mozilla Public License 2.0":
      var licenseLink = "https://www.mozilla.org/en-US/MPL/";
      break;
    case "The Unlicense":
      var licenseLink = "https://choosealicense.com/licenses/unlicense/";
      break;
    default:
      return;
  }
  return licenseLink;
}

// Return markdown syntax for license badge
// If no license specified, return empty string
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
    case "GNU AGPLv3":
      var licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(
        license
      )})
        `;
      break;
    case "GNU GPLv3":
      var licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    case "GNU LGPLv3":
      var licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    case "MIT License":
      var licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    case "Mozilla Public License 2.0":
      var licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    case "The Unlicense":
      var licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    default:
      return "";
  }
  return licenseBadge;
}

// Create License section of README
function renderLicenseSection(license) {
  switch (license) {
    case "Apache License 2.0":
    case "Boost Software License 1.0":
    case "GNU AGPLv3":
    case "GNU GPLv3":
    case "GNU LGPLv3":
    case "MIT License":
    case "Mozilla Public License 2.0":
      var licenseText = `The license used for this project is the ${license}. For more information about this license, visit ${renderLicenseLink(
        license
      )}.`;
      break;
    case "The Unlicense":
      var licenseText = `The license used for this project is the Unlicense. For more information about this license, visit ${renderLicenseLink(
        license
      )}.`;
      break;
    default:
      return `The license for this project was unspecified when this README was generated. Please replace this text with information about the license of your project.`;
  }
  return licenseText;
}

// Create Questions section of README
function renderQuestionSection(data) {
  let questionSection = "";
  if (data.username != "N/A") {
    questionSection += `Find me on GitHub: [${data.username}](https://github.com/${data.username})`;
  }
  if (data.username != "N/A" && data.email != "N/A") {
    questionSection += "\n\n";
  }
  if (data.email != "N/A") {
    questionSection += `Please reach out to me at ${data.email} with any additional questions.`;
  }
  return questionSection;
}

// Generate markdown for README
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

${renderQuestionSection(data)}`;
}

module.exports = generateMarkdown;
