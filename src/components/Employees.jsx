import { Button, TextField } from "@mui/material";
import EmployeeDataGrid from "./EmployeeDataGrid";
import React, { useState } from "react";
import Loading from "./Loading";
const Employees = () => {
  // create toggle button
  const toggleButton = () => {
    setIsOn((currentValue) => !currentValue);
  };
  const [isOn, setIsOn] = useState(false);

  //create text input
  const [inputValue, setInputValue] = useState("");

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
      <Button
        variant="contained"
        onClick={toggleButton}
        style={{ backgroundColor: isOn ? "green" : "red", marginLeft: 30 }}
      >
        {isOn ? "ON" : "OFF"}
      </Button>
      <br />
      <TextField
        id="standard-basic"
        label="Type here:"
        variant="standard"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        helperText={
          inputValue.length > 20
            ? "Too many characters!"
            : `You typed ${inputValue.length} characters`
        }
        error={inputValue.length > 20} // automatically styles helperText red
        fullWidth
        style={{ marginTop: 20, marginLeft: 30, maxWidth: 400 }}
      />{" "}
      <div>
        <Loading />
        <EmployeeDataGrid />
      </div>
    </div>
  );
};

export default Employees;
