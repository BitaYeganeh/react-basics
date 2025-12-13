import { Button } from "@mui/material";
import React, { useState } from "react";

//create a child button
const ChildButton = ({ number, increase }) => {
  return (
    <Button
      onClick={increase}
      sx={{
        marginTop: "20px",
        backgroundColor: "green",
        color: "white",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "darkgreen",
        },
      }}
    >
      Increment
    </Button>
  );
};

const ParentChild = () => {
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

export default ParentChild;
