import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const currentProduct = props.products.find(product => product.id == id)
        setProduct(currentProduct)
    }, [props])

    const onHandleChange = (e) => { }
    const onHandleSubmit = (e) => { }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage