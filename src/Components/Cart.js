import React, { useState } from 'react'
import PaymentSect from './PaymentSect'
import './cart.css'
import { useLocation } from 'react-router-dom';

const Cart = (props) => {
    const { state } = useLocation();
    console.log("c data",state)
    const [cartList, setCart] = useState(state)
    // useEffect(() => {
      
    // }, [])
    
  return (
    <div className="foodcontainer">
    <div className="right-side">
          <PaymentSect cartList={cartList}/>
        </div>
        </div>
  )
}

export default Cart