import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './cart.css'

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
          console.log("data",res,res.data)
            setOrders(res.data)
            
        }
        );
    }, [])
    const listItems = orders.map((item) => (
      <article>
        <div className="payment">
        <div className="pay-top" style={{paddingTop:'5px'}}>
          <div>
            <b>{item.Restaurant}</b>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginLeft: "-4%" }}
          >
            {
              item.FoodOrder.join(', ')
            }
          </div>
          {/* <p className="qty-box">{item.quantity}</p> */}
          <p style={{ marginLeft: "2%" }}>Rs.{item.Price}</p>
          
        </div>
        </div>
      
      </article>
    ));
    
  return (
    <div className="foodcontainer">
    <div className="right-side">
    <div className="payment" style={{height:'100%',overflowY:'auto'}}>
        <div className="name">
          <p>Restaurant</p>
          <p style={{marginLeft:'-10%'}}>Items</p>
          <p style={{marginRight:'4%'}}>Price</p>
          
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
      </div>
      </div>
  )
}

export default Order