import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const NewsLetter = () => {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Use Auth function from AuthContext
  const auth = useAuth();

  const handleNewsLetterSubmit = (e) => {
    e.preventDefault();
    if (newsLetterEmail !== "") {
      auth.newsLetterAction(newsLetterEmail);
      setNewsLetterEmail("");
      setErrorMessage("");
      return;
    } else {
      setErrorMessage("Please fill the Email fields");
    }
  };

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
        <form className=" w-full" onSubmit={handleNewsLetterSubmit}>
          <div className="">
            <input
              type="email"
              name="email"
              value={newsLetterEmail}
              onChange={(e) => setNewsLetterEmail(e.target.value)}
              className="text-black w-full bg-[#e8f0fe] h-14 px-6 rounded-md outline-none"
            />
            <p className="text-red-500 text-sm pt-3 font-bold">
              {errorMessage}
            </p>
            <button className="textblack py-3 px-6 bg-primary_main text-lg text-white border-none rounded-md mt-3 mb-6 hover:bg-opacity-70 w-full">
              Subscribe
            </button>
          </div>
          <p className="text-black ">
            <span className="opacity-50 text-black">
              We care about your data. Read our
            </span>{" "}
            &nbsp;
            <Link to={""} className="text-blue-600">
              privacy policy
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
