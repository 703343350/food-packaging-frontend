import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './cart.css'

const Order = () => {
    const [orders, setOrders]=useState([]);
    const [state, setState] = useState({ count: 1 });

    
    
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axios
        .get("http://43.204.125.124:8081/order" , 
        {
          headers: {"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWJiNzAzOGM5ZDRjZTQ3NTdkNGNjZCIsImVtYWlsIjoiYWJjdGVzdDRAbWFpbC5jb20iLCJ0ZW5hbnRJZCI6IjYyMDc4MTcwZWRlZWM3MWIxZTZjNjk1MCIsInJvbGUiOlsiRVZFTlRfTEVBRCJdLCJpYXQiOjE2NzY5NTgzNTV9.7iXuuBxWv57ykdMMCezPhl2yJH3-C_nJAyvp86SVQdI',"Content-Type": 'application/json' }})
        .then((res) => {
        //  console.log("data",res,res.data)
            setOrders(res.data)

            setTotal(res.data.map(item => item.TotalPrice).reduce((prev, next) => prev + next))
        }
        );
    }, [])
    const listItems = orders.map((item) => (
      <article>
        <div className="payment">
        <div className="pay-top" style={{paddingTop:'5px'}}>
          <div style={{width:'10%'}}>
            <b>{item.Restaurant}</b>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginLeft: "-4%" }}
          >
            <strong>{
              item.FoodOrder.join(', ')
            }
            </strong>
          </div>
          {/* <p className="qty-box">{item.quantity}</p> */}
          <p style={{ marginLeft: "2%" }}>Rs.{item.TotalPrice}</p>
          
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
          <p style={{marginLeft:'-1%'}}>Items</p>
          <p style={{marginRight:'2%'}}>Price</p>
          
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
              <p>Rs. {total}</p>
            </div>
          </figure>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Order