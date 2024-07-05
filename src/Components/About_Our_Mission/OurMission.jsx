import { Link } from "react-router-dom";
import image from "/src/assets/hero.jpg";
import image1 from "/src/assets/hero1.jpg";

const OurMission = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-10 place-items-center pb-10 md:pt-32 pt-[3.5rem]">
        <div className="w-full bg-red-400 h-[50vh]"></div>
        <div className="">
          <h1 className="text-4xl font-bold md:pb-8 pb-5">Our Mission </h1>
          <p className="text-lg pb-10 md:pr-10">
            We believe not just in growing bigger, but in growing better. And
            growing better means aligning the success of our Students with the
            success of the Liberian Community.
          </p>
          <Link
            to="about"
            className="py-3 px-6 bg-primary_main text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurMission;
