import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from '../pages/Card'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='card' element={<Card />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='login' element={<Login />} />
      <Route path='productDetails' element={<ProductDetails />} />
      <Route path='shop' element={<Shop />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default Routers