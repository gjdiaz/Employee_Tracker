const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'W@termel0ns33d!',
        database: 'employee_tracker'
    },
    console.log(`Connected to the tracker_db database`)
);

// Query databases
db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });

db.query('SELECT * FROM updaterole', function (err, results) {
    console.log(results);
  });

db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });