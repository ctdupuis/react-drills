import React, { useState } from 'react'
import List from './List';
import NewTask from './NewTask';

export default function Todo() {
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
        <div>
        <NewTask handleSubmit={handleSubmit} handleChange={handleChange} task={task}/>
        <button onClick={handleClear} >Clear</button>
        <List tasks={tasks} />
        </div>
    )
}
