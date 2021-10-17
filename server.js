const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database`)
);

// finish the rest of this file