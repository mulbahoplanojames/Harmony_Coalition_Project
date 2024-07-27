import axios from "axios";
import { useRef, useState } from "react";

const AddEventsForm = () => {
  const [isEvents, setIsEvents] = useState({
    event_title: "",
    event_date: "",
    event_start_time: "",
    event_end_time: "",
    event_description: "",
    event_image: "",
    event_location: "",
  });

  const fileInputRef = useRef(null);

  const handleAddEventsSubmit = async (e) => {
    e.preventDefault();

    if (
      isEvents.event_title === "" ||
      isEvents.event_date === "" ||
      isEvents.event_start_time === "" ||
      isEvents.event_end_time === "" ||
      isEvents.event_description === "" ||
      isEvents.event_image === "" ||
      isEvents.event_location === ""
    ) {
      alert("Please fill all the fields");
    } else {
      console.log(isEvents);

      try {
        const response = await axios.post(
          `http://192.168.1.68:8000/api/events/`,
          isEvents
        );
        console.log(response);

        setIsEvents({
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
        onSubmit={handleAddEventsSubmit}
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
              value={isEvents.event_title}
              onChange={(e) =>
                setIsEvents({ ...isEvents, event_title: e.target.value })
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
              value={isEvents.event_date}
              onChange={(e) =>
                setIsEvents({ ...isEvents, event_date: e.target.value })
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
            value={isEvents.event_description}
            onChange={(e) =>
              setIsEvents({ ...isEvents, event_description: e.target.value })
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
              value={isEvents.event_start_time}
              onChange={(e) =>
                setIsEvents({ ...isEvents, event_start_time: e.target.value })
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
              value={isEvents.event_end_time}
              onChange={(e) =>
                setIsEvents({ ...isEvents, event_end_time: e.target.value })
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
              value={isEvents.event_location}
              onChange={(e) =>
                setIsEvents({ ...isEvents, event_location: e.target.value })
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
                setIsEvents({ ...isEvents, event_image: e.target.files[0] })
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
