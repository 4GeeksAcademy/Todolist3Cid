// src/components/Main.jsx
import React, { useState } from 'react';
import Home from './Home';
import "../styles/index.css";


const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    if (e.key === 'Enter' && task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Home
      task={task}
      setTask={setTask}
      addTask={addTask}
      tasks={tasks}
      removeTask={removeTask}
    />
  );
};

export default Main;
