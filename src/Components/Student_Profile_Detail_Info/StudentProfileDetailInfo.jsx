import { MdOutlineDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaLock, FaPhoneAlt, FaPassport } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const StudentProfileDetailInfo = (props) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    birthDate,
    gender,
    course,
    department,
    visaStartDate,
    visaEndDate,
    rollNumber,
  } = props;

  return (
    <>
      <div className="w-full h-fit py-9 md:px-6 px-4 bg-white shadow-lg rounded-md grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-y-14">
        <div className="">
          <h1 className="text-2xl pb-4 text-black">Basic and Contact Info</h1>
          <p className="text-lg text-black pb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            voluptatibus, quidem, voluptate ipsa, quas voluptatem quae{" "}
          </p>

          {/* basic Information of the Sudent  */}
          <div className="mt-8">
            <h1 className="text-2xl pb-4 text-black">Basic Info</h1>

            <div className="flex justify-between items-center gap-2 mb-6">
              <div className="flex gap-3">
                <MdOutlineDriveFileRenameOutline className="text-2xl text-black" />
                <div>
                  <h1 className="text-lg text-black">
                    {firstName} {lastName}
                  </h1>
                  <p className="text-base text-black opacity-65">Name</p>
                </div>
              </div>
              <FaLock className=" text-lg text-slate-500 " />
            </div>

            {/* //? second Info Details  */}
            <div className="flex justify-between items-center gap-2 mb-6">
              <div className="flex gap-3">
                <MdOutlineDriveFileRenameOutline className="text-2xl text-black" />
                <div>
                  <h1 className="text-lg text-black">{rollNumber}</h1>
                  <p className="text-base text-black opacity-65">Roll Number</p>
                </div>
              </div>
              <FaLock className=" text-lg text-slate-500 " />
            </div>

            {/* //? third Info Details  */}
            <div className="flex justify-between items-center gap-2 mb-6">
              <div className="flex gap-3">
                <LiaBirthdayCakeSolid className="text-2xl text-black" />
                <div>
                  <h1 className="text-lg text-black">{birthDate}</h1>
                  <p className="text-base text-black opacity-65">
                    Date od Birth
                  </p>
                </div>
              </div>
              <FaLock className=" text-lg text-slate-500 " />
            </div>

            {/* //? fourth Info Details  */}
            <div className="flex justify-between items-center gap-2 mb-6">
              <div className="flex gap-3">
                <BsPersonFill className="text-2xl text-black" />
                <div>
                  <h1 className="text-lg text-black">{gender}</h1>
                  <p className="text-base text-black opacity-65">Gender</p>
                </div>
              </div>
              <FaLock className=" text-lg text-slate-500 " />
            </div>

            {/* //? fifth Info Details  */}
            <div className="flex justify-between items-center gap-2 mb-6">
              <div className="flex gap-3">
                <SiGoogleclassroom className="text-2xl text-black" />
                <div>
                  <h1 className="text-lg text-black">{department}</h1>
                  <p className="text-base text-black opacity-65">Department</p>
                </div>
              </div>
              <FaLock className=" text-lg text-slate-500 " />
            </div>

            {/* //? sixth Info Details  */}
            <div className="flex justify-between items-center gap-2 mb-6">
              <div className="flex gap-3">
                <SiGoogleclassroom className="text-2xl text-black" />
                <div>
                  <h1 className="text-lg text-black">{course}</h1>
                  <p className="text-base text-black opacity-65">Course</p>
                </div>
              </div>
              <FaLock className=" text-lg text-slate-500 " />
            </div>
          </div>
        </div>

        <div className="">
          {/*//todo Contact Informations of the student  */}
          <h1 className="text-2xl pb-4 text-black pt-3">Contact Info</h1>

          <div className="flex justify-between items-center gap-2 mb-6">
            <div className="flex gap-3">
              <FaPhoneAlt className="text-lg text-black" />
              <div>
                <h1 className="text-lg text-black">{phoneNumber}</h1>
                <p className="text-base text-black opacity-65">Phone</p>
              </div>
            </div>
            <FaLock className=" text-lg text-slate-500 " />
          </div>

          {/* //? second Contact Info Details  */}
          <div className="flex justify-between items-center gap-2 mb-6">
            <div className="flex gap-3">
              <MdOutlineMail className="text-2xl text-black" />
              <div>
                <h1 className="text-lg text-black">{email}</h1>
                <p className="text-base text-black opacity-65">Email</p>
              </div>
            </div>
            <FaLock className=" text-lg text-slate-500 " />
          </div>

          {/*//todo Visa Informations of the student  */}
          <h1 className="text-2xl pb-4 text-black pt-3">Visa Info</h1>

          <div className="flex justify-between items-center gap-2 mb-6">
            <div className="flex gap-3">
              <FaPassport className="text-lg text-black" />
              <div>
                <h1 className="text-lg text-black">{visaStartDate}</h1>
                <p className="text-base text-black opacity-65">
                  Visa Start Date
                </p>
              </div>
            </div>
            <FaLock className=" text-lg text-slate-500 " />
          </div>

          {/* //? second Visa Details  */}
          <div className="flex justify-between items-center gap-2 mb-6">
            <div className="flex gap-3">
              <FaPassport className="text-lg text-black" />
              <div>
                <h1 className="text-lg text-black">{visaEndDate}</h1>
                <p className="text-base text-black opacity-65">Visa End Date</p>
              </div>
            </div>
            <FaLock className=" text-lg text-slate-500 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfileDetailInfo;
