// This is where your main logic will lie
// Require page template which provides an anonymous function that can accept a parameter
const path = require('path');
const fs = require('fs');
const pageTemplate = require('./src/template');

pageTemplate(answers_from_inquirer_prompts);

// NOTE: Employee is the main class bc all engineers, interns, and managers are employees (extend from employee)

// Index files are considered the entry point to your application

// If this is your entry point, you must do your inquirer here

// Save new HTML files to the dist directory
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

function runApp() {
  ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.

    let array = [];
    .then((response) => {
    const employee = new Employee(response.name, response.id);
    array.push(employee);
    }
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}
runApp();