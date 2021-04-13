// Create div page elements with bootstrap

// const createTeam = team => {
// const  createManager = manager = {
//     ` return ${manager.getName()} etc etc`
// }
// const html = [];
//     html.push(team
//         .filter(employee => employee.getRole() === "Manager")
//         .map(manager => createManager(manager))
//     );
//     return html.join("");
// }

// Export an anonymous function (see class example) rather than an object
// Use template literals to pass in object values
module.exports = team => {
    console.log(team)
    return `
    PASTE HTML ${buildTeam(team)}
    `
}