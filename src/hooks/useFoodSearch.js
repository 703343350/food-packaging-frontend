import axios from "axios";
import { useState } from "react";

const APIURL = (food) =>
  `http://localhost:4000/ChatGPT/recipesbyingredients?food=${food}`;

const useFoodSearch = () => {
  const [loading, setLoading] = useState(false);
  const [recepies, setRecepies] = useState([]);

  async function searchFood(food) {
    setLoading(true);
    console.log(food);
    try {
      const authToken = localStorage.getItem("authToken");
      let config = {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      };
      console.log(config);
      const res = await axios.get(APIURL(food), config);
      console.log(res);
      if (res.data) {
        setRecepies(res.data.data);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  return { searchFood, recepies, loading };
};

export default useFoodSearch;
