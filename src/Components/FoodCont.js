import React, { useState } from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import card from "../img/card1.png";
import afri from "../img/afri.jpg";
import chine from "../img/chine.jpg";
import ital from "../img/ital.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import food from '../img/bckgrnd.avif';
import ingred from '../img/ingred.jpg';
import instructions from '../img/instructions.jpeg';
import ingredien from '../img/ingredien.avif';




function FoodCont() {
  const [search,setSearch] = useState(false)
  const [input,setInput]  =useState('')
  const [data,setData] = useState({ 
    "recipe": { name: "Chocolate Chip Cookies", 
    "ingredients": [ "1 cup butter, softened", "1 cup white sugar", "1 cup brown sugar", "2 eggs", "2 teaspoons vanilla extract", "3 cups all-purpose flour", "1 teaspoon baking soda", "2 teaspoons hot water", "1/2 teaspoon salt", "2 cups semisweet chocolate chips", "1 cup chopped walnuts (optional)" ], 
    "instructions": [ "Preheat oven to 350 degrees F (175 degrees C).", "Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.", "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned." ] }, 
    "restaurants": [ { "name": "The Chocolate Room", "price_range": 20, "menu_items": [ { "name": "Chocolate Chip Cookie", "price": 60 }, { "name": "Double Chocolate Cookie", "price": 70 } ] }, { "name": "Warm Oven", "price_range": "₹₹₹", "menu_items": [ { "name": "Classic Chocolate Chip Cookie", "price": 120 }, { "name": "Triple Chocolate Cookie", "price": 150 } ] }, { "name": "The Donut Baker", "price_range": "₹", "menu_items": [ { "name": "Chocolate Chip Cookie", "price": 35 }, { "name": "Oatmeal Raisin Cookie", "price": 30 } ] } ] })
    //console.log("data",data.recipe.ingredients)
    data.recipe.name = data.recipe.name.toUpperCase();
    const listItems = data.recipe.ingredients.map((item) => <li>{item}</li>);
    const instructions = data.recipe.instructions.map((item) => <li>{item}</li>);
    const restaurants = data.restaurants.map((item)=> <Link to="/foodDetail" state={{name:item.name , price:item.price_range, img:chine}}><FoodBox imgSrc={chine} title={item.name} price={item.price_range} /></Link>)
    
    function handleSearch(e){
      setInput('')
      setSearch(true)
     
    }
    function handleInput(e){
      console.log("input",e.target.value)
      setInput(e.target.value)
    }
    
    return (
    <>
      <div className="foodcontainer">
        {search && <div className="left-side">
        
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
           
            <div className="top-section1" >
        <div className="search-box">
        <input type="text" placeholder="Search food..."  value={input} onChange={handleInput}/>
        <i>   
          <FaSearch />
        </i>
        </div>
        </div>
        <br/>
        <div>
          
          <h3 style={{fontSize:'29px',fontWeight:'800'}}><u style = {{textDecorationLine:'none'}}><i> RECIPE: {data.recipe.name}</i></u></h3><br/>
          <div className="ingredients" style={{backgroundImage:`url(${ingredien})`,backgroundRepeat:'no-repeat',backgroundSize:'cover', border:'5px solid #a5a4a9',padding:'20px',borderRadius:'6px',marginTop:'12px'}}>
          <h4 style={{marginLeft:'0%',marginTop:'-4%',marginBottom: '20px' ,fontSize:'27px',backgroundColor:'white',width:'190px',border:'5px solid #a5a4a9'}}>INGREDIENTS</h4>
           <div style={{color:'white'}}>{listItems}</div>
           </div>
           <br/>
           <div className="ingredients" style={{backgroundImage:`url(${ingredien})`,backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize:'cover', border:'5px solid #a5a4a9',padding:'20px',borderRadius:'6px',marginTop:'12px'}}>

           <h4 style={{marginLeft:'0%',marginTop:'-4%',fontSize:'27px',backgroundColor:'white',width:'210px',marginBottom: '20px',border:'5px solid #a5a4a9'}}>INSTRUCTIONS</h4>
           <div style={{color:'white'}}>{instructions}</div>
           </div>
           <br/>


        </div>
        <p><u style={{fontSize:'23px',fontWeight:'700'}}>Order From Restaurants:</u></p>
            <main>
              
              <br/>
              {restaurants}
            </main>
          </div>
        </div>}
       {!search && <div className="left-side">
       
       <div className="cards" style={{backgroundImage:`url(${food})`,  height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <div className="title">
          <h2>Find A Recipe</h2>
        </div>
        <br/>
       <div className="top-section1" >
        <div className="search-box">
          <input type="text" placeholder="Search food..."  value={input} onChange={handleInput}/>
        <i onClick={handleSearch}>
          <FaSearch />
        </i>
        </div>
        </div>
       </div>
       </div>}
      </div>
    </>
  );
}

export default FoodCont;
