import { useRef, useState } from "react";

const AddStudentForm = () => {
  const [addStudentData, setAddStudentData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    department: "",
    course: "",
    roll_number: "",
    address: "",
    avatar: "",
    date_of_birth: "",
    gender: "",
    visa_start_date: "",
    visa_end_date: "",
    visa_image: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const fileInputRef = useRef(null);

  const handleAddStudentSubmit = async (e) => {
    e.preventDefault();

    if (
      addStudentData.first_name === "" ||
      addStudentData.last_name === "" ||
      addStudentData.email === "" ||
      addStudentData.password === "" ||
      addStudentData.phone_number === "" ||
      addStudentData.department === "" ||
      addStudentData.course === "" ||
      addStudentData.roll_number === "" ||
      addStudentData.address === "" ||
      addStudentData.avatar === "" ||
      addStudentData.date_of_birth === "" ||
      addStudentData.gender === "" ||
      addStudentData.visa_start_date === "" ||
      addStudentData.visa_end_date === ""
      //   addStudentData.visa_image === ""
    ) {
      setErrorMessage("Please fill all the fields");
    } else {
      console.log(addStudentData);

      setErrorMessage("");

      setAddStudentData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
        department: "",
        course: "",
        roll_number: "",
        address: "",
        avatar: "",
        date_of_birth: "",
        gender: "",
        visa_start_date: "",
        visa_end_date: "",
        visa_image: "",
      });

      // TODO: Send the form data to the server
      const formData = new FormData();
      for (const key in addStudentData) {
        formData.append(key, addStudentData[key]);
      }

      console.log(formData);
    }
  };

  return (
    <>
      <form
        onSubmit={handleAddStudentSubmit}
        className="md:px-3 md:py-4  px-2 shadow-xl neu_card_2"
      >
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="first_name" className="text-base pb-1 inline-block">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter First Name"
              autoComplete="given-name"
              className="block w-full h-[2.8rem] p-4 outline-none rounded-md border-gray-300 shadow-sm  sm:text-sm"
              value={addStudentData.first_name}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  first_name: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="pb-1 text-base inline-block">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter Last Name"
              autoComplete="family-name"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={addStudentData.last_name}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  last_name: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* email  */}
        <div className="w-full mb-5">
          <div className="w-full">
            <label htmlFor="email" className="text-base pb-1 inline-block">
              Email
            </label>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="email"
            className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={addStudentData.email}
            onChange={(e) =>
              setAddStudentData({
                ...addStudentData,
                email: e.target.value,
              })
            }
          />
        </div>

        {/* Password and phone number */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="Password" className="text-base inline-block pb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="new-password"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={addStudentData.password}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="phone_number"
              className="text-base inline-block pb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone_number"
              placeholder="Enter Phone Number"
              autoComplete="phone"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm"
              value={addStudentData.phone_number}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  phone_number: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/*Departnemt and course  */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="department" className="inline-block text-base pb-1">
              Department
            </label>
            <select
              name="department"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm bg-white"
              placeholder="Select your Department"
              value={addStudentData.department}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  department: e.target.value,
                })
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

          <div className="w-full">
            <label htmlFor="course" className="text-base pb-1 inline-block">
              Course
            </label>
            <select
              name="course"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm bg-white"
              placeholder="Select your Course"
              value={addStudentData.course}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  course: e.target.value,
                })
              }
            >
              <option value="course" hidden>
                Select your Course
              </option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Data Science">Data Science</option>
              <option value="Networking">Networking</option>
              <option value="Internation Relation">Internation Relation</option>
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

        {/* roll number and Address */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label
              htmlFor="roll_number"
              className="text-base pb-1 inline-block"
            >
              Roll Number
            </label>
            <input
              type="text"
              name="roll_number"
              placeholder="Enter Roll Number"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm"
              value={addStudentData.roll_number}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  roll_number: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="address" className="text-base pb-1 inline-block">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm"
              value={addStudentData.address}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  address: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Profile Picture  */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label htmlFor="avatar" className="text-base pb-1 inline-block">
              Profile Picture
            </label>
            <input
              type="file"
              name="avatar"
              ref={fileInputRef}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  avatar: e.target.files[0],
                })
              }
              className="file-input file-input-bordered w-full"
            />
          </div>
        </div>

        {/* Date of Birth and Gender */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5">
          <div className="w-full">
            <label
              htmlFor="date_of_birth"
              className="text-base pb-1 inline-block"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm"
              placeholder="Enter Date of Birth"
              value={addStudentData.date_of_birth}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  date_of_birth: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="gender" className="text-base pb-1 inline-block">
              Gender
            </label>
            <select
              name="gender"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm bg-white"
              placeholder="Select your Gender"
              value={addStudentData.gender}
              onChange={(e) =>
                setAddStudentData({ ...addStudentData, gender: e.target.value })
              }
            >
              <option value="gender" hidden>
                Select your Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* visa start date and visa end date */}
        <div className="w-full flex justify-between items-center md:flex-nowrap flex-wrap md:gap-7 gap-y-3 mb-5 ">
          <div className="w-full">
            <label
              htmlFor="visa_start_date"
              className="text-base pb-1 inline-block"
            >
              Visa Start Date
            </label>
            <input
              type="date"
              name="visa_start_date"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm"
              value={addStudentData.visa_start_date}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  visa_start_date: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="visa_end_date"
              className="text-base pb-1 inline-block"
            >
              Visa End Date
            </label>
            <input
              type="date"
              name="visa_end_date"
              className="block w-full h-[2.8rem] rounded-md border-gray-300 outline-none px-4 shadow-sm sm:text-sm"
              value={addStudentData.visa_end_date}
              onChange={(e) =>
                setAddStudentData({
                  ...addStudentData,
                  visa_end_date: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Error Message */}
        <p className="text-red-500 pb-3">{errorMessage}</p>

        {/* submit button  */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full h-[2.8rem] rounded-md bg-primary_main text-lg hover:opacity-80 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStudentForm;
