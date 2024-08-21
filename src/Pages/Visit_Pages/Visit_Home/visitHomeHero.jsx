// I am importing the Link component from the react-router-dom library.
// This Component allows us to create links between different pages in our application.
import { Link } from "react-router-dom";

// I am importing the motion component from the framer-motion library.
// This library provides a set of animation tools that allow us to create smooth and interactive animations.
import { motion } from "framer-motion";

// I am importing the WordFlicker component from the "Animatedata.jsx" file located in the "src/Data" directory.
// This component is a custom animation that I created using the framer-motion library.
//It will be used to create a text animation effect.
import { WordFlicker } from "/src/Data/Animatedata.jsx";

// I am importing the "about_hero2.png" image file located in the "src/assets" directory.
// This image will be used as the background image for the hero section of our home page.
import heroImg from "/src/assets/about_hero2.png";

const VisitHomeHero = () => {
  return (
    <>
      <div
        className="grid md:grid-cols-2 grid-cols-1 place-items-center md:px-1 px-2  md:py-20 py-8  md:gap-6 gap-14 md:bg-fixed rounded-md h-fit relative hero_bg"
        // id="home_hero"
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

        {/* Displaying the image with social media links */}
        <motion.div
          className="  md:w-[90%] w-full h-[20rem]"
          animate={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            loading="lazy"
            src={heroImg}
            alt="hero"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </>
  );
};

export default VisitHomeHero;
