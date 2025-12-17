import EmployeeDataGrid from "./EmployeeDataGrid";
import React from "react";
import Loading from "./Loading";
const Employees = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: 30,
          marginTop: 20,
          fontSize: 24,
          color: "#1976d2",
        }}
      >
        Employees Component
      </div>
      <div>
        <Loading />
        <EmployeeDataGrid />
      </div>
    </div>
  );
};

export default Employees;
