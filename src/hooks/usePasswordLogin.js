import axios from "axios"
import { useState } from "react"


const LOGINURL = 'http://localhost:4000/login'

const usePasswordLogin = () => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])

    async function SiginByPassword(email, password){
        setLoading(true)
        console.log(email, password)
        try {
            const res = await axios.get(LOGINURL, {email, password})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    async function createAccount(values){
        let err =[]
        if(values["password"] !== values["Confirm Password"]){
            err.push("Confirm Password Doesn't match")
            
        }
        setErrors(err)
    }


    return {SiginByPassword, createAccount, errors, setErrors}
}

export default usePasswordLogin;