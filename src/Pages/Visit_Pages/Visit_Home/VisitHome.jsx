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
import RecentsUpdates from "../../../Components/Recent_Updates/RecentsUpdates";

// // importing the Sponsers component
// import Sponsers from "../../../Components/Sponsers/Sponsers";

// defining the VisitHome component
const VisitHome = () => {
  return (
    <>
      {/* displaying the navbar */}
      <Navbar />

      {/* defining the main content of the page */}
      <div className="">
        <VisitHomeHero />
        <div className="md:px-[2rem] px-2">
          <Offer />
          <RecentsUpdates />
          <Team />
          <AboutUs link="/visit-about" />
          <DisciplinesOffer disciplinesOffer={disciplinesOffer} />
          <NewsLetter path="/visit-privacy-policy" />
          <FAQ />
        </div>
      </div>

      {/* displaying the footer */}
      <Footer />
    </>
  );
};

export default VisitHome;
