import React from 'react'

export default function List({ tasks }) {
    const renderTasks = tasks.map((task, idx) => <li key={idx}>{task}</li>)

    return (
        <div>
            {renderTasks}
        </div>
    )
}
