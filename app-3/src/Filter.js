import React, { useState } from 'react'

export default function Filter() {
    const [array, setArray] = useState(["strings", "objects", "arrays", "numbers"])
    const [filterText, setFilterText] = useState("")

    const filteredElements = array.map(el => {
        if (el.includes(filterText)) {
            return(<h2>{el}</h2>)
        }
    })

    const handleChange = e => setFilterText(e.target.value)

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <br />
            <span>{filteredElements}</span>
        </div>
    )
}
