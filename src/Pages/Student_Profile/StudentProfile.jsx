import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  return (
    <>
      <div className="w-full">
        <div className="md:w-[90%] w-full bg-white h-fit py-6 md:px-8 px-4 rounded-md mx-auto my-20">
          {/* //Roll numer and Address  */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-8">
            {/* roll number  */}
            <div className="w-full">
              <label htmlFor="roll_number" className="inline-block pb-2">
                Roll Number
              </label>
              <input
                type="text"
                name="roll_number"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                placeholder="Enter your roll number"
              />
            </div>

            {/* address  */}
            <div className="w-full">
              <label htmlFor="address" className="inline-block pb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
              />
            </div>
          </div>

          {/* profile picture and Gender  */}
          <div className="w-full mb-8">
            <label htmlFor="profile_picture" className="inline-block pb-2">
              Profile Picture
            </label>
            <br />
            <input
              type="file"
              name="profile_picture"
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* // Department and Course */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-8">
            {/* department  */}
            <div className="w-full">
              <label htmlFor="department" className="inline-block pb-2">
                Department
              </label>
              <select
                name="department"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
              >
                <option value="department" selected hidden>
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
              <label htmlFor="course" className="inline-block pb-2">
                Course
              </label>
              <select
                name="department"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
              >
                <option value="course" selected hidden>
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
              <label htmlFor="visa_start_date" className="inline-block pb-2">
                Visa Start Date
              </label>
              <input
                type="date"
                name="visa_start_date"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
              />
            </div>

            {/* visa end date  */}
            <div className="w-full">
              <label htmlFor="visa_end_date" className="inline-block pb-2">
                Visa End Date
              </label>
              <input
                type="date"
                name="visa_end_date"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
              />
            </div>
          </div>
          <Link to={"/student_profile/next_profile"}>
            <FaArrowRightFromBracket className="cursor-pointer mt-12 text-end p-2 text-5xl border-2 border-primary_main rounded-md " />
          </Link>
        </div>
      </div>
    </>
  );
};

export const NextProfile = () => {
  // navigate to next profile
  // check if all required fields are filled
  // if all required fields are filled, navigate to next profile
  // if not, show an error message
  return (
    <>
      <div className="w-full">
        <div className="md:w-[90%] w-full bg-white h-fit py-6 md:px-8 px-4 rounded-md mx-auto my-20">
          {/* // date of birth and gender  */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap">
            {/* date of birth  */}
            <div className="w-full">
              <label htmlFor="date_of_birth" className="inline-block pb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="date_of_birth"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
              />
            </div>

            {/* gender  */}
            <div className="w-full">
              <label htmlFor="gender" className="inline-block pb-2">
                Gender
              </label>
              <select
                name="gender"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
              >
                <option value="gender" selected hidden>
                  Select your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
