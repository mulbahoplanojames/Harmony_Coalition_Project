const StudentProfile = () => {
  return (
    <>
      <div className="w-full">
        <div className="md:w-[90%] w-full bg-white h-fit py-6 px-4 rounded-md mx-auto my-20">
          {/* //Roll numer and Course  */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-5">
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
            {/* // course  */}
            <div className="w-full">
              <label htmlFor="course" className="inline-block pb-2">
                Course
              </label>
              <input
                type="text"
                name="course"
                className="text-lg w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
                placeholder="Enter your course"
              />
            </div>
          </div>

          {/* profile picture and Gender  */}
          <div className="w-full mb-5">
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

          {/* // Address and department */}
          <div className="w-full flex justify-center items-center gap-5 md:flex-nowrap flex-wrap mb-5">
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
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
