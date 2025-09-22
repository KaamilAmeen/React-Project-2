import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage.jsx";
import EmployeeListPage from "./pages/EmployeeListPage.jsx";
import { EmployeeProvider } from "./context/EmployeeContext.jsx";
import EditEmployeePage from "./pages/EditEmployeePage.jsx";

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeePage />} />
          <Route path="/list" element={<EmployeeListPage />} />
          <Route path="/edit/:id" element={<EditEmployeePage />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;



