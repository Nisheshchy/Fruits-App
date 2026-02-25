/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
import banner from "../assets/fruits/fruit-plate2.png";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-14 md:py-24">
        {/* banner info */}
        <div className="flex flex-col justify-center md:order-1">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercasa">
              Brand InFo
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam
              obcaecati sequi odio dolore officia magni reiciendis, architecto,
              eos, aut asperiores reprehenderit quas rerum omnis facilis quam
              eius doloribus maxime!
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              vero inventore assumenda ducimus alias doloribus.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start">
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>

        {/* banner image */}
        <div className="flex justify-center items-center md:order-2 relative">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            src={banner}
            alt="Fruit plate"
            className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow-2xl relative z-10"
          />
          {/* Subtle Decorative Circle Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-secondary/10 blur-[80px] rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
