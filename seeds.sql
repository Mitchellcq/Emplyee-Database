INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mitchell", "Chee Quee", 1, 2), ("Katherine", "Knight", 2, 1), ("Armando", "Percuoco", 3, 2), ("Nick", "Caraturo", 2, 2), ("Dylan", "Bennett", 1, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 150, 3), ("Chef", 60, 1), ("Kitchen hand", 40, 1), ("Waiter", 55, 2), ("Food runner", 45, 2);

INSERT INTO departments (name)
VALUES ("Kitchen"), ("Front of House"), ("Management");