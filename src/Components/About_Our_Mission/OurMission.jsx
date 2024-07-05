import mission from "/src/assets/OurMission.webp";

const OurMission = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-10 place-items-center pb-4 md:pt-32 pt-[3.5rem]">
        <div className="w-full bg-red-400 h-[50vh] overflow-hidden border-4 border-slate-500 group">
          <img
            src={mission}
            alt="Our mission Image"
            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold md:pb-8 pb-5">Our Mission </h1>
          <p className="text-lg pb-10 md:pr-10">
            We believe not just in growing bigger, but in growing better. And
            growing better means aligning the success of our Students with the
            success of the Liberian Community.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurMission;
