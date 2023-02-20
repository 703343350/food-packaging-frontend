import React,{useEffect, useState} from "react";
import { FaTrashAlt } from "react-icons/fa";



function PaymentSect(props) {
  console.log("hhhj",props)
  const [cartList,setCart] = useState(props.cartList)
  const [total,setTotal] = useState(0);
  function handleDelete(i){
    console.log("asdsad",i)
    const index = cartList.indexOf(i);
    console.log("index",index)
    setCart(cartList.splice(index,1))
  }
  const listItems = cartList.map((item) =>
  <article>
            
  <div className="pay-top">
    <div>
      <b>{item.title}</b>
      
    </div>
    <p className="qty-box">{item.quantity}</p>
    <p>Rs.{item.price}</p>
    <span className="trash-box" title="delete" onClick={()=>handleDelete(item)}><FaTrashAlt  /></span>
  </div>

  <div className="pay">
    <input className="order-input" placeholder="Input Order Note" ></input>
    
  </div>
  </article>
  );
  
  useEffect(() => {
    var t= 0;
    for(let i=0;i<cartList.length;i++){
      t = t+ cartList[i].price;
      
    }
    console.log(t)
    setTotal(t);
  }, [])
  
  return (
    <>
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
              <p className="space">Discount</p>
              <p>Total</p>
            </div>
            <div className="last">
              <p className="space">Rs.0</p>
              <p>Rs.{total}</p>
            </div>
          </figure>

        </div>
      </div>
    </>
  );
}

export default PaymentSect;
