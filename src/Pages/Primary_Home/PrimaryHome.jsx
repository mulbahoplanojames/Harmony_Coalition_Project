import HomeHero from "../../Components/Home_Hero/HomeHero";
import Team from "../../Components/Team/Team";
import AboutUs from "../../Components/About_Us/AboutUs";
import DisciplinesOffer from "../../Components/Disciplines_Offer/DisciplinesOffer";
import NewsLetter from "../../Components/News_Letter/NewsLetter";
import FAQ from "../../Components/FAQ/FAQ";
import { Link } from "react-router-dom";

const PrimaryHome = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-white py-4 md:px-10 px-4 border-b border-[#e6e6e6] fixed z-50 w-full top-0">
        <h1 className="text-3xl font-bold ">ALSULK</h1>
        <div className="">
          <h1 className="text-base">Primary Home</h1>
          <Link to={"/sign-up"}>Sign In</Link>
        </div>
      </nav>
      <div className="md:px-8 px-2">
        <HomeHero />
        <Team />
        <AboutUs />
        <DisciplinesOffer />
        <NewsLetter />
        <FAQ />
      </div>
    </>
  );
};

export default PrimaryHome;
