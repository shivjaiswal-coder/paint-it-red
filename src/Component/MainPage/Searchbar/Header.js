import React from "react";
import {Link} from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./Header.css";

function Header() {
  return (
    <div class="container_fluid">
        <div class="row">

          <div class="col-2">
            <a href="#">Paint-it-Red</a>
          </div>

          <div class="col-6" id="search">
            <input type="text" name="" value=""/>
            <button type="button" name="button">O</button>
          </div>

          <div class="col-4" >
            <div class="row" id="items">
              <div class="col">
                <a href="#">Hi User</a>
              </div>
              <div class="col">
                <a href="#">Orders</a>
              </div>
              <div class="col">
                <a href="#">Cart</a>
              </div>
            </div>

            </div>

        </div>

      </div>

  );
}

export default Header;
