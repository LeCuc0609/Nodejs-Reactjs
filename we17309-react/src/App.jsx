import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage' // Home page
import ProductPage from './pages/Product' // Product Page
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail' // Product Detail
import { addProduct, deleteProduct, getAllProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard' // Dashboard
import ProductManagementPage from './pages/admin/ProductManagement' // Product Management Page
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'


function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  console.log(products);

  // const onHandleRemove = (id) => {
  //   deleteProduct(id).then(() => setProduct(products.filter(product => product.id !== id)))
  // }
  const removeProduct = (id) => {
    // console.log(id)
    deleteProduct(id)
  }

  const onHandleAdd = (product) => {
    addProduct(product).then(() => setProduct([...products, product]))
  }

  const onHandleUpdate = (product) => { }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} /> */}
        <Route path='/products' element={<div>{products.map((product, index) => <div key={index}>{product.name}</div>)}</div>} />


        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} />} />
        {/* useParams() */}
      </Routes>
    </div >
  )
}

export default App
