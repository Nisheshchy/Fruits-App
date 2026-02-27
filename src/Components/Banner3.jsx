/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";
import banner4 from "../assets/fruits/3banner.png";

const bgStyle = {
  backgroundImage: `url(${banner4})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 py-14 space-y-6 md:space-y-0">
        {/* blank div */}
        <div></div>

        {/* banner info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase text-orange-500">
              Brand Info
            </motion.h1>

            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              error, minus beatae possimus consectetur ducimus.
            </motion.p>

            <motion.p
              variants={FadeLeft(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              Nostrum earum voluptate nobis corporis aspernatur quis dolorem,
              totam repellendus, aperiam dolorum sit.
            </motion.p>

            <motion.div
              variants={FadeLeft(1.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start gap-4">
              <button className="primary-btn">Learn more</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;