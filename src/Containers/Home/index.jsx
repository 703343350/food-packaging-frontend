import axios from "axios";
import { useEffect, useState } from "react";
import SearchBox from "../../Components/Home/SearchBox";
import useFoodSearch from "../../hooks/useFoodSearch";
import OptionsView from "./OptionsView";
import Recepies from "./Recepies";

let colors = ["#df966b", "#5c7734", "#9caeb0", "#826d63", "#eda661", "#55707c"]

function Home() {
  console.log(process.env.REACT_APP_BE_URL)
  const [location, setLocation] = useState("")
  const { searchFood, loading, recepies } = useFoodSearch();


  const [toggleState, setToggleState] = useState(-1)
  const [currentRecepie, setCurrentRecepie] = useState("")
  const [currentType, setCurrentType] = useState("")

  const [cafeData, setCafeData] = useState([])

  useEffect(() => {
    position()
  }, []);

  async function reversegeo(latitude, longitude) {
    let apiURL = `https://us1.locationiq.com/v1/reverse?key=pk.d0418625b19c0c40a2c699b57abb7e05&lat=${latitude}&lon=${longitude}&format=json`

    try {
      const res = await fetch(apiURL)
      const data = await res.json()

      console.log(data.display_name)
      setLocation(data.display_name)
    } catch (e) {
      console.log(e)
    }
  }

  const position = async () => {
    console.log("Hi there")
    await navigator.geolocation.getCurrentPosition(position => {

      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude
      let accuracy = position.coords.accuracy
      console.log({ latitude, longitude, accuracy })
      reversegeo(latitude, longitude)

    },
      err => console.log(err)
    );
  }
  console.log(recepies)


  function handleRecepieSelect(index, name) {
    setToggleState(index);
    setCurrentRecepie(name)
    setCurrentType( "Cafeteria" )
  }
  useEffect(() => {
    searchCafeteria(currentRecepie)
  }, [currentRecepie, currentType])
  async function searchCafeteria(recepieName) {
    try {
      const URL = `http://localhost:4000/getCafeteriaDetailByRecipe/${recepieName}`
      const res = await axios.get(URL)
      console.log(res)
      setCafeData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <SearchBox searchFood={searchFood} />
      {loading && <h1>Loading</h1>}
      {recepies.length && <>
        <Recepies handleRecepieSelect={handleRecepieSelect} recepies={recepies} toggleState={toggleState} />
        <OptionsView currentType={currentType} setCurrentType={setCurrentType} cafeData={cafeData}/>
      </>}
    </>
  );
}

export default Home;
