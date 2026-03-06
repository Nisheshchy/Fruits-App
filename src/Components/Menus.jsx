/** @format */

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaShoppingCart, FaStar, FaLeaf } from "react-icons/fa";
import { FadeLeft } from "../utility/animation";
import { useCart } from "../context/CartContext";

import Fruit1 from "../assets/fruits/Fruit-1.png";
import Fruit2 from "../assets/fruits/Fruit-2.png";
import Fruit3 from "../assets/fruits/Fruit-3.png";
import Fruit4 from "../assets/fruits/Fruit-4.png";

const MenuData = [
  {
    id: 1,
    name: "Fresh Apple",
    category: "All",
    weight: "500g",
    price: "Rs. 450",
    numericPrice: 450,
    originalPrice: "Rs. 620",
    rating: 4.8,
    reviews: 128,
    img: Fruit1,
    delay: 0.2,
    tag: "Best Seller",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    name: "Fresh Orange",
    category: "Citrus",
    weight: "400g",
    price: "Rs. 380",
    numericPrice: 380,
    originalPrice: "Rs. 500",
    rating: 4.7,
    reviews: 95,
    img: Fruit2,
    delay: 0.4,
    tag: "Citrus",
    tagColor: "bg-amber/10 text-amber",
  },
  {
    id: 3,
    name: "Fresh Banana",
    category: "Tropical",
    weight: "600g",
    price: "Rs. 250",
    numericPrice: 250,
    originalPrice: "Rs. 340",
    rating: 4.9,
    reviews: 210,
    img: Fruit3,
    delay: 0.6,
    tag: "Organic",
    tagColor: "bg-mint-light text-mint",
  },
  {
    id: 4,
    name: "Fresh Mango",
    category: "Tropical",
    weight: "350g",
    price: "Rs. 550",
    numericPrice: 550,
    originalPrice: "Rs. 720",
    rating: 5.0,
    reviews: 340,
    img: Fruit4,
    delay: 0.8,
    tag: "Premium",
    tagColor: "bg-forest/10 text-forest",
  },
];

const categories = ["All", "Tropical", "Citrus"];

const Menus = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedIds, setAddedIds] = useState([]);
  const { addToCart, openCart } = useCart();

  const filtered =
    activeCategory === "All"
      ? MenuData
      : MenuData.filter((m) => m.category === activeCategory);

  const handleAdd = (menu) => {
    addToCart(menu);
    setAddedIds((prev) => [...prev, menu.id]);
    setTimeout(
      () => setAddedIds((prev) => prev.filter((x) => x !== menu.id)),
      1500
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            <FaLeaf className="inline mr-1.5 text-sm" />
            Our Selection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4"
          >
            Farm-Fresh Favourites
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 font-dm max-w-[480px] mx-auto text-base leading-relaxed"
          >
            Handpicked daily from trusted farms — bursting with flavour and
            nutrition.
          </motion.p>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-2 mt-8 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium font-dm transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-forest text-white shadow-md"
                    : "bg-cream-dark text-gray-600 hover:bg-mint-light hover:text-forest"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((menu) => (
            <motion.div
              key={menu.id}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="fruit-card flex flex-col group"
            >
              {/* Image area */}
              <div className="relative bg-cream rounded-t-3xl p-6 flex justify-center items-center h-[180px] overflow-hidden">
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full font-dm ${menu.tagColor}`}
                >
                  {menu.tag}
                </span>
                <motion.img
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  src={menu.img}
                  alt={menu.name}
                  className="w-[130px] h-[130px] object-contain drop-shadow"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs ${
                          i < Math.floor(menu.rating)
                            ? "text-amber"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-dm">
                    ({menu.reviews})
                  </span>
                </div>

                <h3 className="font-playfair font-semibold text-lg text-gray-900 leading-tight">
                  {menu.name}
                </h3>
                <p className="text-xs text-gray-400 font-dm">{menu.weight} pack</p>

                {/* Price row */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-playfair font-bold text-lg text-forest">
                      {menu.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through font-dm">
                      {menu.originalPrice}
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.88 }}
                    onClick={() => handleAdd(menu)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm ${
                      addedIds.includes(menu.id)
                        ? "bg-mint text-white scale-110"
                        : "bg-forest text-white hover:bg-forest-light"
                    }`}
                  >
                    {addedIds.includes(menu.id) ? (
                      "✓"
                    ) : (
                      <FaShoppingCart className="text-sm" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <button className="outline-btn">View All Products</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menus;
