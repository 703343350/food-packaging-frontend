import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useOktaAuth, LoginCallback } from "@okta/okta-react";
import Login from ".";
const Layout = (props) => {
  const { authState, oktaAuth } = useOktaAuth();

  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      let accessToken = authState.idToken.idToken;
      oktaAuth.token.getUserInfo().then(async (info) => {
      //  console.log(info);
      });
      //console.log(accessToken, "dddd");
    }
  }, [authState, oktaAuth]);

  return (
    <Routes>
      <Route exact path="/login/callback" element={<LoginCallback />} />
      {!authState?.isAuthenticated && (
        <Route exact path="/" element={<Login />} />
      )}
    </Routes>
  );
};

export default Layout;
