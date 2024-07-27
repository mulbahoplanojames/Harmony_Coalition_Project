import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calender = () => {
  return (
    <>
      <div className="text-black pb-14 py-3 neu_card_2 px-5 ">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialValue="dayGridMonth"
          weekends={true}
          events={[
            { title: "Start of the year", date: "2024-07-28" },
            { title: "event 2", date: "2024-8-02" },
            { title: "event 2", date: "2024-8-04" },
          ]}
        />
      </div>
    </>
  );
};

export default Calender;
