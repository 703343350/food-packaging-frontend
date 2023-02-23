import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './cart.css'
import { useNavigate } from 'react-router';

const Order = () => {
    const [orders, setOrders]=useState([]);
    const [state, setState] = useState({ count: 1 });
    const navigate = useNavigate();
    
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if(window.sessionStorage.getItem('token')){
          let token = window.sessionStorage.getItem('token')
        axios
        .get("http://localhost:4000/order" , 
        {
          headers: {"Authorization": 'Bearer '+token,"Content-Type": 'application/json' }})
        .then((res) => {
          console.log("data",res,res.data)
            setOrders(res.data)
            
        }
        );
      }
    
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
              item.FoodOrder.map((res) =>(
                res.Name
              ))
            }
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
          <p style={{marginLeft:'-10%'}}>Items</p>
          <p style={{marginRight:'4%'}}>Price</p>
          
        </div>

        <div className="price">
          {listItems}
          
        </div>
      </div>
      </div>
      </div>
  )
}

export default Order