import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-10 place-items-center pb-32 md:pt-20 pt-[3.5rem]">
        <div className="md:order-first order-last">
          <h1 className="text-4xl font-bold md:pb-8 pb-5">Our Story </h1>
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
        <div className="w-full bg-blue-400 h-[50vh]"></div>
      </div>
    </>
  );
};

export default OurStory;
