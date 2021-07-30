import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import Mainbar from "./Mainbar/Mainbar";
import Navlinks from "./Navlinks/Navlinks";
import Searchbar from "./Searchbar/Searchbar";
import Header from "./Searchbar/Header";
function MainPage() {
  return (
    <>
    <Router>
      <Header />
      <Navlinks />
      <Mainbar />
      <Footer />
    </Router>
    </>
  );
}

export default MainPage;
