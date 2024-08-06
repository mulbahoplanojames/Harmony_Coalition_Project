// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import heroImg from "/src/assets/about_hero2.png";

const VisitAboutHero = () => {
  return (
    <>
      <div
        className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:py-20 py-8  md:gap-3 gap-10 md:px-0 px-1"
        id="home_hero"
      >
        <motion.div
          animate={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" h-fit pb-4"
        >
          {/* Displaying the heading */}
          <h1 className="md:text-4xl text-3xl uppercase font-black md:pr-40 pr-10 pb-6">
            Association of liberian Students at kigali independent university
          </h1>
          {/* Displaying the description */}
          <p className="text-lg pb-10 font-semibold">
            The leadership of the Association of the Liberian Students at Kigali
            Independent University welcomes you to the official platform of the
            Association. We are here to render any assistance you may require
          </p>
          {/* Displaying the link to the 'About Us' page */}
          <Link
            to="/sign-up"
            className="shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] py-3 px-6 bg-primary_main text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            Join Us
          </Link>
        </motion.div>
        {/* Displaying the image with social media links */}
        <motion.div
          className="  md:w-[80%] w-full h-[20rem]"
          animate={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </>
  );
};

export default VisitAboutHero;
