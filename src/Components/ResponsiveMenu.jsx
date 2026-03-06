/** @format */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

const ResponsiveMenu = ({ open, setOpen, data = [] }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] z-50 bg-forest flex flex-col shadow-2xl md:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber/20 rounded-xl flex items-center justify-center">
                  <FaLeaf className="text-amber text-sm" />
                </div>
                <span className="font-playfair font-bold text-white text-lg">
                  Fruit<span className="text-amber">Store</span>
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors duration-200"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-6 py-8">
              <ul className="flex flex-col gap-2">
                {data.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.07 }}
                  >
                    <a
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 font-dm font-medium text-base transition-all duration-200 group"
                    >
                      {item.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber text-xl leading-none">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA inside drawer */}
            <div className="px-6 py-6 border-t border-white/10">
              <button className="w-full bg-amber text-forest font-semibold py-3.5 rounded-2xl font-dm text-base hover:bg-amber-light transition-colors duration-200 shadow-lg">
                Order Now
              </button>
              <p className="text-white/40 text-xs text-center mt-4 font-dm">
                Free delivery on first order
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
