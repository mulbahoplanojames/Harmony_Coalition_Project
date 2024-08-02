import { Link } from "react-router-dom";
import { useState } from "react";

// React Calender
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StudentProfileCards = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="grid md:grid-cols-3  grid-cols-1 md:mt-16 mt-6 md:gap-8  gap-y-6  mb-14 ">
        <div className="px-4 py-6 rounded-md text-black h-fit w-full neu_card_2 col-span-2">
          <h1 className="text-3xl pb-2 text-black">Need Help?</h1>
          <p className="text-lg text-black pb-4">
            Call or email us to get feedback about latest news and events
          </p>
          <Link
            to="/contact"
            className="py-2 md:w-[50%] w-full bg-primary_main text-white rounded-md flex justify-center items-center mb-4"
          >
            <div className="w-[3rem] h-[3rem] rounded-full bg-red-300"></div>
            <p className="ml-4">
              Contact <span className="font-bold">Jefferson Flomo</span>
            </p>
          </Link>
          <p className="text-black">Avaliable 24/7</p>
        </div>

        {/* card three */}
        <div className="shadow-md rounded-md text-black   bg-blue-400  overflow-hidden">
          <Calendar
            onChange={onChange}
            value={value}
            className="w-full h-fit"
          />
        </div>
      </div>
    </>
  );
};

export default StudentProfileCards;
