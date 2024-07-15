import AboutHero from "../../../Components/About_Hero/AboutHero";
import OurMission from "../../../Components/About_Our_Mission/OurMission";
import OurStory from "../../../Components/About_Our_Story/OurStory";
import FAQ from "../../../Components/FAQ/FAQ";
import Card from "../../../Interfaces/About_Card/Card";

import totalStudents from "/src/assets/total_Students.svg";
import newStudents from "/src/assets/newStudents.svg";
import connection from "/src/assets/connections.svg";

// for the navbar
import Navbar from "../../../Constant/Navbar/Navbar";
import { navLinks2 } from "../../../Data/Data";
import Footer from "../../../Constant/Footer/Footer";

const VisitAbout = () => {
  return (
    <>
      <Navbar navLinks={navLinks2} />
      <div className="pt-[4rem] md:px-[2rem] px-2">
        <AboutHero />
        <OurMission />
        <OurStory />
        <FAQ />

        <div className="">
          <h1 className="text-center text-4xl capitalize font-semibold pb-10">
            HobSpot By the Numbers
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-24 md:gap-4 gap-y-6">
            <Card
              image={totalStudents}
              title="1000+ Students"
              link="Learn More"
              path={""}
            />
            <Card
              image={newStudents}
              title="150+ New Students"
              link="Learn More"
              path={""}
            />
            <Card
              image={connection}
              title="700+ Connections"
              link="Learn More"
              path={""}
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default VisitAbout;
