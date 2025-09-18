import React, { useContext,useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext.jsx";
import { useNavigate } from "react-router-dom";
import empApi from "../api/Api.js";

const EmployeeListPage = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [employeesData, setEmployeesData] = useState([])
  const navigate = useNavigate();

 useEffect(() => { 
    fetchData();                
 },[]);

  // Function to fetch data
 const fetchData= ()=>{ 
    empApi.getAllEmpDetails().then((response)=>{
        const formattedData = response.data.map(eachData=>({
          empId: eachData.emp_id,
          empName: eachData.emp_name,
          designationName: eachData.designation_name,
          deptName: eachData.dept_name,
          locationName: eachData.location_name
        }))
        setEmployeesData(formattedData);
    }).catch((error)=>{
        console.error("Error fetching data:", error);
    });
 }

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
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((emp) => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.empName}</td>
              <td>{emp.deptName}</td>
              <td>{emp.designationName}</td>
              <td>{emp.locationName}</td>
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
