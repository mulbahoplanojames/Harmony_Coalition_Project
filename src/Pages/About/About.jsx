// Importing the AboutHero component from the Components directory
import AboutHero from "../../Components/About_Hero/AboutHero";

// Importing the OurMission component from the Components directory
import OurMission from "../../Components/About_Our_Mission/OurMission";

// Importing the OurStory component from the Components directory
import OurStory from "../../Components/About_Our_Story/OurStory";

// Importing the Card component from the Interfaces directory
import Card from "../../Interfaces/About_Card/Card";

// Importing the totalStudents image from the assets directory
import totalStudents from "/src/assets/total_Students.svg";

// Importing the newStudents image from the assets directory
import newStudents from "/src/assets/newStudents.svg";

// Importing the connection image from the assets directory
import connection from "/src/assets/connections.svg";

// Importing the FAQ component from the Components directory
import FAQ from "../../Components/FAQ/FAQ";

// Importing the Gallery component from the Components directory
import Gallery from "../../Components/Gallery/Gallery";

const About = () => {
  return (
    <>
      <AboutHero />
      <div className="pt-[4rem] md:px-[2rem] px-2">
        <OurMission />
        <OurStory />
        <FAQ />
        <Gallery />

        <div className="">
          <h1 className="text-center text-4xl capitalize font-semibold pb-10">
            HobSpot By the Numbers
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-24 md:gap-4 gap-y-6">
            <Card
              image={totalStudents}
              title="200+ Students"
              link="Learn More"
              path={""}
            />
            <Card
              image={newStudents}
              title="30+ New Students"
              link="Learn More"
              path={""}
            />
            <Card
              image={connection}
              title="50+ Connections"
              link="Learn More"
              path={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
