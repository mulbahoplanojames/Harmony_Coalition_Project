import HomeHero from "../../Components/Home_Hero/HomeHero";
import Team from "../../Components/Team/Team";
import AboutUs from "../../Components/About_Us/AboutUs";
import DisciplinesOffer from "../../Components/Disciplines_Offer/DisciplinesOffer";
import NewsLetter from "../../Components/News_Letter/NewsLetter";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Team />
      <AboutUs />
      <DisciplinesOffer />
      <NewsLetter />
    </div>
  );
};

export default Home;
