import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import useAxios from "axios-hooks";
import React from "react";

const EmployeeDataGrid = () => {
  const url = "http://localhost:3001/employees";
  const [{ data, loading, error }] = useAxios(url);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    { field: "name", headerName: "Name" },
    {
      field: "position",
      headerName: "Position",
      width: 200,
      editable: true,
    },

    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const statusColours = {
          active: "green",
          "on leave": "yellow",
          inactive: "red",
        };

        const color = statusColours[params.value] || "gray";
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: color,
                display: "inline-block",
              }}
            />
            <span style={{ textTransform: "capitalize" }}>
              {params.value || ""}
            </span>
          </div>
        );
      },
    },
  ];

  console.log("Data:", data);

  const handleSave = (id, updatedRow) => {
    axios
      .put(`http://localhost:3001/employees/${id}`, updatedRow)
      .then((response) => {
        console.log("Response: ", response);
      });
  };

  return (
    <div>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
        processRowUpdate={(updatedRow, originalRow) => {
          console.log("updatedRow:", updatedRow, "originalRow:", originalRow);
          handleSave(originalRow.id, updatedRow);
          return updatedRow;
        }}
        onProcessRowUpdateError={(error) => console.error("Error:", error)}
      />
    </div>
  );
};

export default EmployeeDataGrid;
