import React from "react";
import { FaSearch } from "react-icons/fa";
import user from "../img/profile.jpg";

function TopSect() {
  return (
    <div className="top-section">
      <div className="user-info">
        <div className="user-img">
          <img src={user} alt="user" />
        </div>
        <p className="user-name">Welcome User</p>
      </div>

      {/* <div className="search-box">
        <input type="text" placeholder="Search food..." />
        <i>
          <FaSearch />
        </i>
      </div> */}
    </div>
  );
}

export default TopSect;
