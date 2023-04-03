import { useEffect, useState } from "react"
const ProductPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            <h1>Product Page</h1>
            {
                data.map(products => {
                    return (
                        // <div key={products.id}>
                        //     <h2>{products.name}</h2>
                        //     <button onClick={() => removeProduct(products.id)}>Remove</button>
                        // </div>
                        <div key={products.id} >
                            <div className="card" style={{ width: '18rem' }}>
                                <a href="/products/"><h2>{products.name}</h2></a>
                                <img className="card-img-top" src={products.image} alt={products.name} />
                                <div >
                                    <p className="card-text">{products.desc}</p>
                                </div>
                                <button class="btn btn-danger" onClick={() => removeProduct(products.id)}>Remove</button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductPage