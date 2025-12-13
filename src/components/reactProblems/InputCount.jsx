import { TextField } from "@mui/material";
import React, { useState } from "react";

const InputCount = () => {
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
    </div>
  );
};

export default InputCount;
