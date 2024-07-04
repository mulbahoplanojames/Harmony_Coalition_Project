import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-10 md:px-8 px-4 bg-white rounded-md md:py-20 shadow-xl py-14 mb-20 place-items-center">
        <div className="">
          <h1
            className={`text-3xl font-semibold pb-5 md:text-left text-center uppercase text-black`}
          >
            Sign Up to our news latter
          </h1>
          <p className="text-lg  md:pr-28 pr-1 text-black">
            Sign up to get daily updates about the Liberian Community in ULK,
            the Liberian community in Rwanda and new concerning International
            Students.
          </p>
        </div>
        <div className=" w-full">
          <div className="">
            <input
              type="email"
              name="email"
              className="text-black w-full bg-[#e8f0fe] h-14 px-6 rounded-md outline-none"
            />
            <button className="textblack py-3 px-6 bg-primary_main text-lg text-white border-none rounded-md mt-3 mb-6 hover:bg-opacity-70 w-full">
              Subscribe
            </button>
          </div>
          <p className="text-black ">
            <span className="opacity-50">
              We care about your data. Read our
            </span>{" "}
            &nbsp;
            <Link to={""} className="text-blue-600">
              privacy policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
