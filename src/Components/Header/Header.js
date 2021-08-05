import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <Container fluid>

          <Link to="/" className="brand">
            <span className="logo" onClick={() => setIsMobile(false)}>
              Paint-it-Red
            </span>
          </Link>



        <span className={isMobile ? "show-search" : "search-box"}>
          <InputGroup>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              style={{height: "40px"}}
            />
            <Button variant="outline-secondary" id="button-addon1">
              <FaSearch />
            </Button>
          </InputGroup>
        </span>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/LoginPage" className="Login">
            <li>Login</li>
          </Link>

          <Link to="/OrderPage" className="Order">
            <li>Orders</li>
          </Link>

          <Link to="/CartPage" className="Cart">
            <li>
              <FiShoppingCart />
              Cart
            </li>
          </Link>
        </ul>

        <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>


      </Container>
    </nav>
  );
}

export default Header;
