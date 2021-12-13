import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {

  const [task, setTask] = useState("")
  const [tasks, updateTasks] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    updateTasks(arr => [...arr, task]);
    setTask("")
  }

  const handleClear = () => updateTasks([])

  const handleChange = e => setTask(e.target.value)

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={task} />
          <button>Add</button>
        </form>
        <button onClick={handleClear} >Clear</button>
        <Todo tasks={tasks} />
      </header>
    </div>
  );
}

export default App;
