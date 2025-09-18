import React, {useState} from "react";
import { Table, Form } from "react-bootstrap";

const EmployeeTable = ({ rows, onChange }) => {
  const [empDetails, setEmpDetails] = useState({
    empName: '',
    deptId: 0,
    desigId: 0,
    locationId: 0,
    joinDate: ''
  });

  const handleChange = (e) => {
    setEmpDetails({...empDetails, [e.target.name]: e.target.value})
  }
  console.log(empDetails);

  const handleDesignIdChange = (e) =>{
    setEmpDetails({...empDetails, desigId: e.target.value})
  }

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Location</th>
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
                value={empDetails.name}
                name="empName"
                onChange={handleChange}
              />
            </td>
            <td>
              <Form.Select
                value={empDetails.deptId}
                name="deptId"
                onChange={handleChange}
              >
                <option value="">Select Dept</option>
                <option value="1">IT</option>
                <option value="2">Finance</option>
                <option value="3">HR</option>
                <option value="4">Marketing</option>
                <option value="5">Operations</option>
              </Form.Select>
            </td>
            <td>
              <Form.Check
                inline
                label="Manager"
                type="radio"
                name="Manager"
                value="1"
                checked={empDetails.desigId === "1"}
                onChange={handleDesignIdChange}
              />
              <Form.Check
                inline
                label="Team Lead"
                type="radio"
                name='Team Lead'
                value="2"
                checked={empDetails.desigId === "2"}
                onChange={handleDesignIdChange}
              />
              <Form.Check
                inline
                label="Software Engineer"
                type="radio"
                name="Software Engineer"
                value="3"
                checked={empDetails.desigId === "3"}
                onChange={handleDesignIdChange}
              />
              <Form.Check
                inline
                label="HR"
                type="radio"
                name="HR"
                value="4"
                checked={empDetails.desigId === "4"}
                onChange={handleDesignIdChange}
              />
              <Form.Check
                inline
                label="Intern"
                type="radio"
                name="Intern"
                value="5"
                checked={empDetails.desigId === "5"}
                onChange={handleDesignIdChange}
              />
            </td>
            <td>
              <Form.Select
                value={empDetails.locationId}
                name="locationId"
                onChange={handleChange}
              >
                <option value="">Select Designation</option>
                <option value="1">Bangalore</option>
                <option value="2">Chennai</option>
                <option value="3">Hyderabad</option>
                <option value="4">Mumbai</option>
                <option value="5">Delhi</option>
              </Form.Select>
            </td>
            <td>
              <Form.Control
                type="date"
                value={empDetails.joinDate}
                name="joinDate"
                onChange={handleChange}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
