// Importing the BreadCrumb component from the ../Dashboard/BreadCrumb directory
import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";

// Importing the NewsLetterTable component from the ../Dashboard/News_Letter_Table directory
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
