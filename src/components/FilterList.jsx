import { TextField } from "@mui/material";
import { useState } from "react";

const FilterList = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];
  //add input box
  const [filter, setFilter] = useState("");

  return (
    <div style={{ margin: 20, padding: 20, maxWidth: 600 }}>
      <TextField
        label="Filter names"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* add no results message */}
      {names.filter((name) => name.toLowerCase().includes(filter.toLowerCase()))
        .length === 0 && <div style={{ color: "red" }}>No results found</div>}
      <ul>
        {names
          .filter((name) => name.toLowerCase().includes(filter.toLowerCase()))
          .map((name, index) => (
            <li key={index}>{name}</li>
          ))}
      </ul>
    </div>
  );
};

export default FilterList;
