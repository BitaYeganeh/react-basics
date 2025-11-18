import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Todos.module.css";

const Todos = () => {
    const [todos, setTodos] = useState([]); 
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            setTodos(response.data);
        })
        .catch((error) => {
            console.log("Error fetching todos: ", error.message);
        })
        .finally(() => {
            setLoading(false);
        }); 

        //fetch users

        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log("Error fetching users: ", error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
  return <div>Loading...</div>;

  
}
    return (
        <div>
        {/*Connect todos to uesers */}
            <h2>Todos List</h2>
 <ul>
      {todos.map((todo) => (
        <div className={styles.todos} key={todo.id}>
          id : {todo.id} 
          title: {todo.title}
        </div>
      ))}
</ul>
        
        <h2>Users List</h2>
             <ul>              
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
             </ul>
        </div>
    )
       
};

export default Todos;