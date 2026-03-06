/** @format */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdClose,
  MdLocationOn,
  MdPhone,
  MdPerson,
  MdCheckCircle,
} from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const PaymentOption = ({ id, selected, onSelect, color, label, tag, icon, description }) => (
  <button
    onClick={() => onSelect(id)}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 ${
      selected === id
        ? `border-current shadow-lg ${color}`
        : "border-gray-200 bg-white hover:border-gray-300"
    }`}
  >
    <div
      className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
        selected === id ? "opacity-100" : "opacity-80"
      } ${id === "khalti" ? "bg-[#5C2D91]" : id === "esewa" ? "bg-[#60BB46]" : "bg-gray-400"}`}
    >
      {icon}
    </div>
    <div className="text-left flex-1">
      <div className="flex items-center gap-2">
        <span className="font-playfair font-semibold text-gray-900 text-sm">
          {label}
        </span>
        {tag && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-dm ${selected === id ? "bg-white/30 text-white" : "bg-gray-100 text-gray-500"}`}>
            {tag}
          </span>
        )}
      </div>
      <p className={`text-xs font-dm mt-0.5 ${selected === id ? "text-white/80 opacity-70" : "text-gray-400"}`}>
        {description}
      </p>
    </div>
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
        selected === id ? "border-white" : "border-gray-200"
      }`}
    >
      {selected === id && (
        <div className="w-2.5 h-2.5 rounded-full bg-white" />
      )}
    </div>
  </button>
);

