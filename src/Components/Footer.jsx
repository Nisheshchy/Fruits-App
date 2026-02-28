/** @format */

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="br-primary/10 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center">
        {/* logo */}
        <div className="text-2xl flex items-center gap-2 uppercase font-bold cursor-pointer hover:scale-105 transition-transform duration-300">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* social icons */}
        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaFacebook className="cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300" />
          <FaTwitter className="cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300" />
          <FaInstagram className="cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300" />
        </div>
      </motion.div>
      {/* Footer text */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>Made with ❤️ by Nishesh</p>
      </div>
    </footer>
  );
};

export default Footer;
