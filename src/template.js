const generateTeam = (team) => {
  // Generate html card for manager
  const generateManager = (manager) => {
    return `<div class="card m-3">
    <h3 class="bg-primary text-light p-3">${manager.name}</h3>
    <div class="card-body">
      <h4 class="card-title">Manager</h4>
      <h6 class="card-subtitle">${manager.id}</h6>
      <p class='card-text'>${manager.office}</p>
      <a class="card-link" href="mailto:${manager.email}">Email</a>
    </div>
  </div>`;
  };
  // Generate html card for engineers
  const generateEngineer = (engineer) => {
    return `<div class="card m-3">
    <h3 class="bg-primary text-light p-3">${engineer.name}</h3>
    <div class="card-body">
      <h4 class="card-title">Engineer</h4>
      <h6 class="card-subtitle">${engineer.id}</h6>
      <a class="card-link" href="mailto:${engineer.email}">Email</a>
      <a class='card-link' href='https://github.com/${engineer.github}' target='_blank'>GitHub</a>
    </div>
  </div>`;
  };
  // Generate html card for interns
  const generateIntern = (intern) => {
    return `<div class="card m-3">
    <h3 class="bg-primary text-light p-3">${intern.name}</h3>
    <div class="card-body">
      <h4 class="card-title">Intern</h4>
      <h6 class="card-subtitle">${intern.id}</h6>
      <p class='card-text'>${intern.school}</p>
      <a class="card-link" href="mailto:${intern.email}">Email</a>
    </div>
  </div>`;
  };
  const html = [];
  // For managers, engineers, and interns; filter for those values in array and create a new array
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return html.join("");
};

// Export an anonymous function to be used by index.js
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="bg-danger p-3">
      <h1 class="text-white text-center">My Team</h1>
    </header>
    <div class="d-flex flex-wrap justify-content-center">
      ${generateTeam(team)}
    </div>
  </body>
</html>
    `;
};
