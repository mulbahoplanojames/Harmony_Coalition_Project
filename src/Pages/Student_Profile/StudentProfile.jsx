import StudentProfileCards from "../../Components/Sttudent_Profile_cards/StudentProfileCards";
import StudentProfileDetailInfo from "../../Components/Student_Profile_Detail_Info/StudentProfileDetailInfo";
import StudentProfileHeader from "../../Components/Student_Profile_Header/StudentProfileHeader";
import Events from "../../Components/Events/Events";
import Calender from "../../Components/Student_Calender/Calender";
import { useAuth } from "../../Context/AuthContext";

const StudentProfile = () => {
  const user = useAuth();

  return (
    <>
      <div className=" h-fit py-14 my-16   px-2 rounded-md">
        <div className=" md:py-14 py-8 md:px-8 px-1  md:w-[90%] w-full h-fit mx-auto  text-white bg-[#f8f8f8]">
          <StudentProfileHeader
            firstName={user.studentInfo.first_name}
            lastName={user.studentInfo.last_name}
            department={user.studentInfo.department}
            course={user.studentInfo.course}
            image={user.studentInfo.image || ""}
          />
          <StudentProfileCards />
          <Events />
          <Calender />
          <StudentProfileDetailInfo
            firstName={user.studentInfo.first_name || ""}
            lastName={user.studentInfo.last_name || ""}
            email={user.studentInfo.email || ""}
            department={user.studentInfo.department || ""}
            gender={user.studentInfo.gender || ""}
            rollNumber={user.studentInfo.rollNumber || ""}
            course={user.studentInfo.course || ""}
            birthDate={user.studentInfo.birth_date || ""}
            address={user.studentInfo.address || ""}
            phoneNumber={user.studentInfo.phoneNumber || ""}
            visaStartDate={user.studentInfo.visaStartDate || ""}
            visaEndDate={user.studentInfo.visaEndDate || ""}
            visaImage={user.studentInfo.visaImage || ""}
            visaStatus={user.studentInfo.visaStatus || ""}
            academicYear={user.studentInfo.academic_year || ""}
          />
        </div>
      </div>
    </>
  );
};

export default StudentProfile;

//! Student Profile Setting Header
