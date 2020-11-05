const mySQL = require("mysql");
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const connection = mySQL.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "root",

    password: "Bootcamp!",
    database: "employee_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});

function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "init",
            choices: [
                "Add Employee",
                "Remove Employee",
                "View all Employees",
                "Update Employee Role",
                "Add Department",
                "View all Departments",
                "Add Roles",
                "View all Roles",
                "Exit"
            ]
        }
    ])
}