import axios from 'axios';

const apiBaseUrl = "http://localhost:5000/api";

const API = axios.create({
    baseURL: apiBaseUrl,
})

const getAllEmpDetails = ()=>(
    API.get('/listall')
)

const getDepartmentDetails = () => {
    return API.get('/listdept');
}

const getDesignationDetails = () => {
    return API.get('/listdesign');
}

const getLocationDetails = () => {
    return API.get('/listloc');
}

const addEmployeeDetails = (formData) => {
    return API.post('/add', formData);
}

const removeEmployee = (empId) => {
    return API.delete(`/remove/${empId}`)
}

const updateEmp = (empId, updateFormData) => {
    return API.put(`/update/${empId}`, updateFormData)
}

const empApi={
    getAllEmpDetails,
    getDepartmentDetails,
    getDesignationDetails,
    getLocationDetails,
    addEmployeeDetails, 
    removeEmployee,
    updateEmp
}
export default empApi;