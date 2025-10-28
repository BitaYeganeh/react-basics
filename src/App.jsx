import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter  from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data";

function App() {

  const[count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: "John",
        title: "Developer",
        age: 66,

      },
    ]);
    
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <button onClick={handleClick}>Add Employee</button>
        {employees.map((employee) => {
          console.log(employee);
          return(
          <Card 
          key={employee.id}
          name={employee.name} 
          title={employee.title} 
          age={employee.age} 
          />
          );
        })}
        <Counter count={count} setCount={setCount}/>
      </main>
      <Footer count={count} setCount={setCount}/>
    </div>
  );
}

export default App;