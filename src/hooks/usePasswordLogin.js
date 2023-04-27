import axios from "axios"
import { useState } from "react"


const LOGINURL = 'http://localhost:4000/login'

const usePasswordLogin =  () => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

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
    async function createAccount(values, address){
        let err ={}
        for(let i in values){
            console.log(i)
            if(!values[i]){
                err[i] = 'This is a mandatory field'
            }
        }
        for(let i in address){
            console.log(i)
            if(!address[i]){
                err[i] = 'This is a mandatory field'
            }
        }
        if(values["Password"] !== values["Confirm Password"]){
            err["Confirm Password"] ="Confirm password doesn't match"
        }
        setErrors(err)
        try {
            // await axios.post()
        } catch (error) {
            
        }
        setErrors(err)
    }


    return {SiginByPassword, createAccount, errors, setErrors}
}

export default usePasswordLogin;