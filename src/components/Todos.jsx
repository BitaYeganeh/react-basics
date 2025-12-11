import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Todos.module.css";
import Parent from "./Parent";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //add a  list of todo items
  const sampleTodos = ["Buy milk", "Walk dog", "Study React"];
  const handleClick = (item) => {
    console.log(item);
  };
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
              <p>
                <strong>ID: {todo.id}</strong>
              </p>
              <p>
                <strong>Title: {todo.title}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className={styles.sideBySide}>
        <div className={styles.sampleTodos}>
          <h2>Sample Todo Items:</h2>

          <ul>
            {sampleTodos.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(item)}
                className={styles.sampleItem}
              >
                {item}
              </li>
            ))}
          </ul>
          <br />
        </div>
        <div className={styles.parentContainer} />
        <h2>Parent Component </h2>
        <Parent />

        {/* NORMAL LIST for Users */}
        <h2>Employees Info:</h2>
        <ul className={styles.userList}>
          {users.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
