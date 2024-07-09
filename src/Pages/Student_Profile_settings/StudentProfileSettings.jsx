import axios from "axios";
import { useState } from "react";

const StudentProfileSettings = () => {
  const [studentDate, setStudentDate] = useState({
    roll_number: "",
    address: "",
    date_of_birth: "",
    gender: "",
    avatar_image: null,
    department: "",
    Course: "",
    visa_start_date: "",
    visa_end_date: "",
  });

  // Error Message
  const [errorMessage, setErrorMessae] = useState("");

  //? API URL FROM THE ENV FILE
  const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/students`;

  // TODO : The axios call for login should be here in the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentDate);

    if (
      studentDate.roll_number.length === 0 ||
      studentDate.address.length === 0 ||
      studentDate.date_of_birth.length === 0 ||
      studentDate.gender.length === 0 ||
      studentDate.avatar_image.length === 0 ||
      studentDate.department.length === 0 ||
      studentDate.Course.length === 0 ||
      studentDate.visa_start_date.length === 0 ||
      studentDate.visa_end_date.length === 0
    ) {
      // alert("Please fill all the fields");
      setErrorMessae("Please fill all the fields");
    } else {
      setErrorMessae("");

      axios
        .post(API_ENDPOINT, {
          body: {
            ...studentDate,
            roll_number: studentDate.roll_number,
            address: studentDate.address,
            date_of_birth: studentDate.date_of_birth,
            gender: studentDate.gender,
            avatar_image: studentDate.avatar_image,
            department: studentDate.department,
            Course: studentDate.Course,
            visa_start_date: studentDate.visa_start_date,
            visa_end_date: studentDate.visa_end_date,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setStudentDate({
      roll_number: "",
      address: "",
      date_of_birth: "",
      gender: "",
      avatar_image: "",
      department: "",
      Course: "",
      visa_start_date: "",
      visa_end_date: "",
    });
  };

  return (
    <>
      <div className="w-full">
        <form
          className="md:w-[90%] w-full bg-white h-fit py-6 md:px-8 px-4 rounded-md mx-auto mb-20 mt-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold pb-8  text-black">
            Personal Information
          </h1>
          {/* //Roll numer and Address  */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-8">
            {/* roll number  */}
            <div className="w-full">
              <label
                htmlFor="roll_number"
                className="inline-block pb-2 text-black"
              >
                Roll Number
              </label>
              <input
                type="text"
                name="roll_number"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                placeholder="Enter your roll number"
                value={studentDate.roll_number}
                onChange={(e) =>
                  setStudentDate({
                    ...studentDate,
                    roll_number: e.target.value,
                  })
                }
              />
            </div>

            {/* address  */}
            <div className="w-full">
              <label htmlFor="address" className="inline-block pb-2 text-black">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                value={studentDate.address}
                onChange={(e) =>
                  setStudentDate({
                    ...studentDate,
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
              <label
                htmlFor="date_of_birth"
                className="inline-block pb-2 text-black"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="date_of_birth"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                value={studentDate.date_of_birth}
                onChange={(e) =>
                  setStudentDate({
                    ...studentDate,
                    date_of_birth: e.target.value,
                  })
                }
              />
            </div>

            {/* gender  */}
            <div className="w-full">
              <label htmlFor="gender" className="inline-block pb-2 text-black">
                Gender
              </label>
              <select
                name="gender"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                value={studentDate.gender}
                onChange={(e) =>
                  setStudentDate({
                    ...studentDate,
                    gender: e.target.files[0],
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
            <label
              htmlFor="profile_picture"
              className="inline-block pb-2 text-black"
            >
              Profile Picture
            </label>
            <br />
            <input
              type="file"
              name="profile_picture"
              className="file-input file-input-bordered w-full"
              value={studentDate.avatar_image}
              onChange={(e) =>
                setStudentDate({
                  ...studentDate,
                  avatar_image: e.target.value,
                })
              }
            />
          </div>

          {/*//? error message  */}
          <p className="text-red-500 text-lg font-bold">{errorMessage}</p>

          <h1 className="text-3xl font-bold pb-8 pt-4 text-black">
            School Information
          </h1>

          {/* // Department and Course */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-8">
            {/* department  */}
            <div className="w-full">
              <label
                htmlFor="department"
                className="inline-block pb-2 text-black"
              >
                Department
              </label>
              <select
                name="department"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                value={studentDate.department}
                onChange={(e) =>
                  setStudentDate({ ...studentDate, department: e.target.value })
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
                <option value="Computer Science">Computer Science</option>
                <option value="Law">Law</option>
              </select>
            </div>

            {/* // course  */}
            <div className="w-full">
              <label htmlFor="course" className="inline-block pb-2 text-black">
                Course
              </label>
              <select
                name="department"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                value={studentDate.course}
                onChange={(e) =>
                  setStudentDate({ ...studentDate, course: e.target.value })
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
              <label
                htmlFor="visa_start_date"
                className="inline-block pb-2 text-black"
              >
                Visa Start Date
              </label>
              <input
                type="date"
                name="visa_start_date"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                value={studentDate.visa_start_date}
                onChange={(e) =>
                  setStudentDate({
                    ...studentDate,
                    visa_start_date: e.target.value,
                  })
                }
              />
            </div>

            {/* visa end date  */}
            <div className="w-full">
              <label
                htmlFor="visa_end_date"
                className="inline-block pb-2 text-black"
              >
                Visa End Date
              </label>
              <input
                type="date"
                name="visa_end_date"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                value={studentDate.visa_end_date}
                onChange={(e) =>
                  setStudentDate({
                    ...studentDate,
                    visa_end_date: e.target.value,
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
            className="md:w-[20%] w-[50%] mt-2 mb-4 bg-primary_main text-white py-3 px-6 rounded-md hover:bg-opacity-70"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentProfileSettings;
