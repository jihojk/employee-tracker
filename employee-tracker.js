// requires
var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    // port
    port: 3306,

    //database username
    user: "root",

    //database password
    password: "stupidSql",
    
    //database
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
    {
        type: "input",
        name: "newRole",
        message: "New Role ID Number: "
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
};

function viewEmployees(){
    var query = "SELECT employees.id , employees.first_name , employees.last_name, roles.title , departments.department , roles.salary ,  employees.manager_id FROM employees JOIN roles ON employees.role_id = roles.role_id"
    query += " JOIN departments ON roles.department_id = departments.department_id"
    connection.query(query, function (err, res){
        if (err){
            throw err
        }
        console.log('')
        console.table(res)
        userStart()
    })
};

function viewRoles(){
    var query = "SELECT roles.role_id, roles.title FROM roles"
    connection.query(query, function(err, res){
        if (err){
            throw err
        }
        console.log("")
        console.table(res)
        userStart()
    })
};

function viewDepartments(){
    var query = "SELECT departments.department_id, departments.department FROM departments"
    connection.query(query, function(err, res){
        if (err){
            throw err
        }
        console.log("")
        console.table(res)
        userStart()
    })
};

async function addEmployee(){
    await inquirer
    .prompt(addEmployeePrompt)
    .then(employeeData =>{
        var query = connection.query(
            "INSERT INTO employees SET ?",
            {
                "first_name": employeeData.firstName,
                "last_name":employeeData.lastName,
                "role_id":employeeData.empRole,
                "manager_id": employeeData.empManagerId

            },
            function (err, res){
                if (err){
                    throw err
                }
                console.log(query.sql);
                userStart()
            })
    })
};

async function addRole(){
    await inquirer
    .prompt(addRolePrompt)
    .then(roleData =>{
        var query = connection.query(
            "INSERT INTO roles SET ?",
        {

            "title": roleData.roleTitle,
            "salary": roleData.roleSalary,
            "department_id": roleData.roleDep,
            "role_id": roleData.newRole
        },
        function (err, res){
            if (err){
                throw err
            }
            console.log(query.sql)
            userStart()
        })
    })
} 

async function addDepartment(){
    await inquirer 
    .prompt(addDeptPrompt)
    .then(deptData => {
        var query = connection.query(
            "INSERT INTO departments SET ?",
            {
                "department_id": deptData.depId,
                "department": deptData.depName
            },
            function (err, res){
                if (err){
                    throw err
                }
                console.log(query.sql);
                userStart()
            })
    })
}

async function updateEmployeeRole(){
    await inquirer
    .prompt(
        [
            {
                type: "input",
                name: "emplroleid",
                message: "What is the employee's id number"
            },
            {
                type: "input",
                name: "newemproleid",
                message: "What is the employee's new role id?"

            }
        ]
    )
    .then(employeeid =>{
        var query = connection.query(
            "UPDATE employees SET role_id = ? WHERE ?",
            [
                
                {
                    "role_id": employeeid.newemproleid
                },
                {
                    "id": employeeid.emplroleid
                }
            ],
            function (err, res){
                if (err){
                    throw err
                }
                console.log(query.sql);
                userStart()
            } )
    })
}
userStart();

