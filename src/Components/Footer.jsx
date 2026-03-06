/** @format */

import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLeaf,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MdSend } from "react-icons/md";

const footerLinks = {
  "Quick Links": ["Home", "Products", "About Us", "Blog", "Contact"],
  "Our Fruits": ["Fresh Apples", "Tropical Mangoes", "Citrus Oranges", "Bananas", "Seasonal Picks"],
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-forest text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-amber/20 rounded-xl flex items-center justify-center">
                <FaLeaf className="text-amber text-lg" />
              </div>
              <span className="font-playfair font-bold text-2xl">
                Fruit<span className="text-amber">Store</span>
              </span>
            </div>
            <p className="text-white/60 font-dm text-sm leading-relaxed">
              Bringing nature's finest to your table — fresh, organic, and
              sustainably sourced from farms we trust.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5 text-sm font-dm text-white/60">
              <div className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="text-amber flex-shrink-0" />
                <span>123 Fresh Ave, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="text-amber flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-amber flex-shrink-0" />
                <span>hello@fruitstore.in</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 bg-white/10 hover:bg-amber hover:text-forest rounded-xl flex items-center justify-center text-white/70 transition-all duration-200"
                  >
                    <Icon className="text-sm" />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <h4 className="font-playfair font-semibold text-base text-white">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/55 hover:text-amber font-dm text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 text-xs transition-opacity">
                        ›
                      </span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="font-playfair font-semibold text-base text-white">
              Newsletter
            </h4>
            <p className="text-white/55 font-dm text-sm leading-relaxed">
              Get fresh deals and seasonal offers directly in your inbox.
            </p>
            {subscribed ? (
              <div className="bg-mint/20 border border-mint/30 rounded-2xl p-4 text-sm text-mint font-dm">
                🎉 You're subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3 text-sm font-dm text-white placeholder-white/35 focus:outline-none focus:border-amber/60 focus:bg-white/15 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-amber text-forest font-semibold py-3 px-5 rounded-2xl text-sm font-dm hover:bg-amber-light transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Subscribe <MdSend />
                </button>
              </form>
            )}
            <p className="text-white/35 text-xs font-dm">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-dm">
            © 2026 FruitStore. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-dm">
            Made with ❤️ for healthy living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
