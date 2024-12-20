import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../API/api";

export const AuthContext=createContext()


function AuthContextProvider({children}) {
 
    const [state,setState]=useState({
        isAuth:true,
        token:null,
        name:""
    })
    
    const[totalPage,setTotalPages]=useState(0)
    const [filter,setFilter]=useState("")
    let cart=[]
    let wishlist=[]
    // const loginUser=(token,name)=>{
    //     setState(
    //         {...state,
    //         isAuth:true,
    //         token:token,
    //         name:name
    //     }
    //     )
    // }

    // const logoutUser=()=>{
    //    setState({
    //         ...state,
    //         isAuth:false,
    //         token:null
    //     })
       
    // }
    const search=(val)=>{
        setFilter(val)
    }
    const Add_to_Cart=(val)=>{
     cart.push(val)
    }
    
    const Add_to_Wishlist=(val)=>{
        wishlist.push(val)
    }


    const totalPages=()=>{
        axios.get(`${API_URL}`)
        .then((res)=>{
            setTotalPages(res.data.length)
        })
       
    }    
    useEffect(()=>{totalPages()},[])
return(
    <AuthContext.Provider value={{authState:state,search,filter,
    Add_to_Cart,cart,wishlist,Add_to_Wishlist,totalPage}}>

        {children}
    </AuthContext.Provider>
)
}


export default AuthContextProvider;