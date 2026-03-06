/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";
import banner4 from "../assets/fruits/3banner.png";
import { FaArrowRight } from "react-icons/fa";

const Banner3 = () => {
  return (
    <section className="py-16 container mx-auto px-4 md:px-8 mb-8">
      <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banner4})` }}
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center py-16 px-8 md:px-16 max-w-[560px]">
          <motion.span
            variants={FadeLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block bg-amber/20 text-amber-light font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-widest font-dm mb-5 w-fit"
          >
            🍊 Limited Time Offer
          </motion.span>

          <motion.h2
            variants={FadeLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-playfair text-4xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            Fresh Fruits for a{" "}
            <span className="text-amber italic">Healthy Life</span>
          </motion.h2>

          <motion.p
            variants={FadeLeft(0.55)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/75 font-dm text-base leading-relaxed mb-8"
          >
            Get your first order with{" "}
            <strong className="text-white">20% off</strong>. Use code{" "}
            <strong className="text-amber font-mono">FRESH20</strong> at
            checkout. Limited to first-time customers only.
          </motion.p>

          <motion.div
            variants={FadeLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <button className="flex items-center gap-2 bg-amber text-forest font-semibold py-3.5 px-7 rounded-full font-dm shadow-lg hover:bg-amber-light hover:scale-105 transition-all duration-200">
              Shop Now <FaArrowRight className="text-sm" />
            </button>
            <button className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold py-3.5 px-7 rounded-full font-dm hover:bg-white/25 transition-all duration-200">
              Browse Menu
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;