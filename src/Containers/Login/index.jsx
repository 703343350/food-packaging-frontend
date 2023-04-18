import React, { useState } from "react";
import "./styles.css";
import loginLogo from "./genpactImage.png";
import userLogo from "./userIcon.png";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { oktaAuth } = useOktaAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validation, setValidation] = useState(false);

  const handleSsoLogin = async (e) => {
    e.preventDefault();
    await oktaAuth.signInWithRedirect();
  };

  const handleLogin = async (e) => {
    if (!userName || !password) {
      setValidation(true);
      return;
    } else {
      setValidation(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
        background: "url(https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-1024x683.jpg) repeat center center fixed"
      }}>
      <div className="LoginPageCard">
        <div style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}>
          <img className="genpactImage" src={loginLogo} alt="genpactLogo" />
        </div>

        <div>
          <h6 className="signInText">Sign In</h6>
        </div>

        <div>
          <h6 className="inputLabel">OHR ID</h6>
          <input
            value={userName}
            className="inputBox"
            placeholder="Enter your username"
            type="username"
            onChange={(e) => setUserName(e?.target?.value?.trimLeft())}
          />

          <h6 className="helperText">
            {validation && !userName ? "Please enter your OHR ID" : ""}
          </h6>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <h6 className="inputLabel">Password </h6>
          <input
            className="inputBox"
            value={password}
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e?.target?.value?.trimLeft())}
          />
          <h6 className="helperText">
            {validation && !password ? "Please enter password" : ""}
          </h6>
        </div>

        <div
          style={{ padding: "1rem 0", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            value={remember}
            className="checkBox"
            onChange={(e) => setRemember(e?.target?.checked)}
          />
          <span className="rememberText">Remember me</span>
        </div>

        <div>
          <button onClick={handleLogin} className="loginButton">
            Sign In
          </button>
        </div>

        <div className="userIconDiv">
          <div className="underLine" />
          <div style={{ width: "100%", textAlign: "center" }}>OR</div>
          <div className="underLine" />
        </div>

        <div>
          <button onClick={handleSsoLogin} className="loginSSOButton">
            Login With SSO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
