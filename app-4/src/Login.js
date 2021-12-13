import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const handleChange = e => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else {
            setPass(e.target.value)
        }
    }

    const handleClick = () => {
        alert(`Username: ${username} | Password: ${pass}`)
        setUsername("")
        setPass("")
    }

    return (
        <div>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} value={username} />
            <input type="password" name="pass" placeholder="Password" onChange={handleChange} value={pass} />
            <button onClick={handleClick} >Login</button>
        </div>
    )
}
