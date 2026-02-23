/** @format */

import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../assets/fruits/hero-fruit-plate.png";
import LeafPng from "../assets/fruits/leaf.jpg";
import { motion } from "framer-motion";
import { FadeRight } from "../utility/animation";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white/50">
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full -z-10"></div>

      {/* Accurate Leaf Placement: Top Left Corner Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.img
          src={LeafPng}
          alt="LeafBg"
          className="w-[200px] md:w-[350px] opacity-30 mix-blend-multiply"
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[750px] relative px-4">
        {/* Brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-8 lg:max-w-[500px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-6xl lg:text-8xl font-bold leading-tight xl:leading-tight font-averia">
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-wide font-semibold text-gray-800">
              Order fresh fruits online
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-500 text-lg leading-relaxed">
              Experience the taste of nature delivered right to your doorstep.
              Our organic, hand-picked fruits ensure the highest quality and
              freshness for your healthy lifestyle.
            </motion.p>
            {/* buttons */}
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start gap-4">
              <button className="primary-btn flex items-center gap-3 group px-8 py-4 text-lg">
                <span className="group-hover:rotate-12 transition-transform duration-300">
                  <IoBagHandleOutline className="text-2xl" />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center items-center relative z-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            src={HeroPng}
            alt="Fruits"
            className="w-[380px] md:w-[550px] drop-shadow-2xl relative z-20 mix-blend-multiply"
          />

          {/* Background Decorative Accent behind plate */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[60px] rounded-full z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


