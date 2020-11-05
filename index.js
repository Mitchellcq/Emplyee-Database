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
    ]).then(res => {
        switch (res.init) {
            case "Add Employee":
                addEmployee();
                break;

            case "Remove Employee":
                removeEmployee();
                break;

            case "View all Employees":
                viewEmployees();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "View all Departments":
                viewDepartment();
                break;

            case "Add Roles":
                addRoles();
                break;

            case "View all Roles":
                viewRoles();
                break;

            case "Exit":
                connection.end();
                break;
        }
    })
}