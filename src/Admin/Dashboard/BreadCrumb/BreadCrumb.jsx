import { Link } from "react-router-dom";

const BreadCrumb = ({ text }) => {
  return (
    <>
      <div className="rounded-full  text-primary_main mb-8 md:py-4 py-2 md:px-8 px-6 flex justify-between items-center  bread_crum">
        <h1 className="md:text-xl text-base">{text}</h1>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to={"/admin"}>Home</Link>
            </li>
            <li>{text}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
