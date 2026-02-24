/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
import banner from "../assets/fruits/banner.png";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-yy-0 py-14">
        {/* banner */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={banner}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* banner info */}
        <div className="flex flex-col justify-center">
          <div
            className="text-center md:text-left space-y-4 
                  lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase">
              {" "}
              Brand Info
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              error, minus beatae possimus consectetur ducimus cumque nihil sit
              nemo, laboriosam dolorem deserunt esse aliquid expedita officia
              eius doloribus optio debitis!
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              earum voluptate nobis corporis aspernatur quis dolorem, totam
              repellendus, aperiam dolorum sit. Rerum tempore fugiat saepe
              possimus quos vel aperiam sapiente.\
            </motion.p>
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start gap-4">
              <button className="primary-btn">Lern more</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
