/** @format */

import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Menus from "./Components/Menus";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Banner3 from "./Components/Banner3";
import Footer from "./Components/Footer";
import CartDrawer from "./Components/CartDrawer";
import CheckoutModal from "./Components/CheckoutModal";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
        {/* Global overlays */}
        <CartDrawer />
        <CheckoutModal />
      </main>
    </CartProvider>
  );
};

export default App;
