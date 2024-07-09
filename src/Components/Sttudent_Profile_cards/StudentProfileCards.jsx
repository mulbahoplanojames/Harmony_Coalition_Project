import { Link } from "react-router-dom";
import { FcDataProtection } from "react-icons/fc";
import { MdEventNote } from "react-icons/md";

// React Calender
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StudentProfileCards = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mt-16 mt-6 md:gap-8 gap-y-6 mb-14">
        <div className="px-4 py-6 rounded-md text-black h-fit">
          <h1 className="text-3xl pb-2 text-black">Need Help?</h1>
          <p className="text-lg text-black pb-4">
            Call or email us to get feedback about latest news and events
          </p>
          <Link
            to="/contact"
            className="py-2  bg-primary_main text-white rounded-md flex justify-center items-center mb-4"
          >
            <div className="w-[3rem] h-[3rem] rounded-full bg-red-300"></div>
            <p className="ml-4">
              Contact <span className="font-bold">Jefferson Flomo</span>
            </p>
          </Link>
          <p className="text-black">Avaliable 24/7</p>
        </div>

        {/* card two */}
        <div className="bg-white px-4 py-6 rounded-md text-black shadow-lg h-fit">
          <h1 className="text-3xl pb-4 text-black">Events</h1>
          {/* event one  */}
          <div className="py-2  bg-red-100 text-white rounded-md flex justify-space-between px-2 gap-14 items-center mb-4 ">
            <div className="flex items-center">
              <FcDataProtection className="text-4xl text-red-500" />
              <p className="ml-4 text-black">Inguration Program</p>
            </div>
            <MdEventNote className="text-2xl text-red-500" />
          </div>

          {/* event two  */}
          <div className="py-2  bg-blue-100 text-white rounded-md flex justify-space-between px-2 gap-14 items-center mb-4 ">
            <div className="flex items-center">
              <FcDataProtection className="text-4xl" />
              <p className="ml-4 text-black">Inguration Program</p>
            </div>
            <MdEventNote className="text-2xl text-blue-600" />
          </div>

          {/* event three  */}
          <div className="py-2  bg-orange-100 text-white rounded-md flex justify-space-between px-2 gap-14 items-center mb-4 ">
            <div className="flex items-center">
              <FcDataProtection className="text-4xl" />
              <p className="ml-4 text-black">Inguration Program</p>
            </div>
            <MdEventNote className="text-2xl text-orange-500" />
          </div>
        </div>

        {/* card three */}
        <div className="shadow-md  rounded-md text-black">
          <Calendar
            onChange={onChange}
            value={value}
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default StudentProfileCards;
