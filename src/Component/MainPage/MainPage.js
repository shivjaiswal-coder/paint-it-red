import React from "react";
import Footer from "./Footer/Footer";
import Mainbar from "./Mainbar/Mainbar";
import Navlinks from "./Navlinks/Navlinks";
import Searchbar from "./Searchbar/Searchbar";
import Login from "../LoginPage/Login";

function MainPage() {
  return (
    <>
      <Searchbar />
      <Navlinks />
      <Mainbar />
      {/* <Login/> */}
      <Footer />
    </>
  );
}

export default MainPage;
