import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { useEffect, useState } from "react";
import axios from "axios";

const Calender = () => {
  const [date, setDate] = useState([]);

  // BASE URL of the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/event/events/`)
      .then((response) => {
        setDate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [BASE_URL]);

  return (
    <>
      ~
      <div className="text-black pb-14 py-3 neu_card_2 px-5 ">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
          }}
          weekends={false}
          events={date.map((event) => ({
            title: event.title,
            date: event.start_date,
            time: event.start_time,
          }))}
          dayHeaderFormat={{
            weekday: "long",
          }}
          eventClick={(info) => {
            alert(info.event.title);
          }}
          eventBackgroundColor="#4b208c"
          eventTextColor="white"
        />
      </div>
    </>
  );
};

export default Calender;
