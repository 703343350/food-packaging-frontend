import "./App.css";
import SideBar from "./Components/SideBar";
import { useNavigate } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import Layout from "./Components/Login/Layout";

const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
});

function App() {
  const history = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history(toRelativeUrl(originalUri, window.location.origin));
  };
  const onAuthRequired = function () {
    history("/");
  };

  return (
    <div>
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={onAuthRequired}>
        <Layout />
      </Security>
    </div>
  );
}

export default App;
