import React from "react";
import logo from "../assets/logo.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <motion.nav
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -50}} 
    transition={{duration: 1}}
    className="flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="mx-2 w-10" />
      </div>
      <div className="cursor-pointer m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <CiLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaDiscord />
      </div>
    </motion.nav>
  );
};

export default Nav;
