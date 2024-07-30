import axios from "axios";
import { useRef, useState } from "react";

const AddEventsForm = () => {
  const [Events, setEvents] = useState({
    event_title: "",
    event_date: "",
    event_start_time: "",
    event_end_time: "",
    event_description: "",
    event_image: "",
    event_location: "",
  });

  const fileInputRef = useRef(null);

  const handleAddEvents = async (e) => {
    e.preventDefault();

    if (
      Events.event_title === "" ||
      Events.event_date === "" ||
      Events.event_start_time === "" ||
      Events.event_end_time === "" ||
      Events.event_description === "" ||
      Events.event_image === "" ||
      Events.event_location === ""
    ) {
      alert("Please fill all the fields");
    } else {
      console.log(Events);

      try {
        const response = await axios.post(
          `http://192.168.1.68:8000/api/events/`,
          Events
        );
        console.log(response);

        setEvents({
          event_title: "",
          event_date: "",
          event_start_time: "",
          event_end_time: "",
          event_description: "",
          event_image: "",
          event_location: "",
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form
        className=" md:py-8 py-5 px-3 md:px-6 shadow-xl neu_card_1"
        onSubmit={handleAddEvents}
      >
        {/* Event Name and Date */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="first_name" className="text-base pb-1 inline-block">
              Event Name/Title
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter First Name"
              autoComplete="given-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.event_title}
              onChange={(e) =>
                setEvents({ ...Events, event_title: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="pb-1 text-base inline-block">
              Event Date
            </label>
            <input
              type="date"
              name="event_date"
              placeholder="Enter the date of the Event"
              autoComplete="family-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.event_date}
              onChange={(e) =>
                setEvents({ ...Events, event_date: e.target.value })
              }
            />
          </div>
        </div>

        {/* Event Description */}
        <div className="w-full mb-5">
          <label htmlFor="last_name" className="pb-1 text-base inline-block">
            Event Description
          </label>
          <textarea
            name="event_description"
            placeholder="Enter the description of the Event"
            autoComplete="family-name"
            className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-36 px-6 "
            value={Events.event_description}
            onChange={(e) =>
              setEvents({ ...Events, event_description: e.target.value })
            }
          ></textarea>
        </div>

        {/* Event start time and End time */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="first_name" className="text-base pb-1 inline-block">
              Event Start Time
            </label>
            <input
              type="time"
              name="event_start_time"
              placeholder="Enter the Start time of the Event"
              autoComplete="given-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.event_start_time}
              onChange={(e) =>
                setEvents({ ...Events, event_start_time: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="pb-1 text-base inline-block">
              Event End Time
            </label>
            <input
              type="time"
              name="event_end_time"
              placeholder="Enter the End time of the Event"
              autoComplete="family-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.event_end_time}
              onChange={(e) =>
                setEvents({ ...Events, event_end_time: e.target.value })
              }
            />
          </div>
        </div>

        {/* Events Location and Image */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="first_name" className="text-base pb-1 inline-block">
              Event Location
            </label>
            <input
              type="text"
              name="event_location"
              placeholder="Enter the Location of the Event"
              autoComplete="given-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.event_location}
              onChange={(e) =>
                setEvents({ ...Events, event_location: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="pb-1 text-base inline-block">
              Event Image
            </label>
            <input
              type="file"
              name="event_image"
              placeholder="Enter the Image of the Event"
              autoComplete="family-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              ref={fileInputRef}
              onChange={(e) =>
                setEvents({ ...Events, event_image: e.target.files[0] })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary_main text-white p-3 rounded-md w-full"
        >
          Add Event
        </button>
      </form>
    </>
  );
};

export default AddEventsForm;
