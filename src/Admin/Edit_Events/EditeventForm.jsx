import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditEventsForm = () => {
  const [Events, setEvents] = useState({
    title: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    details: "",
    image: "",
    venue: "",
  });

  const [editImage, setEditImage] = useState("");

  // This is to navigate to another page
  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;
  console.log(state);

  const fileInputRef = useRef(null);

  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    if (state) {
      setEvents(state);
    }
  }, [state]);

  const handleAddEvents = async (e) => {
    e.preventDefault();

    if (
      Events.title === "" ||
      Events.start_date === "" ||
      Events.end_date === "" ||
      Events.start_time === "" ||
      Events.end_time === "" ||
      Events.details === "" ||
      Events.image === "" ||
      Events.venue === ""
    ) {
      alert("Please fill all the fields");
    } else {
      console.log(Events);

      try {
        // Create FormData object
        const formData = new FormData();
        formData.append("title", Events.title);
        formData.append("start_date", Events.start_date);
        formData.append("end_date", Events.end_date);
        formData.append("start_time", Events.start_time);
        formData.append("end_time", Events.end_time);
        formData.append("details", Events.details);
        formData.append("venue", Events.venue);
        formData.append("image", editImage);
        // if (Events.image) {
        //   formData.append("image", Events.image);
        // }
        const response = await axios.patch(
          `${BASE_URL}/event/events/${state.id}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response);

        navigate("/admin/all-events");

        setEvents({
          title: "",
          start_date: "",
          start_time: "",
          end_time: "",
          details: "",
          image: "",
          venue: "",
        });

        fileInputRef.current.value = null;
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
              value={Events.title}
              onChange={(e) => setEvents({ ...Events, title: e.target.value })}
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="pb-1 text-base inline-block">
              Event Start Date
            </label>
            <input
              type="date"
              name="start_date"
              placeholder="Enter the date of the Event"
              autoComplete="family-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.start_date}
              onChange={(e) =>
                setEvents({ ...Events, start_date: e.target.value })
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
            name="details"
            placeholder="Enter the description of the Event"
            autoComplete="family-name"
            className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-36 px-6 "
            value={Events.details}
            onChange={(e) => setEvents({ ...Events, details: e.target.value })}
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
              name="start_time"
              placeholder="Enter the Start time of the Event"
              autoComplete="given-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.start_time}
              onChange={(e) =>
                setEvents({ ...Events, start_time: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="pb-1 text-base inline-block">
              Event End Time
            </label>
            <input
              type="time"
              name="end_time"
              placeholder="Enter the End time of the Event"
              autoComplete="family-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.end_time}
              onChange={(e) =>
                setEvents({ ...Events, end_time: e.target.value })
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
              name="venue"
              placeholder="Enter the Location of the Event"
              autoComplete="given-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.venue}
              onChange={(e) => setEvents({ ...Events, venue: e.target.value })}
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="pb-1 text-base inline-block">
              Event Image
            </label>
            <input
              type="file"
              name="image"
              placeholder="Enter the Image of the Event"
              autoComplete="family-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              ref={fileInputRef}
              onChange={(e) =>
                setEditImage(e.target.files[0] ? e.target.files[0] : null)
              }
            />
          </div>
        </div>

        {/* Event End Date */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="first_name" className="text-base pb-1 inline-block">
              Event End Date
            </label>
            <input
              type="date"
              name="venue"
              placeholder="Enter the End Date of the Event"
              autoComplete="given-name"
              className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              value={Events.end_date}
              onChange={(e) =>
                setEvents({ ...Events, end_date: e.target.value })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary_main text-white p-3 rounded-md w-full"
        >
          Update Event
        </button>
      </form>
    </>
  );
};

export default EditEventsForm;
