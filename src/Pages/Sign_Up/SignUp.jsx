const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full bg-primary_main">
        <div className="md:w-[80%] w-[95%] h-fit grid md:grid-cols-2 grid-cols-1 bg-white">
          <div className=" w-full md:h-[35rem] h-[15rem] overflow-hidden bg-red-400"></div>

          <div className="py-10 px-6">
            <h1 className="md:text-3xl text-2xl font-bold pb-4">
              Welcome To ALSULK
            </h1>
            <p className="text-base pb-6">
              The leadership of the Association of the Liberian Students at
              Kigali Independent University welcomes you to the official
              platform of the Association.
            </p>

            <form className="">
              {/* // First Name and Last Name */}
              <div className="flex justify-between items-center gap-4 md:flex-nowrap flex-wrap mb-2">
                <div>
                  <label htmlFor="first_name" className="inline-block pb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none "
                  />
                </div>

                <div>
                  <label htmlFor="last_name" className="inline-block pb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
                  />
                </div>
              </div>

              {/* // Email */}
              <div className="mb-4">
                <label htmlFor="email" className="inline-block pb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
                />
              </div>

              {/* // Password and Number */}
              <div className="flex justify-between items-center gap-4 md:flex-nowrap flex-wrap mb-2">
                <div>
                  <label htmlFor="password" className="inline-block pb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="inline-block pb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
