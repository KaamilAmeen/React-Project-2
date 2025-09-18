import React, { useContext,useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext.jsx";
import { useNavigate } from "react-router-dom";
import empApi from "../api/Api.js";

const EmployeeListPage = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [allEmp, setAllEmp] = useState(null)
  const navigate = useNavigate();

 useEffect(() => {  
    fetchData();                
 },[]);
 const fetchData= ()=>{
    empApi.getAllEmpDetails().then((response)=>{
        setAllEmp(response.data);
    }).catch((error)=>{
        console.error("Error fetching data:", error);
    });
 }
 console.log("allEmp",allEmp);
  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container mt-4">
      <h3>Stored Employees</h3>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.empCode}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>
              <td>{emp.joinDate}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="secondary" onClick={() => navigate("/")}>
        Back
      </Button>
    </div>
  );
};

export default EmployeeListPage;
