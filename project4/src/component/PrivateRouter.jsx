import { Navigate } from "react-router-dom";
import {  useSelector } from 'react-redux'


function PrivateRoute({children}) {
const{isAuth}=useSelector(e=>e.auth)

if(!isAuth){
   return <Navigate to="/login" />
}
return children
}

export default PrivateRoute;
