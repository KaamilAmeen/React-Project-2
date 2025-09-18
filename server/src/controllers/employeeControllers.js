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
const addEmployeeDetails = async (req, res) => {
  try {
    const employees = Array.isArray(req.body) ? req.body : [req.body];
    const results = [];
    const errors = [];

    for (const [index, emp] of employees.entries()) {
      const { empName, deptId, desigId, locationId, joinDate } = emp;

      // validation
      if (!empName || !deptId || !desigId || !locationId || !joinDate) {
        errors.push({ index, error: "All fields are required", employee: emp });
        continue; // skip this one, continue with next
      }

      try {
        const [result] = await service.addEmployeeDetails(
          empName,
          deptId,
          desigId,
          locationId,
          joinDate
        );
        results.push({ ...emp, dbResult: result });
      } catch (dbErr) {
        errors.push({ index, error: dbErr.message, employee: emp });
      }
    }

    res.status(201).json({
      message: "Processing completed",
      addedCount: results.length,
      failedCount: errors.length,
      addedEmployees: results,
      failedEmployees: errors
    });

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
