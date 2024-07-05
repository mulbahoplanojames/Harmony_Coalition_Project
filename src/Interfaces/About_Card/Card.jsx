import { Link } from "react-router-dom";

const Card = (props) => {
  const { image, title, link, path } = props;

  return (
    <>
      <div className="rounded-md shadow-md py-3 px-6 text-center md:w-[90%] w-full bg-white">
        <div className="w-[180px] h-[22vh]  mx-auto overflow-hidden mb-6">
          <img
            src={image}
            alt={image}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold pb-3 text-black">{title}</h1>
        <Link to={path} className="text-blue-700 text-lg">
          {link}
        </Link>
      </div>
    </>
  );
};

export default Card;
