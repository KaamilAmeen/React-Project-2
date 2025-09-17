USE COMPANY;
CREATE TABLE Department (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL
);
INSERT INTO Department (dept_name) VALUES
('IT'), ('Finance'), ('HR'), ('Marketing'), ('Operations');

SELECT * FROM Department;