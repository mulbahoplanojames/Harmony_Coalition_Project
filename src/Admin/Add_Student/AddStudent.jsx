import AddStudentForm from "../Dashboard/Add_Student_Form/AddStudentForm";
import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";

const AddStudent = () => {
  return (
    <>
      <BreadCrumb text={"Add Students"} />
      <AddStudentForm />
    </>
  );
};

export default AddStudent;
