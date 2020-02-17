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

app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT)
})