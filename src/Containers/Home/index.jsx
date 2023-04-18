import { useEffect, useState } from "react";
import SearchBox from "../../Components/Home/SearchBox";

function Home() {
  console.log(process.env.REACT_APP_BE_URL)
  const [location, setLocation] = useState("")
  useEffect(() => {
    position()


  }, []);
  
  async function reversegeo(latitude, longitude) {
    let apiURL = `https://us1.locationiq.com/v1/reverse?key=pk.d0418625b19c0c40a2c699b57abb7e05&lat=${latitude}&lon=${longitude}&format=json`

    try{
      const res = await fetch(apiURL)
      const data = await res.json()

      console.log(data.display_name)
      setLocation(data.display_name)
    }catch(e){
      console.log(e)
    }
  }

  const position = async () => {
    console.log("Hi there")
    await navigator.geolocation.getCurrentPosition(position => {
       
       let latitude= position.coords.latitude;
       let longitude= position.coords.longitude
       let accuracy = position.coords.accuracy
       console.log({latitude, longitude, accuracy})
        reversegeo(latitude, longitude)
      
    }, 
      err => console.log(err)
    );
    }
    if(!location){
        return <h1>Loading</h1>
    }
  return (
    <>
    <SearchBox/>
    </>
  );
}

export default Home;
