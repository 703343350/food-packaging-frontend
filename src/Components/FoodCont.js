import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import card from "../img/card1.png";
import afri from "../img/afri.jpg";
import chine from "../img/chine.jpg";
import ital from "../img/ital.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";



function FoodCont() {
  return (
    <>
      <div className="foodcontainer">
        <div className="left-side">
          <div className="cards">
            {/* <div className="all">
              <div className="varieties">
                <Link to="/" className="var-btn">
                  All
                </Link>
                <Link to="/african" className="var-btn">
                  African
                </Link>
                <Link to="/chinese" className="var-btn">
                  Chinese
                </Link>
                <Link to="/italian" className="var-btn">
                  Italian
                </Link>
                <Link to="/desert" className="var-btn">
                  Desert
                </Link>
              </div>
            </div> */}

            <main>
              <Link to="/foodDetail" state={{name:"Food Item 1" , price:"Rs.10", img:chine}}><FoodBox imgSrc={chine} title={"Food Item 1"} price={"Rs.20"} /></Link>
              <Link to="/foodDetail"><FoodBox imgSrc={afri} title={"Food Item 2"} price={"Rs.10"} /></Link>
              <Link to="/foodDetail"><FoodBox imgSrc={ital} title={"Food Item 3"} price={"Rs.5"} /></Link>
              <Link to="/foodDetail"><FoodBox imgSrc={chine} title={"Food Item 4"} price={"Rs.7"} /></Link>
              <Link to="/foodDetail"><FoodBox imgSrc={afri} title={"Food Item 5"} price={"Rs.10"} /></Link>
              <Link to="/foodDetail"><FoodBox imgSrc={ital} title={"Food Item 6"} price={"Rs.15"} /></Link>
            </main>
          </div>
        </div>
        {/* <div className="right-side">
          <PaymentSect />
        </div> */}
      </div>
    </>
  );
}

export default FoodCont;
