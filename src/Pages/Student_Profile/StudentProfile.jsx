import StudentProfileCards from "../../Components/Sttudent_Profile_cards/StudentProfileCards";
import StudentProfileDetailInfo from "../../Components/Student_Profile_Detail_Info/StudentProfileDetailInfo";
import StudentProfileHeader from "../../Components/Student_Profile_Header/StudentProfileHeader";

const StudentProfile = () => {
  return (
    <>
      <div className=" h-fit py-14 my-10 bg-[#a290ea74]  px-2">
        <div className="bg-[#f0f3fa] md:py-14 py-8 md:px-8 px-2 rounded-2xl md:w-[90%] w-full h-fit mx-auto  text-white">
          <StudentProfileHeader />
          <StudentProfileCards />
          <StudentProfileDetailInfo />
        </div>
      </div>
    </>
  );
};

export default StudentProfile;

//! Student Profile Setting Header
