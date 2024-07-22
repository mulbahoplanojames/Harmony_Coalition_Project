import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { FAQData } from "../../Data/Data";
import { motion } from "framer-motion";

const FAQ = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <section className="w-full pb-20">
        <motion.h1
          className="text-3xl font-bold text-center pb-10"
          animate={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          FAQ
        </motion.h1>
        <div className="join join-vertical w-full bg-white">
          {FAQData.map((data) => {
            return (
              <motion.div
                className={`collapse collapse-arrow join-item border-base-300 border ${
                  darkMode ? "text-black" : "text-black"
                }`}
                key={data.id}
                animate={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div
                  className={`collapse-title text-xl font-medium  ${
                    darkMode ? "text-black" : "text-black"
                  }`}
                >
                  {data.question}
                </div>
                <div className="collapse-content">
                  <p className={`${darkMode ? "text-black" : "text-black"}`}>
                    {data.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FAQ;
