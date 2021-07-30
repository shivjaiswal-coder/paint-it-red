import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import Mainbar from "./Mainbar/Mainbar";
import Navlinks from "./Navlinks/Navlinks";
<<<<<<< HEAD
import Searchbar from "./Searchbar/Searchbar";
=======
import Header from "./Searchbar/Header";
>>>>>>> 8099760d3f8b545767fb12a009c6384ac79ab5d0

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
