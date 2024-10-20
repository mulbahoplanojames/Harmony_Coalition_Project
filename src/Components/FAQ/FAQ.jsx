import { FAQData } from "../../Data/Data";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <section className="w-full pb-20 md:px-12 px-4">
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
              <Accordion type="single" collapsible key={data.id}>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-medium">
                    {data.question}
                  </AccordionTrigger>
                  <AccordionContent className="dark:text-white text-slate-950 text-lg">
                    {data.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FAQ;
