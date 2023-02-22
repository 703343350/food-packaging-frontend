import React, { useState ,useEffect} from "react";
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
import axios from 'axios'

// import { Oval } from 'react-loader-spinner'




function FoodCont() {
  const [search,setSearch] = useState(false)
  const [input,setInput]  =useState('')
  const [name,setName] = useState('')
  const [data,setData] = useState({})
  const [ingredients,setIngred] = useState([])
  const [recipe,setRecipe] = useState([])
  const [res,setRes] = useState([])
    //console.log("data",data.recipe.ingredients)
   
   
    function handleSearch(e){
      console.log("input",input)
      axios.get('http://localhost:4000/chatgpt?food='+input)
      .then((res)=>{
       // console.log("dataaaa",data)
        setData(res.data.data)
        
       
      })
      
      
    }
    useEffect(() => {
      //console.log("data",data,data.recipe,data.hasOwnProperty('recipe'))
      if(data.hasOwnProperty('recipe')){
        
        setIngred(data.ingredients.map((item) => <li>{item}</li>));
        setRecipe(data.recipe.map((item) => <li>{item}</li>));
        setRes(data.restaurants.map((item) => <Link to="/foodDetail" state={{img:data.image ,name: item.name, price: item.price }}><FoodBox imgSrc={data.image} title={item.name} price={item.price} /></Link>));
        
        setName(input.toUpperCase());
        setInput('')
        setSearch(true)
        console.log("data", data)
      }
    }, [data])
    
    function handleInput(e){
     // console.log("input",e.target.value)
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
        <i onClick={handleSearch}>   
          <FaSearch />
        </i>
        </div>
        </div>
        <br/>
        <div>
          
        <h3 style={{fontSize:'29px',fontWeight:'800'}}><u style = {{textDecorationLine:'none'}}><i> RECIPE: {name}</i></u></h3><br/>
          <div className="ingredients" style={{backgroundImage:`url(${ingredien})`,backgroundRepeat:'no-repeat',backgroundSize:'cover', border:'5px solid #a5a4a9',padding:'20px',borderRadius:'6px',marginTop:'12px'}}>

            <h4 style={{marginLeft:'0%',marginTop:'-4%',marginBottom: '20px' ,fontSize:'27px',backgroundColor:'white',width:'190px',border:'5px solid #a5a4a9'}}>INGREDIENTS</h4>

           <div style={{color:'white'}}>{ingredients}</div>

           </div>
           <br/>
           <div className="ingredients" style={{backgroundImage:`url(${ingredien})`,backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize:'cover', border:'5px solid #a5a4a9',padding:'20px',borderRadius:'6px',marginTop:'12px'}}>           <h4 style={{marginLeft:'0%',marginTop:'-4%',fontSize:'27px',backgroundColor:'white',width:'210px',marginBottom: '20px',border:'5px solid #a5a4a9'}}>INSTRUCTIONS</h4>           <div style={{color:'white'}}>{recipe}</div>           </div>
           <br/>


        </div>
        <p><u style={{fontSize:'23px',fontWeight:'700'}}>Order From Restaurants:</u></p>
            <main>
              
              <br/>
              {res}
            </main>
          </div>
        </div>}
        {/* {!search && !data && 
        <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      
      />
        } */}
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
