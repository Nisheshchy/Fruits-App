/** @format */

import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { NavbarMenu } from "../utility/menu";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { cartCount, openCart } = useCart();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(26,60,46,0.08)]"
            : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto flex justify-between items-center py-4 md:py-5 px-4 md:px-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaLeaf className="text-amber text-lg" />
            </div>
            <div className="font-playfair font-bold text-xl leading-tight">
              <span className="text-forest">Fruit</span>
              <span className="text-primary">Store</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1 font-dm">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="relative inline-block py-2 px-4 text-gray-700 font-medium hover:text-forest transition-colors duration-200 group"
                  >
                    {menu.name}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-forest rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-4 flex items-center gap-3">
              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-full hover:bg-mint-light text-gray-600 hover:text-forest transition-all duration-200 group"
                aria-label="Open cart"
              >
                <MdOutlineShoppingCart className="text-2xl" />
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount > 9 ? "9+" : cartCount}
                  </motion.span>
                )}
              </button>
              <button className="primary-btn text-sm py-2.5 px-5">
                Order Now
              </button>
            </div>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative p-2 rounded-xl hover:bg-mint-light text-gray-700 transition-all duration-200"
              aria-label="Open cart"
            >
              <MdOutlineShoppingCart className="text-2xl" />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </motion.span>
              )}
            </button>
            <button
              className="p-2 rounded-xl hover:bg-mint-light text-gray-700 hover:text-forest transition-all duration-200 active:scale-90"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <MdMenu className="text-3xl" />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-[72px] md:h-[80px]" />

      <ResponsiveMenu open={open} setOpen={setOpen} data={NavbarMenu} />
    </>
  );
};

export default Navbar;
