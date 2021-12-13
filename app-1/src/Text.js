import React, { useState } from 'react'

export default function Text() {
    const [text, setText] = useState("");

    const handleChange = e => setText(e.target.value)

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <br />
            <span>{text}</span>
        </div>
    )
}
