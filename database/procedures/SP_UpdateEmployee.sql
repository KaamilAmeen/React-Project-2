DELIMITER //
CREATE PROCEDURE UpdateEmployee(
	IN p_emp_id int,
    IN p_emp_name VARCHAR(100),
    IN p_designation_id INT,
    IN p_dept_id INT,
    IN p_location_id INT,
    IN p_join_date DATE
)
BEGIN
    UPDATE Employee SET emp_name = p_emp_name, designation_id = p_designation_id, dept_id = p_dept_id
    , location_id = p_location_id, join_date = p_join_date
    WHERE emp_id = p_emp_id;
END //

DELIMITER ;

CALL UpdateEmployee(71, "Sathish Kumar", 1, 2, 3, '2022-09-30');