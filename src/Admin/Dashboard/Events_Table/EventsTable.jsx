// import { registerStudents } from "../../Data/Data";
import { useEffect, useState } from "react";
import axios from "axios";
// import { registerStudents } from "../Admin_Data/AdminData";
import EventTableHead from "./EventTableHead";
import { useNavigate } from "react-router-dom";

import {
  MdOutlinePublishedWithChanges,
  MdEditCalendar,
  MdDelete,
} from "react-icons/md";

const EventTable = () => {
  const [eventInfo, setEventInfo] = useState([]);

  const navigate = useNavigate();

  // Base URL of the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/event/events/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
          Accept: "application/json; version=v1",
        },
      })
      .then((response) => {
        console.log(response.data);
        setEventInfo(response.data || []);
      })
      .catch((error) => {
        console.log(error);
        setEventInfo([]);
      });
  }, [BASE_URL]);

  // Function to delete a student
  const deleteEvents = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/event/events/${id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
          Accept: "application/json; version=v1",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to edit a student
  const editEvent = async (id) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/event/events/${id}/`,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${localStorage.getItem("token")}`,
            Accept: "application/json; version=v1",
          },
        }
      );
      console.log(response.data);
      // navigate to the edit page
      navigate(`/admin/edit-events/${id}/`, { state: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to publish a student
  const publishEvents = async (id) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/event/event/publish/${id}/`,
        {},
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
            Accept: "application/json; version=v1",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="w-full">
        <div className="overflow-x-auto bg-white ">
          <table className="table w-full">
            {/* head */}
            <EventTableHead />
            <tbody>
              {eventInfo?.length > 0 ? (
                eventInfo.map((student) => (
                  <tr key={student.id} className="text-black">
                    <td>{student.id}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={
                                student.image
                                  ? student.image
                                  : "/src/assets/userAvatar.jpg"
                              }
                              alt={student.title}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{student.title}</td>
                    <td>{student.start_date}</td>
                    <td>{student.end_date}</td>
                    <td>{student.start_time}</td>
                    <td>{student.end_time}</td>
                    <td>{student.venue}</td>
                    <td>{student.details}</td>
                    <td>{student.status}</td>
                    <td className="flex gap-3 justify-center items-center">
                      <MdOutlinePublishedWithChanges
                        className="bg-blue-100 text-blue-600 p-1 text-3xl rounded-md cursor-pointer hover:bg-blue-400 "
                        onClick={() => publishEvents(student.id)}
                      />
                      <MdEditCalendar
                        className="bg-green-100 text-green-600 p-1 text-3xl rounded-md cursor-pointer hover:bg-green-400 "
                        onClick={() => editEvent(student.id)}
                      />
                      <MdDelete
                        className="bg-red-100 text-red-600 p-1 text-3xl rounded-md cursor-pointer hover:bg-red-400 "
                        onClick={() => deleteEvents(student.id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center text-3xl">
                    No events found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default EventTable;
