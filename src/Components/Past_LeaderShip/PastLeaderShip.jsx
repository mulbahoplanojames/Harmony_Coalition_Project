/* 
    This component displays the past leaders of the Association of the Liberian Students
     at Kigali Independent University. It uses the pastLeaderShip data from the Data/Data.js file. 
*/

// Importing the AppContext from the Context/AppContext.jsx file.
import { AppContext } from "../../Context/AppContext";

// Importing the useContext hook from the React library.
import { useContext } from "react";

// Importing the pastLeaderShip data from the Data/Data.js file.

import { pastLeaderShip } from "../../Data/LeaderData";

// Importing the motion component from the framer-motion library.
import { motion } from "framer-motion";

const PastLeaderShip = () => {
  // Accessing the darkMode value from the AppContext.
  const { darkMode } = useContext(AppContext);

  return (
    <>
      {/* Displaying the heading */}
      <motion.h1
        className="text-center text-4xl font-semibold pb-10 pt-24"
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        ALSULK Past <span>Leadership</span>
      </motion.h1>

      {/* Displaying the grid container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-12">
        {
          /* //! Team Members */
          pastLeaderShip.map((member) => (
            <div
              className="px-5 py-3 text-left group rounded-md border"
              key={member.id}
            >
              {/* Displaying the image */}
              <div className="h-60 w-[80%] mx-auto my-3 overflow-hidden z-20 rounded-md">
                <img
                  src={member.image}
                  alt="team"
                  className=" md:mx-auto  mb-3  w-full h-full object-scale group-hover:scale-110 transion-all duration-300"
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
                        target="_blank"
                        className={`text-2xl neu_icon rounded-md p-2 inline-block`}
                      >
                        {socialLink.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default PastLeaderShip;
