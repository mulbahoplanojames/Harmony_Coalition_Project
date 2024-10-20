// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { AuroraBackground } from "../../../Components/ui/aurora-background";

const VisitAboutHero = () => {
  return (
    <>
      <AuroraBackground>
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:py-24 py-16  md:gap-3 gap-10 md:px-6 lg:px-10 px-5 ">
          <motion.div
            animate={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=" h-fit pb-4"
          >
            {/* Displaying the heading */}
            <h1 className="md:text-4xl text-3xl uppercase font-black md:pr-40 pr-10 pb-6 dark:text-white text-slate-950">
              Association of liberian Students at kigali independent university
            </h1>
            {/* Displaying the description */}
            <p className="text-lg pb-10 font-semibold dark:text-white text-slate-950">
              The leadership of the Association of the Liberian Students at
              Kigali Independent University welcomes you to the official
              platform of the Association. We are here to render any assistance
              you may require
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
            className=" md:w-[80%] md:h-[24rem] w-full h-[17rem]  relative overflow-visible border- border-primary_main "
            id="item1"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          ></motion.div>
        </div>
      </AuroraBackground>
    </>
  );
};

export default VisitAboutHero;
