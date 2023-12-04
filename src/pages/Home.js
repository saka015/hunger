import React from "react";
import NavbarEl from "../components/NavbarEl";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div >
      <div>
        <NavbarEl />
      </div>
      <div >
        <Carousel/>
      </div>
      <div className="m-3 d-flex gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
