import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Limpiar el input
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const removeAllTasks = () => {
    setTasks([]); 
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>

      <input
        type="text"
        placeholder="Añadir una tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={addTask}
      />

      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas, añade una tarea</li>
        ) : (
          tasks.map((t, index) => (
            <li key={index} className="task-item">
              {t}
              <button className="delete" onClick={() => removeTask(index)}>
                ❌
              </button>
            </li>
          ))
        )}
      </ul>

      {tasks.length > 0 && (
        <button className="remove-all-btn" onClick={removeAllTasks}>
          Eliminar todas las tareas
        </button>
      )}
    </div>
  );
};

export default Home;
