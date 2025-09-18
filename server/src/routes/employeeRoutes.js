const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeControllers');

router.post('/add', controller.addEmployeeDetails);
router.get('/listdept', controller.getDepartmentDetails);
router.get('/listdesig', controller.getDesignationDetails);
router.get('/listloc', controller.getLocationDetails);
router.get('/listall', controller.getAllDetails);

module.exports = router;