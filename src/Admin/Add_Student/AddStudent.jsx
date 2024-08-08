// Importing the AddStudentForm component from the ../Dashboard/Add_Student_Form directory
import AddStudentForm from "../Dashboard/Add_Student_Form/AddStudentForm";

// Importing the BreadCrumb component from the ../Dashboard/BreadCrumb directory
import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";

const AddStudent = () => {
  return (
    <>
      {/* Rendering the BreadCrumb component with the text prop set to "Add Students" */}
      <BreadCrumb text={"Add Students"} />
      {/* Rendering the AddStudentForm component */}
      <AddStudentForm />
    </>
  );
};

export default AddStudent;
