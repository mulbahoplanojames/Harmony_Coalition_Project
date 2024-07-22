// Importing the useContext hook from the React library
import { useContext } from "react";
// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom";
// Importing the AppContext from the Context/AppContext.jsx file
import { AppContext } from "../../Context/AppContext";

import { motion } from "framer-motion";

// Importing the necessary icons from the react-icons library
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const AboutHero = () => {
  // Accessing the darkMode value from the AppContext
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div
        className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:py-16 py-8  md:gap-6 gap-14 md:px-0 px-1"
        id="home_hero"
      >
        <motion.div
          animate={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
            className="py-3 px-6 bg-primary_main text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            Join Us
          </Link>
        </motion.div>
        {/* Displaying the image with social media links */}
        <motion.div
          className=" md:w-[60%] md:h-[24rem] w-[70%] h-[17rem] rounded-full relative overflow-visible border-4 border-primary_main "
          id="item1"
          animate={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Displaying the LinkedIn icon link */}
          <Link
            className={`icons_Wripper bg-primary_main top-1 right-5  ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaLinkedin className="text-4xl z-40 text-white" />
          </Link>
          {/* Displaying the Instagram icon link */}
          <Link
            className={`icons_Wripper md:bottom-[4rem] bottom-8 -md:right-1 -right-6 bg-primary_main ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaInstagram className="text-4xl z-40 text-white" />
          </Link>
          {/* Displaying the WhatsApp icon link */}
          <Link
            className={`icons_Wripper bg-primary_main top-7 left-0  ${
              darkMode ? "border-white " : "border-primary_main"
            }`}
          >
            <FaWhatsappSquare className="text-4xl z-40 text-white" />
          </Link>
          {/* Displaying the Facebook icon link */}
          <Link
            className={`icons_Wripper bg-primary_main md:bottom-14 -bottom-2 md:left-0 left-4 ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaFacebookSquare className="text-4xl z-40 text-white" />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default AboutHero;
