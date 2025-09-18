const service = require('../services/employeeServices');

// Get all employees
const getAllDetails = async (req, res) => {
    try {
        const rows = await service.getAllDetails();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create new employee
const  addEmployeeDetails= async (req, res) => {
    try {
        const { empName,deptId,desigId,locationId,joinDate } = req.body;
        if (!empName || !deptId || !desigId || !locationId || !joinDate) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const [result] = await service.addEmployeeDetails(empName,deptId,desigId,locationId,joinDate);
        res.status(201).json({message: 'Employee added successfully', ...req.body });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getDepartmentDetails = async (req, res) => {
    try {
        const rows = await service.getDepartmentDetails();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getDesignationDetails = async (req, res) => {
    try {
        const rows = await service.getDesignationDetails();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getLocationDetails = async (req, res) => {
    try {
        const rows = await service.getLocationDetails();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getAllDetails,
    addEmployeeDetails,
    getDepartmentDetails, 
    getDesignationDetails,
    getLocationDetails
};
