import { motion } from "framer-motion";
import { sponserData } from "../../Data/LeaderData";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Sponsers = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div className=" md:py-28 py-12 ">
        <h1 className="text-center md:text-4xl text-3xl font-semibold pb-14">
          Pending Sponsers For Inaguration Program
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center  md:gap-12 gap-y-8 justify-center">
          {sponserData.map((sponser) => {
            return (
              <motion.div
                className="px-5 py-3 text-left group  neu_card_2 rounded-md  w-full"
                key={sponser.id}
                animate={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {/* Displaying the image */}
                <div className="h-60 w-[80%] mx-auto my-3 overflow-hidden z-20 rounded-md">
                  <img
                    src={sponser.image}
                    alt="team"
                    className=" md:mx-auto bg-red-400  mb-3  w-full h-full object-scale group-hover:scale-110 transion-all duration-300"
                  />
                </div>

                {/* Displaying the name */}
                <p className="text-xl font-semibold py-1">{sponser.name}</p>

                {/* Displaying the position */}
                <p className="text-lg pb-2">{sponser.position}</p>

                {/* Displaying the quote */}
                <p className="text-lg">{sponser.quote}</p>

                {/* Displaying the social links */}
                <div className="">
                  <ul className="flex items-center gap-6 py-4">
                    {sponser.socialsLinks.map((socialLink) => (
                      <li key={socialLink.id}>
                        <a
                          href={socialLink.link}
                          className={`text-2xl neu_icon rounded-md ${
                            darkMode
                              ? "bg-primary text-white"
                              : " bg-[#ebeef1] text-primary "
                          } p-2 inline-block`}
                        >
                          {socialLink.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sponsers;
