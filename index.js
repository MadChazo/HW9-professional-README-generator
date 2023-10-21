// Packages needed for this app
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Questions array
const questions = [
  {
    type: "input",
    message: "Enter the title of your project.",
    name: "title",
    default: "Untitled Project",
  },
  {
    type: "input",
    message: "Enter a description of your project.",
    name: "description",
    default: "",
  },
  {
    type: "input",
    message: "Enter any installation instructions for your application.",
    name: "installation",
    default: "N/A",
  },
  {
    type: "input",
    message: "Enter usage instructions for your application.",
    name: "usage",
    default: "",
  },
  {
    type: "input",
    message: "Enter any contribution guidelines for your project.",
    name: "contributing",
    default: "N/A",
  },
  {
    type: "input",
    message: "Enter any test instructions for your application.",
    name: "tests",
    default: "N/A",
  },
  {
    type: "list",
    message:
      "Which license is your project covered under?\n If you are unsure, check out https://choosealicense.com for some guidelines.\n If you don't see your license here, choose Other, and make sure to edit your generated README to contain your license information.",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "MIT License",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "Other",
    ],
    name: "license",
    default: "Other",
  },
  {
    type: "input",
    message:
      "Enter your GitHub username.\n (This will be used to link to your GitHub profile, so it is case-sensitive.)",
    name: "username",
    default: "N/A",
  },
  {
    type: "input",
    message:
      "Enter your email address.\n (This will be used for receiving questions about your project.)",
    name: "email",
    default: "N/A",
  },
];

// Write to README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("myREADME created.")
  );
}

// Initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      var mdText = generateMarkdown(answers);
      console.log(mdText);
      return answers;
    }).then(writeToFile("myREADME.md", data));
}

// Function call to initialize app
init();
