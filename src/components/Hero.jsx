import React from "react";
import pf from "../assets/pf.png";
import { delay, motion } from "framer-motion";
const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 1,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start h-full">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="pb-16 text-6xl font-bold tracking-tight lg:text-8xl lg:ml-4"
            >
              Ankush Singha
            </motion.h1>
            <motion.span whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent lg:ml-4">
              Frontend Developer
            </motion.span>
            <motion.p whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }} className="my-2 max-w-xl py-6 font-light tracking-tight lg:ml-4">
              I am a Frontend Developer with a passion for creating beautiful
              and functional user experiences. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quod vero, veritatis error
              consequuntur magni aliquam neque voluptatum sint quo cupiditate
              est facilis praesentium nam magnam corporis. Eaque laborum
              eligendi nisi.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }} src={pf} alt="" className="rounded-2xl w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
