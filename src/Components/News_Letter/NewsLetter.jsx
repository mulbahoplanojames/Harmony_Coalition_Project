const NewsLetter = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-10 md:px-8 px-1 bg-white rounded-md md:py-14 py-6 mb-20 place-items-center">
        <div className="">
          <h1 className="text-3xl font-semibold pb-5 md:text-left text-center uppercase">
            Sign Up to our news latter
          </h1>
          <p className="text-lg  md:pr-28 pr-1">
            Sign up to get daily updates about the Liberian Community in ULK,
            the Liberian community in Rwanda and new concerning International
            Students.
          </p>
        </div>
        <div className="">
          <div className="">
            <input type="email" name="email" />
            <button className="">Subscribe</button>
          </div>
          <p>We care about your data. Read our privacy policy</p>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
