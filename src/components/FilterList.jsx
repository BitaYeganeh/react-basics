import { TextField } from "@mui/material";
import { useState } from "react";

const FilterList = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];
  //add input box
  const [filter, setFilter] = useState("");

  //states for form
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload
    //validation
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }
    //show alert if valid
    setError("");
    alert(`Hello ${username}!`);
  };

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
        .length === 0 && <div>No results found</div>}
      <ul>
        {names
          .filter((name) => name.toLowerCase().includes(filter.toLowerCase()))
          .map((name, index) => (
            <li key={index}>{name}</li>
          ))}
      </ul>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FilterList;
