import React from "react";
import Footer from "./Footer/Footer";
import Mainbar from "./Mainbar/Mainbar";
import Navlinks from "./Navlinks/Navlinks";
import Searchbar from "./Searchbar/Searchbar";

function MainPage() {
  return (
    <>
      <Searchbar />
      <Navlinks />
      <Mainbar />
      <Footer />
    </>
  );
}

export default MainPage;
