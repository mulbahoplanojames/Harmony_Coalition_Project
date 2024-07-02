import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

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
          className=" md:w-[60%] md:h-[24rem] w-[70%] h-[17rem] rounded-full relative overflow-visible border-4 border-primary_main "
          id="item1"
        >
          <Link
            className={`icons_Wripper bg-primary_main top-1 right-5  ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaLinkedin className="text-4xl z-40 text-white" />
          </Link>
          <Link
            className={`icons_Wripper md:bottom-[4rem] bottom-8 -md:right-1 -right-6 bg-primary_main ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaInstagram className="text-4xl z-40 text-white" />
          </Link>
          <Link
            className={`icons_Wripper bg-primary_main top-7 left-0  ${
              darkMode ? "border-white " : "border-primary_main"
            }`}
          >
            <FaWhatsappSquare className="text-4xl z-40 text-white" />
          </Link>
          <Link
            className={`icons_Wripper bg-primary_main md:bottom-14 -bottom-2 md:left-0 left-4 ${
              darkMode ? "border-white" : "border-primary_main"
            }`}
          >
            <FaFacebookSquare className="text-4xl z-40 text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
