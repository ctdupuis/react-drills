import React, { useState } from 'react'

export default function Array() {
    const [array, setArray] = useState(["strings", "objects", "arrays", "numbers"])

    const renderElements = array.map(el => <li>{el}</li>)

    return (
        <div>
            {renderElements}
        </div>
    )
}
