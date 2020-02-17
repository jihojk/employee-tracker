DROP DATABASE IF EXISTS emp_tracker_db;

CREATE DATABASE emp_tracker_db;

USE emp_tracker_db;

CREATE TABLE employees (
    id INT  AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE roles (
    role_id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,3) NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE departments (
    department_id INT NOT NULL,
    department VARCHAR(30)
);