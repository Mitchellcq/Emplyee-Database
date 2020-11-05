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
                "Add an Employee",
                "Remove an Employee",
                "View all Employees",
                "Update an Employee's Role",
                "View Manager Groups",
                "Add a Department",
                "Remove a Department",
                "View all Departments",
                "Add a Role",
                "Remove a Role",
                "View all Roles",
                "Exit"
            ]
        }
    ]).then(res => {
        switch (res.init) {
            case "Add an Employee":
                addEmployee();
                break;

            case "Remove an Employee":
                removeEmployee();
                break;

            case "View all Employees":
                viewEmployee();
                break;

            case "Update an Employee's Role":
                updateEmployee();
                break;

            case "View Manager Groups":
                viewManagerGroups();
                break;

            case "Add a Department":
                addDepartment();
                break;

            case "Remove a Deparment":
                removeDepartment();
                break;

            case "View all Departments":
                viewDepartment();
                break;

            case "Add a Role":
                addRoles();
                break;

            case "Remove a Role":
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

    console.log("Inserting a new employee.\n");

    inquirer.prompt([
        {
            type: "input",
            message: "First Name?",
            name: "first_name",
        },
        {
            type: "input",
            message: "Last Name?",
            name: "last_name"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role_id",
            choices: [1, 2, 3]
        },
        {
            type: "input",
            message: "Who is their manager?",
            name: "manager_id"
        }
    ])
        .then(res => {
            const query = connection.query(
                "INSERT INTO employees SET ?",
                res,
                function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!\n");

                    init();
                }
            );
        })
}

function removeEmployee() {

    console.log("Removing employee.\n")

    inquirer.prompt([
        {
            type: "list",
            message: "Please enter the full name of the employee you would like to remove",
            name: "employee",
            choices: employeeList
        },
    ]).then(res => {
        const query = connection.query()
    })
}

function viewEmployee() {

    console.log("Viewing all Employees.\n")

}

function updateEmployee() {

    console.log("Updating Employee info.\n")

}

function viewManagerGroups() {

    console.log("Viewing Manager group.\n")

}

function addDepartment() {

    console.log("Inserting a new Department.\n")

}

function removeDepartment() {

    console.log("Removing Department.\n")

}

function viewDepartment() {

    console.log("Viewing all Departments.\n")

}

function addRoles() {

    console.log("Inserting a new Role.\n")

}

function removeRoles() {

    console.log("Removing Role.\n")

}

function viewRoles() {

    console.log("Viewing all Roles.\n")

}