import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('http://localhost:3000/products/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1>Product Detail Page</h1>
            {product.name}
        </div>
    )
}

export default ProductDetailPage