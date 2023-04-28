import React, { useState } from "react";
import Button from "../../Components/comman/Button";
import TextField from "../../Components/comman/TextField";
import login_bg from "./login_bg.png";
import { THEME_COLOR2 } from "../../Utils/Contants/ThemeColors";
import { useOktaAuth } from "@okta/okta-react";
import usePasswordLogin from "../../hooks/usePasswordLogin";
import SearchBox from "../../Components/Home/SearchBox";

import { useNavigate } from "react-router";
import OktaSignInWidget from "./OktaSignInWidget";

const Login = () => {
  const { oktaAuth } = useOktaAuth();
  const navigate = useNavigate();

  const { SiginByPassword } = usePasswordLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSsoLogin = async (e) => {
    e.preventDefault();
    await oktaAuth.signInWithRedirect();
  };

  const onSuccess = function (res) {
    if (res.status === 'SUCCESS') {
      return oktaAuth.signInWithRedirect({
        sessionToken: res.session.token
      });
    }
  }

  const onError = function (err) {
    console.log('error logging in', err);
  }
  return (
    <div>
      <div className="absolute -z-20 w-full h-full">
        <div className="w-full h-full grid grid-cols-2">
          <div className="" style={{ background: "#ff555f" }}>
            .
          </div>
          <div className="" style={{ background: "#01a9c9" }}>
            .
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-40">
        <div className="max-w-5xl w-full">
          <div className="w-full flex justify-center">
            {/* <SearchBox /> */}
            <div className="flex w-3/6 mb-3">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block flex-auto rounded-l border border-solid border-[#707070] bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search for your food"
                aria-label="Search"
                // value={searchText}
                // onChange={(e) => setSearchText(e.target.value)}
                aria-describedby="button-addon1"
              />
              {/* <!--Search button--> */}
              <button
                className=" bg-[#223e6e] border-r-2 relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="submit"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="w-full h-auto grid grid-cols-12"
            style={{
              backgroundImage: `url(${login_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div className="col-span-5 mt-10">
              <div className="flex justify-center items-center mt-32">
                <div className="flex flex-col justify-end align-bottom h-full">
                  <h1 className="text-4xl text-white">Craving Something?</h1>
                  <h1 className="text-2xl text-amber-600">Lets get Started</h1>
                  <Button title="Sign Up" onClick={() => navigate("/signup")} />
                </div>
              </div>
            </div>
            <div className="col-span-7 my-10">
              <div className=" h-full  flex flex-col justify-center">
                <div
                  className="border-gray-600border-2 rounded w-5/6 py-10"
                  style={{
                    boxShadow: "0 3px 6px 0 rgba(255, 255, 255, 0.4)",
                    backgroundColor: "#fff",
                    opacity: 0.95,
                  }}
                >
                  {/* <div className="px-10">
                                <TextField text="Email" setText={setEmail} text={email} label="Email"/>
                            </div>
                            <div className="px-10 mt-2">
                                <TextField text="Password" setText={setPassword} text={password} label="Password"/>
                            </div>
                            <div className="px-10 mt-2 flex flex-row-reverse">
                                <Button title="Sign In"/>
                            </div> */}
                  <div className="px-10 mt-2">
                    <OktaSignInWidget
                      baseUrl="https://dev-00265524.okta.com/oauth2/default"
                      onSuccess={onSuccess}
                      onError={onError}
                    />
                  </div>

                  {/* <div className="w-full px-10 py-12 mt-6">
                    <Button
                      title="Sign in by SSO"
                      width="full"
                      color={THEME_COLOR2}
                      onClick={handleSsoLogin}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