const CheckoutModal = () => {
  const { isCheckoutOpen, closeCheckout, cartItems, cartTotal, clearCart } =
    useCart();

  const [step, setStep] = useState("form"); // form | payment | success
  const [paymentMethod, setPaymentMethod] = useState("khalti");
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^9[678]\d{8}$/.test(form.phone))
      e.phone = "Enter a valid Nepal phone number";
    if (!form.address.trim()) e.address = "Delivery address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleProceedToPayment = () => {
    if (validate()) setStep("payment");
  };

  const handlePay = () => {
    setStep("success");
    setTimeout(() => {
      clearCart();
      closeCheckout();
      setStep("form");
      setForm({ name: "", phone: "", address: "" });
    }, 3000);
  };

  const paymentOptions = [
    {
      id: "khalti",
      label: "Khalti",
      tag: "Instant",
      icon: "K",
      description: "Pay via Khalti digital wallet",
      color: "bg-[#5C2D91] border-[#5C2D91] text-white",
    },
    {
      id: "esewa",
      label: "eSewa",
      tag: "Popular",
      icon: "e",
      description: "Pay via eSewa mobile wallet",
      color: "bg-[#60BB46] border-[#60BB46] text-white",
    },
    {
      id: "cod",
      label: "Cash on Delivery",
      tag: null,
      icon: "₹",
      description: "Pay when your order arrives",
      color: "bg-gray-700 border-gray-700 text-white",
    },
  ];

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div
          key="checkout-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeCheckout()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-[860px] max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center">
                  <FaLeaf className="text-amber text-sm" />
                </div>
                <div>
                  <h2 className="font-playfair font-bold text-lg text-gray-900">
                    {step === "success" ? "Order Placed! 🎉" : step === "payment" ? "Choose Payment" : "Checkout"}
                  </h2>
                  <p className="text-xs text-gray-400 font-dm">
                    {step === "form" ? "Step 1 of 2 — Delivery Details" : step === "payment" ? "Step 2 of 2 — Payment" : "Thank you for your order"}
                  </p>
                </div>
              </div>
              <button
                onClick={closeCheckout}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-all"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              {step === "success" ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="w-24 h-24 bg-mint-light rounded-full flex items-center justify-center mb-6"
                  >
                    <MdCheckCircle className="text-mint text-5xl" />
                  </motion.div>
                  <h3 className="font-playfair font-bold text-3xl text-gray-900 mb-3">
                    Order Confirmed!
                  </h3>
                  <p className="text-gray-500 font-dm text-base max-w-[380px] leading-relaxed">
                    Your fresh fruits are on their way! You'll receive a
                    confirmation SMS at{" "}
                    <strong className="text-forest">{form.phone}</strong>.
                  </p>
                  <div className="mt-6 bg-mint-light rounded-2xl px-6 py-4">
                    <p className="text-sm text-gray-600 font-dm">
                      Estimated delivery:{" "}
                      <strong className="text-forest">30–45 minutes</strong>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  {/* Left Form / Payment */}
                  <div className="md:col-span-3 p-6 space-y-5">
                    {step === "form" ? (
                      <>
                        <h3 className="font-playfair font-semibold text-gray-800 text-base">
                          Delivery Details
                        </h3>

                        {/* Name */}
                        <div>
                          <label className="text-xs font-dm font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                            Full Name
                          </label>
                          <div className="relative">
                            <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                              type="text"
                              placeholder="Aarav Sharma"
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border font-dm text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-forest/30 transition-all ${
                                errors.name
                                  ? "border-primary bg-red-50"
                                  : "border-gray-200 bg-gray-50 focus:border-forest"
                              }`}
                            />
                          </div>
                          {errors.name && (
                            <p className="text-xs text-primary font-dm mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="text-xs font-dm font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                            Phone Number
                          </label>
                          <div className="relative">
                            <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                              type="tel"
                              placeholder="98XXXXXXXX"
                              value={form.phone}
                              onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                              }
                              className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border font-dm text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-forest/30 transition-all ${
                                errors.phone
                                  ? "border-primary bg-red-50"
                                  : "border-gray-200 bg-gray-50 focus:border-forest"
                              }`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-xs text-primary font-dm mt-1">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        {/* Address */}
                        <div>
                          <label className="text-xs font-dm font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                            Delivery Address
                          </label>
                          <div className="relative">
                            <MdLocationOn className="absolute left-4 top-3.5 text-gray-400 text-lg" />
                            <textarea
                              rows={3}
                              placeholder="Street, Tole, City (e.g. Baneshwor, Kathmandu)"
                              value={form.address}
                              onChange={(e) =>
                                setForm({ ...form, address: e.target.value })
                              }
                              className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border font-dm text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-forest/30 transition-all resize-none ${
                                errors.address
                                  ? "border-primary bg-red-50"
                                  : "border-gray-200 bg-gray-50 focus:border-forest"
                              }`}
                            />
                          </div>
                          {errors.address && (
                            <p className="text-xs text-primary font-dm mt-1">
                              {errors.address}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={handleProceedToPayment}
                          className="w-full bg-forest text-white font-semibold py-4 rounded-2xl font-dm text-base hover:bg-forest-light transition-colors duration-200"
                        >
                          Continue to Payment →
                        </button>
                      </>
                    ) : (
                      /* Payment Step */
                      <>
                        <h3 className="font-playfair font-semibold text-gray-800 text-base">
                          Select Payment Method
                        </h3>

                        <div className="flex flex-col gap-3">
                          {paymentOptions.map((opt) => (
                            <PaymentOption
                              key={opt.id}
                              {...opt}
                              selected={paymentMethod}
                              onSelect={setPaymentMethod}
                            />
                          ))}
                        </div>

                        {/* Khalti / eSewa info notice */}
                        {paymentMethod !== "cod" && (
                          <div className={`rounded-2xl p-4 text-sm font-dm ${paymentMethod === "khalti" ? "bg-[#5C2D91]/8 text-[#5C2D91]" : "bg-[#60BB46]/8 text-[#3a7a28]"}`}>
                            <p className="font-semibold text-sm mb-1">
                              {paymentMethod === "khalti" ? "📱 Khalti Wallet" : "📱 eSewa Wallet"}
                            </p>
                            <p className="text-xs opacity-80">
                              You'll be redirected to{" "}
                              {paymentMethod === "khalti" ? "Khalti" : "eSewa"}{" "}
                              to complete the payment securely. Make sure your wallet has sufficient balance.
                            </p>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <button
                            onClick={() => setStep("form")}
                            className="flex-1 border-2 border-gray-200 text-gray-600 font-semibold py-4 rounded-2xl font-dm text-sm hover:border-forest hover:text-forest transition-all"
                          >
                            ← Back
                          </button>
                          <button
                            onClick={handlePay}
                            className={`flex-2 flex-1 text-white font-semibold py-4 rounded-2xl font-dm text-sm transition-all hover:scale-[1.02] shadow-md ${
                              paymentMethod === "khalti"
                                ? "bg-[#5C2D91] hover:bg-[#4a2375]"
                                : paymentMethod === "esewa"
                                ? "bg-[#60BB46] hover:bg-[#50a038]"
                                : "bg-forest hover:bg-forest-light"
                            }`}
                          >
                            {paymentMethod === "khalti"
                              ? "Pay with Khalti"
                              : paymentMethod === "esewa"
                              ? "Pay with eSewa"
                              : "Confirm Order"}
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right — Order Summary */}
                  <div className="md:col-span-2 p-6 bg-cream">
                    <h3 className="font-playfair font-semibold text-gray-800 text-sm mb-4">
                      Order Summary
                    </h3>
                    <div className="flex flex-col gap-3 mb-5">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3"
                        >
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-9 h-9 object-contain"
                              style={{ mixBlendMode: "multiply" }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-dm font-semibold text-gray-800 truncate">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-400 font-dm">
                              x{item.qty} · {item.weight}
                            </p>
                          </div>
                          <span className="text-xs font-playfair font-bold text-forest flex-shrink-0">
                            Rs. {(item.numericPrice * item.qty).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <div className="flex justify-between text-xs text-gray-500 font-dm">
                        <span>Subtotal</span>
                        <span>Rs. {cartTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 font-dm">
                        <span>Delivery</span>
                        <span className="text-mint font-semibold">Free</span>
                      </div>
                      <div className="flex justify-between font-playfair font-bold text-forest pt-1 border-t border-gray-200">
                        <span>Total</span>
                        <span>Rs. {cartTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-5 p-3 bg-white rounded-2xl">
                      <p className="text-[10px] text-gray-400 font-dm text-center">
                        🔒 100% Secure &amp; Encrypted Payment
                      </p>
                      <p className="text-[10px] text-gray-400 font-dm text-center mt-1">
                        🚀 30–45 min delivery in Kathmandu
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
