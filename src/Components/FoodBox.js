import React from "react";
import { useNavigate } from "react-router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./Cart";

const notify = () => {
  toast.success('Item has been added to cart', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}


function FoodBox({ imgSrc, title, price,name }) {
 // console.log("abcd",name)
  const navigate = useNavigate();
  function handleClick(e,item) {
    e.preventDefault();
    navigate('/cart',{state:[item]})
    
   // notify();

  };

  return (
    <div className="details">
      <img src={imgSrc} alt="" className="details-img" />
      <div className="food-name">
        <h2>{title}</h2>
      </div>

      <div className="food-details">
        <div>
          <p>
            Price: {price}
          </p>
          <p>Available</p>
        </div>
      </div>

      <div className="cart-btn">
        <button onClick={(e) => handleClick(e,{ imgSrc, title, price,name })} className="btn">
          Add to cart
        </button>
        {/* <button onClick={notify} className="btn">Add to cart</button> */}
      </div>
      <ToastContainer />
    </div>
  );
}

export default FoodBox;
