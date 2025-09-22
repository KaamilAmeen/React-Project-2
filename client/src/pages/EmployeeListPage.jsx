import React, { useContext,useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext.jsx";
import { useNavigate } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi";
import CircularProgress from "@mui/material/CircularProgress";
import empApi from "../api/Api.js";

const apiConstant = {
  intial: "API_INITIAL",
  success: "API_SUCCESS",
  loading: "API_LOADING",
  failure: "API_FAILURE"
}

const EmployeeListPage = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [employeesData, setEmployeesData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiConstant.intial);
  const navigate = useNavigate();

 useEffect(() => { 
    fetchData();                
 },[]);

  // Function to fetch data
 const fetchData= ()=>{ 
    setApiStatus(apiConstant.loading)
    empApi.getAllEmpDetails().then((response)=>{
        const formattedData = response.data.map(eachData=>({
          empId: eachData.emp_id,
          empName: eachData.emp_name,
          designationName: eachData.designation_name,
          deptName: eachData.dept_name,
          locationName: eachData.location_name
        }))
        
        setEmployeesData(formattedData);
        setApiStatus(apiConstant.success)
    }).catch((error)=>{
        console.error("Error fetching data:", error);
        setApiStatus(apiConstant.failure);
    });
 }
 console.log(employeesData);

  const handleDelete = (empId) => {
    fetchData();
    empApi.removeEmployee(empId);
  };
  const handleEdit= (empId) => {
    fetchData();
    navigate(`/edit/${empId}`);
  } 

<<<<<<< HEAD
 
  return (
    <div className="container mt-4">
      <h3>Stored Employees</h3>
=======
  const handleRefresh = () =>{
    fetchData();
  }
  const renderEmployeeSuccess = () =>{
    return (
      <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Stored Employees</h3>
        <button type="button" onClick={handleRefresh} className="bg-transparent border-0 justify-content-center align-items-center">
          <FiRefreshCcw size="20" />
        </button>
      </div>
>>>>>>> 8e0f7c94a5d58ede5403a65ab16df5c6bc74f762
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
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(emp.empId)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(emp.empId)}
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
    )
  }

  const renderLoader = () =>{
    return(
      <div style={{ display: "flex", justifyContent: "center", alignItems:"center", marginTop: 20, height: "100vh" }}>
        <CircularProgress />
      </div>
    )
  }
  const renderContent = () =>{
    switch (apiStatus){
      case apiConstant.success:
        return renderEmployeeSuccess();
      case apiConstant.failure:
        return <></>;
      case apiConstant.loading:
        return renderLoader();
      default:
        null;
    }
  }
  return (
    <>
      {renderContent()}
    </>
  )
};

export default EmployeeListPage;
  