import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-20 place-items-center pb-32 md:pt-32 pt-24">
        <div className="">
          <h1 className="text-4xl font-bold pb-8">About Us </h1>
          <p className="text-lg pb-10 md:pr-10">
            The Association of the Liberian Students is an Association establish
            at the Kigali Independent University to head the affairs of
            Liberians Students enrolled at the University. it&apos;s charge with
            the responsibility of adaquately representing the Liberian Students
            at ULK.
          </p>
          <Link
            to="about"
            className="py-3 px-6 bg-primary_main text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            Read More
          </Link>
        </div>

        <div className="relative h-[60vh] w-full">
          <div className="md:w-[54%] md:h-[52vh] w-[70%] h-[40vh] bg-red-300 rounded-full absolute md:-top-10 -top-5 md:-left-3 left-2 overflow-hidden border-4 border-primary_main group cursor-pointer">
            <img
              src="/src/assets/hero.jpg"
              alt="hero"
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />
          </div>
          <div className="md:w-[45%] md:h-[43vh] w-[54%] h-[30vh] bg-yellow-300 rounded-full absolute -bottom-12 right-8 overflow-hidden border-4 border-primary_main group cursor-pointer">
            <img
              src="/src/assets/hero1.jpg"
              alt="hero"
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
