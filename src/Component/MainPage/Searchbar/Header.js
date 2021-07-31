import React from "react";
import {Link} from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Header.css";

function Header() {
  return (
    <div class="container_fluid">
        <div class="row">

          <div class="col-3" id="brand">
            <a href="#">Paint-it-Red</a>
          </div>

          <div class="col-5" id="search">
            <input type="text" name="" placeholder="Search for your favorite paintings..."/>
            <button type="button" name="button"><BiSearch/></button>
          </div>


          <div class="col-4" id="items">
            <div class="row" >
              <div class="col">
                <a href="#">Hi User!</a>
              </div>
              <div class="col">
                <a href="#">Orders</a>
              </div>
              <div class="col">
                <a href="#"><FaCartPlus/></a>
              </div>
            </div>

            </div>

            <div class="col-3" id ="hams">
            <GiHamburgerMenu/>
            </div>

        </div>

      </div>

  );
}

export default Header;
