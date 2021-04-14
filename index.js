const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fs = require("fs");
const path = require("path");
const render = require("./src/template.js");

// pageTemplate(answers_from_inquirer_prompts);

// Save new HTML files to the dist directory
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Create an empty array to hold team members outside of inquirer
const teamArray = [];

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
      },
      {
        type: "list",
        name: "next",
        choices: ["Engineer", "Intern"],
        message: "Add engineer or add intern?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.office
      );
      // Add manager to array and run addEngineer or addIntern function based on selection
      teamArray.push(manager);
      switch (response.next) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
      {
        type: "list",
        name: "next",
        choices: ["Engineer", "Intern", "Done"],
        message: "Add engineer, add intern, or done?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      // Add engineer to array and run addEngineer, addIntern, or buildTeam function based on selection
      teamArray.push(engineer);
      switch (response.next) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Done":
          console.log(teamArray);
          buildTeam();
          break;
      }
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
      {
        type: "list",
        name: "next",
        choices: ["Engineer", "Intern", "Done"],
        message: "Add engineer, add intern, or done?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      // Add intern to array and run addEngineer, addIntern, or buildTeam function based on selection
      teamArray.push(intern);
      switch (response.next) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Done":
          console.log(teamArray);
          buildTeam();
          break;
      }
    });
}

function buildTeam() {
  // Create an output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}

// Call the addManager function to initiate the application
addManager();