import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:py-16 py-8  gap-14">
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
          className=" bg-green-300 md:w-[60%] md:h-[24rem] w-[70%] h-[17rem] rounded-full relative"
          id="item1"
        >
          <div className="w-[6rem] h-[6rem] bg-red-300 rounded-full absolute -top-1 right-3"></div>
          <div className="w-[6rem] h-[6rem] bg-yellow-300 rounded-full absolute bottom-[4rem] right-0"></div>
          <div className="w-[6rem] h-[6rem] bg-orange-300 rounded-full absolute top-7 left-0"></div>
          <div className="w-[6rem] h-[6rem] bg-purple-300 rounded-full absolute bottom-14 left-0"></div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
