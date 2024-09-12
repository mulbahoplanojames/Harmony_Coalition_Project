import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import UpdateHero from "./Update_Hero/UpdateHero";
import { academyExcellenceData2 } from "../../Data/SpeechData";
import img from "/src/assets/acad7.jpeg";
import img1 from "/src/assets/acad12.jpeg";

const UpdateThree = () => {
  const { recentUpdatesData } = useContext(AppContext);

  return (
    <>
      <section className="md:pt-30 md:pb-16 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-black h-fit ">
        <UpdateHero
          postImage={recentUpdatesData[1].image}
          postTitle={recentUpdatesData[1].title}
          postDate={recentUpdatesData[1].date}
        />

        <div className="pt-6 pb-3">
          <p className="text-lg pb-4">{recentUpdatesData[1].description}</p>
        </div>

        <div className="container grid grid-cols-2 gap-4 md:p-4 mx-auto md:grid-cols-4">
          <img
            src={img}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          {academyExcellenceData.map((data) => (
            <img
              key={data.id}
              src={data.image}
              alt="Student Award Image"
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            />
          ))}
        </div>

        <p className="text-lg py-10">
          The Association of Liberian Students at Kigali Independent University
          has established a commendable tradition of recognizing and celebrating
          academic excellence among its members. This annual event serves to
          honor and reward students who have demonstrated outstanding scholastic
          performance throughout the academic year.
        </p>

        <div className="flex justify-center items-center gap-10 overflow-x-auto scroll-smooth py-4 px-10 my-12 snap-x snap-mandatory">
          {academyExcellenceData2.map((data) => (
            <div
              className="w-[300px] h-[400px] bg-blue-300 flex-shrink-0 snap-start"
              key={data.id}
            >
              <img
                src={data.image}
                alt="Student Award Image"
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              />
            </div>
          ))}
        </div>

        <p className="text-lg py-10">
          The ceremony not only acknowledges individual achievements but also
          fosters a culture of academic rigor and healthy competition within the
          Liberian student community. By highlighting exemplary academic
          accomplishments, the Association reinforces the importance of
          educational success and motivates its members to strive for excellence
          in their studies.
        </p>

        <div className="container grid grid-cols-2 gap-4 md:p-4 mx-auto md:grid-cols-4">
          {academyExcellenceData1.map((data) => (
            <img
              key={data.id}
              src={data.image}
              alt="Student Award Image"
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            />
          ))}
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
        </div>

        <p className="text-lg py-10">
          This prestigious recognition has become a highly anticipated event in
          the Association&apos;s calendar, symbolizing the collective pride and
          aspirations of Liberian students pursuing higher education at Kigali
          Independent University. The awards ceremony stands as a testament to
          the Association&apos;s commitment to promoting academic achievement
          and personal growth among its members.
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

export default UpdateThree;

import academicImg1 from "/src/assets/acad4.jpeg";
import academicImg2 from "/src/assets/acad5.jpeg";
import academicImg3 from "/src/assets/acad8.jpeg";
import academicImg4 from "/src/assets/acad9.jpeg";

import academicImg5 from "/src/assets/update1.jpg";
import academicImg6 from "/src/assets/update2.jpg";
import academicImg7 from "/src/assets/update3.jpg";
import academicImg8 from "/src/assets/acad11.jpeg";

const academyExcellenceData = [
  {
    id: 1,
    image: academicImg1,
  },
  {
    id: 2,
    image: academicImg6,
  },
  {
    id: 3,
    image: academicImg2,
  },
  {
    id: 4,
    image: academicImg5,
  },
];

const academyExcellenceData1 = [
  {
    id: 1,
    image: academicImg3,
  },
  {
    id: 2,
    image: academicImg4,
  },
  {
    id: 3,
    image: academicImg7,
  },
  {
    id: 4,
    image: academicImg8,
  },
];
