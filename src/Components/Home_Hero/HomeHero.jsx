import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const HomeHero = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:py-16 py-8  md:gap-6 gap-14">
        <div className="">
          <h1 className="md:text-5xl text-4xl uppercase font-black md:pr-72 pr-10 pb-6">
            Welcome <br /> we are here to help you
          </h1>
          <p className="text-lg pb-10">
            The leadership of the Association of the Liberian Students at Kigali
            Independent University welcomes you to the official platform of the
            Association. We are here to render any assiistance you may require
          </p>
          <Link
            to="about"
            className="py-3 px-6 bg-primary_main text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            About Us
          </Link>
        </div>
        <div
          className=" bg-green-300 md:w-[60%] md:h-[24rem] w-[70%] h-[17rem] rounded-full relative overflow-visible border-4 border-primary "
          id="item1"
        >
          <div
            className={`icons_Wripper bg-black top-1 right-5  ${
              darkMode ? "border-white" : "border-black"
            }`}
          >
            <FaLinkedin className="text-4xl z-40 text-white" />
          </div>
          <div
            className={`icons_Wripper md:bottom-[4rem] bottom-8 -md:right-1 -right-6 bg-black ${
              darkMode ? "border-white" : "border-black"
            }`}
          >
            <FaInstagram className="text-4xl z-40 text-white" />
          </div>
          <div
            className={`md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] bg-orange-300 rounded-full absolute top-7 left-0  border-4 flex justify-center items-center z-40 ${
              darkMode ? "border-white " : "border-black"
            }`}
          ></div>
          <div
            className={`md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] bg-purple-300 rounded-full absolute md:bottom-14 -bottom-2 md:left-0 left-4 border-4 flex justify-center items-center z-40 ${
              darkMode ? "border-white" : "border-black"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
