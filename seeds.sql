INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mitchell", "Chee Quee", 1, 1), ("Katherine", "Knight", 1, 2), ("Armando", "Percuoco", 4, 2), ("Nick", "Caraturo", 5, 2), ("Dylan", "Bennett", 3, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 150, 3), ("Chef", 60, 1), ("Kitchen hand", 40, 1), ("Waiter", 55, 2), ("Food runner", 45, 2);

INSERT INTO departments (name)
VALUES ("Kitchen"), ("Front of House"), ("Management");