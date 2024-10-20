import { Link } from "react-router-dom";
import { useState } from "react";

// React Calender
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Charts } from "@/components/Chart";

const StudentProfileCards = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="grid md:grid-cols-2  grid-cols-1 md:mt-16 mt-6 md:gap-8  gap-y-6  mb-14 place-items-center">
        <div className="px-4 py-6 rounded-md text-black h-fit w-full ">
          <h1 className="text-3xl pb-2 text-black">Need Help?</h1>
          <p className="text-lg text-black pb-4">
            Call or email us to get feedback about latest news and events
          </p>

          <p className="flex items-center gap-4">
            <PhoneCall />
            <span className="text-xl">+250 791 676 207</span>
          </p>
          <p className="flex items-center gap-4 pt-3 ">
            <Mail />
            <span className="text-xl">alsulk@gmail.com</span>
          </p>
          <p className="flex items-center gap-4 pt-3 pb-4">
            <MapPin />
            <span className="text-xl">Kigali, Gisozi, ULK</span>
          </p>

          <p className="text-black text-xl">Avaliable 24/7</p>
        </div>

        <Charts />
      </div>
    </>
  );
};

export default StudentProfileCards;
