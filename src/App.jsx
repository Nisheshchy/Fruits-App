/** @format */

import React from "react";
import Navbar from "./Components/Navbar"; // update this line
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
