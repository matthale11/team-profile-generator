// Require page template which provides an anonymous function that can accept a parameter
const path = require('path');
const fs = require('fs');
const pageTemplate = require('./src/template');

pageTemplate(answers_from_inquirer_prompts);

// Save new HTML files to the dist directory
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

function runApp() {
    let array = [];
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?",
    },
    {
        type: 'list',
        name: 'role',
        choices: ['Engineer', 'Intern'],
        message: "Please select engineer or intern",
    },
    ])
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