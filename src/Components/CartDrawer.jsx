/** @format */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdDelete, MdShoppingBag } from "react-icons/md";
import { FaLeaf, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    cartTotal,
    removeFromCart,
    updateQty,
    openCheckout,
    cartCount,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer Panel */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 h-full w-full max-w-[420px] z-[70] bg-cream flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center">
                  <MdShoppingBag className="text-white text-lg" />
                </div>
                <div>
                  <h2 className="font-playfair font-bold text-lg text-gray-900 leading-tight">
                    My Cart
                  </h2>
                  <p className="text-xs text-gray-400 font-dm">
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </p>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cartItems.length === 0 ? (
                /* Empty State */
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center pb-10">
                  <div className="w-20 h-20 rounded-full bg-mint-light flex items-center justify-center">
                    <FaLeaf className="text-mint text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-gray-800 mb-1">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-400 font-dm text-sm">
                      Add some fresh fruits to get started!
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="primary-btn text-sm px-6 py-2.5"
                  >
                    Browse Fruits
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 60 }}
                      className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-[0_2px_12px_rgba(26,60,46,0.07)]"
                    >
                      {/* Fruit image */}
                      <div className="w-[68px] h-[68px] bg-cream rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-[54px] h-[54px] object-contain"
                          style={{ mixBlendMode: "multiply" }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-playfair font-semibold text-gray-900 text-sm leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-400 font-dm mt-0.5">
                          {item.weight} pack
                        </p>
                        <p className="font-bold text-forest font-playfair text-sm mt-1">
                          Rs. {(item.numericPrice * item.qty).toLocaleString()}
                        </p>
                      </div>

                      {/* Qty + remove */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-primary transition-colors duration-150"
                        >
                          <MdDelete className="text-base" />
                        </button>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-7 h-7 rounded-full bg-cream hover:bg-mint-light text-gray-600 hover:text-forest flex items-center justify-center transition-all duration-150"
                          >
                            <FaMinus className="text-[10px]" />
                          </button>
                          <span className="w-7 text-center font-dm font-semibold text-sm text-gray-800">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-7 h-7 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest-light transition-all duration-150"
                          >
                            <FaPlus className="text-[10px]" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - only if has items */}
            {cartItems.length > 0 && (
              <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-4">
                {/* Price summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-dm text-gray-500">
                    <span>Subtotal</span>
                    <span>Rs. {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-dm text-gray-500">
                    <span>Delivery</span>
                    <span className="text-mint font-semibold">Free</span>
                  </div>
                  <div className="border-t border-gray-100 pt-2 flex justify-between">
                    <span className="font-playfair font-bold text-gray-900">
                      Total
                    </span>
                    <span className="font-playfair font-bold text-xl text-forest">
                      Rs. {cartTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Payment badges */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-dm">
                    Pay via:
                  </span>
                  <span className="bg-[#5C2D91] text-white text-[10px] font-bold px-2.5 py-1 rounded-full font-dm">
                    Khalti
                  </span>
                  <span className="bg-[#60BB46] text-white text-[10px] font-bold px-2.5 py-1 rounded-full font-dm">
                    eSewa
                  </span>
                  <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2.5 py-1 rounded-full font-dm">
                    COD
                  </span>
                </div>

                <button
                  onClick={openCheckout}
                  className="w-full bg-forest text-white font-semibold py-4 rounded-2xl font-dm text-base hover:bg-forest-light transition-colors duration-200 shadow-lg"
                >
                  Proceed to Checkout →
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
