import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";
import NewsLetterTable from "../Dashboard/News_Letter_Table/NewsLatterTable";

const AllNewsLetter = () => {
  return (
    <>
      <BreadCrumb text={"All NewsLetter"} />
      <NewsLetterTable />
    </>
  );
};

export default AllNewsLetter;
