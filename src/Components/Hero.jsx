/** @format */

import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../assets/fruits/hero-fruit-plate.png";
import LeafPng from "../assets/fruits/hero-leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../utility/animation";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full -z-10"></div>

      {/* Decorative Leaf (Small Centered Accent) */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 120 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 45 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[1px] -z-10"
      >
        <img
          src={LeafPng}
          alt="LeafBg"
          className="w-24 md:w-32 mix-blend-multiply"
        />
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative px-4">
        {/* Brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-8 lg:max-w-[450px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-7xl font-bold leading-tight xl:leading-tight font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide font-semibold text-gray-700"
            >
              Order fresh fruits online
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-500 leading-relaxed"
            >
              Experience the taste of nature delivered right to your doorstep.
              Our organic, hand-picked fruits ensure the highest quality and
              freshness for your healthy lifestyle.
            </motion.p>
            {/* buttons */}
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                <span className="group-hover:rotate-12 transition-transform duration-300">
                  <IoBagHandleOutline className="text-xl" />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center items-center relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            src={HeroPng}
            alt="Fruits"
            className="w-[350px] md:w-[500px] z-10 mix-blend-multiply contrast-[1.1] brightness-[1.02]"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
