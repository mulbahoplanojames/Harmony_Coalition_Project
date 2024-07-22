import { Link } from "react-router-dom";
import image from "/src/assets/hero.jpg";
import image1 from "/src/assets/hero1.jpg";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-20 place-items-center pb-32 md:pt-32 pt-[3.5rem]">
        <motion.div
          animate={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold pb-8">About Us </h1>
          <p className="text-lg pb-10 md:pr-10">
            The Association of the Liberian Students is an Association establish
            at the Kigali Independent University to head the affairs of
            Liberians Students enrolled at the University. it&apos;s charge with
            the responsibility of adaquately representing the Liberian Students
            at ULK.
          </p>
          <Link
            to="about"
            className="py-3 px-6 bg-primary_main text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            Read More
          </Link>
        </motion.div>

        <div className="relative h-[60vh] w-full">
          <motion.div
            className="md:w-[54%] md:h-[52vh] w-[70%] h-[40vh]  absolute md:-top-10 -top-5 md:-left-3 left-2 overflow-hidden border-4 border-primary_main group cursor-pointer"
            animate={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={image}
              alt="hero"
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />
          </motion.div>
          <motion.div
            className="md:w-[55%] md:h-[43vh] w-[66%] h-[40vh] bg-yellow-300  absolute -bottom-10 right-4 md:right-20 overflow-hidden border-4 border-primary_main group cursor-pointer"
            animate={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={image1}
              alt="hero"
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
