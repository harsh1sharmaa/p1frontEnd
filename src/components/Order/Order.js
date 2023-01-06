import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";




const Order = ({isLogin}) => {

    const navigate = useNavigate();
    const location = useLocation()
    const { cart } = location.state
    console.log('on order component')
    console.log(cart);

    useEffect(() => {

        // Update the document title using the browser API
        if(!userLogin()){
            navigate("/login");
        }
    
      },[]);


    const userLogin=()=>{
    //   if(isLogin==false)
        // return false;
        console.log("isLogin");
        console.log(isLogin);
        return isLogin ? true :false
    }

    return (
        <div>
            order placed 
        </div>
    )
}

export default Order
