// Importing the necessary components from the components folder
import VisitHomeHero from "./visitHomeHero";
import Team from "../../../Components/Team/Team";
import AboutUs from "../../../Components/About_Us/AboutUs";
import DisciplinesOffer from "../../../Components/Disciplines_Offer/DisciplinesOffer";
import NewsLetter from "../../../Components/News_Letter/NewsLetter";
import FAQ from "../../../Components/FAQ/FAQ";
import Offer from "../../../Components/What_do_we_Offer/Offer";
import Footer from "../../../Constant/Footer/Footer";
import Navbar from "../../../Constant/Navbar/Navbar";

// importing the disciplines data from the Data file
import { disciplinesOffer } from "../../../Data/Data";

// // importing the Sponsers component
// import Sponsers from "../../../Components/Sponsers/Sponsers";

// defining the VisitHome component
const VisitHome = () => {
  return (
    <>
      {/* displaying the navbar */}
      <Navbar />

      {/* defining the main content of the page */}
      <div className="pt-[4rem] md:px-[2rem] px-2">
        {/* displaying the hero section */}
        <VisitHomeHero />

        {/* displaying the what we offer section */}
        <Offer />

        {/* displaying the team section */}
        <Team />

        {/* displaying the about us section */}
        <AboutUs link="/visit-about" />

        {/* displaying the disciplines we offer section */}
        <DisciplinesOffer disciplinesOffer={disciplinesOffer} />

        {/* displaying the newsletter section */}
        <NewsLetter path="/visit-privacy-policy" />

        {/* displaying the FAQ section */}
        <FAQ />
      </div>

      {/* displaying the footer */}
      <Footer />
    </>
  );
};

export default VisitHome;
