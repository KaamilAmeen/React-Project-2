import React from "react";
import { Table, Form } from "react-bootstrap";

const EmployeeTable = ({ rows, onChange }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee Code</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Join Date</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              <Form.Control
                type="text"
                value={row.empCode}
                onChange={(e) => onChange(index, "empCode", e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                value={row.name}
                onChange={(e) => onChange(index, "name", e.target.value)}
              />
            </td>
            <td>
              <Form.Select
                value={row.department}
                onChange={(e) => onChange(index, "department", e.target.value)}
              >
                <option value="">Select Dept</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </Form.Select>
            </td>
            <td>
              <Form.Check
                inline
                label="Manager"
                type="radio"
                name={`designation-${row.id}`}
                value="Manager"
                checked={row.designation === "Manager"}
                onChange={(e) => onChange(index, "designation", e.target.value)}
              />
              <Form.Check
                inline
                label="Developer"
                type="radio"
                name={`designation-${row.id}`}
                value="Developer"
                checked={row.designation === "Developer"}
                onChange={(e) => onChange(index, "designation", e.target.value)}
              />
              <Form.Check
                inline
                label="Analyst"
                type="radio"
                name={`designation-${row.id}`}
                value="Analyst"
                checked={row.designation === "Analyst"}
                onChange={(e) => onChange(index, "designation", e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="number"
                value={row.salary}
                onChange={(e) => onChange(index, "salary", e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="date"
                value={row.joinDate}
                onChange={(e) => onChange(index, "joinDate", e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
