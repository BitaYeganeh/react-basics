import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter  from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data";
import Form from "./components/Form"

function App() {

  const[count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    title:"",
    age:"",
});

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,

      },
    ]);
    
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

export default App;