import React from 'react'
import { useLocation } from 'react-router'
import FoodBox from './FoodBox';
import TopSect from './TopSect';

const FoodDetails = () => {

    const location  = useLocation();
    const data = location.state;
    console.log("daaya",data)
  return (
    <div className="container">
        <TopSect/>
        <FoodBox  title={"Food Item 1"} price={"Rs.20"} imgSrc={data.img} />
        </div>
  )
}

export default FoodDetails