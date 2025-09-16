const pool = require('../config/dbConfig');

const addEmployeeDetails = () =>{
    try {
        const query = '';
        const result = pool.query(query, []);
        return [result];
    } catch(err) {
        console.error("Error in fetching the data: ", err);
    }
}

const getAllDetails = () =>{
    try {
        const query = '';
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