// Importing the useContext hook from the React library
import { useContext } from "react";
// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom";
// Importing the AppContext from the Context/AppContext.jsx file
import { AppContext } from "../../Context/AppContext";
import { motion } from "framer-motion";

import avatar from "/src/assets/userAvatar.jpg";

import { WordFlicker } from "/src/Data/Animatedata.jsx";

const HomeHero = () => {
  // Accessing the darkMode value from the AppContext
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div
        className="grid md:grid-cols-2 grid-cols-1 place-items-center md:px-1 px-2  md:py-16 py-8  md:gap-6 gap-14 md:bg-fixed rounded-md h-fit relative"
        id="home_hero"
      >
        <motion.div
          className="z-30"
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

        <motion.div
          className="md:w-[50%] w-[90%] h-[60vh] bg-blue-300 rounded-md md:-skew-x-12 -skew-x-6 py-3 px-4 text-center z-40 md:mt-12 tw_id"
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <div className="w-[11rem] h-[28vh] mx-auto mb-4 rounded-full bg-red-300 border-4 overflow-hidden border-primary_main">
            <img
              src={darkMode ? avatar : avatar}
              alt="id card"
              className="w-full h-full"
            />
          </div>
          <p className="text-lg">Oplano James Mulbah</p>
          <p className="text-base pb-3">Software Engineering</p>
          <p className="text-base">ID : 202234697</p>
          <p className="text-base">PHONE : 079167643</p>
          <p className="text-base">EMAIL : oplanojames@gmail.com</p>
        </motion.div>
        <motion.div
          className="w-[1.5rem] md:h-[28vh] h-[70vh] rounded-full absolute top-0 right-[11rem] md:right-[19rem]  tw_id_line"
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
      </div>
    </>
  );
};

export default HomeHero;
