import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import "./Header.scss";
import Dropdown from "../droptown/droptown";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");


  const handleSearchButtonClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };



  return (
    <header className="header">
      <div className="container">
        <div className="logoContainer">
          <img className="logoIcon" src="./Vector.png" alt="logo" />
          <img className="logoText" src="./StreamVibe.png" alt="logo" />
        </div>
        <Dropdown
          items={["Home", "Movies & Shows", "Support", "Subscriptions","Serach"]}
        />
        <nav className="menu">
          <button
            className={activeNavItem === "Home" ? "active" : ""}
            onClick={() => handleNavItemClick("Home")}
          >
            Home
          </button>
          <button
            className={activeNavItem === "Movies" ? "active" : ""}
            onClick={() => handleNavItemClick("Movies")}
          >
            Movies & Shows
          </button>
          <button
            className={activeNavItem === "Support" ? "active" : ""}
            onClick={() => handleNavItemClick("Support")}
          >
            Support
          </button>
          <button
            className={activeNavItem === "Subscriptions" ? "active" : ""}
            onClick={() => handleNavItemClick("Subscriptions")}
          >
            Subscriptions
          </button>
        </nav>
        <div className="searchContainer">
          <div className="icons">
            <div className="iconButton" onClick={handleSearchButtonClick}>
              <Link to="search"> <CiSearch /></Link>
            </div>
            <AiOutlineBell />
          </div>
          {/* {showSearchInput && (
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button className="clearButton" onClick={handleClearSearch}>
                <AiOutlineClose />
              </button>
            </div>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
