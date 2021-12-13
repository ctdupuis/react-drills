import React from 'react'

export default function Todo({ tasks }) {
    const renderTasks = tasks.map((task, idx) => <li key={idx}>{task}</li>)

    return (
        <div>
            <h3>Your Tasks</h3>
            <ul>
                {renderTasks}
            </ul>
        </div>
    )
}
