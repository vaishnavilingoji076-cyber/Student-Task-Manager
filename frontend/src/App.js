

import axios from "axios"
import React, { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/tasks/")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTask = () => {
    axios.post("http://127.0.0.1:8000/api/tasks/", { title })
      .then(res => {
        setTasks([...tasks, res.data]);
        setTitle("");
      })
      .catch(err => console.error(err));
  };

  const deleteTask = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Task Manager</h2>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="ENTER TASK"
      />
      <button onClick={addTask}>ADD</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
