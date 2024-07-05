import storyImage from "/src/assets/ourStory.webp";
const OurStory = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-10 place-items-center md:pb-32 pb-10 md:pt-20 pt-[2rem]">
        <div className="md:order-first order-last">
          <h1 className="text-4xl font-bold md:pb-8 pb-5">Our Story </h1>
          <p className="text-lg pb-10 md:pr-10">
            The Association of the Liberian Students is an Association establish
            at the Kigali Independent University to head the affairs of
            Liberians Students enrolled at the University. it&apos;s charge with
            the responsibility of adaquately representing the Liberian Students
            at ULK.
          </p>
        </div>
        <div className="w-full bg-red-400 h-[50vh] overflow-hidden border-4 border-slate-500 group">
          <img
            src={storyImage}
            alt="Our Story Image"
            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          />
        </div>
      </div>
    </>
  );
};

export default OurStory;
