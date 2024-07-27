import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { eventsData } from "../../Data/LeaderData";

const Events = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <>
      <div className="text-black md:py-20 py-6   ">
        {/* wripper  */}
        {eventsData.map((event) => (
          <div
            className={`container grid grid-cols-12 mx-auto place-items-center mb-4 ${
              darkMode ? "event_card" : "event_card"
            } `}
            key={event.id}
          >
            <div className="bg-no-repeat bg-cover bg-slate-300 overflow-hidden col-span-full lg:col-span-4  h-[35vh] w-full">
              hjj
            </div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full bg-violet-600 text-gray-50">
                  Event : {event.date}
                </span>
              </div>
              <h1 className="text-3xl font-semibold">{event.title}</h1>
              <p className="flex-1 py-2">{event.description}</p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <span className="self-center text-sm">
                    Start Time: {event.start_time}
                  </span>
                </div>
                <span className="text-xs">End Time: {event.end_time}</span>
                <span className="text-xs">Venue: {event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
