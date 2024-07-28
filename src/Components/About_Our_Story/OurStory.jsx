import storyImage from "/src/assets/aboutimg4.jpg";

import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-10 place-items-center md:pb-32 pb-10 md:pt-20 pt-[2rem]">
        <div className="md:order-first order-last">
          <motion.h1
            className="text-4xl font-bold md:pb-8 pb-5"
            animate={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Story{" "}
          </motion.h1>
          <motion.p
            className="text-lg pb-10 md:pr-10"
            animate={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The Association of the Liberian Students is an Association establish
            at the Kigali Independent University to head the affairs of
            Liberians Students enrolled at the University. it&apos;s charge with
            the responsibility of adaquately representing the Liberian Students
            at ULK.
          </motion.p>
        </div>
        <motion.div
          className="w-full bg-red-400 h-[50vh] overflow-hidden border-4 border-slate-500 group"
          animate={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={storyImage}
            alt="Our Story Image"
            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          />
        </motion.div>
      </div>
    </>
  );
};

export default OurStory;
