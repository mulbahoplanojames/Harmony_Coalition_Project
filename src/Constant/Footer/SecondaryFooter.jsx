import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const SecondaryFooter = () => {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-y-14">
        <div>
          <p className="text-lg pb-3 text-white">Subscribe to our newsletter</p>
          <p className="text-white ">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
        </div>
        <form
          className="flex items-center md:flex-nowrap flex-wrap md:gap-4 gap-y-2 relative"
          onSubmit={handleNewsLetterSubmit}
        >
          <input
            type="email"
            value={newsLetterEmail}
            onChange={(e) => setNewsLetterEmail(e.target.value)}
            name="email"
            className="text-white text-lg  w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
          />
          <button className=" py-3 px-6 bg-black text-lg text-white border-none rounded-md mt-3 mb-6 hover:bg-opacity-70 md:w-[20%] w-full">
            Subscribe
          </button>
          <p className="text-red-500 absolute -bottom-5 left-1">
            {errorMessage}
          </p>
        </form>
      </div>
    </>
  );
};

export default SecondaryFooter;
