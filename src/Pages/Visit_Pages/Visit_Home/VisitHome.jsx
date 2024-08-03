import VisitHomeHero from "./visitHomeHero";
import Team from "../../../Components/Team/Team";
import AboutUs from "../../../Components/About_Us/AboutUs";
import DisciplinesOffer from "../../../Components/Disciplines_Offer/DisciplinesOffer";
import NewsLetter from "../../../Components/News_Letter/NewsLetter";
import FAQ from "../../../Components/FAQ/FAQ";

// for the navbar
import Navbar from "../../../Constant/Navbar/Navbar";
import { disciplinesOffer } from "../../../Data/Data";

import Footer from "../../../Constant/Footer/Footer";
import Sponsers from "../../../Components/Sponsers/Sponsers";

const VisitHome = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[4rem] md:px-[2rem] px-2">
        <VisitHomeHero />
        <Sponsers />
        <Team />
        <AboutUs link="/visit-about" />
        <DisciplinesOffer disciplinesOffer={disciplinesOffer} />
        <NewsLetter />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default VisitHome;
