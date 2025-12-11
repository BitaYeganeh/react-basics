import { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <Button
      onClick={handleToggle}
      style={{ backgroundColor: isOn ? "green" : "red", color: "white" }}
    >
      {isOn ? "ON" : "OFF"}
    </Button>
  );
};
