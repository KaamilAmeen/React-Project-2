DELIMITER &&
CREATE PROCEDURE RemoveEmployee(IN e_emp_id int)
BEGIN
DELETE from Employee where emp_id=e_emp_id;
END &&
DELIMITER ;

CALL RemoveEmployee(26);