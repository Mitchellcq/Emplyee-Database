INSERT INTO departments (name)
VALUES ("Kitchen"), ("Front of House"), ("Management");

INSERT INTO roles (title, salary, department_id)
VALUES ("Head Chef", 150000, 1),("Chef", 65000, 1), ("Kitchen hand", 40000, 1), ("Floor Manager", 80000, 2), ("Waiter", 55000, 2), ("Food runner", 45000, 2), ("Owner", 2000000, 3), ("Restaurant Manager", 120000, 3);

INSERT into employee (first_name, last_name, role_id, manager_id) 
VALUES ("Mitchell", "Cheequee", 1, null), ("Dylan", "Bennett", 3, 1), ("Montgomery", "Scott", 2, 1), ("Katherine", "Knight", 4, null), ("Angus", "MacGyver", 5, 4), ("Kaylee", "Frye", 6, 4), ("Cyrus", "Smith", 5, 4), ("Armando", "Percuoco", 7, null), ("David", "Wright", 8, 7);
