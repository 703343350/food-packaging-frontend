import axios from "axios"
import { useState } from "react"


const APIURL = (food)=> `http://localhost:4000/chatgpt?food=${food}`

const useFoodSearch = () => {
    const [loading, setLoading] = useState(false)

    async function searchFood(food){
        setLoading(true)
        console.log(food)
        try {
            const res = await axios.get(APIURL(food))
        } catch (error) {
            console.log(error)
        }
    }


    return {searchFood}
}

export default useFoodSearch;