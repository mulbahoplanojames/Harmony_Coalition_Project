import { Link } from "react-router-dom";
import { disciplinesOffer } from "../../Data/Data";

const DisciplinesOffer = () => {
  return (
    <>
      <div className="md:pt-14 pt-4 pb-36">
        <h1 className="text-center md:text-4xl text-3xl font-semibold pb-14">
          Various Disciplines at the Kigali Independent University
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:place-items-start place-items-center gap-12">
          {disciplinesOffer.map((discipline) => (
            <div key={discipline.id} className="shadow-2xl rounded-sm">
              <div>
                <img
                  src={discipline.image}
                  alt={discipline.name}
                  className="h-64 md:h-[26rem] w-full  bg-red-400 rounded-md mb-6"
                />
              </div>
              <div className="px-6">
                <h1 className="text-2xl font-semibold pb-3">
                  {discipline.name}
                </h1>
                <p className="text-lg pb-6">
                  {discipline.description}
                  <Link to={discipline.path} className="text-blue-700">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisciplinesOffer;
