import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { eventsData } from "../../Data/LeaderData";
import axios from "axios";

const Events = () => {
  const { darkMode } = useContext(AppContext);
  const [events, setEvents] = useState([]);

  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/event/events/`).then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
  }, [BASE_URL]);

  return (
    <>
      <div className="text-black md:py-20 py-6   ">
        {events?.length > 0 ? (
          events.map((event) => (
            <div
              className={`container grid grid-cols-12 mx-auto  mb-4 ${
                darkMode ? "event_card" : "event_card"
              } `}
              key={event.id}
            >
              <div className="bg-no-repeat bg-cover bg-slate-300 overflow-hidden col-span-full lg:col-span-4  h-[35vh] w-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col py-6 px-3 col-span-full row-span-full lg:col-span-8 lg:p-10 ">
                <div className="flex justify-between mb-2">
                  <div className="flex justify-start">
                    <span className="px-2 py-1 text-xs rounded-full bg-violet-600 text-gray-50">
                      Start Date : {event.start_date}
                    </span>
                  </div>
                  <div className="flex justify-start">
                    <span className="px-2 py-1 text-xs rounded-full bg-violet-600 text-gray-50">
                      End Date : {event.start_date}
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold">{event.title}</h1>
                <p className="flex-1 py-2">{event.details}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    <span className="self-center text-sm">
                      Start Time: {event.start_time}
                    </span>
                  </div>
                  <span className="text-xs">End Time: {event.end_time}</span>
                  <span className="text-xs">Venue: {event.venue}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-3xl text-center">No Events Available</h1>
        )}
      </div>
    </>
  );
};

export default Events;
