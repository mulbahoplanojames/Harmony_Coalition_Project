import { Link } from "react-router-dom";
import updateImage1 from "/src/assets/speech.jpeg";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";

const RecentsUpdates = () => {
  const { recentUpdatesData } = useContext(AppContext);
  const [updates, setUpdates] = useState(recentUpdatesData || []); // Fallback to an empty array if undefined
  const [updateVisible, setUpdateVisible] = useState(3);

  const showMoreUpdates = () => {
    setUpdateVisible((prev) => prev + 1);
  };

  useEffect(() => {
    if (recentUpdatesData) {
      setUpdates(recentUpdatesData.slice(0, updateVisible)); // Ensure recentUpdatesData is not undefined
    }
  }, [updateVisible, recentUpdatesData]);

  return (
    <>
      <section className="py-14">
        <h1 className="text-4xl text-center font-semi-bold pb-6">
          Recents Updates
        </h1>

        <div className="md:max-w-6x w-fulll md:p-6  space-y-6 sm:space-y-12">
          <Link
            rel="noopener noreferrer"
            to="/recent-updates/president-inauguration-speech"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50"
          >
            <img
              src={updateImage1}
              alt=""
              className="object-cover w-full h-72  rounded sm:h-[26rem] lg:col-span-7"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-3xl group-hover:underline group-focus:underline text-black">
                Awalayah Stephen Suwarkpala Full Inauguration Speech
              </h3>
              <span className="text-xs text-gray-600">August 10, 2024</span>
              <p className="text-gray-800">
                President of the Association of Liberian Students at Kigali
                Independent University full Inauguration Speech.
              </p>
              <p className="text-gray-800">
                Today, I stand before you filled with immense gratitude and a
                deep sense of responsibility as we mark the beginning of a new
                chapter in the history of the Association of Liberian Students
                at Kigali Independent University. This inauguration is not just
                a ceremony; it symbolizes our collective commitment to fostering
                a vibrant, inclusive, and progressive Liberian Students
                Community .......
              </p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {updates.slice(0, updateVisible).map((recentData) => (
              <Link
                rel="noopener noreferrer"
                to={recentData.path}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
                key={recentData.id}
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-64 bg-gray-500"
                  src={recentData.image}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
                    {recentData.title}
                  </h3>
                  <span className="text-xs text-gray-600">
                    {recentData.date}
                  </span>
                  <p className="text-gray-800">
                    {recentData.description.slice(0, 108)}.....
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            {recentUpdatesData && recentUpdatesData.length > updateVisible && (
              <button
                type="button"
                onClick={showMoreUpdates}
                className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
              >
                Load more updates...
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentsUpdates;
