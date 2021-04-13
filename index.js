const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const render = require("./src/template");

// pageTemplate(answers_from_inquirer_prompts);

// Save new HTML files to the dist directory
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Create an empty array to hold team members outside of inquirer
const teamArray = [];

function runApp() {
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "mgrName",
          message: "What is the team manager's name?",
        },
        {
          type: "input",
          name: "mgrId",
          message: "What is the manager's employee ID?",
        },
        {
          type: "input",
          name: "mgrEmail",
          message: "What is the manager's email address?",
        },
        {
          type: "input",
          name: "office",
          message: "What is the manager's office number?",
        },
        {
          type: "list",
          name: "role",
          choices: ["Engineer", "Intern"],
          message: "Please select engineer or intern",
        },
      ])
      .then((response) => {
        const manager = new Manager(
          response.mgrName,
          response.mgrId,
          response.mgrEmail,
          response.office
        );
        teamArray.push(manager);
        // TODO: Execute function after ALL managers, engineers, and interns are added
        buildTeam();
      });
  }
  // function addEngineer() {

  // }
  // function addIntern() {

  // }

  function buildTeam() {
    // Create an output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
  }
}

runApp();
