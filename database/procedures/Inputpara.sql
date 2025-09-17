USE COMPANY;

DELIMITER //

CREATE PROCEDURE InsertEmployee(
    IN p_emp_name VARCHAR(100),
    IN p_designation_id INT,
    IN p_dept_id INT,
    IN p_location_id INT,
    IN p_join_date DATE
)
BEGIN
    INSERT INTO Employee (emp_name, designation_id, dept_id, location_id, join_date)
    VALUES (p_emp_name, p_designation_id, p_dept_id, p_location_id, p_join_date);
END //

DELIMITER ;

CALL InsertEmployee('Sheik',2,2,3,'2025-07-25');
CALL InsertEmployee('Ameen',1,2,1,'2025-08-25');
