import { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../components/Card";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header";
//import data from "../data";
import Form from "../components/Form";
import axios from "axios";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomKideImage from "./CustomKideImage";
import EmployeesTable from "./EmployeesTable";

function Home() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    age: "",
  });
  const [loading, setLoading] = useState(true);
  console.log("Components Rendered");

  useEffect(() => {
    //comment error when handeling loading state:
    //setLoading(true);//this is an error

    axios
      .get("https://react-basics-ye98.onrender.com/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://react-basics-ye98.onrender.com/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      });
  };

  const handleClick = () => {
    axios
      .post("https://react-basics-ye98.onrender.com/employees", {
        id: String(employees.length + 1),
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      });
    // setEmployees([
    //   ...employees,
    //   {
    //     id: employees.length + 1,
    //     name: formData.name,
    //     title: formData.title,
    //     age: formData.age,
    //     isFavourite: false,

    //   },
    // ]);
  };

  const toggleFavourite = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id && employee.isFavourite === undefined) {
        return { ...employee, isFavourite: false };
      } else if (employee.id === id) {
        return { ...employee, isFavourite: !employee.isFavourite };
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Button
        variant="contained"
        color="limeGreen"
        sx={{ padding: "200px" }}
        startIcon={<DeleteIcon />}
      >
        Click me I'm from MUI!
      </Button>
      <div className="home-container">
        {/* Cards Grid */}
        <div className="cards-container">
          {employees.map((employee) => (
            <Card
              key={employee.id}
              {...employee}
              toggleFavourite={toggleFavourite}
              handleDelete={handleDelete}
            />
          ))}
        </div>

        {/* Counter + Form */}
        <div className="form-counter-container">
          <Counter count={count} setCount={setCount} />
          <Form
            formData={formData}
            setFormData={setFormData}
            handleClick={handleClick}
          />
        </div>
      </div>
      <EmployeesTable />
    </div>
  );
}

export default Home;
