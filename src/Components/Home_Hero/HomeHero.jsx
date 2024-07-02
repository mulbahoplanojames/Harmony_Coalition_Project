import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:py-16 py-8  md:gap-6 gap-14">
        <div className="">
          <h1 className="md:text-5xl text-4xl uppercase font-black md:pr-72 pr-10 pb-6">
            Welcome <br /> we are here to help you
          </h1>
          <p className="text-lg pb-10">
            The leadership of the Association of the Liberian Students at Kigali
            Independent University welcomes you to the official platform of the
            Association. We are here to render any assiistance you may require
          </p>
          <Link
            to="about"
            className="py-3 px-6 bg-primary text-lg text-white border-none rounded-full hover:bg-opacity-70"
          >
            About Us
          </Link>
        </div>
        <div
          className=" bg-green-300 md:w-[60%] md:h-[24rem] w-[70%] h-[17rem] rounded-full relative overflow-visible border-4 border-primary "
          id="item1"
        >
          <div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] bg-red-300 rounded-full absolute top-1 right-5"></div>
          <div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] bg-yellow-300 rounded-full absolute md:bottom-[4rem] bottom-6 md:right-0 -right-6"></div>
          <div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] bg-orange-300 rounded-full absolute top-7 left-0"></div>
          <div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] bg-purple-300 rounded-full absolute md:bottom-14 -bottom-2 md:left-0 left-4"></div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
