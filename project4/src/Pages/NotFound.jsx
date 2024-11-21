import React from 'react'
import notfound from "../image/notfound.webp"
function NotFound() {
    return (
       <div style={{display:"flex",justifyContent:"center"}}>
       <img style={{width:'50%'}} src={notfound} alt="" />
       </div> 
    )
}

export default NotFound
