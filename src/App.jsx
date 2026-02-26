/** @format */

import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Menus from "./Components/Menus";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Banner3 from "./Components/Banner3";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
      </main>
    </>
  );
};

export default App;
