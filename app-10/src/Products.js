import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://practiceapi.devmountain.com/products")
        .then(res => setProducts([...res.data]))
    }, [])

    const renderProducts = () => {
        if (products) {
            return products.map(prod => {
                return (
                    <Link key={prod.id} to={`/details/${prod.id}`}>
                        <img key={prod.id} width="200" alt={prod.name} src={prod.image} />
                    </Link>   
                )
            })
        }
    }

    return (
        <div>
            <h1>Products</h1>
            {renderProducts()}
        </div>
    )
}
