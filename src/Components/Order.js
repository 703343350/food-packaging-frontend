import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Order = () => {
    const [orders, setOrders]=useState([]);
    const [state, setState] = useState({ count: 1 });
  
    
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axios
        .get("http://localhost:4000/order" , 
        {
          headers: {"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWJiNzAzOGM5ZDRjZTQ3NTdkNGNjZCIsImVtYWlsIjoiYWJjdGVzdDRAbWFpbC5jb20iLCJ0ZW5hbnRJZCI6IjYyMDc4MTcwZWRlZWM3MWIxZTZjNjk1MCIsInJvbGUiOlsiRVZFTlRfTEVBRCJdLCJpYXQiOjE2NzY5NTgzNTV9.7iXuuBxWv57ykdMMCezPhl2yJH3-C_nJAyvp86SVQdI',"Content-Type": 'application/json' }})
        .then((res) => {
            setOrders(res.data)
            
        }
        );
    }, [])
    const listItems = orders.map((item) => (
      <article>
        <div className="pay-top">
          <div>
            <b>{item.title}</b>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginLeft: "-4%" }}
          >
            
          </div>
          {/* <p className="qty-box">{item.quantity}</p> */}
          <p style={{ marginLeft: "2%" }}>Rs.{item.price}</p>
          
        </div>
  
      
      </article>
    ));
    
  return (
    <div className="payment">
        <div className="name">
          <h4>Item</h4>
          <p>Qty</p>
          <p>Price</p>
          <p></p>
        </div>

        <div className="price">
          {listItems}
          <figure>
            <div className="last">
              {/* <p className="space">Discount</p> */}
              <p>Total</p>
            </div>
            <div className="last">
              {/* <p className="space">Rs.0</p> */}
              <p>Rs.100</p>
            </div>
          </figure>
        </div>
      </div>
  )
}

export default Order