const generateTeam = (team) => {
  const generateManager = (manager) => {
    `<div class="card m-3">
    <h3 class="bg-primary text-light p-3">${manager.getName()}</h3>
    <div class="card-body">
      <h4 class="card-title">Manager</h4>
      <h6 class="card-subtitle">Employee ID</h6>
      <p class='card-text'>Office #</p>
      <a class="card-link" href="mailto:mhale@factharbor.com">Email</a>
    </div>
  </div>`;
  };
  const generateEngineer = (engineer) => {
    `<div class="card m-3">
    <h3 class="bg-primary text-light p-3">${engineer.getName()}</h3>
    <div class="card-body">
      <h4 class="card-title">Engineer</h4>
      <h6 class="card-subtitle">Employee ID</h6>
      <a class="card-link" href="mailto:mhale@factharbor.com">Email</a>
      <a class='card-link' href='https://github.com/matthale11' target='_blank'>GitHub</a>
    </div>
  </div>`;
  };
  const generateIntern = (intern) => {
    `<div class="card m-3">
    <h3 class="bg-primary text-light p-3">${intern.getName()}</h3>
    <div class="card-body">
      <h4 class="card-title">Intern</h4>
      <h6 class="card-subtitle">Employee ID</h6>
      <p class='card-text'>School</p>
      <a class="card-link" href="mailto:mhale@factharbor.com">Email</a>
    </div>
  </div>`;
  };
  const html = [];
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

// Export an anonymous function (see class example) rather than an object
// Use template literals to pass in object values
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
