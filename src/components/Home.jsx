import { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../components/Card";
import Counter  from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header";
//import data from "../data";
import Form from "../components/Form";
import axios from "axios";


function Home() {

  const[count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    title:"",
    age:"",
});

useEffect(() => {
  axios.get("http://localhost:3001/employees")
  .then((response) => {
    setEmployees(response.data);
  });
}, []);

const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/employees/${id}`)
  .then(() => {
    setEmployees(employees.filter((employee)=> employee.id !==id));
  })
}

  const handleClick = () => {
    axios.post("http://localhost:3001/employees", {
        id: String(employees.length + 1),
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,
    }).then((response) => {
      setEmployees([...employees, response.data]);
    })
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
      return {...employee, isFavourite : false}
    } else if (employee.id === id){
      return{...employee, isFavourite:!employee.isFavourite}
    } else {
      return employee;
    }
  })
  setEmployees(updatedEmployees);
}


  return (
    
    <div className="app">
      <Header />
      <main className="main-content">
        {employees.map((employee) => {
          console.log(employee);
          return(
          <Card 
          key={employee.id}
          {...employee}
          toggleFavourite={toggleFavourite}
          handleDelete={handleDelete}

          />
          );
        })}
        <Counter count={count} setCount={setCount}/>
        
      </main>
      <Form 
      formData={formData} 
      setFormData={setFormData} 
      handleClick={handleClick}

      />
      <Footer count={count} setCount={setCount}/>
    </div>
  );
}

export default Home;