import React from 'react'
import {Route, Routes} from "react-router-dom"
import AddProduct from '../Pages/AddProduct'
import Admin from '../Pages/Admin'
import Cart from '../Pages/Cart'
import Dashboard from '../Pages/Dashboard'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Product from '../Pages/Product'
import SignUp from '../Pages/SignUp'
import SingleProduct from '../Pages/SingleProduct'
import WishList from '../Pages/WishList'
import PrivateRoute from './PrivateRouter'
function AllRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
        <Route path="/product" element={<Product/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/product/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute>} ></Route>
        <Route path='/wishlist' element={<PrivateRoute> <WishList/></PrivateRoute> }></Route>
        <Route path='/Cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        <Route path="/addProduct" element={<AddProduct/>} ></Route>
        </Routes>
    )
}

export default AllRoutes
