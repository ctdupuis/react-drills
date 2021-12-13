import React from 'react'

export default function NewTask({ handleSubmit, handleChange, task }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={task} />
                <button>Add</button>
            </form>
        </div>
    )
}
