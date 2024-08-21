// Importing the BreadCrumb component from the ../Dashboard/BreadCrumb directory
import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";

// Importing the NewsLetterEditor component from the ../Dashboard/Editor directory
import NewsLetterEditor from "../Dashboard/Editor/NewsLetterEditor";

const SendNewsLetter = () => {
  return (
    <>
      <BreadCrumb text={"Send NewsLetter"} />
      <NewsLetterEditor />
    </>
  );
};

export default SendNewsLetter;
