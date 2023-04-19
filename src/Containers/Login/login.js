import React, { useState } from "react";
import Button from "../../Components/comman/Button";
import TextField from "../../Components/comman/TextField";
import login_bg from "./login_bg.png"
import {THEME_COLOR2} from "../../Utils/Contants/ThemeColors"
import { useOktaAuth } from "@okta/okta-react";
import usePasswordLogin from "../../hooks/usePasswordLogin";
import SearchBox from "../../Components/Home/SearchBox";

import { useNavigate } from "react-router";


const Login = () => {
 
    const { oktaAuth } = useOktaAuth();
    const navigate = useNavigate()

    const {SiginByPassword} = usePasswordLogin()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSsoLogin = async (e) => {
        e.preventDefault();
        await oktaAuth.signInWithRedirect();
      };

  return <div>
    <div className='absolute -z-20 w-full h-full'>
        <div className="w-full h-full grid grid-cols-2">
            <div className="" style={{background:"#eaa44d"}}>.</div>
            <div className="" style={{background:"#363331"}}>.</div>
        </div>
    </div>
    <div className="flex justify-center items-center p-40">
        <div className="max-w-5xl w-full">
            <div className="w-full flex justify-center">
                <SearchBox />
            </div>
            <div className="w-full h-auto grid grid-cols-12" style={{backgroundImage:`url(${login_bg})`, backgroundRepeat:"no-repeat", backgroundSize:"contain"}} >
                <div className="col-span-5 mt-10">
                    <div className="flex justify-center items-center mt-32">
                        <div className="flex flex-col justify-end align-bottom h-full">
                            <h1 className="text-4xl text-white">Craving Something?</h1>
                            <h1 className="text-2xl text-amber-600">Lets get Started</h1>
                            <Button title="Sign Up" onClick={()=>navigate("/signup")}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-7 my-10">
                    <div className=" h-full  flex flex-col justify-center">
                        <div className="border-gray-600border-2 rounded w-5/6 py-10" style={{boxShadow: "0 3px 6px 0 rgba(255, 255, 255, 0.4)", backgroundColor: "#fff", opacity: 0.95}}>

                            {/* <div className="px-10">
                                <TextField text="Email" setText={setEmail} text={email} label="Email"/>
                            </div>
                            <div className="px-10 mt-2">
                                <TextField text="Password" setText={setPassword} text={password} label="Password"/>
                            </div>
                            <div className="px-10 mt-2 flex flex-row-reverse">
                                <Button title="Sign In"/>
                            </div> */}

                            <div className="w-full px-10 py-12 mt-6"> 
                                <Button title ="Sign in by SSO" width="full" color={THEME_COLOR2} onClick={handleSsoLogin}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  </div>
};

export default Login;
