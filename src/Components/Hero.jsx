/** @format */

import React from "react";
import { IoBagHandleOutline, IoLeafOutline } from "react-icons/io5";
import { FaTruck, FaStar } from "react-icons/fa";
import HeroPng from "../assets/fruits/hero-fruit-plate.png";
import { motion } from "framer-motion";
import { FadeRight } from "../utility/animation";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream bg-mesh">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-mint/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto grid grid-cols-2 items-center gap-4 px-4 md:px-8 py-6 md:py-16 relative z-10">
        {/* Left — Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-left space-y-3 md:space-y-6 max-w-[540px]">
            {/* Label pill */}
            <motion.div
              variants={FadeRight(0.3)}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-1.5 bg-mint-light text-mint font-semibold text-[10px] md:text-sm px-3 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-widest font-dm">
                <IoLeafOutline className="text-xs md:text-base" />
                100% Organic & Fresh
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={FadeRight(0.5)}
              initial="hidden"
              animate="visible"
              className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900"
            >
              Nature's Finest
              <br />
              <span className="text-primary italic">Fruits,</span>{" "}
              <span className="text-forest">Delivered</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={FadeRight(0.8)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-dm"
            >
              Experience the taste of nature delivered right to your doorstep.
              Hand-picked, farm-fresh fruits for your healthiest life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={FadeRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 md:gap-3 flex-wrap"
            >
              <button className="flex items-center gap-1.5 md:gap-2.5 bg-primary text-white font-semibold text-xs md:text-sm py-2 md:py-3 px-4 md:px-6 rounded-full shadow-[0px_6px_16px_-4px_rgba(222,44,77,0.45)] hover:scale-105 transition-all duration-200 font-dm">
                <IoBagHandleOutline className="text-sm md:text-xl" />
                Order Now
              </button>
              <button className="flex items-center justify-center bg-transparent text-forest border-2 border-forest font-semibold text-xs md:text-sm py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-forest hover:text-white transition-all duration-200 font-dm">
                Browse Menu
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 md:gap-5 flex-wrap"
            >
              <div className="flex items-center gap-1.5 text-gray-500">
                <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-mint-light flex items-center justify-center text-mint">
                  <FaTruck className="text-[9px] md:text-xs" />
                </span>
                <span className="text-[10px] md:text-sm font-medium font-dm">
                  Free delivery on ₹499+
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-mint-light flex items-center justify-center text-mint">
                  <FaStar className="text-[9px] md:text-xs" />
                </span>
                <span className="text-[10px] md:text-sm font-medium font-dm">
                  4.9★ Rated by 10K+ customers
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right — Hero image */}
        <div className="flex justify-center items-center relative">
          {/* Decorative circle ring */}
          <div className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border-[2px] border-dashed border-forest/20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-amber/15 to-mint/15" />

          <motion.img
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
            src={HeroPng}
            alt="Fresh Fruits"
            className="w-[160px] sm:w-[240px] md:w-[380px] lg:w-[480px] drop-shadow-fruit relative z-10"
            style={{ mixBlendMode: "multiply" }}
          />

          {/* Average Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
            className="absolute top-0 right-0 md:right-2 bg-white rounded-xl md:rounded-2xl shadow-[0_6px_24px_rgba(26,60,46,0.14)] px-2.5 md:px-4 py-2 md:py-3 z-20"
          >
            <p className="text-[9px] md:text-xs text-gray-400 font-dm">
              Average Rating
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="font-playfair font-bold text-base md:text-xl text-gray-900">
                4.9
              </span>
              <FaStar className="text-amber text-xs md:text-sm" />
            </div>
          </motion.div>

          {/* Daily Harvested badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
            className="absolute bottom-0 left-0 bg-forest rounded-xl md:rounded-2xl shadow-lg px-2.5 md:px-4 py-1.5 md:py-3 z-20"
          >
            <p className="text-[8px] md:text-xs text-green-200 font-dm">
              Daily Harvested
            </p>
            <p className="font-playfair font-bold text-white text-xs md:text-base">
              500+ Farms
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
