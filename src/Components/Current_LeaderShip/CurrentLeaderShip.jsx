/* 
  This component displays the current leadership of the Association of the
  Liberian Students at Kigali Independent University. It fetches the data
  from the Data/Data.js file and maps through it to display the team members.
*/

import { currentLeaderShip } from "../../Data/Data";

// Importing the necessary icons from the react-icons library.
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Importing the AppContext from the Context/AppContext.jsx file.
import { AppContext } from "../../Context/AppContext";

// Importing the useContext hook from the React library.
import { useContext } from "react";

import { motion } from "framer-motion";

const CurrentLeaderShip = () => {
  // Accessing the darkMode value from the AppContext.
  const { darkMode } = useContext(AppContext);

  return (
    <>
      {/* Displaying the heading */}
      <motion.h1
        className="text-center text-4xl font-semibold pb-10"
        animate={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        ALSULK Current <span>Leadership</span>
      </motion.h1>

      {/* Displaying the grid container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-12 ">
        {
          /* //! Team Members */
          currentLeaderShip.map((member) => (
            <motion.div
              className="text-left group"
              key={member.id}
              animate={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {/* Displaying the image */}
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt="team"
                  className=" md:mx-auto bg-red-400 rounded-md mb-3  w-full h-full object-scale group-hover:scale-110 transion-all duration-300"
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
                  <li>
                    {/* Displaying the Facebook icon link */}
                    <a
                      href={member.socialsLinks.facebook}
                      className="text-3xl text-primary"
                    >
                      <FaFacebookSquare
                        className={`text-2xl ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      />
                    </a>
                  </li>
                  <li>
                    {/* Displaying the Twitter icon link */}
                    <a
                      href={member.socialsLinks.twitter}
                      className="text-3xl text-primary"
                    >
                      <FaXTwitter
                        className={`text-2xl ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      />
                    </a>
                  </li>
                  <li>
                    {/* Displaying the Linkedin icon link */}
                    <a
                      href={member.socialsLinks.linkedin}
                      className="text-3xl text-primary"
                    >
                      <FaLinkedin
                        className={`text-2xl ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))
        }
      </div>
    </>
  );
};

export default CurrentLeaderShip;
