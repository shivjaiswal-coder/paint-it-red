import React from "react";
import {Link} from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./Header.css";

function Header() {
  return (
    <div className="Header-container">
      <nav className="header">

        <img className="header__logo" src="./images/Amazon logo.png" alt="logo"/>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <FiSearch className="header__searchIcon" />
        </div>

        <Link to="/" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Hello, User</span>
            <span className="header__optionLineTwo">Sign In or Sign Out</span>
        </div>
        </Link>

      </nav>
    </div>
  );
}

export default Header;
