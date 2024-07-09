import { Link } from "react-router-dom";
import singUp_image from "/src/assets/study2-removebg-preview.png";
import { CgArrowLeftR } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [signedUpData, setSignedUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  // Error Message
  const [errorMessage, setErrorMessage] = useState("");

  //? API URL FROM THE ENV FILE
  // const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/students`;

  const handleSignUp = (e) => {
    e.preventDefault();

    if (
      signedUpData.firstName.length === 0 ||
      signedUpData.lastName.length === 0 ||
      signedUpData.email.length === 0 ||
      signedUpData.password.length === 0 ||
      signedUpData.phone.length === 0
    ) {
      // alert("Please fill all the fields");
      setErrorMessage("Please fill all the fields");
    } else {
      axios
        .post(API_ENDPOINT, {
          body: {
            firstName: signedUpData.firstName,
            lastName: signedUpData.lastName,
            email: signedUpData.email,
            password: signedUpData.password,
            phone: signedUpData.phone,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setSignedUpData({
      ...signedUpData,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-fit py-14  bg-primary_main ">
        <div className="md:w-[80%] w-[95%] h-fit grid md:grid-cols-2 grid-cols-1 bg-white">
          <div className=" w-full md:h-full h-[15rem] overflow-hidden bg-purple-200">
            <img
              src={singUp_image}
              alt="Sign up illustration"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="py-10 px-6">
            <h1 className="md:text-3xl text-2xl font-bold pb-4">
              Welcome To ALSULK
            </h1>
            <p className="text-base pb-6">
              The leadership of the Association of the Liberian Students at
              Kigali Independent University welcomes you to the official
              platform of the Association.
            </p>

            <form className="relative" onSubmit={handleSignUp}>
              {/* // First Name and Last Name */}
              <div className="flex justify-between items-center w-full gap-4 md:flex-nowrap flex-wrap mb-2">
                <div>
                  <label htmlFor="first_name" className="inline-block pb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none "
                    value={signedUpData.firstName}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        firstName: e.target.value,
                      });
                    }}
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
                    value={signedUpData.lastName}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        lastName: e.target.value,
                      });
                    }}
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
                  value={signedUpData.email}
                  onChange={(e) => {
                    setSignedUpData({
                      ...signedUpData,
                      email: e.target.value,
                    });
                  }}
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
                    value={signedUpData.password}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="number" className="inline-block pb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    className="w-full bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
                    value={signedUpData.phone}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        phone: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              {/* //Error Message */}
              <p className="text-red-500 text-lg font-bold mt-4">
                {errorMessage}
              </p>

              {/* // Create account Button */}
              <button
                type="submit"
                className=" bg-primary_main md:text-lg textb text-white border-none rounded-md mt-5 mb-4 hover:bg-opacity-70 py-2 md:px-6 px-4 mr-4"
              >
                Create Account
              </button>

              {/* // Back home Button */}
              <Link
                to="/"
                className="border-2 border-primary_main rounded-full md:p-3 p-2 text-black inline-block absolute md:bottom-0 bottom-16 right-0"
                onClick={() => window.scrollTo(0, 3000)}
              >
                <CgArrowLeftR className="md:text-2xl text-xl animate-pulse" />
              </Link>

              {/* // Already have an account Log in */}
              <p className="text-lg md:pt-4 pt-6">
                Already have an account? &nbsp;
                <Link to="/log-in" className="text-primary_main">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
