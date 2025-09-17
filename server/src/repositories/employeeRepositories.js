const pool = require('../config/dbConfig');

const addEmployeeDetails = (empCode,name,deptId,desigId,salary,joinDate) =>{
    try {
        const query = 'CALL InsertEmployee(?,?,?,?,?,?)';
        const result = pool.query(query, [empCode,name,deptId,desigId,salary,joinDate]);
        return [result];
    } catch(err) {
        console.error("Error in inserting the data: ", err);
    }
}

const getAllDetails = () =>{
    try {
        const query = 'CALL AllEmployeeDetails()';
        const rows = pool.query(query);
        return [rows];
    } catch(err) {
        console.error("Error in fetching the data: ", err);
    }
}

module.exports = {
    addEmployeeDetails,
    getAllDetails
}