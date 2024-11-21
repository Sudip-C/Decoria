import React, {useContext,useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import "../CSS/Product.css"
import {Link as NavLink} from "react-router-dom"
import { Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts, getFilteredProducts } from '../Redux/action';
import { AuthContext } from '../context/AuthContext';

function Product() {

const[category,setCategory]=useState("");
const [sort, setSort] = useState('');


const{filter}=useContext(AuthContext)

const dispatch=useDispatch()

const filters = {};
      if (category) filters.category = category;
      if (sort) filters.sort = sort;
      if (filter) filters.search = filter;

useEffect(()=>{dispatch(getAllproducts)},[]);

useEffect(()=>{
  dispatch(getFilteredProducts(filters))}
  ,[category,sort,filter])

const Prod=useSelector(e=>(e.product.Product_Data))
const {isLoading}=useSelector(e=>e.product)
    return (
        <div>
        <Select placeholder="Sort By Price" w="250px" m="20px" onChange={(e)=>setSort(e.target.value)}>
        <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>

        <Select placeholder="Filter By Category" w="250px" m="20px"onChange={(e)=>setCategory(e.target.value)}>
          <option value="Bed">Bed</option>
          <option value="Shelf">Shelf</option>
          <option value="Table">Table</option>
          <option value="Chair">Chair</option>
          <option value="Electronics">Light</option>
        </Select>
        
        {isLoading?<div className='loader'>
          
        </div>:
        <div className='Product' >
        {
        Prod?.map((el)=>(
            <div key={el._id}>
         <NavLink to={`/product/${el._id}`}> 
          <ProductCard {...el}/>
         </NavLink>    
            </div>
        ))
      }
      </div>}
      </div>
    )
}

export default Product
