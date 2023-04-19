import { useState } from "react";
import Button from "../../Components/comman/Button";
import TextField from "../../Components/comman/TextField";
import usePasswordLogin from "../../hooks/usePasswordLogin";

const initialValue = {
    "First Name": "",
    "Last Name": "",
    "Email": "",
    "Phone": "",
    "Password": "",
    "Confirm Password": "",
}

const SignUp = () => {

    const [values, setValues] = useState(initialValue)
    const {createAccount, errors, setErrors} = usePasswordLogin()

    function handleValueChange(val, name){
        console.log(val, name)
        setErrors([])
        const valueCopy = {...values}
        valueCopy[name] = val;
        setValues(valueCopy)
    }   
    console.log(values)
  return (
    <div>
      <div className="absolute -z-20 w-full h-screen">
        <div className="w-full h-full grid grid-cols-2">
          <div className="" style={{ background: "#eaa44d" }}>
            .
          </div>
          <div className="" style={{ background: "#363331" }}>
            .
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-3/6 rounded border-zinc-500 border-2 m-44 mt-14 p-16">
            <h1 className="text-xl">Create Account</h1>
            <TextField label="First Name" setText={(val)=> handleValueChange(val, "First Name")} text={values["First Name"]}/>
            <TextField label="Last Name" setText={(val)=> handleValueChange(val, "Last Name")} text={values["Last Name"]}/>
            <TextField label="Email" setText={(val)=> handleValueChange(val, "Email")} text={values["Email"]}/>
            <TextField label="Phone" setText={(val)=> handleValueChange(val, "Phone")} text={values["Phone"]}/>
            <TextField label="Password" setText={(val)=> handleValueChange(val, "password")} text={values["Password"]} />
            <TextField label="Confirm Password" setText={(val)=> handleValueChange(val, "Confirm Password")} text={values["Confirm Password"]}/>
            {errors.map(err=>{
                console.log("ERR", err)
                return <h1 className="my-1 text-sm text-red-600">
                    {err}
                </h1>
            })}
            <div className="flex flex-row-reverse my-2">

            <Button title="Create Account" width="full" onClick={()=>createAccount(values)}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
