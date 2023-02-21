import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Order = () => {
    const [orders, setOrders]=useState([])
    useEffect(() => {
        axios
        .get("http://localhost:4000/order" , 
        {
          headers: {"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWJiNzAzOGM5ZDRjZTQ3NTdkNGNjZCIsImVtYWlsIjoiYWJjdGVzdDRAbWFpbC5jb20iLCJ0ZW5hbnRJZCI6IjYyMDc4MTcwZWRlZWM3MWIxZTZjNjk1MCIsInJvbGUiOlsiRVZFTlRfTEVBRCJdLCJpYXQiOjE2NzY5NTgzNTV9.7iXuuBxWv57ykdMMCezPhl2yJH3-C_nJAyvp86SVQdI',"Content-Type": 'application/json' }})
        .then((res) => {
            setOrders(res.data)
            console.log(res);
        }
        );
    }, [])
    
  return (
    <div>Order</div>
  )
}

export default Order