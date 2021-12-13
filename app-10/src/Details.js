import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Details(props) {
    const prodId = window.location.hash.split("/").slice(-1).join("")

    const [item, setItem] = useState({})

    useEffect(() => {
        axios.get(`https://practiceapi.devmountain.com/products/${prodId}`)
        .then(res => setItem(res.data))
    })
    

    return (
        <div>
            <h2>{item.title}</h2>
            <img width="200" src={item.image} />
            <h4>{`Price: $${item.price}.00`}</h4>
        </div>
    )
}
