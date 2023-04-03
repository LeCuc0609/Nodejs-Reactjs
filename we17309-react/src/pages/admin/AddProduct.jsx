import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductPage = (props) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({});

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputValue);
        navigate('/admin/products');
    };

    return (
        <div>
            <h2>Add Products</h2>
            <form action="" onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text" onChange={onHandleChange} name='name'
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="text" onChange={onHandleChange} name='price'
                        className="form-control" />
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input
                        type="text" onChange={onHandleChange} name='desc'
                        className="form-control" />
                </div> */}
                <button type="submit" className="btn btn-primary">
                    AddProduct
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;
