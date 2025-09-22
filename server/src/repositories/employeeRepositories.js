const pool = require('../config/dbConfig');

const addEmployeeDetails = async(empName,deptId,desigId,locationId,joinDate) =>{
    try {
        const query = 'CALL InsertEmployee(?,?,?,?,?)';
        const result = await pool.query(query, [empName,deptId,desigId,locationId,joinDate]);
        return result;
    } catch(err) {
        console.error("Error in inserting the data: ", err);
    }
}

const getAllDetails = async() =>{
    try {
        const query = 'CALL AllEmployeeDetails()';
        const [rows] = await pool.query(query);
        return rows[0];
    } catch(err) {
        console.error("Error in fetching the data: ", err);
    }
}

const removeEmp = async (empId) =>{
    try {
        const query = 'CALL RemoveEmployee(?)';
        const result = await pool.query(query, [empId]);
        return result
    } catch (err) {
        console.error("ERROR: ",err)
    }
}

const updateEmp = async (empId, empName, desigId, deptId, locId, joinDate) => {
    try {
        const query = 'CALL UpdateEmployee(?,?,?,?,?,?)';
        const result = await pool.query(query, [empId, empName, desigId, deptId, locId, joinDate])
        return result;
    } catch(err){
        console.error(err);
    }
}

module.exports = {
    addEmployeeDetails,
    getAllDetails,
    removeEmp,
    updateEmp
}
