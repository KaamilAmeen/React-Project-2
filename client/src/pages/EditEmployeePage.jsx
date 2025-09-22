import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext.jsx";
import { Form, Button } from "react-bootstrap";

const EditEmployeePage = () => {
  const { id } = useParams();
  const { employees, setEmployees } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const employee = employees.find((emp) => emp.id === parseInt(id));

  const [formData, setFormData] = useState({
    empCode: "",
    name: "",
    department: "",
    designation: "",
    location: "",
    joinDate: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({ ...employee });
    }
  }, [employee]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === parseInt(id) ? { ...emp, ...formData } : emp
    );
    setEmployees(updatedEmployees);
    navigate("/list");
  };

  if (!employee) {
    return <h4 className="mt-4 text-center">Employee not found!</h4>;
  }

  return (
    <div className="container mt-4">
      <h3>Edit Employee</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Employee Code</Form.Label>
          <Form.Control
            type="text"
            value={formData.empCode}
            onChange={(e) => handleChange("empCode", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select
            value={formData.department}
            onChange={(e) => handleChange("department", e.target.value)}
          >
            <option value="">Select Dept</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Check
            inline
            label="Manager"
            type="radio"
            name="designation"
            value="Manager"
            checked={formData.designation === "Manager"}
            onChange={(e) => handleChange("designation", e.target.value)}
          />
          <Form.Check
            inline
            label="Developer"
            type="radio"
            name="designation"
            value="Developer"
            checked={formData.designation === "Developer"}
            onChange={(e) => handleChange("designation", e.target.value)}
          />
          <Form.Check
            inline
            label="Analyst"
            type="radio"
            name="designation"
            value="Analyst"
            checked={formData.designation === "Analyst"}
            onChange={(e) => handleChange("designation", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            value={formData.salary}
            onChange={(e) => handleChange("salary", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Join Date</Form.Label>
          <Form.Control
            type="date"
            value={formData.joinDate}
            onChange={(e) => handleChange("joinDate", e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={handleSave} className="me-2">
          Save
        </Button>
        <Button variant="secondary" onClick={() => navigate("/list")}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default EditEmployeePage;
