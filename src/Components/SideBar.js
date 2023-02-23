import React from "react";
import "./sidebar.css";
// import logo from "../img/prime-logo.png";
import { FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoRestaurant } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Icon = ({ icon }) => (
  <li>
    <p href="">{icon}</p>
  </li>
);

function SideBar() {
  const { authState, oktaAuth } = useOktaAuth();

  const handleLogOut = async (e) => {
    // e.preventDefault();
    // console.log("hey ");
    await oktaAuth.signOut();
    window.sessionStorage.removeItem('token')
  };

  return (
    <header>
      <img alt="logo" />
      <ul className="top-menu">
        <Link to="/">
          <Icon icon={<MdDashboard title="Order" />} />
        </Link>
        <Link to="/profile">
          <Icon icon={<FaUser title="Your Profile" />} />
        </Link>
        <Link to="/chat">
          <Icon
            icon={<IoChatbubbleEllipsesSharp title="Chat with sales rep" />}
          />
        </Link>
        <Link to="/orders">
          <Icon icon={<IoRestaurant title="Orders" />} />
        </Link>
        <Link to="/">
          <Icon icon={<IoIosHelpCircle title="FAQs" />} />
        </Link>
        <Link to="/">
          <Icon icon={<FaCog title="Settings" />} />
        </Link>
      </ul>

      <ul className="bottom-menu" style={{ zindex: 100000 }}>
        <Link to="/" onClick={handleLogOut}>
          <Icon
            onClick={handleLogOut}
            style={{ cursor: "pointer" }}
            icon={<FaSignOutAlt />}
            title="Sign Out"
          />
        </Link>
      </ul>
    </header>
  );
}

export default SideBar;
