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
import { pastLeaderShip } from "../../Data/Data";

// Defining the PastLeaderShip component.
const PastLeaderShip = () => {
  // Accessing the darkMode value from the AppContext.
  const { darkMode } = useContext(AppContext);

  return (
    <>
      {/* Displaying the heading */}
      <h1 className="text-center text-4xl font-semibold pb-10 pt-24">
        ALSULK Past <span>Leadership</span>
      </h1>

      {/* Displaying the grid container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-12">
        {
          /* //! Team Members */
          pastLeaderShip.map((member) => (
            <div className="text-left group" key={member.id}>
              {/* Displaying the image */}
              <div className="h-60 w-full overflow-hidden rounded-md">
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
                    {/* Displaying the LinkedIn icon link */}
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
            </div>
          ))
        }
      </div>
    </>
  );
};

export default PastLeaderShip;
