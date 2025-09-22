const repository = require('../repositories/employeeRepositories');

const addEmployeeDetails = async (empName,deptId,desigId,locationId,joinDate) => {
    try {
        const result = await repository.addEmployeeDetails(empName,deptId,desigId,locationId,joinDate);
        return result;
    } catch(err) {
        console.error("Error in service layer while adding employee details: ", err);
    }
}

const getAllDetails = async () => {
    try {
        const rows = await repository.getAllDetails();
        return rows;
    } catch(err) {
        console.error("Error in service layer while fetching employee details: ", err);
    }
}

const removeEmp = async (empId) =>{
    try {
        const result = await repository.removeEmp(empId);
        return result;
    } catch (err) {
        console.error("ERROR: ", err)
    }
}

const updateEmp = async (empId, empName, desigId, deptId, locId, joinDate) =>{
    try {
        const result = await repository.updateEmp(empId, empName, desigId, deptId, locId, joinDate);
        return result;
    } catch(err){
        console.error("Error: ", err);
    }
}

module.exports = {
    addEmployeeDetails,
    getAllDetails,
    removeEmp,
    updateEmp
}