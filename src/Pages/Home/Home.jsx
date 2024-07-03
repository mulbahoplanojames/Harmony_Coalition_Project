import HomeHero from "../../Components/Home_Hero/HomeHero";
import Team from "../../Components/Team/Team";
import AboutUs from "../../Components/About_Us/AboutUs";
import DisciplinesOffer from "../../Components/Disciplines_Offer/DisciplinesOffer";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Team />
      <AboutUs />
      <DisciplinesOffer />
    </div>
  );
};

export default Home;
