import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";
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
