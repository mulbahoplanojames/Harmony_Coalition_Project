import AboutHero from "../../Components/About_Hero/AboutHero";
import OurMission from "../../Components/About_Our_Mission/OurMission";
import OurStory from "../../Components/About_Our_Story/OurStory";
import Card from "../../Interfaces/About_Card/Card";

import totalStudents from "/src/assets/total_Students.svg";
import newStudents from "/src/assets/newStudents.svg";
import connection from "/src/assets/connections.svg";

const About = () => {
  return (
    <>
      <AboutHero />
      <OurMission />
      <OurStory />

      <div className="">
        <h1 className="text-center text-4xl capitalize font-semibold pb-10">
          HobSpot By the Numbers
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-24">
          <Card
            image={totalStudents}
            title="1000+ Students"
            link="Learn More"
            path={""}
          />
        </div>
      </div>
    </>
  );
};

export default About;
