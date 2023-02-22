import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useOktaAuth, LoginCallback } from "@okta/okta-react";
import FoodDetails from "../FoodDetails";
import Cart from "../Cart";
import Order from "../Order";
import Container from "../Container";
// import AfricanFood from "../AfricanFood";
// import ChineseFood from "../ChineseFood";
// import ItalianFood from "../ItalianFood";
// import DesertFood from "../DesertFood";
import Help from "../Help";
import Profile from "../Profile";
// import ComingSoon from "../ComingSoon";
// import Chat from "../Chat";
// import Modal from "../Modal";
import Login from ".";
import SideBar from "../SideBar";
import { NotFound } from "../NotFound";
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
          <Route exact path="/" element={<Login />} />
        </Routes>
      ) : (
        <div className="App">
          <SideBar />
          <Routes>
            {/* <Container /> */}
            <Route path="/" element={<Container />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/comingsoon" element={<ComingSoon />} /> */}
            {/* <Route path="/chat" element={<Chat />} /> */}
            {/* <Route path="/modal" element={<Modal />} /> */}
            {/* <Route path="/update/:id" element={<Modal />} /> */}
            <Route path="/foodDetail" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Order />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/login/callback" element={<LoginCallback />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default Layout;
