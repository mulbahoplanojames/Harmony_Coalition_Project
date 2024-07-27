import { useEffect, useState } from "react";
import StudentProfileCards from "../../Components/Sttudent_Profile_cards/StudentProfileCards";
import StudentProfileDetailInfo from "../../Components/Student_Profile_Detail_Info/StudentProfileDetailInfo";
import StudentProfileHeader from "../../Components/Student_Profile_Header/StudentProfileHeader";
import axios from "axios";
import Events from "../../Components/Events/Events";

const StudentProfile = () => {
  const [studentInfo, setStudentInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    department: "",
    gender: "",
    rollNumber: "",
    course: "",
    birth_date: "",
    address: "",
    phoneNumber: "",
    image: "",
    visaStartDate: "",
    visaEndDate: "",
  });

  //! Get Student Info
  useEffect(() => {
    axios
      .get(`http://192.168.1.68:8000/students/api/profile/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.student);

        setStudentInfo({
          first_name: response.data.student.user.first_name,
          last_name: response.data.student.user.last_name,
          email: response.data.student.user.email,
          department: response.data.student.department,
          gender: response.data.student.gender,
          rollNumber: response.data.student.roll_number,
          course: response.data.student.course,
          birth_date: response.data.student.birth_date,
          address: response.data.student.address,
          phoneNumber: response.data.student.user.phone_number,
          image: response.data.student.image,
          visaStartDate: response.data.student.visa_start,
          visaEndDate: response.data.student.visa_end,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Log studentInfo whenever it changes
  useEffect(() => {
    console.log("Student info", studentInfo);
  }, [studentInfo]);

  return (
    <>
      <div className=" h-fit py-14 my-10  bg-[#ffffff4a]  px-2 rounded-md">
        <div className=" md:py-14 py-8 md:px-8 px-1  md:w-[90%] w-full h-fit mx-auto  text-white bg-[rgba(255,255,255,0.29)] shadow-[0_8px_32px_0_rgba(31,38,135,0.35)] backdrop-blur-[20px] rounded-[10px] border border-[rgba(198,194,194,0.2)] neu_card_1">
          <StudentProfileHeader
            firstName={studentInfo.first_name}
            lastName={studentInfo.last_name}
            department={studentInfo.department}
            course={studentInfo.course}
          />
          <StudentProfileCards />
          <Events />
          <StudentProfileDetailInfo
            firstName={studentInfo.first_name || ""}
            lastName={studentInfo.last_name || ""}
            email={studentInfo.email || ""}
            department={studentInfo.department || ""}
            gender={studentInfo.gender || ""}
            rollNumber={studentInfo.rollNumber || ""}
            course={studentInfo.course || ""}
            birthDate={studentInfo.birth_date || ""}
            address={studentInfo.address || ""}
            phoneNumber={studentInfo.phoneNumber || ""}
            image={studentInfo.image || ""}
            visaStartDate={studentInfo.visaStartDate || ""}
            visaEndDate={studentInfo.visaEndDate || ""}
          />
        </div>
      </div>
    </>
  );
};

export default StudentProfile;

//! Student Profile Setting Header
