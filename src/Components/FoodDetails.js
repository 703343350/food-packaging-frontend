import React from "react";
import { useLocation } from "react-router";
import FoodBox from "./FoodBox";
import TopSect from "./TopSect";
import "./fooddetails.css";

const FoodDetails = () => {
  const location = useLocation();
  const data = location.state;
  //console.log("daaya", data);
  return (
<div className="container">
<TopSect />
    <div className="foodcontainer">
      <div className="left-side">
        <div className="cards" style={{height:'100%'}}>  
            <FoodBox title={data.name} price={data.price} imgSrc={data.img} />
            {/* <FoodBox  title={"Food Item 2"} price={"Rs.10"} imgSrc={data.img} /> */}
          </div>
        </div>
        </div>
      </div>
  );
};

export default FoodDetails;
