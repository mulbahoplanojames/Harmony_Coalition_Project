import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import UpdateHero from "./Update_Hero/UpdateHero";

const UpdateTwo = () => {
  const { recentUpdatesData } = useContext(AppContext);

  return (
    <>
      <section className="md:pt-30 md:pb-16 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-black h-fit ">
        <UpdateHero
          postImage={recentUpdatesData[0].image}
          postTitle={recentUpdatesData[0].title}
          postDate={recentUpdatesData[0].date}
        />
        <div className="pt-6 pb-3">
          <p className="text-lg pb-4">{recentUpdatesData[0].description}</p>
        </div>
        <p className="text-lg pb-4">
          On the 28th of August 2024, the Inspector General of Police IGP.
          Gregory O W Coleman of the Republic of Liberia, Sen. Francis Saidy
          Dopoh II, senator, River Gee County, and the commissioner visited the
          student body here in Rwanda after their missions. It was a splendid
          chat, some issues face by students were addressed before them, and
          looking forward to settlement.{" "}
        </p>
        <p className="text-lg pb-4">Some of which were:</p>
        <ul className="text-lg pb-4 list-inside list-decimal">
          <li className="pb-4">
            Request for a smooth relationship between the National Police of
            Rwanda and Liberian students.
          </li>
          <li className="pb-4">Student’s visa and insurance issues </li>
          <li className="pb-4">
            Making the Liberian Community in Rwanda recognized by the Republic
            of Rwanda
          </li>
          <li className="pb-4">
            Appointment of a Law Enforcement Officer between the Rwanda National
            Police and Liberian Students in Rwanda.
          </li>
          <li>And etc.</li>
        </ul>

        <div className="container grid grid-cols-2 gap-4 md:p-4 mx-auto md:grid-cols-4">
          {generalGallery.map((data) => (
            <img
              key={data.id}
              src={data.image}
              alt="Student Award Image"
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            />
          ))}
          <img
            src={generalImg5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
        </div>

        <p className="text-lg py-5">
          We want to take this time to appreciate the Senator, IGP and
          Commissioner of the Republic of Liberia for passing by and handling
          some of the issues on ground, and we hope to see more of this from our
          officials back home.
        </p>

        {/* back to home  */}
        <Link
          to="/"
          className="fixed top-[10rem] md:right-10 right-4 w-10 h-10 bg-text rounded-full flex justify-center items-center bg-white text-primary_main animate-bounce hover:animate-none"
        >
          <AiFillHome className="w-6 h-6" />
        </Link>
      </section>
    </>
  );
};

export default UpdateTwo;

import generalImg1 from "/src/assets/general2.jpeg";
import generalImg2 from "/src/assets/general3.jpeg";
import generalImg3 from "/src/assets/general4.jpeg";
import generalImg4 from "/src/assets/general5.jpeg";
import generalImg5 from "/src/assets/general6.jpeg";

const generalGallery = [
  {
    id: 1,
    image: generalImg1,
  },
  {
    id: 2,
    image: generalImg2,
  },
  {
    id: 3,
    image: generalImg3,
  },
  {
    id: 4,
    image: generalImg4,
  },
];
