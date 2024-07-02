import { currentLeaderShip } from "../../Data/Data";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";

const Team = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div className={`py-14 bg-white md:px-8 px-4 `}>
        <h1 className="text-center text-4xl font-semibold pb-10">
          ALSULK Current Leadership
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-12">
          {
            /* //! Team Members */
            currentLeaderShip.map((member, index) => (
              <div className="text-left" key={index}>
                <img
                  src={member.image}
                  alt="team"
                  className=" h-52 mx-auto bg-red-400 rounded-md mb-3"
                />

                <p className="text-xl font-semibold py-1">{member.name}</p>
                <p className="text-lg pb-2">{member.position}</p>
                <p className="text-lg">{member.quote}</p>

                <div className="">
                  <ul className="flex items-center gap-6 py-4">
                    <li>
                      <a
                        href={member.socialsLinks.facebook}
                        className="text-3xl text-primary" //! Facebook Icon Link
                      >
                        <FaFacebookSquare className="text-2xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socialsLinks.twitter}
                        className="text-3xl text-primary" //! Twitter Icon Link
                      >
                        <FaXTwitter className="text-2xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socialsLinks.linkedin}
                        className="text-3xl text-primary" //! Linkedin Icon Link
                      >
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Team;
