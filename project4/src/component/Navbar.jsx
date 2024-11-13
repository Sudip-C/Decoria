import React, { useContext, useState } from 'react'
import "../CSS/Navbar.css"
import logo from "../image/Logo2.png"
import track from "../image/tracking.png"
import user from "../image/user.png"
import love from "../image/love.png"
import cart from "../image/shopping-cart.png"
import {Link as NavLink} from "react-router-dom"
import { AuthContext } from '../context/AuthContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
const{authState,search}=useContext(AuthContext)
const [isActive,setIsActive]=useState(true)
const handleHide=()=>{
setIsActive(!isActive)
}

    return (
        <div>
           <div className='topNav'>Spring into Sale | Up to 60% off | Now Live | Click to shop!</div>
           <div className='nav'>
         <div>
            <h3>Help</h3>
            <h3>Track Order</h3>
         </div>
         <div>
            <h3>Stores</h3>
            <h3>Bulk Orders</h3>
            <h3>Gift Orders</h3>
            <h3>UL Services</h3>
         </div>
           </div>
          <div className='middle'>
          <div className='middleNav'>
            <div className='flex1' >
            <NavLink to="/"> <div className='Logo' ><img   src={logo} alt="alt"/></div></NavLink>
            <input type="text" placeholder='Search' onChange={(e)=>search(e.target.value)} />
            </div>
            <button onClick={handleHide} className="ham_icon">
            {isActive?<GiHamburgerMenu />:<RxCross1 />}
            </button>
            <div className={isActive?'flex2':"flex2 active"} >
            <NavLink> <div><img style={{width:"40%"}}src={track} alt="name"/></div></NavLink>
            <NavLink to="/login"><div><p>{authState.isAuth?authState.name.slice(0,3):""}</p><img style={{width:"30%"}}src={user} alt="name"/></div></NavLink> 
            <NavLink to="/wishlist"><div><img style={{width:"30%"}}src={love} alt="name"/></div></NavLink>
            <NavLink to="/cart"><div><img style={{width:"30%"}}src={cart} alt="name"/></div></NavLink>
            </div>
           </div>
          </div>
           <div className="bottom">
            <div className='bottomNav'>
               <NavLink to="/product"> <p>Deal Zone</p></NavLink>
                <p>Sofas & Recliners</p>
                <p>Living</p>
                <p>Bedroom & Mattresses</p>
                <p>Dining</p>
                <p>Storage</p>
                <p>Study</p>
                <p>Lighting& Decor</p>
                <p>Outdoor</p>
                <p>Interior</p>
            </div>
           </div>
        </div>
    )
}

export default Navbar
