import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import UpdateHero from "./Update_Hero/UpdateHero";
import postImage from "/src/assets/speech.jpeg";
import { speechdata } from "../../Data/SpeechData";

const UpdateOne = () => {
  return (
    <>
      <section className="md:pt-12 md:pb-16 pt-16 pb-16 lg:px-48 md:px-20 px-4 text-black h-fit ">
        <UpdateHero
          postImage={postImage}
          postTitle="Awalayah Stephen Suwarkpala Full Inauguration Speech"
          postDate={"August 10, 2024"}
        />

        <div className="pt-6 pb-3">
          <p className="text-lg pb-4">
            President of the Association of Liberian Students at Kigali
            Independent University full Inauguration Speech.
          </p>
        </div>

        {speechdata.map((speech) => (
          <p className="text-lg pb-6" key={speech.id}>
            {speech.text}
          </p>
        ))}

        {/* back to home  */}
        <Link
          to="/"
          className="fixed top-[10rem] md:right-10 right-4 w-10 h-10 bg-text rounded-full flex justify-center items-center bg-white text-primary_main animate-bounce  hover:animate-none"
        >
          <AiFillHome className="w-6 h-6" />
        </Link>
      </section>
    </>
  );
};

export default UpdateOne;
