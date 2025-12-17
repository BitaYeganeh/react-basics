import React from "react";

const ListRendering = () => {
  const items = ["Buy milk", "Walk dog", "Study React"];

  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item)}
            style={{
              color: "black",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRendering;
