import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";
import StudentTable from "../Dashboard/Student_Table/StudentTable";

const StudentList = () => {
  return (
    <>
      <BreadCrumb text={"All Students"} />
      <StudentTable />
    </>
  );
};

export default StudentList;
