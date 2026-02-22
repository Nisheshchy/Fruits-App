/** @format */

import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

export const NavbarMenu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Product",
    link: "#",
  },
  {
    id: 3,
    name: "About",
    link: "#",
  },
  {
    id: 4,
    name: "Shop",
    link: "#",
  },
  {
    id: 5,
    name: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex justify-between items-center py-4 md:py-6 px-4">

          {/* logo */}
          <div className="text-2xl flex items-center gap-2 uppercase font-bold cursor-pointer hover:scale-105 transition-transform duration-300">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* menu section*/}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold transition-all duration-300">
                    {menu.name}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300 relative group">
                <MdOutlineShoppingCart />
                <div className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">0</div>
              </button>
            </ul>
          </div>
          {/* mobile Hamburger menu section*/}
          <div className="md:hidden cursor-pointer active:scale-90 transition-transform" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu open={open} data={NavbarMenu} />
    </>
  );
};

export default Navbar;
