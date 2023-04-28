import GenpactLogo from "./genpact-logo.png";
import FaqIcon from "./faq-icon.png";
import SettingIcon from "./setting-icon.png";
import ProfileIcon from "./profile-icon.png";
import { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router";

const Header = () => {
  const [showProfileDropdown, setShowProfileDropDown] = useState(false);

  const { authState, oktaAuth } = useOktaAuth();


  const handleLogOut = async (e) => {
    e.preventDefault();
    if (authState && authState.isAuthenticated) await oktaAuth.signOut();
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="absolute m-3">
        <img src={GenpactLogo} style={{ height: 80, width: 180 }} />
      </div>
      <div className="flex justify-end bg-black space-x-2 p-2">
        <img src={SettingIcon} />
        <img src={FaqIcon} />
      </div>
      {authState?.isAuthenticated ? (
        <div className="flex justify-end bg-blue-950 space-x-2 p-2">
          <div className="text-white text-xs">
            <h1>Tejas Goel</h1>
            <h1 className="text-end">User</h1>
          </div>
          <div className="relative">
            <img
              src={ProfileIcon}
              style={{ height: 40, width: 40 }}
              onClick={() => setShowProfileDropDown(!showProfileDropdown)}
              className="cursor-pointer"
            />
            {showProfileDropdown && (
              <div
                className="absolute end-0 bg-blue-950 rounded-b-2xl text-white p-2 text-xs z-50"
                style={{ width: 150 }}
                onClick={() => setShowProfileDropDown(false)}
              >
                <div
                  className="m-3  cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  User Details
                </div>
                <div
                  className="bg-white p-0 mx-2"
                  style={{ height: 0.25 }}
                ></div>
                <div className="m-3  cursor-pointer">User Order Hostory</div>
                <div
                  className="bg-white p-0 mx-2"
                  style={{ height: 0.25 }}
                ></div>
                <div className="m-3  cursor-pointer">Payment UPIs</div>
                <div
                  className="bg-white p-0 mx-2"
                  style={{ height: 0.25 }}
                ></div>
                <div className="m-3  cursor-pointer" onClick={handleLogOut}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      ) :
        <div className="flex justify-end bg-blue-950 space-x-2 p-2">
          .
        </div>
      }
    </div>
  );
};

export default Header;
