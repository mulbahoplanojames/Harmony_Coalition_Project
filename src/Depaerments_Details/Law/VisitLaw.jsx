import Footer from "../../Constant/Footer/Footer";
import Navbar from "../../Constant/Navbar/Navbar";
import { navLinks2 } from "../../Data/Data";

import computerLab from "/src/assets/Computer-Labs-1.jpg";

const text1 = `Because knowledge is power and is important for you to know your rights, to avoid traps within some legal acts and to know how to defend yourself, to get a prosperous career, to change and lead society and to help others. Probably you have a view of lawyers that you got from a family member, friend or classmates. You may wish to be a successful lawyer in order to enter into politics, business, International Finance and banking or simply practice law in your hometown or City.`;

const text2 = `Since its establishment in 2001, the School of Law at the Kigali Independent University / Campus of Gisenyi has grown enough and reached the level of the leading law schools in Rwanda and in the African Great Lakes Region .The steady increase in graduate over the past five years, especially undergraduate students who are more than 350 today, is an indication of its standing. There is a healthy balance between female and male students and the staff complement is also efficiently growing.

`;

const text3 = `The mission of the School is to produce excellent law graduates and to serve the legal profession and the community through innovative, relevant, comprehensive and integrated programmes and research`;
const VisitLaw = () => {
  return (
    <>
      <Navbar navLinks={navLinks2} />
      <div className=" mt-[4.4rem] pb-10">
        <h1 className=" md:text-4xl text-3xl md:text-left text-center bg-primary_main text-white capitalize font-semibold py-10 md:py-14  md:px-20">
          School of Law
        </h1>
        <div className="container md:mx-auto  md:px-0 md:w-[80%] w-full">
          <div className="w-full md:h-[35rem] h-[20rem] bg-red-300 overflow-hidden">
            <img
              src={computerLab}
              alt="Computer Lab"
              className="w-full h-full"
            />
          </div>
          <div className="md:px-0 px-2">
            <p className="pt-4 pb-6 opacity-80 text-lg">{text1}</p>
            <p className="text-lg font-bold opacity-80 pb-6">
              Programme Title:{" "}
              <span className="font-normal">Computer Science</span>
            </p>
            <p className="text-lg opacity-80 pb-4 ">Majors:</p>
            <ul className="list-decimal list-inside">
              <li className="text-lg opacity-80 pb-1  ">Networking</li>
              <li className="text-lg opacity-80 pb-1  ">
                Software Engineering
              </li>
              <li className="text-lg opacity-80 pb-1  ">Data Science</li>
            </ul>

            <p className="text-lg font-bold opacity-70 pb-4 pt-5">
              Exit Awards:
            </p>
            <ul className="list-inside " style={{ listStyleType: "square" }}>
              <li className="text-lg opacity-80 pb-1  ">
                Bachelor of Science with Honours in Computer Science: Software
                Engineering
              </li>
              <li className="text-lg opacity-80 pb-1  ">
                Bachelor of Science with Honours in Computer Science: Networking
              </li>
              <li className="text-lg opacity-80 pb-1  ">
                Bachelor of Science with Honours in Computer Science: Data
                Science
              </li>
            </ul>

            <p className="text-lg font-bold opacity-70 pb-4 pt-5">
              Programme Duration:
            </p>
            <ul className="list-inside " style={{ listStyleType: "square" }}>
              <li className="text-lg opacity-80 pb-1  ">
                Four years (Day session)
              </li>
              <li className="text-lg opacity-80 pb-1  ">
                Four and half years (Evening session)
              </li>
              <li className="text-lg opacity-80 pb-1  ">
                Five years (Weekend session)
              </li>
            </ul>

            <p className="text-lg font-bold opacity-70 pb-4 pt-5">
              Programme Pre-requisite:{" "}
              <span className="font-normal">
                High School Advanced Level Certificate or equivalent certificate
              </span>
            </p>
            <p className="opacity-80 pb-4">
              The school has excellent infrastructure, and the school is
              recruiting highly qualified and experienced staff, and will from
              time to time involve business and industry professionals to
              provide the students with the real-time industry experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisitLaw;
