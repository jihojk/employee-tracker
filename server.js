// requires
var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "stupidSql",
    database: "emp_tracker_db"
});

connection.connect(function(err) {
    if (err) throw err;
})

// Iquirer prompts

const questions =[
    {
        type: "list",
        name: "actions",
        message: "Select an action",
        choices: [
            'View all employees',
            'View all roles',
            'View all departments',
            'Add an employee',
            'Add a role',
            'Add a department',
            'Update an employee role'
        ]
    }
];

const addEmployeePrompt = [
    {
        type: "input",
        name: "firstName",
        message: "First Name: "
    },
    {
        type: "input",
        name: "lastName",
        message: "Last Name: "
    },
    {
        type: "input",
        name: "empRole",
        message: "Role Id Number: "
    },
    {
        type: "input",
        name: "empManagerId",
        message: "Manager Id Number: "
    },
];

const addRolePrompt = [
    {
        type: "input",
        name: "roleTitle",
        message: "Role Title: "
    },
    {
        type: "input",
        name: "roleSalary",
        message: "Salary: "
    },
    {
        type: "input",
        name: "roleDep",
        message: "Department ID Number: "
    },
];

const addDeptPrompt = [
    {
        type: "input",
        name: "depName",
        message: "Department Name: "
    },
    {
        type: "input",
        name: "depId",
        message: "Department ID Number: "
    },

];

function userStart(){
    inquirer
    .prompt(questions)
    .then(function (answer) {
        switch(answer.actions){
            case 'View all employees':
                viewEmployees();
                break;

            case 'View all roles':
                viewRoles();
                break;

            case 'View all departments':
                viewDepartments();
                break;

            case 'Add an employee':
                addEmployee();
                break;

            case 'Add a role':
                addRole();
                break;

            case 'Add a department':
                addDepartment();
                break;

            case 'Update an employee role':
                updateEmployeeRole();
                break;
        }
    })
}

app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT)
})