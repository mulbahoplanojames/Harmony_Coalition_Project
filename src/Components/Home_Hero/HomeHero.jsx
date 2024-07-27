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

import { WordFlicker } from "/src/Data/Animatedata.jsx";

const HomeHero = () => {
  // Accessing the darkMode value from the AppContext
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div
        className="grid md:grid-cols-2 grid-cols-1 place-items-center md:px-1 px-2  md:py-16 py-8  md:gap-6 gap-14 md:bg-fixed rounded-md"
        id="home_hero"
      >
        <motion.div
          className=""
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {/* Displaying the heading */}
          <div className="md:text-5xl text-3xl uppercase font-black md:pr-[12rem] pr-5 sm:pr-2 pb-6 z-50">
            Welcome <br /> we are here to <br /> {WordFlicker()}
          </div>
          {/* Displaying the description */}
          <p className="text-lg  mb-10 font-semibold z-40 ">
            The leadership of the Association of the Liberian Students at Kigali
            Independent University welcomes you to the official platform of the
            Association. We are here to render any assistance you may require
          </p>
          {/* Displaying the link to the 'About Us' page */}
          <Link
            to="/visit-about"
            className="shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] py-3 px-6 bg-primary_main text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            About Us
          </Link>
        </motion.div>
        {/* Displaying the image with social media links */}
        <motion.div
          className=" md:w-[60%] md:h-[24rem] w-[70%] h-[17rem] rounded-full relative overflow-visible border-4 border-primary_main "
          id="item1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {/* Displaying the LinkedIn icon link */}
          <Link
            className={`icons_Wripper  top-1 right-5  bg-[#ebeef1] neu_icon ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaLinkedin className="text-4xl z-40 text-primary_main" />
          </Link>
          {/* Displaying the Instagram icon link */}
          <Link
            className={`icons_Wripper md:bottom-[4rem] bottom-8 -md:right-1 -right-6 bg-[#ebeef1] neu_icon ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaInstagram className="text-4xl z-40 text-primary_main" />
          </Link>
          {/* Displaying the WhatsApp icon link */}
          <Link
            className={`icons_Wripper bg-[#ebeef1] top-7 left-0 neu_icon ${
              darkMode ? "border-white " : "border-primary_main"
            }`}
          >
            <FaWhatsappSquare className="text-4xl z-40 text-primary_main" />
          </Link>
          {/* Displaying the Facebook icon link */}
          <Link
            className={`icons_Wripper bg-[#ebeef1] md:bottom-14 -bottom-2 md:left-0 left-4 neu_icon ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaFacebookSquare className="text-4xl z-40 text-primary_main" />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default HomeHero;
