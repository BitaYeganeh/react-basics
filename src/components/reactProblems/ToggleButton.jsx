import { Button } from "@mui/material";
import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  // create toggle button
  const toggleButton = () => {
    setIsOn((currentValue) => !currentValue);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleButton}
        sx={{
          backgroundColor: isOn ? "green" : "red",
          marginBottom: 2,
          marginLeft: 20,
        }}
      >
        {isOn ? "ON" : "OFF"}
      </Button>
    </div>
  );
};

export default ToggleButton;
