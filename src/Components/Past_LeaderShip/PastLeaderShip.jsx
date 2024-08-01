/* 
    This component displays the past leaders of the Association of the Liberian Students
     at Kigali Independent University. It uses the pastLeaderShip data from the Data/Data.js file. 
*/

// Importing the necessary icons from the react-icons library.
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

// Importing the FaXTwitter icon from the react-icons/fa6 library.
import { FaXTwitter } from "react-icons/fa6";

// Importing the AppContext from the Context/AppContext.jsx file.
import { AppContext } from "../../Context/AppContext";

// Importing the useContext hook from the React library.
import { useContext } from "react";

// Importing the pastLeaderShip data from the Data/Data.js file.

import { motion } from "framer-motion";
import { pastLeaderShip } from "../../Data/LeaderData";

// Defining the PastLeaderShip component.
const PastLeaderShip = () => {
  // Accessing the darkMode value from the AppContext.
  const { darkMode } = useContext(AppContext);

  return (
    <>
      {/* Displaying the heading */}
      <motion.h1
        className="text-center text-4xl font-semibold pb-10 pt-24"
        animate={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        ALSULK Past <span>Leadership</span>
      </motion.h1>

      {/* Displaying the grid container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-12">
        {
          /* //! Team Members */
          pastLeaderShip.map((member) => (
            <motion.div
              className="px-5 py-3 text-left group  neu_card rounded-md"
              key={member.id}
              animate={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {/* Displaying the image */}
              <div className="h-60 w-[80%] mx-auto my-3 overflow-hidden z-20 rounded-md">
                <img
                  src={member.image}
                  alt="team"
                  className=" md:mx-auto bg-red-400  mb-3  w-full h-full object-scale group-hover:scale-110 transion-all duration-300"
                />
              </div>

              {/* Displaying the name */}
              <p className="text-xl font-semibold py-1">{member.name}</p>

              {/* Displaying the position */}
              <p className="text-lg pb-2">{member.position}</p>

              {/* Displaying the quote */}
              <p className="text-lg">{member.quote}</p>

              {/* Displaying the social links */}
              <div className="">
                <ul className="flex items-center gap-6 py-4">
                  {member.socialsLinks.map((socialLink) => (
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
          ))
        }
      </div>
    </>
  );
};

export default PastLeaderShip;
