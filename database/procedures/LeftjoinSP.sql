USE COMPANY;
 DELIMITER //

CREATE PROCEDURE AllEmployeeDetails()
BEGIN
    SELECT 
        e.emp_id,
        e.emp_name,
        d.designation_name,
        dep.dept_name,
        l.location_name,
        e.join_date
    FROM Employee e
    LEFT JOIN Designation d ON e.designation_id = d.designation_id
    LEFT JOIN Department dep ON e.dept_id = dep.dept_id
    LEFT JOIN Locations l ON e.location_id = l.location_id;
END //

DELIMITER ;


CALL AllEmployeeDetails()
