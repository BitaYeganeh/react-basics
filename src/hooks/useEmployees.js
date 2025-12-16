import axios from "axios";
import { useContext } from "react";
import { EmployeesContext } from "../contexts/employeesContext.jsx";

const useEmployees = () => {
  const { state, setState } = useContext(EmployeesContext);

  const fetchEmployees = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    axios
      .get("https://react-basics-ye98.onrender.com/employees")
      .then((response) => {
        setState((prevState) => ({ ...prevState, employees: response.data }));
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setState((prevState) => ({ ...prevState, error: error.message }));
      })
      .finally(() => {
        setState((prevState) => ({ ...prevState, loading: false }));
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://react-basics-ye98.onrender.com/employees/${id}`)
      .then(() => {
        setState((prevState) => ({
          ...prevState,
          employees: prevState.employees.filter(
            (employee) => employee.id !== id
          ),
        }));
      });
  };

  return {
    fetchEmployees,
    handleDelete,
    employees: state.employees,
    loading: state.loading,
    error: state.error,
  };
};

export default useEmployees;
