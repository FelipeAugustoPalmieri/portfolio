"use client";

import Image from "next/image";
import navGif from "@/assets/nav.gif";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="container mx-auto px-8 mb-20 flex items-center justify-between py-6 overflow-x-hidden text-neutral-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-shrink-0 items-center"
      >
        <Image src={navGif} alt="gif" unoptimized />
      </motion.div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        <a
          href="https://www.linkedin.com/in/felipe-palmieri-94a2482b7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-pink-100 transition-transform duration-500 ease-in-out hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/FelipeAugustoPalmieri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-pink-100 transition-transform duration-500 ease-in-out hover:scale-125"
        >
          <FaGithub />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
