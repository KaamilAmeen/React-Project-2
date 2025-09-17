const pool = require('../config/db');

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create new employee
const createEmployee = async (req, res) => {
    try {
        const { name, email, phone, department_id, designation_id } = req.body;
        const [result] = await pool.query(
            'INSERT INTO employees (name, email, phone, department_id, designation_id) VALUES (?, ?, ?, ?, ?)',
            [name, email, phone, department_id, designation_id]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update employee
const updateEmployee = async (req, res) => {
    try {
        const { name, email, phone, department_id, designation_id } = req.body;
        const [result] = await pool.query(
            'UPDATE employees SET name = ?, email = ?, phone = ?, department_id = ?, designation_id = ? WHERE id = ?',
            [name, email, phone, department_id, designation_id, req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json({ id: req.params.id, ...req.body });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete employee
const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
