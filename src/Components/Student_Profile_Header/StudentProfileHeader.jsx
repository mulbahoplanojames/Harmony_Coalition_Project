import { useEffect, useState } from "react";
// import { SiProgress } from "react-icons/si";

import avatar from "/src/assets/userAvatar.jpg";
import { Clock, ShieldCheck, TrendingUp, UserRoundCheck } from "lucide-react";

const StudentProfileHeader = (props) => {
  const { firstName, lastName, department, course, image } = props;
  const [date, setDate] = useState({
    hour: "",
    minute: "",
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const currentDate = new Date();
      let hour = currentDate.getHours();
      let minute = currentDate.getMinutes();
      let day = currentDate.getDate();
      let month = currentDate.toLocaleString("en-US", { month: "long" }); // Months are 0-indexed
      let year = currentDate.getFullYear();

      if (hour < 10) {
        hour = `0${hour}`;
      }
      if (minute < 10) {
        minute = `0${minute}`;
      }

      setDate({
        hour: hour,
        minute: minute,
        day: day,
        month: month,
        year: year,
      });
    };

    const timer = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-full h-fit py-9   rounded-lg shadow-lg text-black md:px-8 px-2 md:grid-cols-2 grid-cols-1 place-items-stretch items-center md:gap-2 gap-y-5 bg-white ">
        <h2 className="text-3xl capitalize pb-6">Student Details</h2>

        <div className="grid md:grid-cols-4 grid-cols-1 md:place-items-start gap-6 md:pb-4 pb-6">
          <div className=" md:h-[10rem] h-[8rem] md:w-[10rem] w-[8rem]   overflow-hidden rounded-full bg-red-300">
            <img
              src={image ? image : avatar}
              alt={`${firstName} ${lastName} image`}
              className="w-full h-full object-scale"
            />
          </div>

          <div className="bg-blue-40 col-span-3 w-full">
            <h2 className="text-3xl capitalize pb-4">
              Welcome back, {firstName} {lastName}
            </h2>

            <div className="p-3 flex md:gap-28 gap-x-8 gap-y-3 flex-wrap">
              <div>
                <p className="pb-1">Date</p>
                <p className="text-base pb-2">{`${date.month} ${date.day}, ${date.year}`}</p>
                <p className="text-base pb-5">{`${date.hour} : ${date.minute} `}</p>
              </div>

              <div>
                <p className="pb-1">Department</p>
                <p className="pb-2">{department ? department : "Department"}</p>
              </div>

              <div>
                <p className="pb-1">Course</p>
                <p>{course ? course : "Course"}</p>
              </div>
              {/* <p className="text-base pb-5">
                Always stay up to date in your student portal
              </p> */}
            </div>
          </div>
        </div>

        {/* Student performance on the dashboard will be here */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:place-items-start  gap-6">
          <div className="bg-[#f0f0f0] w-full h-fit flex gap-4 items-center rounded-xl p-3">
            <UserRoundCheck className="md:w-12 md:h-12 h-10 w-10 p-2 rounded-full bg-blue-200 text-blue-600" />
            <div className="">
              <p className="md:text-lg text-base font-bold">Not Active</p>
              <p className="md:text-base text-[1rem] text-slate-500">
                Total Attendence
              </p>
            </div>
          </div>
          <div className="bg-[#f0f0f0] w-full h-fit flex gap-4 items-center rounded-xl p-3">
            <ShieldCheck className="md:w-12 md:h-12 h-10 w-10 p-2 rounded-full bg-[#ebf6de] text-[#7e9e26]" />
            <div className="">
              <p className="md:text-lg text-base font-bold">Secure</p>
              <p className="md:text-base text-[1rem] text-slate-500">
                Data Protection
              </p>
            </div>
          </div>
          <div className="bg-[#f0f0f0] w-full h-fit flex gap-4 items-center rounded-xl p-3">
            <Clock className="md:w-12 md:h-12 h-10 w-10 p-2 rounded-full bg-[#ffe3e1] text-red-600" />
            <div className="">
              <p className="md:text-lg text-base font-bold">Active</p>
              <p className="md:text-base text-[1rem] text-slate-500">Moral</p>
            </div>
          </div>
          <div className="bg-[#f0f0f0] w-full h-fit flex gap-4 items-center rounded-xl p-3">
            <TrendingUp className="md:w-12 md:h-12 h-10 w-10 p-2 rounded-full bg-orange-100 text-orange-600" />
            <div className="">
              <p className="md:text-lg text-base font-bold">Good </p>
              <p className="md:text-base text-[1rem] text-slate-500">
                Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfileHeader;
