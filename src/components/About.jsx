import React from "react";
import aboutImg from "../assets/lol.jpeg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }} className="my-20 text-center text-4xl">
        About <span className="text-neutral-300">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="rounded-2xl w-[50%]" />
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }} className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start text-2xl">
            <p className="my-2 max-w-xl py-6">
              {" "}
              Hey myself Ankush Singha upgraded to class 11. I am a passionate Frontend web developer
My hobby is to play cricket and coding and also love to learn new things. I have completed this course within 2years and now looking for some clients, for them I can build any websites and apps and also want to become the youngest second web app developer. A very important one to make my parents proud

            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
