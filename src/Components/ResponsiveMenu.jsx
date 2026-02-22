/** @format */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open, data = [] }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 bg-black/10 backdrop-blur-sm"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl shadow-lg">
            <ul className="flex flex-col items-center gap-10">
              {data.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:scale-110 inline-block transition-transform duration-200">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
