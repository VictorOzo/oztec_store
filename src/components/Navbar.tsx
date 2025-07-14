"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-[8vh] py-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Oztec</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {/* Searchbar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 border border-black rounded-[30px] outline-none"
            />
            <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" />
          </div>
          <li>
            <Link href="/">
              <ShoppingCartIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FavoriteIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <PersonIcon />
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl focus:outline-none">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 mt-4 font-medium">
            <li className="flex items-center gap-2">
              <ShoppingCartIcon />
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FavoriteIcon />
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Wishlist
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <PersonIcon />
              <Link href="/" onClick={() => setMenuOpen(false)}>
                User
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
