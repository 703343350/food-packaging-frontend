import "./App.css";
import SideBar from "./Components/SideBar";
import Container from "./Components/Container";

import Help from "./Components/Help";


import Chat from "./Components/Chat";

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import FoodDetails from "./Components/FoodDetails";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import Layout from "./Components/Login/Layout";

// const oktaAuth = new OktaAuth({ 
//   issuer: process.env.REACT_APP_OKTA_ISSUER, 
//   clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
//   redirectUri: window.location.origin + "/login/callback", });

function App() {
  // const history = useNavigate();
  // const restoreOriginalUri = async (_oktaAuth, originalUri) => {history(toRelativeUrl(originalUri, window.location.origin));};
  // const onAuthRequired = function () {history("/");};
  return (
    <>
      <div className="App">

        <Router>
          <SideBar />
          {/* <Security

          oktaAuth={oktaAuth}

          restoreOriginalUri={restoreOriginalUri}

          onAuthRequired={onAuthRequired}>

        <Layout /> 

      </Security> */}
          
          {/* <Container /> */}
          <Routes>
            <Route path="/" element={<Container />} />
            
            <Route path="/help" element={<Help />} />
         
            {/* <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/update/:id" element={<Modal />} /> */}
            <Route path="/foodDetail" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
