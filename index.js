const mySQL = require("mysql");
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const connection = mySQL.createConnection({
    host: "localhost",
    // Your port;
    port: 3306,
    // Your username
    user: "root",
    //please ignore this password, I don't know how to change it now ^^
    password: "Getfucked!123",
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
    });
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
        },
    ]).then(res => {
        const query = connection.query(
            "INSERT INTO employees SET ?",
            res,
            function (err, res) {
                if (err) throw err;
                console.log("Employee added.\n");

                init();
            });
    });
}

function removeEmployee() {

    console.log("Removing employee.\n");

    let employeeList = [];

    connection.query(
        "SELECT employees.first_name, employees.last_name FROM employees", (err, res) => {
            for (let i = 0; i < res.length; i++) {
                employeeList.push(res[i].first_name + " " + res[i].last_name);
            };
        });

    inquirer.prompt([
        {
            type: "list",
            message: "Please enter the full name of the employee you would like to remove",
            name: "employee",
            choices: employeeList
        },
    ]).then(res => {
        const query = connection.query(
            `DELETE FROM employees WHERE concat(first_name, ' ', last_name) = '${res.employee}'`,
            function (res, err) {
                if (err) throw err;
                console.log("Employee removed.\n");

                init();
            });
    });
}

function viewEmployee() {

    console.log("Viewing all Employees.\n");

    connection.query(
        "SELECT employees.first_name, employees.last_name, roles.title AS \"role\", managers.first_name AS \"manager\" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id GROUP BY employees.id",
        function (res, err) {
            if (err) throw err;
            console.table(res);
            init;
        });
}

function updateEmployee() {

    console.log("Updating Employee info.\n");

    connection.query("SELECT first_name, last_name, id FROM employees",
        function (res, err) {
            if (err) throw err;
            let employees = res.map(employee => ({ name: employee.first_name + " " + employee.last_name, value: employee.id }));
            inquirer.prompt([
                {
                    type: "list",
                    name: "Name",
                    message: "Which employee are you updating?",
                    choices: employees,
                },
                {
                    type: "input",
                    message: "please enter their new role id",
                    name: "role",
                },
            ]).then(res => {
                connection.query(`UPDATE employees SET role_id = ${res.role} WHERE id = ${res.Name}`,
                    function (res, err) {
                        if (err) throw err;

                        init();
                    });
            });
        });
}

function viewManagerGroups() {

    console.log("Viewing Manager groups.\n");

    connection.query("SELECT employees.first_name, employees.last_name, roles.title AS \"role\", managers.first_name AS \"manager\" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id GROUP BY employees.manager_id",
        function (res, err) {
            if (err) throw err;
            console.table(res);
            init();
        });
}

function addDepartment() {

    console.log("Inserting a new Department.\n");



}

function removeDepartment() {

    console.log("Removing Department.\n");

}

function viewDepartment() {

    console.log("Viewing all Departments.\n");

}

function addRoles() {

    console.log("Inserting a new Role.\n");

}

function removeRoles() {

    console.log("Removing Role.\n");

}

function viewRoles() {

    console.log("Viewing all Roles.\n");

}