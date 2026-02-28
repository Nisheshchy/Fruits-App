/** @format */
/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
import banner from "../assets/fruits/fruit-plate2.png";

const Banner2 = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-14 md:py-24 lg:py-28">
        {/* banner info */}
        <div className="flex flex-col justify-center">
          <div className="text-center space-y-6 lg:max-w-[470px] mx-auto">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold uppercase">
              {" "}
              Online Fruits Shop
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              error, minus beatae possimus consectetur ducimus cumque nihil sit
              nemo, laboriosam dolorem deserunt esse aliquid expedita officia
              eius doloribus optio debitis!
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              earum voluptate nobis corporis aspernatur quis dolorem, totam
              repellendus, aperiam dolorum sit. Rerum tempore fugiat saepe
              possimus quos vel aperiam sapiente.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center gap-4">
              <button className="primary-btn">Download App</button>
            </motion.div>
          </div>
        </div>
        {/* banner image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={banner}
            alt="Fruit plate"
            className="w-[300px] md:w-[380px] lg:w-[430px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
