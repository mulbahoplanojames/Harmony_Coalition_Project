// importing the BreadCrumb component from the ../Dashboard/BreadCrumb directory
import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";

// importing the EditNewsLetterEditor component from the ./EditNewsLetterEditor directory
import EditNewsLetterEditor from "./EditNewsLetterEditor";

const EditNewsLetter = () => {
  return (
    <>
      <BreadCrumb text={"Edit NewsLetter"} />
      <EditNewsLetterEditor />
    </>
  );
};

export default EditNewsLetter;
