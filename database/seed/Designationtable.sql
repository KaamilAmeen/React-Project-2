CREATE DATABASE COMPANY;
USE COMPANY;
CREATE TABLE Designation (
    designation_id INT PRIMARY KEY AUTO_INCREMENT,
    designation_name VARCHAR(50) NOT NULL
);

INSERT INTO Designation (designation_name) VALUES
('Manager'), ('Team Lead'), ('Software Engineer'), ('HR'), ('Intern');

SELECT * FROM Designation;