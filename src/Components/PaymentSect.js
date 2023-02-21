import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PaymentSect(props) {
  const [state, setState] = useState({ count: 1 });
  console.log("hhhj", props);
  const [cartList, setCart] = useState(props.cartList);
  const [total, setTotal] = useState(0);
  function handleDelete(i) {
    console.log("asdsad", i);
    const index = cartList.indexOf(i);
    console.log("index", index);
    setCart(cartList.splice(index, 1));
  }
  // const notify = () => {
  //   toast.success("Order has been placed", {
  //     position: "top-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };

  const navigate = useNavigate();
  function placeOrder() {
    axios
      .post("http://localhost:4000/order", {
        FoodOrder:['tea'],
        Restaurant:cartList[0].title,
        Price:total,
      },{
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWJiNzAzOGM5ZDRjZTQ3NTdkNGNjZCIsImVtYWlsIjoiYWJjdGVzdDRAbWFpbC5jb20iLCJ0ZW5hbnRJZCI6IjYyMDc4MTcwZWRlZWM3MWIxZTZjNjk1MCIsInJvbGUiOlsiRVZFTlRfTEVBRCJdLCJpYXQiOjE2NzY5NTgzNTV9.7iXuuBxWv57ykdMMCezPhl2yJH3-C_nJAyvp86SVQdI',"Content-Type": 'application/json' }
      }
      )
      .then((res) => {
        // notify();
        navigate("/orders");
      });
  }
  const listItems = cartList.map((item) => (
    <article>
      <div className="pay-top">
        <div>
          <b>{item.title}</b>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "-4%" }}
        >
          <button
            onClick={() => {
              setState({ count: state.count + 1 });
            }}
          >
            <FaPlus />
          </button>
          <div style={{ margin: "0 16px" }}>{state.count}</div>
          <button
            onClick={() => {
              setState({ count: state.count - 1 });
            }}
          >
            <FaMinus></FaMinus>
          </button>
        </div>
        {/* <p className="qty-box">{item.quantity}</p> */}
        <p style={{ marginLeft: "2%" }}>Rs.{item.price}</p>
        <span
          className="trash-box"
          title="delete"
          onClick={() => handleDelete(item)}
        >
          <FaTrashAlt />
        </span>
      </div>

      <div className="pay">
        <input className="order-input" placeholder="Input Order Note"></input>
        <button onClick={placeOrder}>Place your order</button>
      </div>
    </article>
  ));

  useEffect(() => {
    var t = 0;
    // console.log(cartList );
    for (let i = 0; i < cartList.length; i++) {
      t = t + cartList[i].price;
    }
    console.log(cartList[0].price, state);
    setTotal(state.count * cartList[0].price);
  }, []);

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
              {/* <p className="space">Discount</p> */}
              <p>Total</p>
            </div>
            <div className="last">
              {/* <p className="space">Rs.0</p> */}
              <p>Rs.{total}</p>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default PaymentSect;
