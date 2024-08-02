import TableHead from "./TableHead";
// import { registerStudents } from "../../Data/Data";
import { useEffect, useState } from "react";
import axios from "axios";
import { registerStudents } from "../Admin_Data/AdminData";
// import { useNavigate } from "react-router-dom";

import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";

const StudentTable = () => {
  const [studentInfo, setStudentInfo] = useState([]);

  // const navigate = useNavigate();

  // Base URL for the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/students/api/students/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setStudentInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [BASE_URL]);

  return (
    <>
      <section className="w-full">
        <div className="overflow-x-auto bg-white ">
          <table className="table w-full">
            {/* head */}
            <TableHead />

            {studentInfo ? (
              <tbody>
                {studentInfo.map((student) => {
                  return (
                    <tr key={student.id} className="text-black">
                      <td>{student.id}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={
                                  student.user.picture
                                    ? student.user.picture
                                    : "/src/assets/userAvatar.jpg"
                                }
                                alt={student.firstName}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{student.user.first_name}</td>
                      <td>{student.user.last_name}</td>
                      <td>{student.user.email}</td>
                      <td>{student.user.phone_number}</td>
                      <td>{student.address}</td>
                      <td>{student.birth_date}</td>
                      <td>{student.gender}</td>
                      <td>{student.department}</td>
                      <td>{student.course}</td>
                      <td>{student.visa_start}</td>
                      <td>{student.visa_end}</td>
                      <td>{student.visa_status}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={
                                  student.visa_image
                                    ? student.visa_image
                                    : "/src/assets/userAvatar.jpg"
                                }
                                alt={student.firstName}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center gap-2">
                          <FaEdit
                            className="p-1 text-2xl bg-green-200 rounded-md flex justify-center items-center text-green-700 cursor-pointer"
                            // onClick={() =>
                            //   navigate(`/admin/student/${student.id}`)
                            // }
                          />
                          <MdDeleteForever className="p-1 text-2xl bg-red-200 rounded-md flex justify-center items-center text-red-700 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                {registerStudents.map((student) => {
                  return (
                    <tr key={student.id} className="text-black">
                      <td>{student.id}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={
                                  student.avatar
                                    ? student.avatar
                                    : "/src/assets/userAvatar.jpg"
                                }
                                alt={student.firstName}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{student.email}</td>
                      <td>{student.phoneNumber}</td>
                      <td>{student.address}</td>
                      <td>{student.birthDate}</td>
                      <td>{student.gender}</td>
                      <td>{student.department}</td>
                      <td>{student.course}</td>
                      <td>{student.visaStartDate}</td>
                      <td>{student.visaEndDate}</td>
                      <td>{student.visaStatus}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={
                                  student.avatar
                                    ? student.avatar
                                    : "/src/assets/userAvatar.jpg"
                                }
                                alt={student.firstName}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{student.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </section>
    </>
  );
};

export default StudentTable;
