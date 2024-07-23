import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";
import EditStudentForm from "../Dashboard/Edit_Student_Form/EditStudentForm";

const EditStudent = () => {
  return (
    <>
      <BreadCrumb text={"Edit Students"} />
      <EditStudentForm />
    </>
  );
};

export default EditStudent;
