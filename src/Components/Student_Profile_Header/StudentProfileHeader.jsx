import { useEffect, useState } from "react";
import { SiProgress } from "react-icons/si";

const StudentProfileHeader = (props) => {
  const { firstName, lastName, department, course } = props;
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
      <div className="w-full h-fit py-9 px-3 bg-[#303247]  rounded-md grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-y-14 shadow-[-6px_-6px_20px_rgba(255,255,255,0.5),6px_6px_20px_rgba(0,0,0,0.5)]">
        <div className="p-3">
          <p className="text-base pb-2">{`${date.month} ${date.day}, ${date.year}`}</p>
          <p className="text-base pb-5">{`${date.hour} : ${date.minute} `}</p>
          <h2 className="text-3xl capitalize pb-1">
            Welcome back, {firstName} {lastName}
          </h2>
          <p className="text-base pb-5">
            Always stay up to date in your student portal
          </p>

          <p className="pb-2">{department} Computer Science</p>
          <p>{course} Software engineering</p>
        </div>
        <div className="bg-blue-300 p-8 rounded-md overflow-hidden"></div>
      </div>
    </>
  );
};

export default StudentProfileHeader;
