import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { FAQData } from "../../Data/Data";

const FAQ = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <section className="w-full pb-20">
        <h1 className="text-3xl font-bold text-center pb-10">FAQ</h1>
        <div className="join join-vertical w-full bg-white">
          {FAQData.map((data) => {
            return (
              <div
                className={`collapse collapse-arrow join-item border-base-300 border ${
                  darkMode ? "text-black" : "text-black"
                }`}
                key={data.id}
              >
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div
                  className={`collapse-title text-xl font-medium  ${
                    darkMode ? "text-black" : "text-black"
                  }`}
                >
                  {data.question}
                </div>
                <div className="collapse-content">
                  <p className={`${darkMode ? "text-black" : "text-black"}`}>
                    {data.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FAQ;
