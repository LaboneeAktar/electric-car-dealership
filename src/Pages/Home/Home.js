import React from "react";
import Banner from "../../Components/Banner/Banner";
import Benefits from "../../Components/Benefits/Benefits";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Benefits></Benefits>
    </div>
  );
};

export default Home;
