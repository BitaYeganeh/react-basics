import { Button } from "@mui/material";
import Todos from "./Todos";
import React, { useState } from "react";

//create a child button
const ChildButton = ({ number, increase }) => {
  return (
    <Button
      onClick={increase}
      sx={{ marginTop: "20px", backgroundColor: "greenyellow", color: "red" }}
    >
      Increment
    </Button>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>The current number is: {count}</p>

      <ChildButton number={count} increase={increase} />
    </div>
  );
};

export default Parent;
