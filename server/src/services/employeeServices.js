const repository = require('../repositories/employeeRepository');

const addEmployeeDetails = async (empCode,name,deptId,desigId,salary,joinDate) => {
    try {
        const result = await repository.addEmployeeDetails(empCode,name,deptId,desigId,salary,joinDate);
        return result;
    } catch(err) {
        console.error("Error in service layer while adding employee details: ", err);
    }
}

const getAllDetails = async () => {
    try {
        const rows = await repository.getAllDetails();
        return rows[0];
    } catch(err) {
        console.error("Error in service layer while fetching employee details: ", err);
    }
}

module.exports = {
    addEmployeeDetails,
    getAllDetails
}