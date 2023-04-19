import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useOktaAuth, LoginCallback } from "@okta/okta-react";


import SideBar from "../Components/SideBar";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
const Layout = (props) => {
  // const history = useNavigate();
  const { authState, oktaAuth } = useOktaAuth();

  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      let accessToken = authState.idToken.idToken;
      oktaAuth.token.getUserInfo().then(async (info) => {
        console.log(info);
      });
      console.log(accessToken, "dddd");
    }
  }, [authState, oktaAuth]);

  return (
    <>
      {!authState?.isAuthenticated ? (
        <Routes>
          <Route exact path="/login/callback" element={<LoginCallback />} />
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signUp" element={<SignUpPage />} />
        </Routes>
      ) : (
        <div className="App">
          <SideBar />
          <Routes>
            {/* <Container /> */}
            <Route path="/" element={<HomePage /> } />
            <Route path="*" element={<h1>Not found</h1>} />
            <Route exact path="/login/callback" element={<LoginCallback />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default Layout;
