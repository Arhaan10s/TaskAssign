CREATE DATABASE todo_db CHARACTER SET utf8mb4;
CREATE USER 'todo_user'@'localhost' IDENTIFIED BY 'Arhaan';
GRANT ALL PRIVILEGES ON todo_db.* TO 'todo_user'@'localhost';
FLUSH PRIVILEGES;
