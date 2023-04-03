import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductManagementPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            {/* <button className="btn btn-primary" ><Link to={'/admin/products/add'}>AddProduct</Link></button> */}
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        {/* <th>image</th> */}
                        <th>Price</th>
                        <th><button className="btn btn-primary" ><a href="/admin/products/add">AddProduct</a></button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((products, index) => {
                            return <tr key={products.id}>
                                <td>{index + 1}</td>
                                <td>{products.name}</td>
                                {/* <td><img src={products.image} alt={products.name} /></td> */}
                                <td>{products.price}</td>
                                <td>
                                    <button class="btn btn-danger" onClick={() => removeProduct(products.id)}>Remove</button>
                                    <button className="btn btn-primary">Update</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagementPage