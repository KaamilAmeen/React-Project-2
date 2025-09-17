USE COMPANY;

CREATE TABLE Employee (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    designation_id INT,
    dept_id INT,
    location_id INT,
    join_date DATE,
    FOREIGN KEY (designation_id) REFERENCES Designation(designation_id),
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id),
    FOREIGN KEY (location_id) REFERENCES Locations(location_id)
);
INSERT INTO Employee (emp_name, designation_id, dept_id, location_id, join_date) VALUES
('Ravi Kumar', 1, 1, 1, '2021-01-15'),
('Anil Mehta', 2, 1, 2, '2021-03-22'),
('Sneha Gupta', 3, 1, 3, '2021-05-10'),
('Pooja Sharma', 4, 3, 1, '2021-07-18'),
('Vikram Singh', 1, 2, 5, '2021-09-25'),
('Karan Patel', 3, 1, 4, '2021-11-05'),
('Meena Reddy', 2, 4, 2, '2022-01-12'),
('Rajiv Nair', 5, 1, 3, '2022-02-20'),
('Sonal Joshi', 3, 2, 1, '2022-04-17'),
('Amit Verma', 4, 3, 4, '2022-06-08'),
('Priya Das', 1, 4, 2, '2022-07-14'),
('Rohit Yadav', 2, 5, 3, '2022-08-21'),
('Kavya Iyer', 3, 1, 5, '2022-09-30'),
('Mohit Chauhan', 5, 2, 1, '2022-11-19'),
('Arjun Malhotra', 1, 3, 2, '2023-01-04'),
('Neha Kapoor', 3, 4, 3, '2023-02-15'),
('Deepak Rana', 2, 5, 4, '2023-04-10'),
('Swati Mishra', 4, 2, 1, '2023-05-27'),
('Harsh Sharma', 5, 3, 5, '2023-07-13'),
('Lakshmi Menon', 3, 1, 2, '2023-09-01');

SELECT * FROM Employee;