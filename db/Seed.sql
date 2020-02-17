USE emp_tracker_db;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Mike", "Hawk", 41, 10), 
("Bick", "Dig", 42, 11),
("Miso", "Horn", 43, 12),
("Franklin D", "Turtle", 44, 13),
("Soup", "Lantation", 45, 14),
("Meester", "Krabbs", 46, 25),
("Bob", "Sponge", 47,26),
("Henry", "Dinkles", 48, 27);

INSERT INTO roles (role_id, title, salary, department_id )
VALUES 
(41, "Engineer", 80000, 21),
(42, "Accountant", 70000, 22),
(43, "Head Accountant", 90000, 22),
(44, "Assistant Manager", 70000, 23),
(45, "Manager", 100000, 23),
(45, "HR Rep", 60000, 24),
(46, "Web Developper", 110000, 25),
(47, "Sales Rep", 55000, 26),
(48, "Marketing Rep", 55000, 27);

INSERT INTO departments (department_id, department)
VALUES 
(21, "R&D"),
(22, "Accounting"),
(23, "Management"),
(24, "HR"),
(25, "IT"),
(26, "Sales"),
(27, "Marketing");