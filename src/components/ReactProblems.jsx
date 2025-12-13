import React from "react";
import ToggleButton from "./reactProblems/ToggleButton";
import InputCount from "./reactProblems/InputCount";
import Loading from "./Loading";
import FilterList from "./FilterList";
import ListRendering from "./reactProblems/ListRendering";
import Parent from "./Parent";
import ParentChild from "./reactProblems/ParentChild";
const ReactProblems = () => {
  return (
    <div
      style={{
        marginLeft: 30,
        marginTop: 20,
        fontSize: 24,
        color: "#d30b86ff",
      }}
    >
      <h1>Common Problems in React</h1>
      <ul>
        <li>Toggle Button With Dynamic Labe</li>
        <ToggleButton />
        <hr sx={{ marginTop: 20 }} />
        <li>Controlled Input With Live Character Count</li>
        <InputCount />
        <hr sx={{ marginTop: 20 }} />
        <li>List Rendering With Unique Keys</li>
        <ListRendering />
        <hr sx={{ marginTop: 20 }} />
        <li>Parent–Child Communication via Props</li>
        <ParentChild />
        <hr sx={{ marginTop: 20 }} />
        <li>Conditional Rendering Based on State</li>
        <Loading />
        <hr sx={{ marginTop: 20 }} />
        <li>
          Simple Filtered List & Simple Form With Validation(Required Field)
        </li>
        <FilterList />
        <hr sx={{ marginTop: 20 }} />
      </ul>
    </div>
  );
};

export default ReactProblems;
