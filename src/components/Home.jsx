// src/components/Home.jsx
import React from "react";

const Home = ({ task, setTask, addTask, tasks, removeTask, removeAllTasks }) => {
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
              <span className="delete" onClick={() => removeTask(index)}>
                ❌
              </span>
            </li>
          ))
        )}
      </ul>
   
      <button className="remove-all-btn" onClick={removeAllTasks}>
        Eliminar todas las tareas
      </button>
    </div>
  );
};

export default Home;
