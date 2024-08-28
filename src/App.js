import React from "react";
import NavBar from "./components/Navbar/NavBar";
import AboutUs from "./container/AboutUs/AboutUs";
import Chef from "./container/Chef/Chef";
import Findus from "./container/Findus/Findus";
import Footer from "./container/Footer/Footer";
import Gallery from "./container/Gallery/Gallery";
import Header from "./container/Header/Header";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import Menu from "./container/Menu/Menu";
import "./app.css";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
}

export default App;
