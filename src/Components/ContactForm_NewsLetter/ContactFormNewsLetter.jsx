import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";

const ContactFormNewsletter = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "");

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
              className="md:w-[48%] w-full bg-[#eaeef3] md:h-[2.8rem] h-[3.4rem] outline-none rounded-xl px-4 md:mb-0 mb-3"
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              className="md:w-[48%] w-full bg-[#eaeef3] md:h-[2.8rem] h-[3.4rem] outline-none rounded-xl px-4"
            />
          </div>
          {/* name input field  */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="bg-[#eaeef3] w-full md:h-[2.8rem] h-[3.4rem]  outline-none rounded-xl px-4 mb-4"
          />
          {/* message input field  */}
          <textarea
            placeholder="Message"
            name="message"
            className="bg-[#eaeef3] w-full h-[10rem] outline-none rounded-xl px-4 mb-4"
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
          className="bg-no-repeat bg-center bg-cover h-fit px-5 py-8 rounded-xl capitalize text-primary w-full"
          id="newsletter"
        >
          <h1
            className={`md:text-2xl text-4xl font-bold pb-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Our newsletters
          </h1>
          <p className={`pb-6 ${darkMode ? "text-white" : "text-black"}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            harum quia qui aliquid vel, natus neque?
          </p>

          <form action="">
            {/* email input field  */}
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[2.8rem] text-secondary outline-none rounded-xl px-4 mb-4"
            />
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
