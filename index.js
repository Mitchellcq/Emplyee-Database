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
                "View Manager Groups",
                "Add Department",
                "Remove Department",
                "View all Departments",
                "Add Roles",
                "Remove Roles",
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
                viewEmployee();
                break;

            case "Update Employee Role":
                updateEmployee();
                break;

            case "View Manager Groups":
                viewManagerGroups();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Remove Deparment":
                removeDepartment();
                break;

            case "View all Departments":
                viewDepartment();
                break;

            case "Add Roles":
                addRoles();
                break;

            case "Remove Roles":
                removeRoles();
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

function addEmployee() {

}

function removeEmployee() {

}

function viewEmployee() {

}

function updateEmployee() {

}

function viewManagerGroups() {

}

function addDepartment() {

}

function removeDepartment() {

}

function viewDepartment() {

}

function addRoles() {

}

function removeRoles() {

}

function viewRoles() {

}