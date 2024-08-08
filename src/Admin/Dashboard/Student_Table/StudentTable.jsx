// Importing the useCallback, useEffect and useState hooks from the react library
import { useCallback, useState, useEffect } from "react";

// Importing the ImageViewer component from the react-simple-image-viewer library
import ImageViewer from "react-simple-image-viewer";

// Importing the TableHead component from /Components/Admin/Dashboard/Student_Table/TableHead
import TableHead from "./TableHead";

// Importing the axios library for making HTTP requests
import axios from "axios";

// Importing the FaEdit, MdDeleteForever, and IoIosSearch icons from the react-icons library
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const StudentTable = () => {
  // Defining the state variables for the image viewer
  const [currentImage, setCurrentImage] = useState(0); // The index of the current image being displayed in the image viewer
  const [isViewerOpen, setIsViewerOpen] = useState(false); // A boolean indicating whether the image viewer is open or closed

  // Defining the state variables for the student information
  const [studentInfo, setStudentInfo] = useState([]); // The array of student objects fetched from the API
  const [filterStudentByDepartment, setFilterStudentByDepartment] = useState(
    []
  ); // The filtered array of student objects based on the department filter

  // const [filterStudentByYear, setFilterStudentByYear] = useState([]); // The filtered array of student objects based on the academic year filter

  // Defining the function to open the image viewer
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index); // Setting the current image index to the provided index
    setIsViewerOpen(true); // Opening the image viewer
  }, []);

  // Defining the function to close the image viewer
  const closeImageViewer = () => {
    setIsViewerOpen(false); // Closing the image viewer
  };

  // Defining the base URL for the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  // Fetching the student information from the API on component mount
  useEffect(() => {
    axios
      .get(`${BASE_URL}/students/api/students/`, {
        headers: {
          // Including the authentication token in the request headers
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // Logging the response data to the console
        // console.log("All students response", response.data);
        // Setting the student information state variable to the response data
        setStudentInfo(response.data);
        // Setting the filtered student information state variable to the response data
        setFilterStudentByDepartment(response.data);
      })
      .catch((error) => {
        console.log(error); // Logging any errors to the console
      });
  }, [BASE_URL]);

  // Defining the function to filter the student information by department
  const handleFilterStudentByDepartment = (e) => {
    const search = e.target.value; // Getting the value of the search input field
    setFilterStudentByDepartment(
      studentInfo.filter(
        (student) =>
          // Filtering the student information based on the department name (case-insensitive)
          student.department.toLowerCase().includes(search.toLowerCase())
        // student.user.first_name.toLowerCase().includes(search.toLowerCase()) // Filtering the student information based on the first name (case-insensitive)
      )
    );
  };

  // Uncommenting the code below will define the function to filter the student information by academic year
  // const handleFilterStudentByYear = (e) => {
  //   const search = e.target.value; // Getting the value of the search input field
  //   setFilterStudentByYear(
  //     studentInfo.filter((student) => student.academic_year.includes(search)) // Filtering the student information based on the academic year
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
                    No Student data found
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
