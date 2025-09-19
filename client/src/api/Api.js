import axios from 'axios';
        
const apiBaseUrl = "http://localhost:5000/api";

const API = axios.create({
    baseURL: apiBaseUrl,
})

const getAllEmpDetails = ()=>(
    API.get('/listall')
)
const empApi={
    getAllEmpDetails
}
export default empApi;