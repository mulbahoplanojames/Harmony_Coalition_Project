// Importing the useState hook from the React library
import { useState } from "react";
// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom";

// Importing the forgetPassword_image image file located in the "src/assets" directory
import forgetPassword_image from "/src/assets/Forgot_password.png";

// Importing the CgArrowLeftR icon from the react-icons/cg library
import { CgArrowLeftR } from "react-icons/cg";

// Importing the axios library for making HTTP requests
import axios from "axios";

const ForgetPassword = () => {
  // The state is an object that holds the user's data from the form
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //? API URL FROM THE ENV FILE
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  // This function is called when the form is submitted
  const handleForgetSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    try {
      const response = axios.post(`${BASE_URL}/accounts/password/reset/`, {
        email: forgetPasswordEmail,
      });

      // If the user has filled in  the email fields
      if (forgetPasswordEmail == "") {
        setErrorMessage("Please fill the fields");
        return;
      } else {
        console.log(response);
        setErrorMessage("Email Send Successfully, Please Check Your Email");
        setForgetPasswordEmail("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-fit py-14  bg-primary_main text-black">
      <div className="md:w-[80%] w-[95%] h-fit grid md:grid-cols-2 grid-cols-1 bg-white">
        <div className=" w-full md:h-full h-[15rem] overflow-hidden bg-purple-200">
          <img
            src={forgetPassword_image}
            alt="Sign up illustration"
            className="w-full h-full object-contain"
          />
        </div>
        {/* // The right side of the page contains a form */}
        <div className="py-10 px-6">
          <h1 className="md:text-3xl text-2xl font-bold pb-4">
            Forget Your Password
          </h1>
          <p className="text-base pb-6">
            To reset your password, please enter the email address associated
            with your account in the field below and click the Submit button. We
            will send you an email with detailed instructions on how to create a
            new password. If you don&apos;t receive the email within a few
            minutes, please check your spam folder or contact our support team
            for further assistance
          </p>

          <form className="relative" onSubmit={handleForgetSubmit}>
            {/* // The email input field */}
            <div className="mb-4">
              <label htmlFor="email" className="inline-block pb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="johnsmith@example.gmail.com"
                // required
                value={forgetPasswordEmail}
                onChange={(e) => setForgetPasswordEmail(e.target.value)}
                className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
              />
            </div>
            {/* // The password input field */}

            <p className="text-red-500 ">{errorMessage}</p>
            {/* // The button to submit the form */}
            <button
              type="submit"
              className=" bg-primary_main md:text-lg textb text-white border-none rounded-md mt-3 mb-4 hover:bg-opacity-70 py-2 md:px-6 px-4 mr-4"
            >
              Submit
            </button>
            {/* // The back home button */}
            <Link
              to="/"
              className="border-2 border-primary_main rounded-full  p-2 text-black inline-block absolute md:bottom-0 bottom-3 right-0"
              onClick={() => {
                window.scrollTo(0, 3000);
              }}
            >
              <CgArrowLeftR className="md:text-2xl text-xl animate-pulse" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
