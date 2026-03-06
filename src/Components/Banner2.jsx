/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
import banner from "../assets/fruits/fruit-plate2.png";
import { FaTruck, FaLeaf, FaTag, FaAppleAlt } from "react-icons/fa";

const benefits = [
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Delivered fresh to your door in under 2 hours",
    bg: "bg-primary/10",
    color: "text-primary",
  },
  {
    icon: <FaLeaf />,
    title: "100% Organic",
    desc: "Pesticide-free, certified by independent labs",
    bg: "bg-mint-light",
    color: "text-mint",
  },
  {
    icon: <FaTag />,
    title: "Best Prices",
    desc: "Direct sourcing means no hidden markups",
    bg: "bg-amber/10",
    color: "text-amber",
  },
];

const Banner2 = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-8">
        {/* Left Info */}
        <div className="flex flex-col">
          <div className="space-y-6 lg:max-w-[480px] mx-auto md:mx-0">
            <motion.span
              variants={FadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-label"
            >
              <FaAppleAlt className="inline mr-1.5 text-sm" />
              Our Promise
            </motion.span>

            <motion.h2
              variants={FadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Shop Smarter,{" "}
              <span className="text-primary italic">Eat Better</span>
            </motion.h2>

            <motion.p
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 font-dm text-base leading-relaxed"
            >
              Whether you prefer ordering online or on the go, FruitStore
              makes it effortless — deliver 50+ premium organic fruits straight
              to your kitchen, every day.
            </motion.p>

            {/* Benefits */}
            <motion.div
              variants={FadeUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 ${b.bg} ${b.color}`}
                  >
                    {b.icon}
                  </span>
                  <div>
                    <h4 className="font-playfair font-semibold text-base text-gray-900">
                      {b.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-dm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={FadeUp(0.75)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 flex-wrap"
            >
              <button className="primary-btn text-sm flex items-center gap-2">
                🍎 App Store
              </button>
              <button className="secondary-btn text-sm flex items-center gap-2">
                🤖 Google Play
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-amber/15 to-primary/10 blur-3xl" />
            <motion.img
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              src={banner}
              alt="Fruit plate"
              className="w-[300px] md:w-[400px] lg:w-[450px] relative z-10 drop-shadow"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
