/** @format */

import { motion } from "framer-motion";
import React from "react";
import { FadeLeft } from "../utility/animation";

import Fruit1 from "../assets/fruits/Fruit-1.png";
import Fruit2 from "../assets/fruits/Fruit-2.png";
import Fruit3 from "../assets/fruits/Fruit-3.png";
import Fruit4 from "../assets/fruits/Fruit-4.png";

const MenuData = [
  {
    id: 1,
    name: "Fresh Apple",
    link: "/",
    price: "$5.00",

    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    name: "Fresh Orange",
    link: "/",
    price: "$4.00",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    name: "Fresh Banana",
    link: "/",
    price: "$3.00",

    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    name: "Fresh Mango",
    link: "/",
    price: "$6.00",

    img: Fruit4,
    delay: 1.2,
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20 mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase">
          Fresh Fruits
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuData.map((menu) => (
            <motion.div
              key={menu.id}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl px-4 py-8 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3 cursor-pointer">
              <motion.img
                whileHover={{ rotate: 15, scale: 1.4 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={menu.img}
                alt={menu.name}
                className="w-[80px] h-[80px] object-cover rounded-full mb-4 scale-125 transform -translate-y-6 drop-shadow"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.name}</h1>
                <p className="text-lg font-semibold text-secondary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
