/** @format */

import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Menus from "./Components/Menus";
import Banner from "./Components/Banner";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
      </main>
    </>
  );
};

export default App;
