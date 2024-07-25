import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = (props) => {
  const { image, title, link, path } = props;

  return (
    <>
      <motion.div
        className="rounded-md shadow-md py-3 px-6 text-center md:w-[90%] w-full bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="w-[180px] h-[22vh]  mx-auto overflow-hidden mb-6">
          <img
            src={image}
            alt={image}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold pb-3 text-black">{title}</h1>
        <Link to={path} className="text-blue-700 text-lg">
          {link}
        </Link>
      </motion.div>
    </>
  );
};

export default Card;
