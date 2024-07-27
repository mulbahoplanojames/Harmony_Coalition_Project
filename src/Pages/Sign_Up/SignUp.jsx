import { Link } from "react-router-dom";
import singUp_image from "/src/assets/signup.png";
import { CgArrowLeftR } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [signedUpData, setSignedUpData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  // Error Message
  const [signedUpErrorMessage, setSignUpErrorMessage] = useState("");

  //? API URL FROM THE ENV FILE
  const API_ENDPOINT = `http://192.168.1.68:8000/students/api/signup/`;

  const sendData = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_ENDPOINT, {
        first_name: signedUpData.first_name,
        last_name: signedUpData.last_name,
        email: signedUpData.email,
        password: signedUpData.password,
        phone_number: signedUpData.phone_number,
      });

      if (
        signedUpData.first_name === "" ||
        signedUpData.last_name === "" ||
        signedUpData.email === "" ||
        signedUpData.password === "" ||
        signedUpData.phone_number === ""
      ) {
        setSignUpErrorMessage("All fields are required");
        return;
      } else {
        console.log(response);
        setSignUpErrorMessage(
          "Account created successfully, please check your email to Activate your account"
        );
        setSignedUpData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone_number: "",
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-fit py-14  bg-primary_main text-black">
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

            <form className="relative" onSubmit={sendData}>
              {/* // First Name and Last Name */}
              <div className="flex justify-between items-center w-full gap-4 md:flex-nowrap flex-wrap mb-2">
                <div className="w-full">
                  <label htmlFor="first_name" className="inline-block pb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none neu_input_2"
                    value={signedUpData.first_name}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        first_name: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="last_name" className="inline-block pb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none neu_input_2"
                    value={signedUpData.last_name}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        last_name: e.target.value,
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
                  className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none neu_input_2"
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
              <div className="flex justify-between items-center gap-4 md:flex-nowrap flex-wrap mb-2 w-full">
                <div className="w-full">
                  <label htmlFor="password" className="inline-block pb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none neu_input_2"
                    value={signedUpData.password}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                {/* Phone */}
                <div className="w-full">
                  <label htmlFor="number" className="inline-block pb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    className="w-full bg-[#eaeef3] h-12 px-6 rounded-md outline-none neu_input_2"
                    value={signedUpData.phone_number}
                    onChange={(e) => {
                      setSignedUpData({
                        ...signedUpData,
                        phone_number: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              {/* //Error Message */}
              <p className="text-red-500 text-lg font-bold mt-4">
                {signedUpErrorMessage}
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
