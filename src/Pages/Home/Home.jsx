import HomeHero from "../../Components/Home_Hero/HomeHero";
import Team from "../../Components/Team/Team";
import AboutUs from "../../Components/About_Us/AboutUs";
import DisciplinesOffer from "../../Components/Disciplines_Offer/DisciplinesOffer";
import NewsLetter from "../../Components/News_Letter/NewsLetter";
import FAQ from "../../Components/FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Team />
      <AboutUs link={"about"} />
      <DisciplinesOffer />
      <NewsLetter />
      <FAQ />
    </div>
  );
};

export default Home;
