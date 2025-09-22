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
<<<<<<< HEAD

=======
    updateEmp
>>>>>>> 8e0f7c94a5d58ede5403a65ab16df5c6bc74f762
}
export default empApi;