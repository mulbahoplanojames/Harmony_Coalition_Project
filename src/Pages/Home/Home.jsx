// Importing the necessary components from the components folder
import HomeHero from "../../Components/Home_Hero/HomeHero";
import Team from "../../Components/Team/Team";
import AboutUs from "../../Components/About_Us/AboutUs";
import DisciplinesOffer from "../../Components/Disciplines_Offer/DisciplinesOffer";
import NewsLetter from "../../Components/News_Letter/NewsLetter";
import FAQ from "../../Components/FAQ/FAQ";
import { disciplinesOffer2 } from "../../Data/Data";
import Offer from "../../Components/What_do_we_Offer/Offer";
// import Sponsers from "../../Components/Sponsers/Sponsers";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Offer />
      <Team />
      <AboutUs link={"about"} />
      <DisciplinesOffer disciplinesOffer={disciplinesOffer2} />
      <NewsLetter path="/privacy-policy" />
      <FAQ />
    </div>
  );
};

export default Home;
