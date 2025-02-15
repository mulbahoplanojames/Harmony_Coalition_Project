import mission from "/src/assets/aboutimg3.jpg";

import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-10 place-items-center pb-4 md:pt-32 pt-[3.5rem]">
        <div className="w-full  h-[50vh] overflow-hidden border-4 border-slate-500 group">
          <img
            src={mission}
            alt="Our mission Image"
            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          />
        </div>
        <div className="">
          <motion.h1
            className="text-4xl font-bold md:pb-8 pb-5"
            animate={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h1>
          <motion.p
            className="text-lg pb-10 md:pr-10"
            animate={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We believe not just in growing bigger, but in growing better. And
            growing better means aligning the success of our Students with the
            success of the Liberian Community.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default OurMission;
