import { FAQData } from "../../Data/Data";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <>
      <section className="w-full pb-20">
        <motion.h1
          className="text-3xl font-bold text-center pb-10"
          animate={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          FAQ
        </motion.h1>
        <div className="join join-vertical w-full dark:bg-transparent">
          {FAQData.map((data) => {
            return (
              <motion.div
                className={`collapse collapse-arrow join-item border-base-300 border dark:text-white text-slate-950`}
                key={data.id}
                animate={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div
                  className={`collapse-title text-xl font-medium  dark:text-white text-slate-950`}
                >
                  {data.question}
                </div>
                <div className="collapse-content">
                  <p className={"dark:text-white  text-slate-950"}>
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
