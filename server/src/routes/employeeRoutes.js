const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeControllers');

router.post('/add', controller.addEmployeeDetails);
router.get('/listall', controller.getAllDetails);
router.delete('/remove/:id', controller.removeEmp)

module.exports = router;