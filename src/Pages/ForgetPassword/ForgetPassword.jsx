import { useState } from "react";
import { Link } from "react-router-dom";
import forgetPassword_image from "/src/assets/Forgot_password.png";
import { CgArrowLeftR } from "react-icons/cg";
import { useAuth } from "../../Context/AuthContext";

// This component is responsible for rendering the login page
const ForgetPassword = () => {
  // The state is an object that holds the user's data from the form
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");

  // The useAuth hook returns the loginAction function from the AuthContext
  const auth = useAuth();

  // This function is called when the form is submitted
  const handleForgetSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // If the user has filled in both the email and password fields
    if (forgetPasswordEmail !== "") {
      // Call the loginAction function from the AuthContext
      //   auth.loginAction(userData);
      // Return to prevent the rest of the function from running
      return;
    } else {
      // If the user has not filled in both fields, alert them
      alert("Please fill all the fields");
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
                required
                value={forgetPasswordEmail}
                onChange={(e) => setForgetPasswordEmail(e.target.value)}
                className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
              />
            </div>
            {/* // The password input field */}

            <p className="text-red-500 pt-4">{auth.errorMessage}</p>
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
