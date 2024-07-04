const SecondaryFooter = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-y-14">
        <div>
          <p className="text-lg pb-3 text-white">Subscribe to our newsletter</p>
          <p className="text-white ">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
        </div>
        <div className="flex items-center md:flex-nowrap flex-wrap md:gap-4 gap-y-2">
          <input
            type="email"
            name="email"
            className="text-white text-lg  w-full border-2 border-slate-400 bg-transparent h-14 px-6 rounded-md outline-none"
          />
          <button className=" py-3 px-6 bg-black text-lg text-white border-none rounded-md mt-3 mb-6 hover:bg-opacity-70 md:w-[20%] w-full">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondaryFooter;
