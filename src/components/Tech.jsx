import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { motion } from "framer-motion";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-9">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech<span className="text-neutral-400">nologies</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        <motion.div variants={iconVariants (2.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-500  p-4">
          <div className="text-4xl text-orange-600">
            <FaHtml5 />
          </div>
        </motion.div>
        <motion.div variants={iconVariants (1.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-500  p-4">
          <div className="text-4xl text-sky-500">
            <FaCss3Alt />
          </div>
        </motion.div>
        <motion.div variants={iconVariants (2.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-500  p-4">
          <div className="text-4xl text-yellow-500">
            <FaSquareJs />
          </div>
        </motion.div>
        <motion.div variants={iconVariants (1.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-500  p-4">
          <div className="text-4xl text-blue-500">
            <FaReact />
          </div>
        </motion.div>
        <motion.div variants={iconVariants (2.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-500  p-4">
          <div className="text-4xl text-green-500">
            <DiDjango />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
