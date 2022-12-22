import React from 'react'
import { useLocation } from 'react-router-dom'

const Order = () => {
    const location = useLocation()
    const { cart } = location.state
    console.log('on order component')
    console.log(cart);
    return (
        <div>
            order placed 
        </div>
    )
}

export default Order
