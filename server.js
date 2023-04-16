
const inquirer = require('inquirer');
// const mssql = require("mysql");
const dbEnquiry = require('./connection');

//const connection = require('.connection');

const questions = [
  {
    name: 'choices',
          type: 'list',
          message: 'Please select an option:',
          choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'View All Employees By Department',
            'View Department Budgets',
            'Update Employee Role',
            'Update Employee Manager',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Remove Employee',
            'Remove Role',
            'Remove Department',
            'Exit'
            ]
}];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });
function start() {
    inquirer.prompt(questions)
    .then((response) => {
        dbEnquiry(response.options);
    })};
// A function to initialize app
function init() {
    console.log({
        name: "Employee Tracker",
    })
    start();
}

// Function call to initialize app
init();


exports.start = start;
