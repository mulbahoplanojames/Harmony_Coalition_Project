import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DisciplinesOffer = ({ disciplinesOffer }) => {
  return (
    <>
      <div className="md:pt-14 pt-4 pb-36">
        <motion.h1
          className="text-center md:text-4xl text-3xl font-semibold pb-14"
          animate={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Various Disciplines at the Kigali Independent University
        </motion.h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:place-items-start place-items-center gap-12 md:px-0 px-2">
          {disciplinesOffer.map((discipline) => (
            <motion.div
              key={discipline.id}
              className="shadow-2xl rounded-sm"
              animate={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div>
                <img
                  src={discipline.image}
                  alt={discipline.name}
                  className="h-64 md:h-[26rem] w-full  bg-red-400 rounded-md mb-6"
                />
              </div>
              <div className="px-6">
                <h1 className="text-2xl font-semibold pb-3">
                  {discipline.name}
                </h1>
                <p className="text-lg pb-6">
                  {discipline.description}
                  <Link to={discipline.path} className="text-blue-700">
                    Read More
                  </Link>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisciplinesOffer;
