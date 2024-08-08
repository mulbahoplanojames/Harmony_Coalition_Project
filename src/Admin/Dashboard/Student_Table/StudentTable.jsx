import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

import TableHead from "./TableHead";
// import { registerStudents } from "../../Data/Data";
import { useEffect, useState } from "react";
import axios from "axios";
import { registerStudents } from "../Admin_Data/AdminData";
// import { useNavigate } from "react-router-dom";

import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";

import { IoIosSearch } from "react-icons/io";

const StudentTable = () => {
  // for the image viewer
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [studentInfo, setStudentInfo] = useState([]);
  const [filterStudentByDepartment, setFilterStudentByDepartment] = useState(
    []
  );
  // const [filterStudentByYear, setFilterStudentByYear] = useState([]);

  // for the image viewer to open
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  // for the image viewer to close
  const closeImageViewer = () => {
    // setCurrentImage(0);
    setIsViewerOpen(false);
  };

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
        console.log("All srudents response", response.data);
        setStudentInfo(response.data);
        setFilterStudentByDepartment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [BASE_URL]);

  const handleFilterStudentByDepartment = (e) => {
    const search = e.target.value;
    setFilterStudentByDepartment(
      studentInfo.filter(
        (student) =>
          student.department.toLowerCase().includes(search.toLowerCase())
        // student.user.first_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  // const handleFilterStudentByYear = (e) => {
  //   const search = e.target.value;
  //   setFilterStudentByYear(
  //     studentInfo.filter((student) => student.academic_year.includes(search))
  //   );
  // };

  return (
    <>
      <section className="w-full">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 place-items-center">
          <label className="input input-bordered flex items-center gap-2 mb-3 w-full">
            <input
              type="text"
              className="grow"
              placeholder="Search by Department"
              onChange={handleFilterStudentByDepartment}
            />
            <IoIosSearch className="h-4 w-4 opacity-70" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-3 w-full">
            <input
              type="text"
              className="grow"
              placeholder="Search by Year"
              // onChange={handleFilterStudentByYear}
            />
            <IoIosSearch className="h-4 w-4 opacity-70" />
          </label>
        </div>
        <div className="overflow-x-auto bg-white ">
          <table className="table w-full">
            {/* head */}
            <TableHead />

            <tbody>
              {studentInfo?.length > 0 ? (
                filterStudentByDepartment.map((student, i) => {
                  return (
                    <tr key={student.id} className="text-black text-center">
                      <td>{i}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-decagon h-[6rem] w-[10rem]">
                              <img
                                src={
                                  student.user.picture
                                    ? student.user.picture
                                    : "/src/assets/userAvatar.jpg"
                                }
                                alt={student.firstName}
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{student.user.first_name}</td>
                      <td>{student.user.last_name}</td>
                      <td>{student.department}</td>
                      <td>{student.course}</td>
                      <td>{student.user.email}</td>
                      <td>{student.user.phone_number}</td>
                      <td>{student.address}</td>
                      <td>{student.birth_date}</td>
                      <td>{student.gender}</td>
                      <td>{student.academic_year}</td>
                      <td>{student.visa_start}</td>
                      <td>{student.visa_end}</td>
                      <td>{student.visa_status}</td>
                      <td>
                        <div className="avatar">
                          <div className="mask h-[6rem] w-[10rem]">
                            <img
                              src={
                                student.visa_image
                                  ? student.visa_image
                                  : "/src/assets/userAvatar.jpg"
                              }
                              alt={student.firstName}
                              className=""
                              onClick={() => openImageViewer(i)}
                            />
                          </div>
                        </div>
                        {isViewerOpen && currentImage === i && (
                          <ImageViewer
                            src={[
                              student.visa_image
                                ? student.visa_image
                                : "/src/assets/userAvatar.jpg",
                            ]}
                            currentIndex={0}
                            disableScroll={false}
                            closeOnClickOutside={true}
                            onClose={closeImageViewer}
                            backgroundStyle={{
                              backgroundColor: "rgba(0,0,0,0.9)",
                            }}
                            styles={{
                              container: {
                                position: "fixed",
                                top: 30,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "rgba(0,0,0,0.9)",
                                zIndex: 9999,
                              },
                            }}
                            onMovePrevRequest={() =>
                              setCurrentImage(
                                (currentImage) => currentImage - 1
                              )
                            }
                            onMoveNextRequest={() =>
                              setCurrentImage(
                                (currentImage) => currentImage + 1
                              )
                            }
                          />
                        )}
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
                })
              ) : (
                <tr>
                  <td colSpan={14} className=" text-3xl  ">
                    No data found
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

export default StudentTable;
