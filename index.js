// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input

// const questions = [];
inquirer
    .prompt([
        {
            // when application is launched and prompt generates multiple choices
            type: 'input',
            message: 'What would you like to do?',
            // choices: View all departments, View all roles, View all employees, Add a department, Add a role, Add an employee, Update an employee role
            name: 'selectdepartment'
        },
        {
            // when user chooses to add a department
            type: 'input',
            message: 'Enter name of the department.',
            name: 'adddepartment'
        },
        {
            // when user chooses to add the role of an employee
            type: 'input',
            message: 'Add role of an employee.',
            // new prompt function for array of choices: Name, Salary, Department
            name: 'updaterole'
        },
        {
            // 
            type: 'input',
            message: 'Add employee.',
            // new prompt function for array of choices: First Name, Last Name, Role, Manager
            name: 'addemployee'
        },
        {
            type: 'input',
            message: 'Update the role of employee.',
            // new prompt function for array of choices of current role types
            name: 'employeerole'
        },
    ])
    .then((response) => {

 /*        generate readme string into a variable using template literal: response
             const data = 
*/
// add location, or table and table field where the information will be updated
`<location> ${response.selectdepartment}
<location> ${response.adddepartment}
<location> ${response.updaterole}
<location> ${response.addemployee}
<location> ${response.employeerole}`;

        fs.writeFile('seeds.sql', data, (err) =>
            err ? console.error(err) : console.log('Success!')
        ); 
    });

