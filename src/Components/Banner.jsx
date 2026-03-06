/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
import banner from "../assets/fruits/banner.png";
import { FaLeaf, FaTruck, FaUserFriends } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const stats = [
  { icon: <FaLeaf className="text-forest" />, value: "500+", label: "Partner Farms" },
  { icon: <FaTruck className="text-primary" />, value: "50+", label: "Fruit Varieties" },
  { icon: <FaUserFriends className="text-amber" />, value: "10K+", label: "Happy Customers" },
];

const features = [
  { icon: <MdVerified />, text: "Certified organic & pesticide-free" },
  { icon: <FaTruck />, text: "Same-day delivery to your door" },
  { icon: <FaLeaf />, text: "100% freshness guarantee" },
];

const Banner = () => {
  return (
    <section className="bg-cream-dark py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-8">
        {/* Image */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <div className="relative">
            {/* Decorative circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mint/20 to-amber/15 blur-2xl scale-110" />
            <motion.img
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              src={banner}
              alt="Fresh Fruits"
              className="w-[280px] md:w-[380px] relative z-10 drop-shadow"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col order-1 md:order-2">
          <div className="space-y-6 lg:max-w-[480px]">
            <motion.span
              variants={FadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-label"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              variants={FadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Farm to Your{" "}
              <span className="text-forest italic">Table</span>
            </motion.h2>

            <motion.p
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 font-dm text-base leading-relaxed"
            >
              We partner directly with over 500 certified organic farms to bring
              you sun-ripened fruits at peak nutrition — no middlemen, no
              compromises.
            </motion.p>

            {/* Feature checklist */}
            <motion.ul
              variants={FadeUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 font-dm text-gray-700">
                  <span className="w-8 h-8 rounded-full bg-mint-light text-mint flex items-center justify-center flex-shrink-0 text-sm">
                    {f.icon}
                  </span>
                  {f.text}
                </li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-2"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 text-center shadow-[0_4px_16px_rgba(26,60,46,0.08)]"
                >
                  <div className="flex justify-center mb-1 text-xl">{s.icon}</div>
                  <p className="font-playfair font-bold text-xl text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 font-dm mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={FadeUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
