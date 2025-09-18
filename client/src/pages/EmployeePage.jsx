import React, { useState, useContext,useEffect} from "react";
import { Button } from "react-bootstrap";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { EmployeeContext } from "../context/EmployeeContext.jsx";
import { useNavigate } from "react-router-dom";
import empApi from "../api/Api.js";
const EmployeePage = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [rows, setRows] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const navigate = useNavigate();

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: idCounter,
        empCode: "",
        name: "",
        department: "",
        designation: "",
        salary: "",
        joinDate: "",
      },
    ]);
    setIdCounter(idCounter + 1);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleSubmit = () => {
    setEmployees([...employees, ...rows]);
    setRows([]);
    navigate("/list");
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Employee Master</h3>
        <Button onClick={handleAddRow}>Add</Button>
      </div>

      <EmployeeTable rows={rows} onChange={handleChange} />

      <div className="mt-3 d-flex justify-content-between">
        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="primary" onClick={() => navigate("/list")}>
          View Stored Data
        </Button>
      </div>
    </div>
  );
};

export default EmployeePage;
