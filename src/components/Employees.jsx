import { Button, TextField } from "@mui/material";
import EmployeeDataGrid from "./EmployeeDataGrid";
import React from "react";
const Employees = () => {
  // create toggle button
  const toggleButton = () => {
    setIsOn((currentValue) => !currentValue);
  };
  const [isOn, setIsOn] = React.useState(false);

  //create text input
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <div>Employees Component</div>
      <Button
        variant="contained"
        onClick={toggleButton}
        style={{ backgroundColor: isOn ? "green" : "red" }}
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
      />{" "}
      <div>
        <EmployeeDataGrid />
      </div>
    </div>
  );
};

export default Employees;
