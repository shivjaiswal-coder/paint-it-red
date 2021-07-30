import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./Searchbar.css";
function Searchbar() {
  return (
    <div className="container-fluid">
      <div
        className="searchbar-container"
      >
        <div className="brand">
          <h4 style={{ color: "white" }}>Paint-it-red</h4>
        </div>

        <div className="text1">
          <div class="input-group mb-3" id="search" >
            <input
              type="text"
              class="form-control"
              placeholder="Search for product, brand"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              
            />
            <button
              class="btn btn-warning"
              type="button"
              id="button-addon2"              
            >
              <FiSearch/>
            </button>
          </div>
        </div>

        <div className="user">
        <h4 style={{ color: "white" }}>Sign In</h4>
        </div>

        <div className="cart" id="cart">
          <FaCartPlus />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
