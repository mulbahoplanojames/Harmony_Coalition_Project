import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../Context/AppContext";

// Sweet Alert
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const StudentProfileSettings = () => {
  const { darkMode } = useContext(AppContext);

  const navigate = useNavigate();

  const [studentData, setStudentData] = useState({
    roll_number: "",
    address: "",
    date_of_birth: "",
    gender: "",
    avatar_image: "",
    department: "",
    course: "",
    visa_start_date: "",
    visa_end_date: "",
    visa_image: "",
    academic_year: "",
  });

  const fileInputRef = useRef("");
  const fileInputRef_2 = useRef("");

  // Error Message
  const [errorMessage, setErrorMessage] = useState("");

  // Base Url of the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  //? API URL FROM THE ENV FILE
  const API_ENDPOINT = `${BASE_URL}/students/api/profile/update/`;

  // TODO : The axios call for login should be here in the handleSubmit function

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("roll_number", studentData.roll_number);
    formData.append("address", studentData.address);
    formData.append("birth_date", studentData.date_of_birth);
    formData.append("gender", studentData.gender);
    formData.append("user", studentData.avatar_image);
    formData.append("department", studentData.department);
    formData.append("course", studentData.course);
    formData.append("visa_start", studentData.visa_start_date);
    formData.append("visa_end", studentData.visa_end_date);
    formData.append("visa_image", studentData.visa_image);
    formData.append("academic_year", studentData.academic_year);

    axios
      .patch(API_ENDPOINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Profile has been Updated",
          showConfirmButton: false,
          timer: 4000,
        });

        if (response.status === 200) {
          console.log(response.data);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Profile has been Updated",
            showConfirmButton: false,
            timer: 4000,
          });
        } else {
          console.log(response.data);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
        if (response.status === 400) {
          setErrorMessage(response.data);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
        navigate("/student_profile");
      })
      .catch((error) => {
        console.log(error);
      });

    setStudentData({
      roll_number: "",
      address: "",
      date_of_birth: "",
      gender: "",
      avatar_image: "",
      department: "",
      course: "",
      visa_start_date: "",
      visa_end_date: "",
      visa_image: "",
      academic_year: "",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (fileInputRef_2.current) {
      fileInputRef_2.current.value = "";
    }
  };

  return (
    <>
      <div className="w-full py-3 ">
        <form
          className={`md:w-[90%] w-full bg-[ebeef1] h-fit py-6 md:px-8 px-4 rounded-md mx-auto mb-20 mt-10 ${
            darkMode ? "neu_card_1 text-white " : "neu_card_2 "
          }`}
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold pb-8  ">Personal Information</h1>

          {/* //Roll numer and Address  */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-8">
            {/* roll number  */}
            <div className="w-full">
              <label htmlFor="roll_number" className="inline-block pb-2 ">
                Roll Number
              </label>
              <input
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                type="text"
                name="roll_number"
                placeholder="Enter your roll number"
                value={studentData.roll_number}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    roll_number: e.target.value,
                  })
                }
              />
            </div>

            {/* address  */}
            <div className="w-full">
              <label htmlFor="address" className="inline-block pb-2 ">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.address}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    address: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* // date of birth and gender  */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-8">
            {/* date of birth  */}
            <div className="w-full">
              <label htmlFor="date_of_birth" className="inline-block pb-2 ">
                Date of Birth
              </label>
              <input
                type="date"
                name="date_of_birth"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.date_of_birth}
                placeholder="Enter your date of birth"
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    date_of_birth: e.target.value,
                  })
                }
              />
            </div>

            {/* gender  */}
            <div className="w-full">
              <label htmlFor="gender" className="inline-block pb-2 ">
                Gender
              </label>
              <select
                name="gender"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.gender}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    gender: e.target.value,
                  })
                }
              >
                <option value="gender" hidden>
                  Select your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* profile picture  */}
          <div className="w-full mb-8">
            <label htmlFor="profile_picture" className="inline-block pb-2  ">
              Profile Picture
            </label>
            <br />
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              name="profile_picture"
              className="file-input file-input-bordered bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
              onChange={(e) =>
                setStudentData({
                  ...studentData,
                  avatar_image: e.target.files[0],
                })
              }
            />
          </div>

          {/*//? error message  */}
          <p className="text-red-500 text-lg font-bold">{errorMessage}</p>

          <h1 className="text-3xl font-bold pb-8 pt-4 ">School Information</h1>

          {/* // Department and Course */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-8">
            {/* department  */}
            <div className="w-full">
              <label htmlFor="department" className="inline-block pb-2 ">
                Department
              </label>
              <select
                name="department"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.department}
                onChange={(e) =>
                  setStudentData({ ...studentData, department: e.target.value })
                }
              >
                <option value="department" hidden>
                  Select your Department
                </option>
                <option value=" Electrical and tellecommunication Engineering">
                  Civil Engineering
                </option>
                <option value="Data Science">Law </option>
                <option value="Development Studies">Development Studies</option>
                <option value="International Religion">
                  International Religion
                </option>
                <option value="Econimics">Econimics</option>
                <option value="Finance">Finance</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Law">Law</option>
                <option value="Accounting">Accounting</option>
              </select>
            </div>

            {/* // course  */}
            <div className="w-full">
              <label htmlFor="course" className="inline-block pb-2 ">
                Course
              </label>
              <select
                name="department"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.course}
                onChange={(e) =>
                  setStudentData({ ...studentData, course: e.target.value })
                }
              >
                <option value="course" hidden>
                  Select your Course
                </option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Data Science">Data Science</option>
                <option value="Networking">Networking</option>
                <option value="Internation Relation">
                  Internation Relation
                </option>
                <option value="Econimics">Economics</option>
                <option value="Accounting">Accounting</option>
                <option value="Finance">Finance</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Electronics and Telecommunication">
                  Electronics and Telecommunication
                </option>
                <option value="Land Surveying">Land Surveying</option>
                <option value="Construction Engineering">
                  Construction Engineering
                </option>
                <option value="Biology and Chemistry">
                  Biology and Chemistry
                </option>
                <option value="Mathematics and Physics">
                  Mathematics and Physics
                </option>
                <option value="Land Surveying">Land Surveying</option>
              </select>
            </div>
          </div>

          {/* // visa start date and end date  */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-5">
            {/* visa start date  */}
            <div className="w-full">
              <label htmlFor="visa_start_date" className="inline-block pb-2 ">
                Visa Start Date
              </label>
              <input
                type="date"
                name="visa_start_date"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.visa_start_date}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    visa_start_date: e.target.value,
                  })
                }
              />
            </div>

            {/* visa end date  */}
            <div className="w-full">
              <label htmlFor="visa_end_date" className="inline-block pb-2 ">
                Visa End Date
              </label>
              <input
                type="date"
                name="visa_end_date"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.visa_end_date}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    visa_end_date: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Visa imahe and Academic status  */}
          <div className="w-full mb-5 flex justify-center items-center gap-5 md:flex-nowrap flex-wrap ">
            <div className="w-full">
              <label htmlFor="profile_picture" className="inline-block pb-2  ">
                Upload visa Image
              </label>
              <input
                type="file"
                ref={fileInputRef_2}
                accept="image/*"
                name="visa_image"
                className="file-input file-input-bordered bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    visa_image: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="w-full">
              <label htmlFor="academic_status" className="inline-block pb-2 ">
                Academic Status/Year
              </label>
              <input
                type="text"
                name="academic_status"
                placeholder="Enter your academic year"
                className="bg-[#fff] w-full border-none p-4 text-[1rem]  rounded-[1rem] text-primary_main shadow-[0_0.4rem_#dfd9d9] cursor-pointer focus:outline-primary_main  h-14 px-6 "
                value={studentData.academic_year}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    academic_year: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/*//? error message  */}
          <p className="text-red-500 text-lg font-bold mb-4">{errorMessage}</p>

          {/* submit button  */}
          <button
            type="submit"
            className="md:w-[20%] w-[50%] mt-2 mb-4 bg-white text-primary_main py-3 px-6 rounded-md hover:bg-opacity-70  shadow-[0_0.4rem_#dfd9d9] shadow-primary_main"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentProfileSettings;
