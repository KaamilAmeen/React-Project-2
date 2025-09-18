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

const getDepartmentDetails = async () =>{
    try {
        const rows = await repository.getDepartmentDetails();
        return rows;
    } catch(err){
        console.error("ERROR: ",err)
    }
}

const getDesignationDetails = async () =>{
    try {
        const rows = await repository.getDesignationDetails();
        return rows;
    } catch(err){
        console.error("ERROR: ",err)
    }
}

const getLocationDetails = async () =>{
    try {
        const rows = await repository.getLocationDetails();
        return rows;
    } catch(err){
        console.error("ERROR: ",err)
    }
}

module.exports = {
    addEmployeeDetails,
    getAllDetails,
    getDepartmentDetails, 
    getDesignationDetails,
    getLocationDetails
}