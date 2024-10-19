import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useAuth } from "../../Context/AuthContext";

const ContactFormNewsletter = () => {
  const [result, setResult] = useState("");
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const web3forms = import.meta.env.VITE_REACT_WEB3FORM_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", web3forms);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const { darkMode } = useContext(AppContext);

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
      {/* <ContactForm /> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  gap-y-4 md:place-items-start place-items-center mb-20">
        <form
          onSubmit={onSubmit}
          className="col-span-2 md:order-first order-last md:w-[90%] w-full"
        >
          <div className="flex justify-between items-center mb-3 flex-wrap">
            {/* email and phone input field  */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="md:w-[48%] w-full bg-[#eaeef3] md:h-[2.8rem] h-[3.4rem] outline-none rounded-md px-4 md:mb-0 mb-3  dark:text-black"
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              className="md:w-[48%] w-full bg-[#eaeef3] md:h-[2.8rem] h-[3.4rem] outline-none rounded-md dark:text-black px-4 "
            />
          </div>
          <input
            type="hidden"
            name="subject"
            value="New Submission from ALSULK Website"
          ></input>
          {/* name input field  */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="bg-[#eaeef3] w-full md:h-[2.8rem] h-[3.4rem]  outline-none rounded-md dark:text-black px-4 mb-4 "
          />
          {/* message input field  */}
          <textarea
            placeholder="Message"
            name="message"
            className="bg-[#eaeef3] w-full h-[10rem] outline-none rounded-md dark:text-black px-4 mb-4 "
          ></textarea>

          <p className="pb-4">{result}</p>

          {/* submit button */}
          <button
            className="bg-primary_main hover:bg-yellow_accent_2 transition-all duration-300 px-10 py-2 text-white text-xl rounded-full"
            type="submit"
          >
            Submit
          </button>
        </form>

        {/* News letter section */}
        <div
          className="bg-no-repeat bg-center bg-cover h-fit px-5 py-8 rounded-xl capitalize text-primary w-full "
          id="newsletter"
        >
          <h1 className={`md:text-2xl text-4xl font-bold pb-3 dark:text-white`}>
            Our newsletters
          </h1>
          <p className={`pb-6 dark:text-white`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            harum quia qui aliquid vel, natus neque?
          </p>

          <form onClick={handleNewsLetterSubmit}>
            {/* email input field  */}
            <input
              type="email"
              value={newsLetterEmail}
              onChange={(e) => setNewsLetterEmail(e.target.value)}
              placeholder="stephenjames@gmail.com"
              className="w-full h-[2.8rem]  outline-none rounded-xl px-4 mb-2 bg-[#eaeef3]  text-black"
            />
            <p className="text-red-500 pb-2">{errorMessage}</p>
            {/* submit button */}
            <button className="px-4 py-1 rounded-xl bg-primary_main text-white w-full h-[2.8rem] text-lg hover:bg-yellow_accent_2 transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormNewsletter;
