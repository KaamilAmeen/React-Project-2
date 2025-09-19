import axios from 'axios';

const apiBaseUrl = "http://localhost:5000/api";

const API = axios.create({
    baseURL: apiBaseUrl,
})

const getAllEmpDetails = ()=>(
    API.get('/listall')
)

const getDepartmentDetails = () => {
    API.get('/listdept');
}

const getDesignationDetails = () => {
    API.get('/listdesign');
}

const getLocationDetails = () => {
    API.get('/listloc');
}

const addEmployeeDetails = (formData) => {
    API.post('/add', formData);
}

const removeEmployee = (empId) => {
    API.delete(`/remove/${empId}`)
}

const empApi={
    getAllEmpDetails,
    getDepartmentDetails,
    getDesignationDetails,
    getLocationDetails,
    addEmployeeDetails, 
    removeEmployee
}
export default empApi;