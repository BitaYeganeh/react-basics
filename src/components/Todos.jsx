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
  <div className={styles.container}>
    <h2>Todos</h2>

    {/* Scrollable Grid */}
    <div className={styles.scrollArea}>
      <div className={styles.grid}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.card}>
            <p><strong>ID: {todo.id}</strong></p>
            <p><strong>Title: {todo.title}</strong></p>
          </div>
        ))}
      </div>
    </div>

    <h2>Employees Info:</h2>

    {/* NORMAL LIST for Users */}
    <ul className={styles.userList}>
      {users.map((user) => (
        <li key={user.id} className={styles.userItem}>
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  </div>
);


};

export default Todos;